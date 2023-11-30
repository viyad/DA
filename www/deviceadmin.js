var channel = require('cordova/channel'),
    exec = require('cordova/exec'),
    cordova = require('cordova');

function DeviceAdmin() {

}

DeviceAdmin.prototype.register = function(success, error) {
    exec(success, function (error) {
            alert("DeviceAdmin.register failed: " + error);
        }, "DeviceAdmin", "register", []);
};

DeviceAdmin.prototype.unRegister = function(success, error) {
    exec(success, error, "DeviceAdmin", "unRegister", []);
};

DeviceAdmin.prototype.isAdmin = function(success, error) {
    exec(success, function (error) {
            alert("DeviceAdmin.isAdmin failed: " + error);
        }, "DeviceAdmin", "isAdmin", []);
};

DeviceAdmin.prototype.lock = function(success, error) {
    exec(success, function (error) {
            alert("DeviceAdmin.lock failed: " + error);
        }, "DeviceAdmin", "lock", []);
};

DeviceAdmin.prototype.updateApp = function(url, success, error) {
    exec(success, error, "DeviceAdmin", "updateApp", [url]);
};

DeviceAdmin.prototype.installPackage = function(uri, success, error) {
    exec(success, error, "DeviceAdmin", "installPackage", [uri]);
};

DeviceAdmin.prototype.getDeviceInfo = function(success, error) {
    exec(function (success) {
            alert("DeviceAdmin.getDeviceInfo result: " + success);
        }, function (error) {
            alert("DeviceAdmin.getDeviceInfo failed: " + error);
        }, "DeviceAdmin", "getDeviceInfo", []);
};


channel.onCordovaReady.subscribe(function() {
    exec(listener, null, 'DeviceAdmin', 'listen', []);

    function listener(message) {
        console.log(message);
        //process message from java here ...
    }
});

module.exports = new DeviceAdmin();