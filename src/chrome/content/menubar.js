const Menu = {};

Menu.doQuit = function(aForceQuit) {
	// https://developer.mozilla.org/en/docs/How_to_Quit_a_XUL_Application
	var appStartup = Components.classes['@mozilla.org/toolkit/app-startup;1'].getService(Components.interfaces.nsIAppStartup);

	// eAttemptQuit will try to close each XUL window, but the XUL window can cancel the quit
	// process if there is unsaved data. eForceQuit will quit no matter what.
	var quitSeverity = aForceQuit ?
							Components.interfaces.nsIAppStartup.eForceQuit :
							Components.interfaces.nsIAppStartup.eAttemptQuit;
	appStartup.quit(quitSeverity);
}

Menu.doAbout = function() {
	// placeholder for your about box code
}

Menu.doPreferences = function() {
	// placeholder for your preferences code
}

const gClipboardHelper = Components.classes["@mozilla.org/widget/clipboardhelper;1"].getService(Components.interfaces.nsIClipboardHelper);

Menu.doCopy = function() {
	// placeholder for your copy code
	gClipboardHelper.copyString("XUL Skeleton copy placeholder text.");
}

Menu.doCut = function() {
	// placeholder for your cut code
	gClipboardHelper.copyString("XUL Skeleton cut placeholder text.");
}

Menu.doPaste = function() {
	// placeholder for your paste code
}

Menu.doMinimize = function(){
	window.minimize();
}

Menu.doMaximize = function(){
	window.maximize();
}

Menu.doRestore = function(){
	window.restore();
}

Menu.doZoom = function() {
	if (window.windowState == 3) {
		window.maximize();
	} else {
		window.restore();
	}
}

Menu.openURL = function(uri) {
	// http://stackoverflow.com/questions/21701365/open-a-browser-window-from-an-xul-application
	if (typeof uri == "string") {
		var ioservice = Components.classes["@mozilla.org/network/io-service;1"].getService(Components.interfaces.nsIIOService);
		uri = ioservice.newURI(uri, null, null);
	}

	// Open URL in user's default browser.
	var extps = Components.classes["@mozilla.org/uriloader/external-protocol-service;1"].getService(Components.interfaces.nsIExternalProtocolService);
	extps.loadURI(uri, null);
}