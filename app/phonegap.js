/**
 * Simulates the mobile native deviceready fired event.
 */
window.addEventListener("initFired", function () { Main.fireEvent("deviceready"); }, true);

/**
 * Dummy data for debugging env.
 */
device = {
    uuid: "testDevice",
    platform: "gn",
    version: "4.4"
};
Connection = {
    NONE: "No network connection",
    WIFI: "WiFi connection"
};
navigator.connection = {
    type: Connection.WIFI
};
if (typeof window.plugins == "undefined") {
    window.plugins = {};
}
if (typeof window.plugins.toast == "undefined") {
    window.plugins.toast = {
        showShortBottom: function (str) { log("toast", str); }
    };
}
if (typeof navigator.app == "undefined") {
    navigator.app = {};
}
if (typeof navigator.app.clearCache == "undefined") {
    navigator.app.clearCache = function () { log("info", "navigator.app.clearCache() invoked."); }
}
if (typeof navigator.app.exitApp == "undefined") {
    navigator.app.exitApp = function () { log("info", "navigator.app.exitApp() invoked."); }
}
if (typeof StatusBar == "undefined") {
    StatusBar = {};
}
if (typeof PushNotification == "undefined") {
    PushNotification = {
        init: function (options) { log("push", "Init fired with options: " + JSON.stringify(options)); return this; },
        on: function (event, callback) { log("push", "Binding '" + event + "'."); }
    }
}
if (typeof window.plugins.socialsharing == "undefined") {
    window.plugins.socialsharing = {
        "share": function (message, subject, file, url, successCallback, errorCallback) {
            log("socialsharing", "Sharing. Message: '" + message + "'; Subject: '" + subject
                + "'; File: '" + file  + "'; URL: '" + url + "'.");
        }
    };
}
