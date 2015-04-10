// Pushwoosh.com Safari push notifications.
// Ensure that the user can receive Safari Push Notifications.
var APP_CODE = '80CB9-FB09D';          // Your Pushwoosh application code from the Control Panel
var WEB_SITE_PUSH_ID = 'web.gov.dol.developer';        // Your unique reverse-domain Website Push ID from the Developer Center, starts with "web."
var pushwooshUrl = 'https://cp.pushwoosh.com/json/1.3/';
var isFirstRegister = false;

var checkRemotePermission = function (permissionData) {
	console.log(permissionData);
	if (permissionData.permission === 'default') {
		console.log('This is a new web service URL and its validity is unknown.');
		window.safari.pushNotification.requestPermission(
			pushwooshUrl + 'safari',
			WEB_SITE_PUSH_ID,
			{ application: APP_CODE },
			checkRemotePermission    // The callback function.
		);
		isFirstRegister = true;
	} else if (permissionData.permission === 'denied') {
		console.log('The user said no.');
	} else if (permissionData.permission === 'granted') {
		console.log('The web service URL is a valid push provider, and the user said yes.');
		console.log('You deviceToken is ' + permissionData.deviceToken);
		// set system tags
		if (isFirstRegister == true) {
			var tags = {
				"Language": window.navigator.language || 'en',
				"Device Model": get_browser_version()
			};
			pushwooshSetTags(permissionData.deviceToken, tags);
		}
	}
};

window.onload = function(){
	if ('safari' in window && 'pushNotification' in window.safari) {
		var permissionData = window.safari.pushNotification.permission(WEB_SITE_PUSH_ID);
		checkRemotePermission(permissionData);
	} else {
		console.log('Push Notifications are available for Safari browser only');
	}

	// send to Pushwoosh push open statistics
	try {
		if (navigator.userAgent.indexOf('Safari') > -1) {
			var hashReg = /#P(.*)/,
				hash = decodeURIComponent(document.location.hash);

			if ('safari' in window && 'pushNotification' in window.safari) {
				var permissionData = window.safari.pushNotification.permission(WEB_SITE_PUSH_ID);
			}

			if (hashReg.test(hash) && permissionData) {
				var xhr = new XMLHttpRequest(),
					url = pushwooshUrl + 'pushStat',
					params = {
						"request":{
							"application": APP_CODE,
							"hwid": permissionData.deviceToken,
							"hash": hashReg.exec(hash)[1]
						}
					};

				xhr.open('POST', url, true);
				xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
				xhr.send(JSON.stringify(params));
			}
		}
	} catch(e) { }
};

function pushwooshSetTags(hwid, tags) {
	console.log('Sending setTags call to Pushwoosh');
	try {
		var xhr = new XMLHttpRequest(),
			url = pushwooshUrl + 'setTags',
			params = {
				request:{
					application: APP_CODE,
					hwid: hwid.toLowerCase(),
					tags: tags
				}
			};

		xhr.open('POST', url, true);
		xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
		xhr.send(JSON.stringify(params));
		xhr.onload = function() {
			if(this.status == 200) {
				var response = JSON.parse(this.responseText);
				if (response.status_code == 200) { console.log('Set tags method were successfully sent to Pushwoosh'); }
				else { console.log('Error occurred while sending setTags to Pushwoosh: ' + response.status_message); }
			} else {
				console.log('Error occurred, status code::' + this.status);
			}
		};
		xhr.onerror = function(){ console.log('Pushwoosh response status code to pushStat call in not 200'); };
	} catch(e) {
		console.log('Exception while sending setTags to Pushwoosh: ' + e);
		return;
	}
}

function get_browser_version() {
	var ua = navigator.userAgent, tem,
	M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
	if (/trident/i.test(M[1])) {
		tem =  /\brv[ :]+(\d+)/g.exec(ua) || [];
		return 'IE '+(tem[1] || '');
	}
	if (M[1] === 'Chrome') {
		tem = ua.match(/\bOPR\/(\d+)/)
		if(tem!= null) return 'Opera '+tem[1];
	}
	M = M[2] ? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
	if((tem= ua.match(/version\/([.\d]+)/i))!= null)
		M.splice(1, 1, tem[1]);
	return M.join(' ');
}
