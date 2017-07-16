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
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
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
__export(__webpack_require__(6));
__export(__webpack_require__(2));


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
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(9));
__export(__webpack_require__(25));
__export(__webpack_require__(10));


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
const LogLevel_1 = __webpack_require__(6);
const Singleton_1 = __webpack_require__(3);
const RamStorage_1 = __webpack_require__(7);
/**
 * a log wrapper to allow log levels and a more complex
 * logging structure
 */
class Log extends Singleton_1.Singleton {
    constructor() {
        super(...arguments);
        /**
         * the current log prefix
         */
        this.prefix = "";
        // the current loglevel
        this.logLevel = LogLevel_1.LogLevel.Debug;
    }
    /**
     * sets the log level for the application environment
     *
     * @param level the new log level
     */
    setLogLevel(level) {
        this.logLevel = level;
    }
    /**
     * get the logger instance with prefixing for better
     * detection
     *
     * @param prefix the prefix string
     */
    static getLogger(prefix) {
        let instance = null;
        if (!RamStorage_1.RamStorage.has(this.generateStorageName(prefix))) {
            // get the constructor and store an instance of the class at the ram storage
            let constructor = this;
            let logger = new constructor();
            logger.prefix = prefix;
            RamStorage_1.RamStorage.add(this.generateStorageName(prefix), logger);
        }
        // get the instance
        return RamStorage_1.RamStorage.get(this.generateStorageName(prefix));
    }
    /**
     * override the generate storage name method to allow prefixing the
     * log instance
     *
     * @param prefix the desired prefix
     */
    static generateStorageName(prefix) {
        return `singleton.instance.${this.name}.${prefix}`;
    }
    /**
     * logs the given data
     *
     * @param level the level to log in
     * @param optionalPrefix the optional prefix
     * @param params all params as vararg array
     */
    log(level, ...params) {
        // log if the log level is ok
        if (parseInt(level) >= parseInt(this.logLevel)
            &&
                this.logLevel !== LogLevel_1.LogLevel.None) {
            let prefix = "";
            if (this.prefix) {
                prefix = `[${this.prefix}]`;
            }
            this.getLogFunctionByLevel(level)(`[${this.constructor.name}.${LogLevel_1.LogLevel[level]}]${prefix}`, ...params);
        }
    }
    /**
     * gets a callback function to log
     *
     * @param level the level to get the function from
     */
    getLogFunctionByLevel(level) {
        let callback;
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
    }
    /**
     * get the current log level
     */
    getLogLevel() {
        return this.logLevel;
    }
    /**
     * logs as debug level
     *
     * @param optionalPrefix if this is a constructor, the log will pre prefixed with its name. if not, the param will just printed
     * @param params all params as vararg array
     */
    debug(...params) {
        this.log(LogLevel_1.LogLevel.Debug, ...params);
    }
    /**
     * logs as info level
     *
     * @param optionalPrefix if this is a constructor, the log will pre prefixed with its name. if not, the param will just printed
     * @param params all params as vararg array
     */
    info(...params) {
        this.log(LogLevel_1.LogLevel.Info, ...params);
    }
    /**
     * logs as warning level
     *
     * @param optionalPrefix if this is a constructor, the log will pre prefixed with its name. if not, the param will just printed
     * @param params all params as vararg array
     */
    warning(...params) {
        this.log(LogLevel_1.LogLevel.Warning, ...params);
    }
    /**
     * logs as error level
     *
     * @param optionalPrefix if this is a constructor, the log will pre prefixed with its name. if not, the param will just printed
     * @param params all params as vararg array
     */
    error(...params) {
        this.log(LogLevel_1.LogLevel.Error, ...params);
    }
}
exports.Log = Log;


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
Object.defineProperty(exports, "__esModule", { value: true });
const storage_1 = __webpack_require__(4);
const event_1 = __webpack_require__(12);
/**
 * a class to handle the singleton paradigmen
 */
class Singleton extends event_1.EventEmitter {
    /**
     * generates a storage name for the instance storing
     *
     * @param className the class name
     */
    static generateStorageName() {
        return `singleton.instance.${this.name}`;
    }
    /**
     * get the singleton instance
     */
    static getInstance() {
        let instance = null;
        if (!storage_1.RamStorage.has(this.generateStorageName())) {
            // get the constructor and store an instance of the class at the ram storage
            let constructor = this;
            storage_1.RamStorage.add(this.generateStorageName(), new constructor());
        }
        // get the instance
        return storage_1.RamStorage.get(this.generateStorageName());
    }
    /**
     * bind the instance to the singleton storage
     *
     * @param instance the instance that should be bound
     */
    static bindInstance(instance) {
        // save the instance
        storage_1.RamStorage.add(this.generateStorageName(), instance);
    }
}
exports.Singleton = Singleton;


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
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(7));


/***/ }),
/* 5 */
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
__export(__webpack_require__(3));
__export(__webpack_require__(37));
__export(__webpack_require__(11));
__export(__webpack_require__(38));


/***/ }),
/* 6 */
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
    LogLevel[LogLevel["None"] = 0] = "None";
    LogLevel[LogLevel["Debug"] = 1] = "Debug";
    LogLevel[LogLevel["Info"] = 2] = "Info";
    LogLevel[LogLevel["Warning"] = 3] = "Warning";
    LogLevel[LogLevel["Error"] = 4] = "Error";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
// the dependency to get the memory footprint ob stored objects
let sizeof = __webpack_require__(8);
const math_1 = __webpack_require__(1);
const File_1 = __webpack_require__(11);
/**
 * holds objects in the ram of the operating unit
 */
class RamStorage {
    /**
     * adds an elemement to the cache
     *
     * @param path the path to the object. dots can be used to structure
     * @param elemement the element to store
     */
    static add(path, elemement) {
        RamStorage.cache[path] = elemement;
    }
    /**
     * removes an element from the cache
     *
     * @param path the path to the object. dots can be used to structure
     */
    static remove(path) {
        delete RamStorage.cache[path];
    }
    /**
     * reset the complete storage!
     */
    static clear() {
        this.cache = {};
    }
    /**
     * removes all entires in the given path
     *
     * @param path the path to clear
     * @return the amount of deleted objects
     */
    static clearPath(path) {
        let counter = 0;
        Object.keys(RamStorage.cache).forEach(key => {
            // if the path is present
            if (key.indexOf(path) === 0) {
                // remove the part
                delete RamStorage.cache[key];
                counter++;
            }
        });
        return counter;
    }
    /**
     * get an element from the cache
     *
     * @param path the path to the object. dots can be used to structure
     */
    static get(path) {
        return RamStorage.cache[path];
    }
    /**
     * checks if an object exists in the cache
     *
     * @param path the path to the object. dots can be used to structure
     */
    static has(path) {
        return RamStorage.get(path) !== undefined;
    }
    /**
     * the path to one or many objects in the storage
     *
     * @param path the path to the object. dots can be used to structure
     */
    static amount(path) {
        let counter = 0;
        Object.keys(RamStorage.cache).forEach(key => {
            // if the path is present, update counter
            if (key.indexOf(path) === 0)
                counter++;
        });
        return counter;
    }
    /**
     * calculates the used memory for the selected objects in the storage.
     *
     * @param path the path to the object. dots can be used to structure
     */
    static getSize(path = "", type = File_1.FileSizeType.Byte) {
        let byteCounter = 0;
        Object.keys(RamStorage.cache).forEach(key => {
            // if the path is present, update counter
            if (key.indexOf(path) === 0)
                byteCounter += sizeof(RamStorage.cache[key]);
        });
        let bytes = File_1.File.byteToSize(byteCounter, type);
        return math_1.Helper.roundToPrecision(bytes, 2);
    }
}
// the private cache object
RamStorage.cache = {};
exports.RamStorage = RamStorage;


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("object-sizeof");

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
/**
 * simple math helper class
 */
class Helper {
    /**
     * calculates a random degree
     */
    static randomDegree() {
        return Math.floor(Math.random() * 359) + 1;
    }
    /**
     * transforms a degree number to radian number
     *
     * @param degree the given degree
     */
    static degreeToRadian(degree) {
        return degree * Math.PI / 180;
    }
    /**
     * transforms a radian number to degree
     *
     * @param radian the radian value
     */
    static radianToDegree(radian) {
        return radian * (180 / Math.PI);
    }
    /**
     * rounds to a given precision
     *
     * @param number the number to round
     * @param precision the precision
     */
    static roundToPrecision(number, precision = 2) {
        return +number.toFixed(precision);
    }
    /**
     * converts mass to newtons based on a given force
     *
     * @param mass the mass of the object
     * @param force the gravity force
     */
    static massToWeight(mass, force) {
        return mass * force;
    }
}
exports.Helper = Helper;


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
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * a basic holder of x and y values as one datatype
 */
class Dimension {
    /**
     *
     * @param x the x coordinate
     * @param y the y coordinate
     */
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
}
exports.Dimension = Dimension;


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
var FileSizeType;
(function (FileSizeType) {
    FileSizeType[FileSizeType["Byte"] = 0] = "Byte";
    FileSizeType[FileSizeType["Kilobyte"] = 1] = "Kilobyte";
    FileSizeType[FileSizeType["Megabyte"] = 2] = "Megabyte";
    FileSizeType[FileSizeType["Gigabyte"] = 3] = "Gigabyte";
    FileSizeType[FileSizeType["Terrabyte"] = 4] = "Terrabyte";
})(FileSizeType = exports.FileSizeType || (exports.FileSizeType = {}));
/**
 * a helper class for file and path things
 */
class File {
    /**
     * get the file extension of a path
     *
     * @param path the path to the file
     */
    static getFileExtension(path) {
        return path.split('.').pop();
    }
    /**
     * converts a byle number to a given superset
     *
     * @param bytes the base byte number
     * @param type the wanted type
     */
    static byteToSize(bytes, type) {
        return bytes / Math.pow(1024, type);
    }
}
exports.File = File;


/***/ }),
/* 12 */
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
__export(__webpack_require__(13));
__export(__webpack_require__(26));
__export(__webpack_require__(27));


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
var EventName;
(function (EventName) {
    EventName[EventName["BeforePreload"] = "BeforePreload"] = "BeforePreload";
    EventName[EventName["AfterPreload"] = "AfterPreload"] = "AfterPreload";
    EventName[EventName["BeforeAssetLoading"] = "BeforeAssetLoading"] = "BeforeAssetLoading";
    EventName[EventName["AfterAssetLoading"] = "AfterAssetLoading"] = "AfterAssetLoading";
    EventName[EventName["BeforeLoaded"] = "BeforeLoaded"] = "BeforeLoaded";
    EventName[EventName["AfterLoaded"] = "AfterLoaded"] = "AfterLoaded";
})(EventName = exports.EventName || (exports.EventName = {}));


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
function isNodeEnv() {
    return typeof global !== 'undefined';
}
function isBrowserEnv() {
    return typeof window !== 'undefined';
}
/**
 * loads a polyfill if the object was not found
 */
function polyfill(...modules) {
    modules.forEach(_module => {
        if (isNodeEnv()) {
            // load node polyfill
            global[_module.fills] = !(function webpackMissingModule() { var e = new Error("Cannot find module \".\""); e.code = 'MODULE_NOT_FOUND'; throw e; }());
        }
        else if (isBrowserEnv()) {
            // load browser polyfill
            window[_module.fills] = !(function webpackMissingModule() { var e = new Error("Cannot find module \".\""); e.code = 'MODULE_NOT_FOUND'; throw e; }());
        }
    });
}
exports.polyfill = polyfill;


/***/ }),
/* 15 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 15;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const math_1 = __webpack_require__(1);
/**
 * the base class for all game entities
 */
class Entity {
    constructor(position = new math_1.Vector2D(0, 0)) {
        this.position = position;
    }
    /**
     * get the current position of the entity ( top left )
     */
    getPosition() {
        return this.position;
    }
    /**
     * set the entities new position
     *
     * @param position the new position
     */
    setPosition(position) {
        this.position = position;
    }
}
exports.Entity = Entity;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const web_1 = __webpack_require__(18);
const network_1 = __webpack_require__(28);
const shared_1 = __webpack_require__(31);
/**
 * the game server main class. loads all important things
 * and also provides a buildin webserver to serve the app
 */
class Server {
    constructor(serverConfig) {
        this.serverConfig = serverConfig;
        /**
         * logger instance
         */
        this.logger = shared_1.Log.getLogger(Server.name);
        // set the log level
        this.logger.setLogLevel(serverConfig.logLevel);
        // start the webserver
        this.webserver = new web_1.Webserver(serverConfig.webAdress, serverConfig.webPort);
        // start network
        this.network = new network_1.NetworkServer(this.webserver.getApplication());
    }
}
exports.Server = Server;
// start the webserver
new Server({
    webAdress: '127.0.0.1',
    webPort: 3000,
    logLevel: shared_1.LogLevel.Debug
});


/***/ }),
/* 18 */
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
__export(__webpack_require__(19));


/***/ }),
/* 19 */
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
__webpack_require__(20);
const http = __webpack_require__(21);
const express = __webpack_require__(22);
const path = __webpack_require__(23);
const fs = __webpack_require__(24);
const log_1 = __webpack_require__(0);
/**
 * the buildin webserver to serve the client
 */
class Webserver {
    constructor(listenAdress = "127.0.0.1", port = 3000, app = express()) {
        /**
         * the logger instance
         */
        this.logger = log_1.Log.getLogger(Webserver.name);
        // setup server
        this.httpServer = http.createServer(app);
        // start listening
        this.httpServer.listen(port, listenAdress);
        this.logger.info("Listening at ", `${listenAdress}:${port}`);
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
        let absolutePath = path.resolve(`./dist/${file}`);
        try {
            response.type(file.split('.').pop());
            response.send(fs.readFileSync(absolutePath));
        }
        catch (e) {
            response.sendStatus(404);
        }
    }
    /**
     * gets the current express application
     *
     * @return the passed through app at constructing time or a newly created app if no parameter was given during constructing
     */
    getApplication() {
        return this.app;
    }
}
exports.Webserver = Webserver;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "index.html";

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Helper_1 = __webpack_require__(9);
const Dimension_1 = __webpack_require__(10);
/**
 * represents a 2D vector with x and y coordinates.
 */
class Vector2D extends Dimension_1.Dimension {
    /**
     *
     * @param x the x coordinate
     * @param y the y coordinate
     */
    constructor(x = 0, y = 0) {
        super(x, y);
    }
    /**
     * helper method to get vector instances
     *
     * @param x the x value
     * @param y the y value. if no y value is present, x and y will come from x
     */
    static from(x, y) {
        return new Vector2D(x, y !== undefined ? y : x);
    }
    /**
     * adds another vector
     *
     * @param vector the other vector
     */
    add(vector) {
        return new Vector2D((this.x + vector.x), (this.y + vector.y));
    }
    /**
     * substract another vector
     *
     * @param vector the other vector
     */
    substract(vector) {
        return new Vector2D((this.x - vector.x), (this.y - vector.y));
    }
    /**
     * divide another vector
     *
     * @param vector the other vector
     */
    divide(vector) {
        return new Vector2D((this.x / vector.x), (this.y / vector.y));
    }
    /**
     * multiply two vectors
     *
     * @param vector the other vector
     */
    multiply(vector) {
        return new Vector2D((this.x * vector.x), (this.y * vector.y));
    }
    /**
     * rounds the vector to a given precision
     */
    round(precision = 2) {
        return new Vector2D((Helper_1.Helper.roundToPrecision(this.x, precision)), (Helper_1.Helper.roundToPrecision(this.y, precision)));
    }
    /**
     * calculates the distance of two vector points
     *
     * @param otherVector the other vector calculate to
     * @return the distance in pixel
     */
    distanceToVector(otherVector) {
        return Math.sqrt(Math.pow((this.x - otherVector.x), 2)
            +
                Math.pow((this.y - otherVector.y), 2));
    }
    /**
     * get the current vector divided by 2
     */
    half() {
        return this.divide(new Vector2D(2, 2));
    }
    /**
     * get the current vector multiply by 2
     */
    double() {
        return this.multiply(new Vector2D(2, 2));
    }
    /**
     * Math.abs() on x and y
     */
    abs() {
        return new Vector2D(Math.abs(this.x), Math.abs(this.y));
    }
}
exports.Vector2D = Vector2D;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const storage_1 = __webpack_require__(4);
/**
 * a class that can emit events and can add listeners to events
 */
class EventEmitter {
    /**
     * listen on the given event
     *
     * @param event the desired event
     * @param listener the listener function
     */
    on(event, listener) {
        // first get all listeners
        let listeners = storage_1.RamStorage.get(EventEmitter.name);
        // check if listeners is defined
        if (!listeners) {
            listeners = {};
        }
        // create array context if not allready done
        if (!Array.isArray(listeners[event])) {
            listeners[event] = [];
        }
        // stack it up
        listeners[event].push(listener);
        // save it back to the storage
        storage_1.RamStorage.add(EventEmitter.name, listeners);
        // chaning context
        return this;
    }
    /**
     * emit an event
     *
     * @param event the event name
     * @param listenerBoundContext this context of the executed function. default: null
     * @param args optional parameter to pass to the listener function
     */
    emit(event, listenerBoundContext, ...args) {
        // get all listeners for this event
        let listeners = storage_1.RamStorage.get(EventEmitter.name);
        // is listeners defined?
        if (!listeners) {
            // cancel
            return this;
        }
        // get all functions for this event
        let eventFunctions = listeners[event];
        // are there any?
        if (Array.isArray(eventFunctions)) {
            // execute them
            eventFunctions.forEach((ev) => {
                // take the context or no context
                if (!listenerBoundContext)
                    listenerBoundContext = {};
                // call it
                ev.apply(listenerBoundContext, args);
            });
        }
        // chaning context
        return this;
    }
    /**
     * get all registered listeners for the given event
     *
     * @param event the event to get the listeners for
     */
    getListeners(event) {
        // get all listeners from the storage
        let listeners = storage_1.RamStorage.get(EventEmitter.name);
        // check if the event has listeners
        if (!listeners)
            return [];
        else if (!listeners[event])
            return [];
        // return the listeners
        return listeners[event];
    }
}
exports.EventEmitter = EventEmitter;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 28 */
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
__export(__webpack_require__(29));


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const socketio = __webpack_require__(30);
const log_1 = __webpack_require__(0);
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
        /**
         * the logger instance
         */
        this.logger = log_1.Log.getLogger(NetworkServer.name);
        this.bindWebsocketToApplication();
    }
    /**
     * binds a websocket to the applications router
     */
    bindWebsocketToApplication() {
        // init websocket and bind to application
        this.socket = socketio(this.application);
        this.logger.info("Websocket started");
    }
    /**
     * binds a callback function to an event of socketio
     *
     * @param eventName the event name you choose between server and client
     * @param callback a function executed on event occur
     */
    bindEvent(eventName, callback) {
        // pass this to socketio
        this.socket.on(eventName, callback);
    }
    /**
     * bind a callback to a new connecting player
     *
     * @param callback the handler function
     */
    bindNewConnectionEvent(callback) {
        // pass this event to socketio
        this.socket.on("connection", callback);
    }
}
exports.NetworkServer = NetworkServer;


/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("socket.io");

/***/ }),
/* 31 */
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
__export(__webpack_require__(32));
__export(__webpack_require__(34));
__export(__webpack_require__(40));
__export(__webpack_require__(5));
__export(__webpack_require__(0));
__export(__webpack_require__(1));
__export(__webpack_require__(4));
__export(__webpack_require__(12));
__export(__webpack_require__(14));


/***/ }),
/* 32 */
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
__export(__webpack_require__(33));


/***/ }),
/* 33 */
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
 * an enumeration for all available collision types
 */
var CollisionType;
(function (CollisionType) {
    CollisionType[CollisionType["Circle"] = 0] = "Circle";
    CollisionType[CollisionType["Rectangle"] = 1] = "Rectangle";
    CollisionType[CollisionType["RotatedRectangle"] = 2] = "RotatedRectangle";
})(CollisionType = exports.CollisionType || (exports.CollisionType = {}));


/***/ }),
/* 34 */
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
__export(__webpack_require__(35));
__export(__webpack_require__(36));
__export(__webpack_require__(39));


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const log_1 = __webpack_require__(0);
/**
 * a decorator for logging method calls to debug console
 *
 * @param target
 * @param propertyKey
 * @param descriptor
 */
function logMethodCall(target, key, descriptor) {
    // load the logger
    const logger = log_1.Log.getInstance();
    return {
        value: function (...args) {
            // log the call
            logger.debug("@logMethodCall", `${target.constructor.name}:${key}()`);
            // original method call
            return descriptor.value.apply(this, args);
        }
    };
}
exports.logMethodCall = logMethodCall;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const helper_1 = __webpack_require__(5);
const Log_1 = __webpack_require__(2);
const objectSizeof = __webpack_require__(8);
/**
 * a property decorator to define a phase in wich the property
 * will be emptied
 *
 * @param event property will be cleared on the defined event
 * @param clearVal the new value that will be the property value
 */
function collectGargabe(event, cleanVal) {
    return (target, propertyKey) => {
        // the collector function
        let collectGarbage = (targets) => {
            // for size calc
            let size = 0;
            // iterate all targets
            targets.forEach(target => {
                // cleck if property exists
                if (target[propertyKey]) {
                    //clean it!
                    size += objectSizeof(target[propertyKey]);
                    target[propertyKey] = cleanVal;
                }
            });
            // print log
            Log_1.Log.getLogger('@' + collectGargabe.name).debug("cleared", helper_1.File.byteToSize(size, helper_1.FileSizeType.Kilobyte) + "KB");
        };
        // register the deletion event in the garbage collector
        let collector = helper_1.GarbageCollector.getInstance();
        collector.registerCleaning({
            event: event,
            ctor: target.constructor,
            cleanFunction: collectGarbage
        });
    };
}
exports.collectGargabe = collectGargabe;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const polyfill_1 = __webpack_require__(14);
polyfill_1.polyfill({ require: "atob", fills: "atob" }, { require: "w3c-blob", fills: "Blob" });
/**
 * a helper class for binary content
 */
class Binary {
    /**
     * converts a data uri to a blob
     *
     * @param dataUri the data uri from the object
     */
    static dataUriToBlob(dataUri) {
        // @see https://stackoverflow.com/questions/12168909/blob-from-dataurl
        // convert base64 to raw binary data held in a string
        // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
        let byteString = atob(dataUri.split(',')[1]);
        // separate out the mime component
        let mimeString = dataUri.split(',')[0].split(':')[1].split(';')[0];
        // write the bytes of the string to an ArrayBuffer
        let ab = new ArrayBuffer(byteString.length);
        // create a view into the buffer
        let ia = new Uint8Array(ab);
        // set the bytes of the buffer to the correct values
        for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        // write the ArrayBuffer to a blob, and you're done
        let blob = new Blob([ab], { type: mimeString });
        return blob;
    }
    /**
     * converts a binary buffer into a string
     *
     * @param buffer the binary content
     */
    static bufferToString(buffer) {
        return String.fromCharCode.apply(null, new Uint8Array(buffer));
    }
    /**
     * converts a buffer to a blob instance
     *
     * @param buffer the buffer
     */
    static bufferToBlob(buffer) {
        if (buffer instanceof ArrayBuffer) {
            // cast to buffer
            buffer = Buffer.from(buffer);
        }
        return new Blob([new Uint8Array(buffer)]);
    }
    /**
     * converts a data uri to a buffer
     *
     * @param dataUri the given data uri
     */
    static dataUriToBuffer(dataUri) {
        let binStr = atob(dataUri);
        // create a uint8array to store the characters
        let array = new Uint8Array(binStr.length);
        // add each char from the binary string
        for (let i = 0; i < binStr.length; i++) {
            array[i] = binStr.charCodeAt(i);
        }
        // finally
        return Buffer.from(array.buffer);
    }
}
exports.Binary = Binary;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Singleton_1 = __webpack_require__(3);
const EventName_1 = __webpack_require__(13);
const Log_1 = __webpack_require__(2);
/**
 * an internal garbage collector class to clear some memory for the
 * user.
 */
class GarbageCollector extends Singleton_1.Singleton {
    constructor() {
        super();
        /**
         * holder of all registered targets for cleaning
         */
        this.registeredTargets = {};
        /**
         * the stack of all registered garbage collection processes
         */
        this.registerStack = [];
        /**
         * the logger instance
         */
        this.logger = Log_1.Log.getLogger(GarbageCollector.name);
        // register all events
        Object.keys(EventName_1.EventName).forEach(event => {
            // register event and execute the cleaning
            let eventEnum = event;
            // register the event
            this.on(eventEnum, this.executeEvent.bind(this, eventEnum));
        });
        // bind instance
        GarbageCollector.bindInstance(this);
    }
    /**
     * register a property to be cleaned if a specific event occurs
     *
     * @param cleaning the nessesary objects to clean something
     */
    registerCleaning(cleaning) {
        this.registerStack.push(cleaning);
    }
    /**
     *
     * @param ctorName the constructor name of the class
     * @param target the target class as instance
     */
    addTarget(ctorName, target) {
        if (!Array.isArray(this.registeredTargets[ctorName])) {
            this.registeredTargets[ctorName] = [];
        }
        this.registeredTargets[ctorName].push(target);
    }
    /**
     * get all targets by its constructor function
     */
    getTargets(cleanTask) {
        // no targets available?
        if (!this.registeredTargets[cleanTask.ctor.name]) {
            // log a warning message
            this.logger.warning("Trying to clean at class", cleanTask.ctor.name, "but there aren't any registered targets.", "Please be sure you decorated the class with @enableGarbageCollection");
            // no targets found!
            return [];
        }
        // get all of them!
        return this.registeredTargets[cleanTask.ctor.name];
    }
    /**
     * execute the garbage collector at the given event
     */
    executeEvent(eventName) {
        this.registerStack
            .filter(clean => clean.event === eventName)
            .forEach(clean => clean
            .cleanFunction(
        // get all targets to clear
        this.getTargets(clean), 
        // pass the callback args to the function if available
        ...(clean.callbackArguments ? clean.callbackArguments : [])));
    }
}
exports.GarbageCollector = GarbageCollector;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const helper_1 = __webpack_require__(5);
/**
 * a class decorator that enabled garbage collecting on this class.
 * this is required to use @collectGarbage as property decorator
 */
function enableGarbageCollection(ctor) {
    return class extends ctor {
        constructor(...args) {
            super();
            // register the instance at the gc
            let gc = helper_1.GarbageCollector.getInstance();
            gc.addTarget(ctor.name, this);
        }
    };
}
exports.enableGarbageCollection = enableGarbageCollection;


/***/ }),
/* 40 */
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
__export(__webpack_require__(41));
__export(__webpack_require__(16));
__export(__webpack_require__(42));


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Entity_1 = __webpack_require__(16);
const math_1 = __webpack_require__(1);
/**
 * an entity that can collide with other collidable entities
 */
class CollidableEntity extends Entity_1.Entity {
    constructor(entityWidth, entityHeight, position = math_1.Vector2D.from(0, 0)) {
        super(position);
        this.entityWidth = entityWidth;
        this.entityHeight = entityHeight;
    }
    /**
     * get the width of the entity
     */
    getWidth() {
        return this.entityWidth;
    }
    /**
     * get the height of the entity
     */
    getHeight() {
        return this.entityHeight;
    }
    /**
     * get the width of the entity
     */
    setWidth(width) {
        this.entityWidth = width;
    }
    /**
     * get the height of the entity
     */
    setHeight(height) {
        this.entityHeight = height;
    }
}
exports.CollidableEntity = CollidableEntity;


/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map