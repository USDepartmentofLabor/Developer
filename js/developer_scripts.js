function getAppStoreLink() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if( userAgent.match( /iPad/i ) || userAgent.match( /iPhone/i ) || userAgent.match( /iPod/i ) )
    {
        return 'itms-apps://itunes.apple.com/us/app/labor-stats/id468085481?mt=8';
    }
    else if( userAgent.match( /Android/i ) )
    {

        return 'market://details?id=com.current';
    }
    else
    {
        return 'https://github.com/USDepartmentofLabor?query=stats';
    }
}


