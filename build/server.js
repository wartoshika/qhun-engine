/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(1));
__export(__webpack_require__(9));


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * a basic loglevel categorisation
 */
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Debug"] = 0] = "Debug";
    LogLevel[LogLevel["Info"] = 1] = "Info";
    LogLevel[LogLevel["Warning"] = 2] = "Warning";
    LogLevel[LogLevel["Error"] = 3] = "Error";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
var web_1 = __webpack_require__(3);
var network_1 = __webpack_require__(10);
var log_1 = __webpack_require__(0);
/**
 * the game server main class. loads all important things
 * and also provides a buildin webserver to serve the app
 */
var Server = (function () {
    function Server(serverConfig) {
        this.serverConfig = serverConfig;
        // set the log level
        log_1.Log.setLogLevel(serverConfig.logLevel);
        // start the webserver
        this.webserver = new web_1.Webserver(serverConfig.webAdress, serverConfig.webPort);
        // start network
        this.network = new network_1.NetworkServer(this.webserver.getApplication());
    }
    return Server;
}());
exports.Server = Server;
// start the webserver
new Server({
    webAdress: '127.0.0.1',
    webPort: 3000,
    logLevel: log_1.LogLevel.Debug
});


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(4));


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
// need the index file in the build directory
__webpack_require__(5);
var http = __webpack_require__(6);
var express = __webpack_require__(7);
var path = __webpack_require__(8);
var log_1 = __webpack_require__(0);
/**
 * the buildin webserver to serve the client
 */
var Webserver = (function () {
    function Webserver(listenAdress, port, app) {
        if (listenAdress === void 0) { listenAdress = "127.0.0.1"; }
        if (port === void 0) { port = 3000; }
        if (app === void 0) { app = express(); }
        // setup server
        this.httpServer = http.createServer(app);
        // start listening
        this.httpServer.listen(port, listenAdress);
        log_1.Log.info("Listening at ", listenAdress + ":" + port);
        // handle http calls
        app.get('/*', this.serveApplication.bind(this));
    }
    /**
     * handles incomming file calls
     *
     * @param request
     * @param response
     */
    Webserver.prototype.serveApplication = function (request, response) {
        // get the requested file from the request object
        var file = request.url;
        if (file === "/")
            file = "index.html";
        // @todo: do not serve the server.js file for security reasons!
        // get the file and send it back to the client
        var absolutePath = path.resolve("./build/" + file);
        response.sendFile(absolutePath);
    };
    /**
     * gets the current express application
     *
     * @return the passed through app at constructing time or a newly created app if no parameter was given during constructing
     */
    Webserver.prototype.getApplication = function () {
        return this.app;
    };
    return Webserver;
}());
exports.Webserver = Webserver;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "build/index.html";

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
var LogLevel_1 = __webpack_require__(1);
/**
 * a log wrapper to allow log levels and a more complex
 * logging structure
 */
var Log = (function () {
    function Log() {
    }
    /**
     * sets the log level for the application environment
     *
     * @param level the new log level
     */
    Log.setLogLevel = function (level) {
        Log.logLevel = level;
    };
    /**
     * logs the given data
     *
     * @param level the level to log in
     * @param params all params as vararg array
     */
    Log.log = function (level) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        // log if the log level is ok
        if (parseInt(level) >= parseInt(Log.logLevel)) {
            // level ok, log
            Log.getLogFunctionByLevel(level).apply(void 0, ["[Log." + LogLevel_1.LogLevel[level] + "]"].concat(params));
        }
    };
    /**
     * gets a callback function to log
     *
     * @param level the level to get the function from
     */
    Log.getLogFunctionByLevel = function (level) {
        var callback = function () { };
        // go through the different log levels
        switch (level) {
            case LogLevel_1.LogLevel.Debug:
                callback = console.debug;
                break;
            case LogLevel_1.LogLevel.Info:
                callback = console.info;
                break;
            case LogLevel_1.LogLevel.Warning:
                callback = console.warn;
                break;
            case LogLevel_1.LogLevel.Error:
                callback = console.error;
                break;
        }
        return callback;
    };
    /**
     * get the current log level
     */
    Log.getLogLevel = function () {
        return Log.logLevel;
    };
    /**
     * logs as debug level
     *
     * @param params all params as vararg array
     */
    Log.debug = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        Log.log.apply(Log, [LogLevel_1.LogLevel.Debug].concat(params));
    };
    /**
     * logs as info level
     *
     * @param params all params as vararg array
     */
    Log.info = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        Log.log.apply(Log, [LogLevel_1.LogLevel.Info].concat(params));
    };
    /**
     * logs as warning level
     *
     * @param params all params as vararg array
     */
    Log.warning = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        Log.log.apply(Log, [LogLevel_1.LogLevel.Warning].concat(params));
    };
    /**
     * logs as error level
     *
     * @param params all params as vararg array
     */
    Log.error = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        Log.log.apply(Log, [LogLevel_1.LogLevel.Error].concat(params));
    };
    // the current loglevel
    Log.logLevel = LogLevel_1.LogLevel.Debug;
    return Log;
}());
exports.Log = Log;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(11));


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
var socketio = __webpack_require__(12);
var log_1 = __webpack_require__(0);
/**
 * the network base to use a client-server based structure
 * with websocket as transport protocol
 */
var NetworkServer = (function () {
    /**
     *
     * @param application the application to bind the websocket
     */
    function NetworkServer(application) {
        this.application = application;
        this.bindWebsocketToApplication();
    }
    /**
     * binds a websocket to the applications router
     */
    NetworkServer.prototype.bindWebsocketToApplication = function () {
        // init websocket and bind to application
        this.socket = socketio(this.application);
        log_1.Log.info("Websocket started");
    };
    /**
     * binds a callback function to an event of socketio
     *
     * @param eventName the event name you choose between server and client
     * @param callback a function executed on event occur
     */
    NetworkServer.prototype.bindEvent = function (eventName, callback) {
        // pass this to socketio
        this.socket.on(eventName, callback);
    };
    /**
     * bind a callback to a new connecting player
     *
     * @param callback the handler function
     */
    NetworkServer.prototype.bindNewConnectionEvent = function (callback) {
        // pass this event to socketio
        this.socket.on("connection", callback);
    };
    return NetworkServer;
}());
exports.NetworkServer = NetworkServer;


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("socket.io");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map