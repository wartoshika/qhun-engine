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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__log_LogLevel__ = __webpack_require__(1);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__log_LogLevel__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__log_Log__ = __webpack_require__(9);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__log_Log__["a"]; });




/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogLevel; });
/**
 * a basic loglevel categorisation
 */
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Debug"] = 0] = "Debug";
    LogLevel[LogLevel["Info"] = 1] = "Info";
    LogLevel[LogLevel["Warning"] = 2] = "Warning";
    LogLevel[LogLevel["Error"] = 3] = "Error";
})(LogLevel || (LogLevel = {}));


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_server_web__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_server_network__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_shared_log__ = __webpack_require__(0);



/**
 * the game server main class. loads all important things
 * and also provides a buildin webserver to serve the app
 */
class Server {
    constructor(serverConfig) {
        this.serverConfig = serverConfig;
        // set the log level
        __WEBPACK_IMPORTED_MODULE_2_shared_log__["a" /* Log */].setLogLevel(serverConfig.logLevel);
        // start webserver
        this.webserver = new __WEBPACK_IMPORTED_MODULE_0_server_web__["a" /* Webserver */](serverConfig.webAdress, serverConfig.webPort);
        // start network
        this.network = new __WEBPACK_IMPORTED_MODULE_1_server_network__["a" /* NetworkServer */](this.webserver.getApplication());
    }
}
/* harmony export (immutable) */ __webpack_exports__["Server"] = Server;

// start the webserver
new Server({
    webAdress: '127.0.0.1',
    webPort: 3000,
    logLevel: __WEBPACK_IMPORTED_MODULE_2_shared_log__["b" /* LogLevel */].Debug
});


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__web_Webserver__ = __webpack_require__(4);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__web_Webserver__["a"]; });



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_http__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_shared_log__ = __webpack_require__(0);
// need the index file in the build directory
__webpack_require__(5);




class Webserver {
    constructor(listenAdress = "127.0.0.1", port = 3000, app = __WEBPACK_IMPORTED_MODULE_1_express__()) {
        // setup server
        this.httpServer = __WEBPACK_IMPORTED_MODULE_0_http__["createServer"](app);
        // start listening
        this.httpServer.listen(port, listenAdress);
        __WEBPACK_IMPORTED_MODULE_3_shared_log__["a" /* Log */].info("Listening at ", `${listenAdress}:${port}`);
        // handle http calls
        app.get('/*', this.serveApplication.bind(this));
    }
    /**
     * handles incomming file calls
     *
     * @param request
     * @param response
     */
    serveApplication(request, response) {
        // get the requested file from the request object
        let file = request.url;
        if (file === "/")
            file = "index.html";
        // @todo: do not serve the server.js file for security reasons!
        // get the file and send it back to the client
        let absolutePath = __WEBPACK_IMPORTED_MODULE_2_path__["resolve"](`./build/${file}`);
        response.sendFile(absolutePath);
    }
    /**
     * gets the current express application
     */
    getApplication() {
        return this.app;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Webserver;



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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__LogLevel__ = __webpack_require__(1);

/**
 * a log wrapper to allow log levels and a more complex
 * logging structure
 */
class Log {
    /**
     * sets the log level for the application environment
     *
     * @param level the new log level
     */
    static setLogLevel(level) {
        Log.logLevel = level;
    }
    /**
     * logs the given data
     *
     * @param level the level to log in
     * @param params all params as vararg array
     */
    static log(level, ...params) {
        // log if the log level is ok
        if (parseInt(level) >= parseInt(Log.logLevel)) {
            // level ok, log
            Log.getLogFunctionByLevel(level)(`[Log.${__WEBPACK_IMPORTED_MODULE_0__LogLevel__["a" /* LogLevel */][level]}]`, ...params);
        }
    }
    /**
     * gets a callback function to log
     *
     * @param level the level to get the function from
     */
    static getLogFunctionByLevel(level) {
        let callback = () => { };
        // go through the different log levels
        switch (level) {
            case __WEBPACK_IMPORTED_MODULE_0__LogLevel__["a" /* LogLevel */].Debug:
                callback = console.debug;
                break;
            case __WEBPACK_IMPORTED_MODULE_0__LogLevel__["a" /* LogLevel */].Info:
                callback = console.info;
                break;
            case __WEBPACK_IMPORTED_MODULE_0__LogLevel__["a" /* LogLevel */].Warning:
                callback = console.warn;
                break;
            case __WEBPACK_IMPORTED_MODULE_0__LogLevel__["a" /* LogLevel */].Error:
                callback = console.error;
                break;
        }
        return callback;
    }
    /**
     * logs as debug level
     *
     * @param params all params as vararg array
     */
    static debug(...params) {
        Log.log(__WEBPACK_IMPORTED_MODULE_0__LogLevel__["a" /* LogLevel */].Debug, ...params);
    }
    /**
     * logs as info level
     *
     * @param params all params as vararg array
     */
    static info(...params) {
        Log.log(__WEBPACK_IMPORTED_MODULE_0__LogLevel__["a" /* LogLevel */].Info, ...params);
    }
    /**
     * logs as warning level
     *
     * @param params all params as vararg array
     */
    static warning(...params) {
        Log.log(__WEBPACK_IMPORTED_MODULE_0__LogLevel__["a" /* LogLevel */].Warning, ...params);
    }
    /**
     * logs as error level
     *
     * @param params all params as vararg array
     */
    static error(...params) {
        Log.log(__WEBPACK_IMPORTED_MODULE_0__LogLevel__["a" /* LogLevel */].Error, ...params);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Log;

// the current loglevel
Log.logLevel = __WEBPACK_IMPORTED_MODULE_0__LogLevel__["a" /* LogLevel */].Info;


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__network_NetworkServer__ = __webpack_require__(11);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__network_NetworkServer__["a"]; });



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_socket_io__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_shared_log__ = __webpack_require__(0);


/**
 * the network base to use a client-server based structure
 * with websocket as transport protocol
 */
class NetworkServer {
    /**
     *
     * @param application the application to bind the websocket
     */
    constructor(application) {
        this.application = application;
        this.bindWebsocketToApplication();
    }
    /**
     * binds a websocket to the applications router
     */
    bindWebsocketToApplication() {
        this.socket = __WEBPACK_IMPORTED_MODULE_0_socket_io__(this.application);
        __WEBPACK_IMPORTED_MODULE_1_shared_log__["a" /* Log */].info("Websocket started");
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = NetworkServer;



/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("socket.io");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map