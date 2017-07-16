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
/******/ 	return __webpack_require__(__webpack_require__.s = 45);
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
__export(__webpack_require__(22));
__export(__webpack_require__(54));
__export(__webpack_require__(23));


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
 * an enumeration of loadable assets via AssetLoader
 */
var AssetType;
(function (AssetType) {
    AssetType[AssetType["Image"] = 0] = "Image";
    AssetType[AssetType["TileMap"] = 1] = "TileMap";
    AssetType[AssetType["Audio"] = 2] = "Audio";
    AssetType[AssetType["Json"] = 3] = "Json";
})(AssetType = exports.AssetType || (exports.AssetType = {}));


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
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(46));
__export(__webpack_require__(48));
__export(__webpack_require__(29));
__export(__webpack_require__(5));
__export(__webpack_require__(8));
__export(__webpack_require__(0));
__export(__webpack_require__(11));
__export(__webpack_require__(25));
__export(__webpack_require__(27));


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
__export(__webpack_require__(7));
__export(__webpack_require__(62));
__export(__webpack_require__(63));
__export(__webpack_require__(1));
__export(__webpack_require__(15));
__export(__webpack_require__(64));
__export(__webpack_require__(4));
__export(__webpack_require__(16));


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
var AssetLoader_1 = __webpack_require__(15);
/**
 * a basic class for implementing the getter and setter function
 * of the required asset interface
 *
 * be sure to implement the folling needed functions
 * @required public static async register(...images: InlineAsset[]): Promise<any>
 * @required constructor(name?: string, path?: string, data?: any): Asset
 */
var AbstractAsset = (function () {
    function AbstractAsset(name, path, type, data) {
        this.name = name;
        this.path = path;
        this.type = type;
        this.data = data;
    }
    /**
     * get the asset loader instance to load the desired asset
     */
    AbstractAsset.getAssetLoader = function () {
        return AbstractAsset.assetLoader;
    };
    AbstractAsset.prototype.getName = function () {
        return this.name;
    };
    AbstractAsset.prototype.getPath = function () {
        return this.path;
    };
    AbstractAsset.prototype.getType = function () {
        return this.type;
    };
    AbstractAsset.prototype.getData = function () {
        return this.data;
    };
    AbstractAsset.prototype.setName = function (name) {
        this.name = name;
    };
    AbstractAsset.prototype.setPath = function (path) {
        this.path = path;
    };
    AbstractAsset.prototype.setData = function (data) {
        this.data = data;
    };
    /**
     * holder of the asset loader
     */
    AbstractAsset.assetLoader = AssetLoader_1.AssetLoader.getInstance();
    return AbstractAsset;
}());
exports.AbstractAsset = AbstractAsset;


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
__export(__webpack_require__(10));
__export(__webpack_require__(57));
__export(__webpack_require__(24));
__export(__webpack_require__(58));


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
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(61));


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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AssetType_1 = __webpack_require__(1);
var AbstractAsset_1 = __webpack_require__(4);
/**
 * the image class handles exactly one image
 */
var Image = (function (_super) {
    __extends(Image, _super);
    function Image(name, path, data) {
        return _super.call(this, name, path, AssetType_1.AssetType.Image, data) || this;
    }
    /**
     * register an image asset
     *
     * @param name the unique name of the image
     * @param path the path to the image
     */
    Image.register = function () {
        var images = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            images[_i] = arguments[_i];
        }
        // add the asset type
        images.forEach(function (image) { return image.assetType = AssetType_1.AssetType.Image; });
        // resiger all given images
        return (_a = Image.getAssetLoader()).registerAsset.apply(_a, [Image].concat(images));
        var _a;
    };
    return Image;
}(AbstractAsset_1.AbstractAsset));
exports.Image = Image;


/***/ }),
/* 8 */
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
__export(__webpack_require__(17));
__export(__webpack_require__(9));


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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var LogLevel_1 = __webpack_require__(17);
var Singleton_1 = __webpack_require__(10);
var RamStorage_1 = __webpack_require__(18);
/**
 * a log wrapper to allow log levels and a more complex
 * logging structure
 */
var Log = (function (_super) {
    __extends(Log, _super);
    function Log() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * the current log prefix
         */
        _this.prefix = "";
        // the current loglevel
        _this.logLevel = LogLevel_1.LogLevel.Debug;
        return _this;
    }
    /**
     * sets the log level for the application environment
     *
     * @param level the new log level
     */
    Log.prototype.setLogLevel = function (level) {
        this.logLevel = level;
    };
    /**
     * get the logger instance with prefixing for better
     * detection
     *
     * @param prefix the prefix string
     */
    Log.getLogger = function (prefix) {
        var instance = null;
        if (!RamStorage_1.RamStorage.has(this.generateStorageName(prefix))) {
            // get the constructor and store an instance of the class at the ram storage
            var constructor = this;
            var logger = new constructor();
            logger.prefix = prefix;
            RamStorage_1.RamStorage.add(this.generateStorageName(prefix), logger);
        }
        // get the instance
        return RamStorage_1.RamStorage.get(this.generateStorageName(prefix));
    };
    /**
     * override the generate storage name method to allow prefixing the
     * log instance
     *
     * @param prefix the desired prefix
     */
    Log.generateStorageName = function (prefix) {
        return "singleton.instance." + this.name + "." + prefix;
    };
    /**
     * logs the given data
     *
     * @param level the level to log in
     * @param optionalPrefix the optional prefix
     * @param params all params as vararg array
     */
    Log.prototype.log = function (level) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        // log if the log level is ok
        if (parseInt(level) >= parseInt(this.logLevel)
            &&
                this.logLevel !== LogLevel_1.LogLevel.None) {
            var prefix = "";
            if (this.prefix) {
                prefix = "[" + this.prefix + "]";
            }
            this.getLogFunctionByLevel(level).apply(void 0, ["[" + this.constructor.name + "." + LogLevel_1.LogLevel[level] + "]" + prefix].concat(params));
        }
    };
    /**
     * gets a callback function to log
     *
     * @param level the level to get the function from
     */
    Log.prototype.getLogFunctionByLevel = function (level) {
        var callback;
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
    Log.prototype.getLogLevel = function () {
        return this.logLevel;
    };
    /**
     * logs as debug level
     *
     * @param optionalPrefix if this is a constructor, the log will pre prefixed with its name. if not, the param will just printed
     * @param params all params as vararg array
     */
    Log.prototype.debug = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        this.log.apply(this, [LogLevel_1.LogLevel.Debug].concat(params));
    };
    /**
     * logs as info level
     *
     * @param optionalPrefix if this is a constructor, the log will pre prefixed with its name. if not, the param will just printed
     * @param params all params as vararg array
     */
    Log.prototype.info = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        this.log.apply(this, [LogLevel_1.LogLevel.Info].concat(params));
    };
    /**
     * logs as warning level
     *
     * @param optionalPrefix if this is a constructor, the log will pre prefixed with its name. if not, the param will just printed
     * @param params all params as vararg array
     */
    Log.prototype.warning = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        this.log.apply(this, [LogLevel_1.LogLevel.Warning].concat(params));
    };
    /**
     * logs as error level
     *
     * @param optionalPrefix if this is a constructor, the log will pre prefixed with its name. if not, the param will just printed
     * @param params all params as vararg array
     */
    Log.prototype.error = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        this.log.apply(this, [LogLevel_1.LogLevel.Error].concat(params));
    };
    return Log;
}(Singleton_1.Singleton));
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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var storage_1 = __webpack_require__(11);
var event_1 = __webpack_require__(25);
/**
 * a class to handle the singleton paradigmen
 */
var Singleton = (function (_super) {
    __extends(Singleton, _super);
    function Singleton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * generates a storage name for the instance storing
     *
     * @param className the class name
     */
    Singleton.generateStorageName = function () {
        return "singleton.instance." + this.name;
    };
    /**
     * get the singleton instance
     */
    Singleton.getInstance = function () {
        var instance = null;
        if (!storage_1.RamStorage.has(this.generateStorageName())) {
            // get the constructor and store an instance of the class at the ram storage
            var constructor = this;
            storage_1.RamStorage.add(this.generateStorageName(), new constructor());
        }
        // get the instance
        return storage_1.RamStorage.get(this.generateStorageName());
    };
    /**
     * bind the instance to the singleton storage
     *
     * @param instance the instance that should be bound
     */
    Singleton.bindInstance = function (instance) {
        // save the instance
        storage_1.RamStorage.add(this.generateStorageName(), instance);
    };
    return Singleton;
}(event_1.EventEmitter));
exports.Singleton = Singleton;


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
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(18));


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
__export(__webpack_require__(35));
__export(__webpack_require__(68));
__export(__webpack_require__(36));


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
var asset_1 = __webpack_require__(3);
var math_1 = __webpack_require__(0);
/**
 * a helper class to calculate the right offset and scale of objects
 * when a camera is unsed to display the game
 */
var CameraOffsetCalculator = (function () {
    function CameraOffsetCalculator() {
    }
    /**
     * calculates the entity offset and scaleability of its image by using one
     * camera object.
     * the return array can be directiy used to draw the image
     *
     * @return the array for ctx.drawImage() or boolean === false if the entity is not within the canvas
     */
    CameraOffsetCalculator.imageScaleDrawEntity = function (entity, camera) {
        // get the entity image scale from the camera
        var scale = camera.getScale();
        // get the original image as ImageBitmap
        var entityImage = CameraOffsetCalculator.assetStorage.getAsset(entity.getImage(), asset_1.AssetType.Image).getData();
        // calculate the scale
        var newWidth = entityImage.width * scale * entity.getScale();
        var newHeight = entityImage.width * scale * entity.getScale();
        // calculate position
        var newPosition = CameraOffsetCalculator.calculatePositionOffsetForCameraFollow(entity.getPosition(), camera);
        // check if visible
        if (!CameraOffsetCalculator.positionIsWithinCameraRange(newPosition, new math_1.Vector2D(newWidth, newHeight)))
            return false;
        return [
            entityImage,
            0,
            0,
            entityImage.width,
            entityImage.height,
            newPosition.x,
            newPosition.y,
            newWidth,
            newHeight
        ];
    };
    /**
     * a helper function to draw a tile with camera and offset calculations
     *
     * @param originalPosition the position of the tile where it should originally be drawn
     * @param tile the image to draw
     * @param camera the active camera
     *
     * @return the array for ctx.drawImage() or boolean === false if the entity is not within the canvas
     */
    CameraOffsetCalculator.imageScaleDrawTile = function (originalPosition, tile, camera) {
        // get the current camera scale
        var scale = camera.getScale();
        // get the tile image as BitmapImage
        var tileImage = tile.getData();
        // calculate the scale
        var newWidth = tileImage.width * scale;
        var newHeight = tileImage.height * scale;
        // calculate position
        // @todo: result is not 100% accurate... need further investigations
        var newPosition = CameraOffsetCalculator.calculatePositionOffsetForCameraFollow(new math_1.Vector2D(originalPosition.x * scale, originalPosition.y * scale), camera);
        // check if visible
        if (!CameraOffsetCalculator.positionIsWithinCameraRange(newPosition, new math_1.Vector2D(newWidth, newHeight)))
            return false;
        return [
            tileImage,
            0,
            0,
            tileImage.width,
            tileImage.height,
            newPosition.x,
            newPosition.y,
            newWidth,
            newHeight
        ];
    };
    /**
     * check if an object is visible by the camera
     *
     * @param position
     * @param objectDimension
     */
    CameraOffsetCalculator.positionIsWithinCameraRange = function (position, objectDimension) {
        // @todo: no check with window here, use the canvas object itself
        var canvasDim = CameraOffsetCalculator.getCanvasDimension();
        var canvasWidth = canvasDim.x;
        var canvasHeight = canvasDim.y;
        // add the two vectors
        var maxOffsetVector = position.substract(objectDimension);
        // check if visible
        return canvasWidth >= maxOffsetVector.x && canvasHeight >= maxOffsetVector.y;
    };
    /**
     * get the current canvas dimension
     */
    CameraOffsetCalculator.getCanvasDimension = function () {
        var canvas = document.querySelector('canvas');
        return new math_1.Vector2D(canvas.width, canvas.height);
    };
    /**
     * calculates the position offset for camera following
     */
    CameraOffsetCalculator.calculatePositionOffsetForCameraFollow = function (originalPosition, camera) {
        // first check if there is any following
        var entity = camera.getFollowingEntity();
        // if no following is active, return the original position
        if (!entity)
            return originalPosition;
        // calculate the offset. the entity should be in the center of the screen
        var canvasDim = CameraOffsetCalculator.getCanvasDimension();
        // calculate the center position for the entity and shift the other
        // vectors.
        var tmpVector = originalPosition.substract(entity.getPosition()).add(canvasDim.divide(new math_1.Vector2D(2, 2)));
        // now check if the camera has world bounds
        var worldBounds = camera.getWorldBounds();
        if (!worldBounds)
            return tmpVector;
        // check if the original vector is smaller than the shifted vector
        // this will bound the left and top world bounds
        if (originalPosition.x < tmpVector.x) {
            // reset the x axis to fix the camera
            tmpVector.x = originalPosition.x;
        }
        if (originalPosition.y < tmpVector.y) {
            // reset the y axis to fix the camera
            tmpVector.y = originalPosition.y;
        }
        // now the left and bottom bounds
        // we need the world dimension to check if the camera reaches
        // the end of the world in the visible area
        var entityPosition = entity.getPosition();
        var worldBoundCanvas = worldBounds.substract(canvasDim.half());
        if (entityPosition.x > worldBoundCanvas.x) {
            // get the original position and substract
            // the distance from world bounds and canvas dim
            tmpVector.x = originalPosition.x - (worldBounds.x - canvasDim.x);
        }
        if (entityPosition.y > worldBoundCanvas.y) {
            // get the original position and substract
            // the distance from world bounds and canvas dim
            tmpVector.y = originalPosition.y - (worldBounds.y - canvasDim.y);
        }
        // return the corrected position vector
        return tmpVector;
    };
    CameraOffsetCalculator.assetStorage = asset_1.AssetStorage.getInstance();
    return CameraOffsetCalculator;
}());
exports.CameraOffsetCalculator = CameraOffsetCalculator;


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
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(3));
__export(__webpack_require__(31));
__export(__webpack_require__(34));
__export(__webpack_require__(12));
__export(__webpack_require__(69));
__export(__webpack_require__(37));
__export(__webpack_require__(6));
__export(__webpack_require__(38));
__export(__webpack_require__(73));
__export(__webpack_require__(41));
__export(__webpack_require__(42));
__export(__webpack_require__(77));
__export(__webpack_require__(44));


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var AssetType_1 = __webpack_require__(1);
var AssetStorage_1 = __webpack_require__(16);
var network_1 = __webpack_require__(6);
var shared_1 = __webpack_require__(2);
/**
 * this class handles the loading of assets
 */
var AssetLoader = (function (_super) {
    __extends(AssetLoader, _super);
    function AssetLoader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * the holder of all asset loads
         */
        _this.assetLoaderPromiseStack = [];
        /**
         * the asset storage instance
         */
        _this.assetStorage = AssetStorage_1.AssetStorage.getInstance();
        /**
         * the logger
         */
        _this.logger = shared_1.Log.getLogger(AssetLoader.name);
        /**
         * a stack of all inline assets
         */
        _this.registeringAssets = [];
        return _this;
    }
    /**
     * register one or many assets to adress then later in the game
     * an asset name should allways be unique, event if the asset type
     * is different
     *
     * @param assetClass the class of the asset
     * @param assets the asset to register
     */
    AssetLoader.prototype.registerAsset = function (assetClass) {
        var assets = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            assets[_i - 1] = arguments[_i];
        }
        // add constructor
        assets.forEach(function (asset) { return asset.ctor = assetClass; });
        // register
        (_a = this.registeringAssets).push.apply(_a, assets);
        var _a;
        /*

        let outerPromise: Promise<Asset>[] = [];
        let resourceStack: Asset[] = [];

        // pre check the given assets
        this.checkInlineAssets(...assets);

        // iterate through all given assets
        assets.forEach(asset => {

            // check if the asset exists
            if (this.assetStorage.hasAsset(asset.name, asset.assetType)) {

                // log a warning that an asset has a double register
                this.logger.warning("The given asset with the name", asset.name, "is allready registered.");
            }

            // add a promise to await its loading
            outerPromise.push(new Promise<Asset>(resolve => {

                // construct an instance of the asset
                let instance = new assetClass();
                instance.setName(asset.name);

                // fill the instance
                this.loadAsset(instance, asset.path).then(resource => {

                    // store the asset
                    resourceStack.push(resource);

                    // resolve the promise
                    resolve(resource);
                });
            }));
        });

        // stack all loading promises to the asset loading process
        this.assetLoaderPromiseStack.push(...outerPromise);

        // return the promise
        return Promise.all(outerPromise).then(() => {

            // store all assets
            this.assetStorage.addAsset(...resourceStack);

            // resolve the promise
            return resourceStack;
        });*/
    };
    /**
     * check the given assets for errors
     *
     * @throw Error
     */
    AssetLoader.prototype.checkInlineAssets = function () {
        var assets = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            assets[_i] = arguments[_i];
        }
        var uniqueStack = {};
        assets.forEach(function (asset) {
            if (uniqueStack["" + asset.name + asset.assetType] === true) {
                // error!
                throw new Error("The asset " + asset.name + " and type " + AssetType_1.AssetType[asset.assetType] + " is at least two times in the given assets!");
            }
            // add the asset
            uniqueStack["" + asset.name + asset.assetType] = true;
        });
    };
    /**
     * loads one asset
     *
     * @param instance the instance to be loaded
     * @param path the path where to load the asset from
     */
    AssetLoader.prototype.loadAsset = function (instance, path) {
        return __awaiter(this, void 0, void 0, function () {
            var callback;
            return __generator(this, function (_a) {
                // check if the path is a local data uri
                if (path.indexOf('data:') === 0) {
                    return [2 /*return*/, new Promise(function (resolve) {
                            // set the blob for the asset
                            instance.setData(shared_1.Binary.dataUriToBlob(path));
                            resolve(instance);
                        })];
                }
                switch (instance.getType()) {
                    case AssetType_1.AssetType.Image:
                    case AssetType_1.AssetType.TileMap:
                        callback = this.loadImage.bind(this);
                        break;
                    default:
                        throw "Asset type " + AssetType_1.AssetType[instance.getType()] + " is not implemented";
                }
                // load the resource
                return [2 /*return*/, callback(path).then(function (resource) {
                        // set the resource data to the asset instance
                        instance.setData(resource);
                        return instance;
                    })];
            });
        });
    };
    /**
     * get all unresolved assets from the register process
     */
    AssetLoader.prototype.getUnresolvedPromised = function () {
        return this.assetLoaderPromiseStack;
    };
    /**
     * add promises to the asset loader. this can be used to delay the game
     * startup until all assets are loaded.
     *
     * @param promises the promises to add
     */
    AssetLoader.prototype.addAssetLoaderPromise = function () {
        var promises = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            promises[_i] = arguments[_i];
        }
        (_a = this.assetLoaderPromiseStack).push.apply(_a, promises);
        return promises;
        var _a;
    };
    /**
     * load an image
     *
     * @param path the path to the image
     */
    AssetLoader.prototype.loadImage = function (path) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // make an xhr call to the file
                return [2 /*return*/, network_1.Request.getBinary(path).then(function (image) {
                        // create the image bitmap for the blob
                        return shared_1.Binary.bufferToBlob(image);
                    })];
            });
        });
    };
    /**
     * load an audio file
     *
     * @param path the path to the audio file
     */
    AssetLoader.prototype.loadAudio = function (path) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    /**
     * load a json file and parse its body
     *
     * @param path the path to the json file
     */
    AssetLoader.prototype.loadJSON = function (path) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        shared_1.collectGargabe(shared_1.EventName.AfterPreload, []),
        __metadata("design:type", Array)
    ], AssetLoader.prototype, "registeringAssets", void 0);
    return AssetLoader;
}(shared_1.Singleton));
exports.AssetLoader = AssetLoader;


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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AssetType_1 = __webpack_require__(1);
var shared_1 = __webpack_require__(2);
/**
 * a class that handles asset storing and getting
 */
var AssetStorage = (function (_super) {
    __extends(AssetStorage, _super);
    function AssetStorage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // the logger
        _this.logger = shared_1.Log.getLogger(AssetStorage.name);
        return _this;
    }
    /**
     * get an asset from the storage
     *
     * @param name the name of the asset
     */
    AssetStorage.prototype.getAsset = function (name, type) {
        // check if the asset is available
        if (!shared_1.RamStorage.has(this.getAssetStorageName(name, type))) {
            // print error
            this.logger.error("Trying to load not existing asset", name, "with type", AssetType_1.AssetType[type]);
            return;
        }
        // ask the ram storage for the asset
        return shared_1.RamStorage.get(this.getAssetStorageName(name, type));
    };
    /**
     * check if the storage has the given asset
     *
     * @param name the name of the asset
     * @param type the type of the asset
     */
    AssetStorage.prototype.hasAsset = function (name, type) {
        // ask the ram storage
        return shared_1.RamStorage.has(this.getAssetStorageName(name, type));
    };
    /**
     * get the amount of currently registered assets of the given type
     *
     * @param type the asset type
     */
    AssetStorage.prototype.getAssetAmount = function (type) {
        return shared_1.RamStorage.amount(this.getAssetStorageName('', type));
    };
    /**
     * adds the given assets to the storage
     *
     * @param asset the assets to add
     */
    AssetStorage.prototype.addAsset = function () {
        var _this = this;
        var assets = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            assets[_i] = arguments[_i];
        }
        // iterate all assets
        assets.forEach(function (asset) {
            // if the asset is allready there, write a warning
            if (_this.hasAsset(asset.getName(), asset.getType())) {
                _this.logger.warning("Asset with name", asset.getName(), "and type", AssetType_1.AssetType[asset.getType()], "allready exists. The asser will be overwritten!");
            }
            // now add the asset
            shared_1.RamStorage.add(_this.getAssetStorageName(asset.getName(), asset.getType()), asset);
        });
    };
    /**
     * removes all assets from the storage
     */
    AssetStorage.prototype.clearStorage = function (type) {
        shared_1.RamStorage.clearPath(this.getAssetStorageName("", type));
    };
    /**
     * get the storage asset name
     *
     * @param name the name of the asset
     */
    AssetStorage.prototype.getAssetStorageName = function (name, type) {
        var path = "assetloader";
        if (type !== undefined)
            path += "." + type;
        if (name)
            path += "." + name;
        return path;
    };
    return AssetStorage;
}(shared_1.Singleton));
exports.AssetStorage = AssetStorage;


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
/* 18 */
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
var sizeof = __webpack_require__(19);
var math_1 = __webpack_require__(0);
var File_1 = __webpack_require__(24);
/**
 * holds objects in the ram of the operating unit
 */
var RamStorage = (function () {
    function RamStorage() {
    }
    /**
     * adds an elemement to the cache
     *
     * @param path the path to the object. dots can be used to structure
     * @param elemement the element to store
     */
    RamStorage.add = function (path, elemement) {
        RamStorage.cache[path] = elemement;
    };
    /**
     * removes an element from the cache
     *
     * @param path the path to the object. dots can be used to structure
     */
    RamStorage.remove = function (path) {
        delete RamStorage.cache[path];
    };
    /**
     * reset the complete storage!
     */
    RamStorage.clear = function () {
        this.cache = {};
    };
    /**
     * removes all entires in the given path
     *
     * @param path the path to clear
     * @return the amount of deleted objects
     */
    RamStorage.clearPath = function (path) {
        var counter = 0;
        Object.keys(RamStorage.cache).forEach(function (key) {
            // if the path is present
            if (key.indexOf(path) === 0) {
                // remove the part
                delete RamStorage.cache[key];
                counter++;
            }
        });
        return counter;
    };
    /**
     * get an element from the cache
     *
     * @param path the path to the object. dots can be used to structure
     */
    RamStorage.get = function (path) {
        return RamStorage.cache[path];
    };
    /**
     * checks if an object exists in the cache
     *
     * @param path the path to the object. dots can be used to structure
     */
    RamStorage.has = function (path) {
        return RamStorage.get(path) !== undefined;
    };
    /**
     * the path to one or many objects in the storage
     *
     * @param path the path to the object. dots can be used to structure
     */
    RamStorage.amount = function (path) {
        var counter = 0;
        Object.keys(RamStorage.cache).forEach(function (key) {
            // if the path is present, update counter
            if (key.indexOf(path) === 0)
                counter++;
        });
        return counter;
    };
    /**
     * calculates the used memory for the selected objects in the storage.
     *
     * @param path the path to the object. dots can be used to structure
     */
    RamStorage.getSize = function (path, type) {
        if (path === void 0) { path = ""; }
        if (type === void 0) { type = File_1.FileSizeType.Byte; }
        var byteCounter = 0;
        Object.keys(RamStorage.cache).forEach(function (key) {
            // if the path is present, update counter
            if (key.indexOf(path) === 0)
                byteCounter += sizeof(RamStorage.cache[key]);
        });
        var bytes = File_1.File.byteToSize(byteCounter, type);
        return math_1.Helper.roundToPrecision(bytes, 2);
    };
    // the private cache object
    RamStorage.cache = {};
    return RamStorage;
}());
exports.RamStorage = RamStorage;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright 2014 Andrei Karpushonak



var ECMA_SIZES  = __webpack_require__(50);
var Buffer = __webpack_require__(20).Buffer;

/**
 * Main module's entry point
 * Calculates Bytes for the provided parameter
 * @param object - handles object/string/boolean/buffer
 * @returns {*}
 */
function sizeof(object) {
    if (object !== null && typeof (object) === 'object') {
      if (Buffer.isBuffer(object)) {
        return object.length;
      }
      else {
        var bytes = 0;
        for (var key in object) {

          if(!Object.hasOwnProperty.call(object, key)) {
            continue;
          }

          bytes += sizeof(key);
          try {
            bytes += sizeof(object[key]);
          } catch (ex) {
            if(ex instanceof RangeError) {
              // circular reference detected, final result might be incorrect
              // let's be nice and not throw an exception
              bytes = 0;
            }
          }
        }
        return bytes;
      }
    } else if (typeof (object) === 'string') {
      return object.length * ECMA_SIZES.STRING;
    } else if (typeof (object) === 'boolean') {
      return ECMA_SIZES.BOOLEAN;
    } else if (typeof (object) === 'number') {
      return ECMA_SIZES.NUMBER;
    } else {
      return 0;
    }
}

module.exports = sizeof;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(51)
var ieee754 = __webpack_require__(52)
var isArray = __webpack_require__(53)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)))

/***/ }),
/* 21 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 22 */
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
var Helper = (function () {
    function Helper() {
    }
    /**
     * calculates a random degree
     */
    Helper.randomDegree = function () {
        return Math.floor(Math.random() * 359) + 1;
    };
    /**
     * transforms a degree number to radian number
     *
     * @param degree the given degree
     */
    Helper.degreeToRadian = function (degree) {
        return degree * Math.PI / 180;
    };
    /**
     * transforms a radian number to degree
     *
     * @param radian the radian value
     */
    Helper.radianToDegree = function (radian) {
        return radian * (180 / Math.PI);
    };
    /**
     * rounds to a given precision
     *
     * @param number the number to round
     * @param precision the precision
     */
    Helper.roundToPrecision = function (number, precision) {
        if (precision === void 0) { precision = 2; }
        return +number.toFixed(precision);
    };
    /**
     * converts mass to newtons based on a given force
     *
     * @param mass the mass of the object
     * @param force the gravity force
     */
    Helper.massToWeight = function (mass, force) {
        return mass * force;
    };
    return Helper;
}());
exports.Helper = Helper;


/***/ }),
/* 23 */
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
var Dimension = (function () {
    /**
     *
     * @param x the x coordinate
     * @param y the y coordinate
     */
    function Dimension(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
    }
    return Dimension;
}());
exports.Dimension = Dimension;


/***/ }),
/* 24 */
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
var File = (function () {
    function File() {
    }
    /**
     * get the file extension of a path
     *
     * @param path the path to the file
     */
    File.getFileExtension = function (path) {
        return path.split('.').pop();
    };
    /**
     * converts a byle number to a given superset
     *
     * @param bytes the base byte number
     * @param type the wanted type
     */
    File.byteToSize = function (bytes, type) {
        return bytes / Math.pow(1024, type);
    };
    return File;
}());
exports.File = File;


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
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(26));
__export(__webpack_require__(55));


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
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
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
function polyfill() {
    var modules = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        modules[_i] = arguments[_i];
    }
    modules.forEach(function (_module) {
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)))

/***/ }),
/* 28 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 28;

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
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(30));
__export(__webpack_require__(60));


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
var math_1 = __webpack_require__(0);
/**
 * the base class for all game entities
 */
var Entity = (function () {
    function Entity(position) {
        if (position === void 0) { position = new math_1.Vector2D(0, 0); }
        this.position = position;
    }
    /**
     * get the current position of the entity ( top left )
     */
    Entity.prototype.getPosition = function () {
        return this.position;
    };
    /**
     * set the entities new position
     *
     * @param position the new position
     */
    Entity.prototype.setPosition = function (position) {
        this.position = position;
    };
    return Entity;
}());
exports.Entity = Entity;


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
__export(__webpack_require__(65));
__export(__webpack_require__(33));


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
Object.defineProperty(exports, "__esModule", { value: true });
var shared_1 = __webpack_require__(2);
/**
 * the view for the player into the game
 */
var BaseCamera = (function () {
    /**
     *
     * @param scale the scale of the world. 1 means that a tile of 32x32 will renderes on 32x32 pixel. scane 5 means that a tile of 32x32 will be rendered as (32*5)x(32*5) pixel...
     * @param mode the camera mode
     */
    function BaseCamera(scale) {
        if (scale === void 0) { scale = 1; }
        this.scale = scale;
        /**
         * the entitiy which the camera should follow
         */
        this.followingEntity = null;
        /**
         * the current camera world bounds
         */
        this.worldBounds = null;
    }
    /**
     * get the camera mode
     */
    BaseCamera.prototype.getMode = function () {
        return this.mode;
    };
    /**
     * get the current world scale modificator
     */
    BaseCamera.prototype.getScale = function () {
        return this.scale;
    };
    /**
     * get the camera scale as vector
     */
    BaseCamera.prototype.getScaleVector = function () {
        return new shared_1.Vector2D(this.scale, this.scale);
    };
    /**
     * set the current world scale modificator
     */
    BaseCamera.prototype.setScale = function (scale) {
        this.scale = scale;
    };
    /**
     * follows one entity
     *
     * @param entity the entity to follow
     */
    BaseCamera.prototype.followEntity = function (entity) {
        this.followingEntity = entity;
    };
    /**
     * get the current entity the camera follows.
     * can be undefined is the camera is not following an entity
     */
    BaseCamera.prototype.getFollowingEntity = function () {
        return this.followingEntity;
    };
    /**
     * if the camera should be allways within the world, set the world
     * bounds to the current active world
     */
    BaseCamera.prototype.setWorldBounds = function (world) {
        var dimension = world.getWorldDimension();
        this.worldBounds = new shared_1.Vector2D(dimension.x, dimension.y);
    };
    /**
     * get the current world bounds.
     *
     * @warning return value can be null if no bounds are available!
     */
    BaseCamera.prototype.getWorldBounds = function () {
        var wb = this.worldBounds;
        if (!wb)
            return wb;
        // add the current camera scale
        return wb.multiply(new shared_1.Vector2D(this.getScale(), this.getScale()));
    };
    return BaseCamera;
}());
exports.BaseCamera = BaseCamera;


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
 * the currently supported camera modes
 */
var CameraMode;
(function (CameraMode) {
    CameraMode[CameraMode["Orthogonal"] = 0] = "Orthogonal";
})(CameraMode = exports.CameraMode || (exports.CameraMode = {}));


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
__export(__webpack_require__(66));


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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AnimationEntity_1 = __webpack_require__(36);
/**
 * the base class for all game entities
 */
var Entity = (function (_super) {
    __extends(Entity, _super);
    function Entity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Entity;
}(AnimationEntity_1.AnimationEntity));
exports.Entity = Entity;


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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var entity_1 = __webpack_require__(29);
var Animation_1 = __webpack_require__(67);
var log_1 = __webpack_require__(8);
/**
 * a base class for animations on entities
 */
var AnimationEntity = (function (_super) {
    __extends(AnimationEntity, _super);
    function AnimationEntity() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * all animations of the entity
         */
        _this.animationStack = [];
        /**
         * the visibility flag
         */
        _this.visible = true;
        /**
         * the current scale factor
         */
        _this.scaleFactor = 1;
        /**
         * the logger instance
         */
        _this.logger = log_1.Log.getLogger(AnimationEntity.name);
        return _this;
    }
    /**
     * add one or many animations to the entity
     */
    AnimationEntity.prototype.addAnimation = function () {
        var animations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            animations[_i] = arguments[_i];
        }
        (_a = this.animationStack).push.apply(_a, animations);
        var _a;
    };
    /**
     * play the given animation
     * @todo: possible observable return type to let the user know when an animation changes it's state
     */
    AnimationEntity.prototype.playAnimation = function (name, loop) {
        if (loop === void 0) { loop = false; }
        // if there is allready a running animation, stop it
        if (this.currentAnimation) {
            // if the animation name is the same, ignore the call
            if (this.currentAnimation.getName() === name)
                return;
            // stop and play the new animation
            this.currentAnimation.stopAndRestore();
        }
        // get the animation player
        var animation = this.animationStack.find(function (a) { return a.name === name; });
        // check if the animation is valid
        if (!animation) {
            this.logger.warning("Animation", name, "was not added to", this.constructor.name, ". Ignoring this animation.");
            return;
        }
        // play!
        this.currentAnimation = new Animation_1.Animation(animation, this, loop);
        this.currentAnimation.play();
    };
    /**
     * stops the currently playing animation
     */
    AnimationEntity.prototype.stopAnimation = function () {
        // currently playing an animation?
        if (!this.currentAnimation) {
            // log a warning
            this.logger.warning("trying to stop an animation on", this.constructor.name, "but there is no active animation");
            return;
        }
        // stops the animation
        this.currentAnimation.stopAndRestore();
        this.currentAnimation = null;
    };
    /**
     * check if any or a spefific animation is running
     *
     * @param name the name or nothing
     */
    AnimationEntity.prototype.isAnimationRunning = function (name) {
        return (!name && !!this.currentAnimation)
            ||
                (name && this.currentAnimation && this.currentAnimation.getName() === name);
    };
    /**
     * get the image asset that displays the current entity
     */
    AnimationEntity.prototype.getImage = function () {
        return this.currentTemplate;
    };
    /**
     * set the new image for this entity
     *
     * @param image the current image that should represent this entity during rendering
     */
    AnimationEntity.prototype.setImage = function (image) {
        this.currentTemplate = image;
    };
    /**
     * is the entity visible? if not, the renderer will not render this entity
     */
    AnimationEntity.prototype.isVisible = function () {
        return this.visible;
    };
    /**
     * sets the visibility of the entity
     */
    AnimationEntity.prototype.setVisible = function (visible) {
        this.visible = visible;
    };
    /**
     * get the current scale
     */
    AnimationEntity.prototype.getScale = function () {
        return this.scaleFactor;
    };
    /**
     * set the current local entity scale
     *
     * @param scale the new scale
     */
    AnimationEntity.prototype.setScale = function (scale) {
        this.scaleFactor = scale;
    };
    return AnimationEntity;
}(entity_1.Entity));
exports.AnimationEntity = AnimationEntity;


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
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(71));


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
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(72));


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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var helper_1 = __webpack_require__(5);
/**
 * the basic renderer class that all renderers should extend
 */
var BasicRenderer = (function (_super) {
    __extends(BasicRenderer, _super);
    function BasicRenderer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.entities = [];
        /**
         * holder of fps things
         */
        _this.fps = {
            fps: 0,
            lastUpdate: +new Date(),
            filter: 50
        };
        return _this;
    }
    /**
     * sets up the renderer
     *
     * @param clientConfig the current config
     */
    BasicRenderer.prototype.setup = function (clientConfig) {
    };
    /**
     * get all renderable entities
     */
    BasicRenderer.prototype.getRenderableEntities = function () {
        var renderableEntities = [];
        this.entities.forEach(function (entity) {
            // only visible entities and entities that have an image
            if (entity.isVisible() && entity.getImage())
                renderableEntities.push(entity);
        });
        // just return the currently visible entities
        return renderableEntities;
    };
    /**
     * print the current fps on the canvas
     */
    BasicRenderer.prototype.calculateFps = function () {
        // @see https://stackoverflow.com/questions/5078913/html5-canvas-performance-calculating-loops-frames-per-second
        var thisFrameFps = 1000 / ((this.fps.now = +new Date()) - this.fps.lastUpdate);
        // if there was an update
        if (this.fps.now != this.fps.lastUpdate) {
            // yes, calculate the new fps
            this.fps.fps += (thisFrameFps - this.fps.fps) / this.fps.filter;
            this.fps.lastUpdate = this.fps.now;
        }
    };
    /**
     * add an entity to the current game scene
     */
    BasicRenderer.prototype.addEntity = function (entity) {
        this.entities.push(entity);
    };
    return BasicRenderer;
}(helper_1.Singleton));
exports.BasicRenderer = BasicRenderer;


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
Object.defineProperty(exports, "__esModule", { value: true });
var asset_1 = __webpack_require__(3);
var CameraOffsetCalculator_1 = __webpack_require__(13);
var math_1 = __webpack_require__(0);
/**
 * the canvas world renderer implementation
 */
var CanvasWorldRenderer = (function () {
    function CanvasWorldRenderer(world, canvas, ctx, camera) {
        this.world = world;
        this.canvas = canvas;
        this.ctx = ctx;
        this.camera = camera;
    }
    /**
     * get the current world
     */
    CanvasWorldRenderer.prototype.getWorld = function () {
        return this.world;
    };
    /**
     * render the world!
     */
    CanvasWorldRenderer.prototype.render = function () {
        // firstly an inperformant rendering
        // @todo: save the rendered tilemap as image to just draw the image if the camera is not moving
        // get the filemap asset from the world object
        var tileMap = this.world.getTileMap();
        // loop through the different layers
        for (var layer = 0; layer < tileMap.layerCount; layer++) {
            // build up the map object
            var mapLines = tileMap.getMap()[layer].split(String.fromCharCode(13));
            var horizontalImageCount = mapLines.length - 1;
            var verticalImageCount = mapLines.length - 1;
            // get the asset loader instance
            var assetStorage = asset_1.AssetStorage.getInstance();
            var tileDimension = this.world.getTileMap().getDimension();
            // iterate through all tiles
            for (var v = 0; v < verticalImageCount; v++) {
                // now every horizontal image in the line v
                for (var h = 0; h < horizontalImageCount; h++) {
                    // get the tile number from the map
                    var tileNumber = parseInt(mapLines[v].split(',')[h]);
                    // ignore -1 tiles
                    if (tileNumber === -1)
                        continue;
                    // get the asset
                    // @todo: local asset caching meight be a performance improvement
                    var tileImage = assetStorage.getAsset(this.world.getTileMap().getName() + "[" + tileNumber + "]", asset_1.AssetType.Image);
                    // draw the tile
                    var renderable = CameraOffsetCalculator_1.CameraOffsetCalculator.imageScaleDrawTile(new math_1.Dimension(h * tileDimension.x, v * tileDimension.y), tileImage, this.camera);
                    // is not visible, ignore
                    if (!renderable)
                        continue;
                    (_a = this.ctx).drawImage.apply(_a, renderable);
                }
            }
        }
        var _a;
    };
    return CanvasWorldRenderer;
}());
exports.CanvasWorldRenderer = CanvasWorldRenderer;


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
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(75));


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
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(43));
__export(__webpack_require__(76));


/***/ }),
/* 43 */
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
 * a basic scene
 */
var Scene = (function () {
    function Scene() {
    }
    return Scene;
}());
exports.Scene = Scene;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var entity_1 = __webpack_require__(12);
var scene_1 = __webpack_require__(42);
var world_1 = __webpack_require__(41);
var camera_1 = __webpack_require__(31);
var shared_1 = __webpack_require__(2);
/**
 * a class that handles adding of entities, cameras, physics ...
 */
var Game = (function (_super) {
    __extends(Game, _super);
    function Game(renderer) {
        var _this = _super.call(this) || this;
        _this.renderer = renderer;
        /**
         * the stack of the entities that are currently in the game
         */
        _this.currentEntities = [];
        /**
         * holder of the registered worlds
         */
        _this.worldStack = {};
        /**
         * logger instance
         */
        _this.logger = shared_1.Log.getLogger(Game.name);
        // bind singleton
        Game.bindInstance(_this);
        return _this;
    }
    /**
     * add a thing to the game
     *
     * @param things the things to add
     */
    Game.prototype.add = function () {
        var _this = this;
        var things = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            things[_i] = arguments[_i];
        }
        // iterate through all things
        things.forEach(function (thing) {
            // check the type of the thing
            if (thing instanceof entity_1.Entity) {
                _this.addEntity(thing);
            }
            else if (thing instanceof scene_1.Scene) {
                _this.addScene(thing);
            }
            else if (thing instanceof world_1.World) {
                _this.addWorld(thing);
            }
            else if (thing instanceof camera_1.BaseCamera) {
                _this.addCamera(thing);
            }
        });
    };
    /**
     * add one entity to the game
     *
     * @param entity the entity to add
     */
    Game.prototype.addEntity = function (entity) {
        if (this.currentEntities.indexOf(entity) === -1) {
            // add the entity
            this.currentEntities.push(entity);
            this.renderer.addEntity(entity);
        }
    };
    /**
     * add a camera to the game
     *
     * @param camera the camera to add
     */
    Game.prototype.addCamera = function (camera) {
        // currently only one camera can be added.
        this.renderer.setCamera(camera);
        this.currentCamera = camera;
    };
    /**
     * add one world to the game
     *
     * @param world the world to add
     */
    Game.prototype.addWorld = function (world) {
        this.worldStack[world.getName()] = world;
    };
    /**
     * add one scene to the game
     *
     * @param scene the scene to add
     * @param autostart should the scene start?
     */
    Game.prototype.addScene = function (scene, autostart) {
        if (autostart === void 0) { autostart = false; }
        if (autostart) {
            // load the scene
            this.loadScene(scene);
        }
    };
    /**
     * get the currently visible scene
     */
    Game.prototype.getCurrentScene = function () {
        return this.currentScene;
    };
    /**
     * load a new scene
     *
     * @param scene the scene to load
     */
    Game.prototype.loadScene = function (scene) {
        return __awaiter(this, void 0, void 0, function () {
            var promise;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        promise = new Promise(function (r) { return r(); });
                        if (!this.currentScene) return [3 /*break*/, 2];
                        // wait for complete destruction
                        return [4 /*yield*/, this.currentScene.destroy(this)];
                    case 1:
                        // wait for complete destruction
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        // set the new scene
                        this.currentScene = scene;
                        this.currentScene.create(this);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * load a world and render it in the background
     *
     * @param world the world name to load
     */
    Game.prototype.loadWorld = function (world) {
        // does the world exists?
        if (!(world in this.worldStack)) {
            // print error
            this.logger.error("Trying to load", world, "but this world does not exists");
            return;
        }
        // set the world in the renderer
        this.renderer.setWorld(this.worldStack[world]);
    };
    /**
     * get all entities that are in the game
     */
    Game.prototype.getCurrentEntities = function () {
        return this.currentEntities;
    };
    /**
     * get the current visible camera
     */
    Game.prototype.getCurrentCamera = function () {
        return this.currentCamera;
    };
    return Game;
}(shared_1.Singleton));
exports.Game = Game;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = __webpack_require__(14);
var shared_1 = __webpack_require__(2);
var Link_1 = __webpack_require__(78);
var MyAwesomeRpgGame = (function (_super) {
    __extends(MyAwesomeRpgGame, _super);
    function MyAwesomeRpgGame() {
        return _super.call(this, {
            gameDimension: client_1.Viewport.getWindowDimension(),
            rederer: client_1.CanvasRenderer,
            printFps: true
        }) || this;
    }
    /**
     * preload function that allows to load sprites and do some heavy
     * stuff before the game actually starts
     */
    MyAwesomeRpgGame.prototype.preload = function () {
        client_1.Sprite.register({
            name: 'link_run',
            path: 'example/rpg/asset/image/link_run.png'
        });
        client_1.TileMap.register({
            name: 'world1',
            path: 'example/rpg/asset/image/world1.png',
            tileMapDimension: new shared_1.Dimension(32, 32),
            layerCount: 2
        });
    };
    /**
     * a function that is called if the preload phase is completed
     * you now have access to the registered assets
     */
    MyAwesomeRpgGame.prototype.loaded = function (game) {
        // create entities
        // link is a CollidableEntity so collision detection
        // is automaticly on
        this.link = new Link_1.Link();
        // create game objects
        var camera = new client_1.OrthogonalCamera(1.5);
        var world = new client_1.World(game, 'world1');
        // set tile collision
        world.setCollisionDetection.apply(world, [
            137, 138, 139, 160, 161, 163, 164, 165, 166, 167, 168,
            208, 209, 210
        ]);
        // add game objects
        game.add(this.link, world, camera);
        // load the world
        game.loadWorld('world1');
        // follow the player with the camera
        camera.followEntity(this.link);
        // let the camera stick to the world
        camera.setWorldBounds(world);
    };
    /**
     * update function handles the interaction with the player eg. the keybord
     * input and changing the players direction or speed.
     * this method is called during game loop BEFORE rendering!
     *
     * @warning dont do heavy stuff in here because this meight cause performance issues
     */
    MyAwesomeRpgGame.prototype.update = function (game, input) {
        // handle movement for link
        this.link.handleMovement(input.getArrowKeys());
    };
    __decorate([
        shared_1.logMethodCall,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [client_1.Game]),
        __metadata("design:returntype", void 0)
    ], MyAwesomeRpgGame.prototype, "loaded", null);
    return MyAwesomeRpgGame;
}(client_1.Client));
// start the game
new MyAwesomeRpgGame();


/***/ }),
/* 46 */
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
__export(__webpack_require__(47));


/***/ }),
/* 47 */
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
/* 48 */
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
__export(__webpack_require__(49));
__export(__webpack_require__(56));
__export(__webpack_require__(59));


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
var log_1 = __webpack_require__(8);
/**
 * a decorator for logging method calls to debug console
 *
 * @param target
 * @param propertyKey
 * @param descriptor
 */
function logMethodCall(target, key, descriptor) {
    // load the logger
    var logger = log_1.Log.getInstance();
    return {
        value: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            // log the call
            logger.debug("@logMethodCall", target.constructor.name + ":" + key + "()");
            // original method call
            return descriptor.value.apply(this, args);
        }
    };
}
exports.logMethodCall = logMethodCall;


/***/ }),
/* 50 */
/***/ (function(module, exports) {

/**
 * Byte sizes are taken from ECMAScript Language Specification
 * http://www.ecma-international.org/ecma-262/5.1/
 * http://bclary.com/2004/11/07/#a-4.3.16
 */

module.exports = {
    STRING: 2,
    BOOLEAN: 4,
    NUMBER: 8
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function placeHoldersCount (b64) {
  var len = b64.length
  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
}

function byteLength (b64) {
  // base64 is 4/3 + up to two characters of the original data
  return (b64.length * 3 / 4) - placeHoldersCount(b64)
}

function toByteArray (b64) {
  var i, l, tmp, placeHolders, arr
  var len = b64.length
  placeHolders = placeHoldersCount(b64)

  arr = new Arr((len * 3 / 4) - placeHolders)

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len

  var L = 0

  for (i = 0; i < l; i += 4) {
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
    arr[L++] = (tmp >> 16) & 0xFF
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  if (placeHolders === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[L++] = tmp & 0xFF
  } else if (placeHolders === 1) {
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var output = ''
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    output += lookup[tmp >> 2]
    output += lookup[(tmp << 4) & 0x3F]
    output += '=='
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
    output += lookup[tmp >> 10]
    output += lookup[(tmp >> 4) & 0x3F]
    output += lookup[(tmp << 2) & 0x3F]
    output += '='
  }

  parts.push(output)

  return parts.join('')
}


/***/ }),
/* 52 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 53 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Helper_1 = __webpack_require__(22);
var Dimension_1 = __webpack_require__(23);
/**
 * represents a 2D vector with x and y coordinates.
 */
var Vector2D = (function (_super) {
    __extends(Vector2D, _super);
    /**
     *
     * @param x the x coordinate
     * @param y the y coordinate
     */
    function Vector2D(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        return _super.call(this, x, y) || this;
    }
    /**
     * helper method to get vector instances
     *
     * @param x the x value
     * @param y the y value. if no y value is present, x and y will come from x
     */
    Vector2D.from = function (x, y) {
        return new Vector2D(x, y !== undefined ? y : x);
    };
    /**
     * adds another vector
     *
     * @param vector the other vector
     */
    Vector2D.prototype.add = function (vector) {
        return new Vector2D((this.x + vector.x), (this.y + vector.y));
    };
    /**
     * substract another vector
     *
     * @param vector the other vector
     */
    Vector2D.prototype.substract = function (vector) {
        return new Vector2D((this.x - vector.x), (this.y - vector.y));
    };
    /**
     * divide another vector
     *
     * @param vector the other vector
     */
    Vector2D.prototype.divide = function (vector) {
        return new Vector2D((this.x / vector.x), (this.y / vector.y));
    };
    /**
     * multiply two vectors
     *
     * @param vector the other vector
     */
    Vector2D.prototype.multiply = function (vector) {
        return new Vector2D((this.x * vector.x), (this.y * vector.y));
    };
    /**
     * rounds the vector to a given precision
     */
    Vector2D.prototype.round = function (precision) {
        if (precision === void 0) { precision = 2; }
        return new Vector2D((Helper_1.Helper.roundToPrecision(this.x, precision)), (Helper_1.Helper.roundToPrecision(this.y, precision)));
    };
    /**
     * calculates the distance of two vector points
     *
     * @param otherVector the other vector calculate to
     * @return the distance in pixel
     */
    Vector2D.prototype.distanceToVector = function (otherVector) {
        return Math.sqrt(Math.pow((this.x - otherVector.x), 2)
            +
                Math.pow((this.y - otherVector.y), 2));
    };
    /**
     * get the current vector divided by 2
     */
    Vector2D.prototype.half = function () {
        return this.divide(new Vector2D(2, 2));
    };
    /**
     * get the current vector multiply by 2
     */
    Vector2D.prototype.double = function () {
        return this.multiply(new Vector2D(2, 2));
    };
    /**
     * Math.abs() on x and y
     */
    Vector2D.prototype.abs = function () {
        return new Vector2D(Math.abs(this.x), Math.abs(this.y));
    };
    return Vector2D;
}(Dimension_1.Dimension));
exports.Vector2D = Vector2D;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
var storage_1 = __webpack_require__(11);
/**
 * a class that can emit events and can add listeners to events
 */
var EventEmitter = (function () {
    function EventEmitter() {
    }
    /**
     * listen on the given event
     *
     * @param event the desired event
     * @param listener the listener function
     */
    EventEmitter.prototype.on = function (event, listener) {
        // first get all listeners
        var listeners = storage_1.RamStorage.get(EventEmitter.name);
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
    };
    /**
     * emit an event
     *
     * @param event the event name
     * @param listenerBoundContext this context of the executed function. default: null
     * @param args optional parameter to pass to the listener function
     */
    EventEmitter.prototype.emit = function (event, listenerBoundContext) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        // get all listeners for this event
        var listeners = storage_1.RamStorage.get(EventEmitter.name);
        // is listeners defined?
        if (!listeners) {
            // cancel
            return this;
        }
        // get all functions for this event
        var eventFunctions = listeners[event];
        // are there any?
        if (Array.isArray(eventFunctions)) {
            // execute them
            eventFunctions.forEach(function (ev) {
                // take the context or no context
                if (!listenerBoundContext)
                    listenerBoundContext = {};
                // call it
                ev.apply(listenerBoundContext, args);
            });
        }
        // chaning context
        return this;
    };
    /**
     * get all registered listeners for the given event
     *
     * @param event the event to get the listeners for
     */
    EventEmitter.prototype.getListeners = function (event) {
        // get all listeners from the storage
        var listeners = storage_1.RamStorage.get(EventEmitter.name);
        // check if the event has listeners
        if (!listeners)
            return [];
        else if (!listeners[event])
            return [];
        // return the listeners
        return listeners[event];
    };
    return EventEmitter;
}());
exports.EventEmitter = EventEmitter;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
var helper_1 = __webpack_require__(5);
var Log_1 = __webpack_require__(9);
var objectSizeof = __webpack_require__(19);
/**
 * a property decorator to define a phase in wich the property
 * will be emptied
 *
 * @param event property will be cleared on the defined event
 * @param clearVal the new value that will be the property value
 */
function collectGargabe(event, cleanVal) {
    return function (target, propertyKey) {
        // the collector function
        var collectGarbage = function (targets) {
            // for size calc
            var size = 0;
            // iterate all targets
            targets.forEach(function (target) {
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
        var collector = helper_1.GarbageCollector.getInstance();
        collector.registerCleaning({
            event: event,
            ctor: target.constructor,
            cleanFunction: collectGarbage
        });
    };
}
exports.collectGargabe = collectGargabe;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {
/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
var polyfill_1 = __webpack_require__(27);
polyfill_1.polyfill({ require: "atob", fills: "atob" }, { require: "w3c-blob", fills: "Blob" });
/**
 * a helper class for binary content
 */
var Binary = (function () {
    function Binary() {
    }
    /**
     * converts a data uri to a blob
     *
     * @param dataUri the data uri from the object
     */
    Binary.dataUriToBlob = function (dataUri) {
        // @see https://stackoverflow.com/questions/12168909/blob-from-dataurl
        // convert base64 to raw binary data held in a string
        // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
        var byteString = atob(dataUri.split(',')[1]);
        // separate out the mime component
        var mimeString = dataUri.split(',')[0].split(':')[1].split(';')[0];
        // write the bytes of the string to an ArrayBuffer
        var ab = new ArrayBuffer(byteString.length);
        // create a view into the buffer
        var ia = new Uint8Array(ab);
        // set the bytes of the buffer to the correct values
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        // write the ArrayBuffer to a blob, and you're done
        var blob = new Blob([ab], { type: mimeString });
        return blob;
    };
    /**
     * converts a binary buffer into a string
     *
     * @param buffer the binary content
     */
    Binary.bufferToString = function (buffer) {
        return String.fromCharCode.apply(null, new Uint8Array(buffer));
    };
    /**
     * converts a buffer to a blob instance
     *
     * @param buffer the buffer
     */
    Binary.bufferToBlob = function (buffer) {
        if (buffer instanceof ArrayBuffer) {
            // cast to buffer
            buffer = Buffer.from(buffer);
        }
        return new Blob([new Uint8Array(buffer)]);
    };
    /**
     * converts a data uri to a buffer
     *
     * @param dataUri the given data uri
     */
    Binary.dataUriToBuffer = function (dataUri) {
        var binStr = atob(dataUri);
        // create a uint8array to store the characters
        var array = new Uint8Array(binStr.length);
        // add each char from the binary string
        for (var i = 0; i < binStr.length; i++) {
            array[i] = binStr.charCodeAt(i);
        }
        // finally
        return Buffer.from(array.buffer);
    };
    return Binary;
}());
exports.Binary = Binary;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20).Buffer))

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Singleton_1 = __webpack_require__(10);
var EventName_1 = __webpack_require__(26);
var Log_1 = __webpack_require__(9);
/**
 * an internal garbage collector class to clear some memory for the
 * user.
 */
var GarbageCollector = (function (_super) {
    __extends(GarbageCollector, _super);
    function GarbageCollector() {
        var _this = _super.call(this) || this;
        /**
         * holder of all registered targets for cleaning
         */
        _this.registeredTargets = {};
        /**
         * the stack of all registered garbage collection processes
         */
        _this.registerStack = [];
        /**
         * the logger instance
         */
        _this.logger = Log_1.Log.getLogger(GarbageCollector.name);
        // register all events
        Object.keys(EventName_1.EventName).forEach(function (event) {
            // register event and execute the cleaning
            var eventEnum = event;
            // register the event
            _this.on(eventEnum, _this.executeEvent.bind(_this, eventEnum));
        });
        // bind instance
        GarbageCollector.bindInstance(_this);
        return _this;
    }
    /**
     * register a property to be cleaned if a specific event occurs
     *
     * @param cleaning the nessesary objects to clean something
     */
    GarbageCollector.prototype.registerCleaning = function (cleaning) {
        this.registerStack.push(cleaning);
    };
    /**
     *
     * @param ctorName the constructor name of the class
     * @param target the target class as instance
     */
    GarbageCollector.prototype.addTarget = function (ctorName, target) {
        if (!Array.isArray(this.registeredTargets[ctorName])) {
            this.registeredTargets[ctorName] = [];
        }
        this.registeredTargets[ctorName].push(target);
    };
    /**
     * get all targets by its constructor function
     */
    GarbageCollector.prototype.getTargets = function (cleanTask) {
        // no targets available?
        if (!this.registeredTargets[cleanTask.ctor.name]) {
            // log a warning message
            this.logger.warning("Trying to clean at class", cleanTask.ctor.name, "but there aren't any registered targets.", "Please be sure you decorated the class with @enableGarbageCollection");
            // no targets found!
            return [];
        }
        // get all of them!
        return this.registeredTargets[cleanTask.ctor.name];
    };
    /**
     * execute the garbage collector at the given event
     */
    GarbageCollector.prototype.executeEvent = function (eventName) {
        var _this = this;
        this.registerStack
            .filter(function (clean) { return clean.event === eventName; })
            .forEach(function (clean) { return clean
            .cleanFunction.apply(clean
        // call clear function for every listener
        , [
            // get all targets to clear
            _this.getTargets(clean)].concat((clean.callbackArguments ? clean.callbackArguments : []))); });
    };
    return GarbageCollector;
}(Singleton_1.Singleton));
exports.GarbageCollector = GarbageCollector;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var helper_1 = __webpack_require__(5);
/**
 * a class decorator that enabled garbage collecting on this class.
 * this is required to use @collectGarbage as property decorator
 */
function enableGarbageCollection(ctor) {
    return (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.call(this) || this;
            // register the instance at the gc
            var gc = helper_1.GarbageCollector.getInstance();
            gc.addTarget(ctor.name, _this);
            return _this;
        }
        return class_1;
    }(ctor));
}
exports.enableGarbageCollection = enableGarbageCollection;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Entity_1 = __webpack_require__(30);
var math_1 = __webpack_require__(0);
/**
 * an entity that can collide with other collidable entities
 */
var CollidableEntity = (function (_super) {
    __extends(CollidableEntity, _super);
    function CollidableEntity(entityWidth, entityHeight, position) {
        if (position === void 0) { position = math_1.Vector2D.from(0, 0); }
        var _this = _super.call(this, position) || this;
        _this.entityWidth = entityWidth;
        _this.entityHeight = entityHeight;
        return _this;
    }
    /**
     * get the width of the entity
     */
    CollidableEntity.prototype.getWidth = function () {
        return this.entityWidth;
    };
    /**
     * get the height of the entity
     */
    CollidableEntity.prototype.getHeight = function () {
        return this.entityHeight;
    };
    /**
     * get the width of the entity
     */
    CollidableEntity.prototype.setWidth = function (width) {
        this.entityWidth = width;
    };
    /**
     * get the height of the entity
     */
    CollidableEntity.prototype.setHeight = function (height) {
        this.entityHeight = height;
    };
    return CollidableEntity;
}(Entity_1.Entity));
exports.CollidableEntity = CollidableEntity;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * a xhr network class to perform http requests
 */
var Request = (function () {
    function Request() {
    }
    /**
     * make an asynchronus get request to the given url
     * and returns a array buffer
     *
     * @param path the url
     */
    Request.getBinary = function (path) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        // create xhr instance and set properties
                        var xhr = new XMLHttpRequest();
                        xhr.responseType = 'arraybuffer';
                        xhr.open('GET', path);
                        // register finish event
                        xhr.onload = function () {
                            // resolve the promise with a
                            resolve(xhr.response);
                        };
                        // send the request
                        xhr.send();
                    })];
            });
        });
    };
    /**
     * make an asynchronus get request to the given url
     *
     * @param path the url
     */
    Request.get = function (path) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        // create xhr instance and set properties
                        var xhr = new XMLHttpRequest();
                        xhr.open('GET', path);
                        // register finish event
                        xhr.onload = function () {
                            resolve(xhr.response);
                        };
                        // send the request
                        xhr.send();
                    })];
            });
        });
    };
    return Request;
}());
exports.Request = Request;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var AssetType_1 = __webpack_require__(1);
var Image_1 = __webpack_require__(7);
var AbstractAsset_1 = __webpack_require__(4);
var SPRITE_MAP_DELIMITER = ',';
/**
 * an internal enum to index the correct array position for sprite maps
 */
var SpriteMapInformation;
(function (SpriteMapInformation) {
    SpriteMapInformation[SpriteMapInformation["Name"] = 0] = "Name";
    SpriteMapInformation[SpriteMapInformation["OffsetLeft"] = 1] = "OffsetLeft";
    SpriteMapInformation[SpriteMapInformation["OffsetTop"] = 2] = "OffsetTop";
    SpriteMapInformation[SpriteMapInformation["Width"] = 3] = "Width";
    SpriteMapInformation[SpriteMapInformation["Height"] = 4] = "Height";
})(SpriteMapInformation || (SpriteMapInformation = {}));
/**
 * the sprite class is able to handle multiple images build into
 * one big sprite graphic file
 */
var Sprite = (function (_super) {
    __extends(Sprite, _super);
    function Sprite(name, path, data, map) {
        var _this = _super.call(this, name, path, AssetType_1.AssetType.Image, data) || this;
        _this.map = map;
        return _this;
    }
    /**
     * register a sprite asset
     *
     * @param name the unique name of the image
     * @param path the path to the image
     */
    Sprite.register = function () {
        var sprites = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            sprites[_i] = arguments[_i];
        }
        // add asset type
        sprites.forEach(function (sprite) { return sprite.assetType = AssetType_1.AssetType.Image; });
        // register the asset
        return (_a = Sprite.getAssetLoader()).registerAsset.apply(_a, [Sprite].concat(sprites));
        var _a;
        /*

        // get the asset loader
        let assetLoader = Sprite.getAssetLoader();
        let mapLoaderPromise: Promise<any>[] = [];
        let spriteMap: string[] = [];

        // load sprite maps and add asset type to the inline asset
        sprites.forEach(sprite => {

            // set the asset type
            sprite.assetType = AssetType.Image;

            // get the sprite data file to split up the images
            mapLoaderPromise.push(
                Request.get(sprite.path + '.sprite')
                    .then(map => spriteMap.push(map))
            );
        });

        // if the maps are loaded, start the regist
        // previously the current map loader promises should be added to
        // the asset loadering promises to prevent game from beeing started to early
        return Promise.all(assetLoader.addAssetLoaderPromise(new Promise<Sprite[]>(resolve => {

            // now await the map loading
            return Promise.all(mapLoaderPromise).then(() => {

                // register the sprite as image
                return assetLoader.registerAsset(Sprite, ...sprites).then(resources => {

                    // cast the resources
                    let sprites = <Sprite[]>resources;
                    let spriteTransformPromise: Promise<any>[] = [];

                    // add the sprite maps
                    sprites.forEach((sprite, index) => {

                        // add the map
                        sprite.map = spriteMap[index];

                        // register all sub images
                        spriteTransformPromise.push(
                            Sprite.registerSpriteSubImages(sprite)
                        );
                    });

                    // await the sprite transform
                    return Promise.all(spriteTransformPromise).then(() => {

                        // return all generated image assets
                        resolve(sprites);
                    });
                });
            });
        }))); */
    };
    /**
     * extracts all sub images from a sprite image by its map
     * and register them as single image
     */
    Sprite.registerSpriteSubImages = function (sprite) {
        return __awaiter(this, void 0, void 0, function () {
            var mapLines, countImages, itemRegisterPromiseStack, canvas, ctx, i, info;
            return __generator(this, function (_a) {
                mapLines = sprite.map.split(String.fromCharCode(13));
                countImages = mapLines.length;
                itemRegisterPromiseStack = [];
                canvas = document.createElement('canvas');
                ctx = canvas.getContext('2d');
                // iterate through all sub images
                for (i = 0; i < countImages; i++) {
                    info = mapLines[i].split(',');
                    // set the canvas height and width
                    canvas.width = parseInt(info[SpriteMapInformation.Width]);
                    canvas.height = parseInt(info[SpriteMapInformation.Height]);
                    // draw the image on the canvas
                    ctx.drawImage(sprite.getData(), -parseInt(info[SpriteMapInformation.OffsetLeft]), -parseInt(info[SpriteMapInformation.OffsetTop]));
                    // get the image as data uri to register the new image
                    itemRegisterPromiseStack.push(Image_1.Image.register({
                        name: sprite.name + "[" + info[SpriteMapInformation.Name].trim() + "]",
                        path: canvas.toDataURL()
                    }));
                }
                // await the registration process
                return [2 /*return*/, Promise.all(itemRegisterPromiseStack)];
            });
        });
    };
    return Sprite;
}(AbstractAsset_1.AbstractAsset));
exports.Sprite = Sprite;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AssetType_1 = __webpack_require__(1);
var AbstractAsset_1 = __webpack_require__(4);
var Sound = (function (_super) {
    __extends(Sound, _super);
    function Sound(name, path, data) {
        return _super.call(this, name, path, AssetType_1.AssetType.Audio, data) || this;
    }
    /**
     * register an image asset
     *
     * @param name the unique name of the image
     * @param path the path to the image
     */
    Sound.register = function () {
        var sounds = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            sounds[_i] = arguments[_i];
        }
        // add the asset type
        sounds.forEach(function (sound) { return sound.assetType = AssetType_1.AssetType.Audio; });
        // resiger all given sounds
        (_a = Sound.getAssetLoader()).registerAsset.apply(_a, [Sound].concat(sounds));
        var _a;
    };
    return Sound;
}(AbstractAsset_1.AbstractAsset));
exports.Sound = Sound;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractAsset_1 = __webpack_require__(4);
var AssetType_1 = __webpack_require__(1);
var Image_1 = __webpack_require__(7);
var math_1 = __webpack_require__(0);
/**
 * an asset class to load a tilemap as world
 */
var TileMap = (function (_super) {
    __extends(TileMap, _super);
    function TileMap(name, path, data, map, dimension, layerCount) {
        var _this = _super.call(this, name, path, AssetType_1.AssetType.TileMap, data) || this;
        _this.map = map;
        _this.dimension = dimension;
        _this.layerCount = layerCount;
        return _this;
    }
    /**
     * get the map of the filemap object
     */
    TileMap.prototype.getMap = function () {
        return this.map;
    };
    /**
     * get the tile dimension object
     */
    TileMap.prototype.getDimension = function () {
        return this.dimension;
    };
    /**
     * get the amount of pixel for the complete world
     */
    TileMap.prototype.getWorldDimension = function () {
        //@todo: asuming that each layer has the same height and width
        var width = this.map[0].split(String.fromCharCode(13))[0].split(',').length;
        var height = this.map[0].split(String.fromCharCode(13)).length - 1;
        // multiply with the tile width and height
        return new math_1.Dimension(width * this.dimension.x, height * this.dimension.y);
    };
    /**
     * register a tilemap asset
     *
     * @param name the unique name of the image
     * @param path the path to the image
     */
    TileMap.register = function () {
        var tilemaps = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            tilemaps[_i] = arguments[_i];
        }
        // add asset type
        tilemaps.forEach(function (tilemap) { return tilemap.assetType = AssetType_1.AssetType.TileMap; });
        // register the asset
        return (_a = TileMap.getAssetLoader()).registerAsset.apply(_a, [TileMap].concat(tilemaps));
        var _a;
        /*
        // get the asset loader
        let assetLoader = TileMap.getAssetLoader();
        let mapLoaderPromise: Promise<any>[] = [];
        let tileMapStack: string[][] = [];

        // load sprite maps and add asset type to the inline asset
        tilemaps.forEach((tilemap, index) => {

            // get the layer amount
            tilemap.layerCount = tilemap.layerCount || 1;

            // set the asset type
            tilemap.assetType = AssetType.TileMap;

            // array init
            tileMapStack[index] = []

            // get the map csv data file to save the map information
            if (tilemap.layerCount === 1) {

                // array init
                tileMapStack[index][0] = "";

                // just one layer, include it
                mapLoaderPromise.push(
                    Request.get(tilemap.path + ".csv")
                        .then(map => tileMapStack[index][0] = map)

                );
            } else {

                // multiLayer
                for (let layer = 0; layer < tilemap.layerCount; layer++) {

                    // array init
                    tileMapStack[index][layer] = "";

                    // just one layer, include it
                    mapLoaderPromise.push(
                        Request.get(`${tilemap.path}.${layer}.csv`)
                            .then(map => tileMapStack[index][layer] = map)

                    );
                }
            }
        });

        // if the maps are loaded, start the regist
        // previously the current map loader promises should be added to
        // the asset loadering promises to prevent game from beeing started to early
        return Promise.all(assetLoader.addAssetLoaderPromise(new Promise<TileMap[]>(resolve => {

            // now await the map loading
            return Promise.all(mapLoaderPromise).then(() => {

                // register the sprite as image
                return assetLoader.registerAsset(TileMap, ...tilemaps).then(resources => {

                    // cast the resources
                    let tileMaps = <TileMap[]>resources;
                    let tileMapTransformPromise: Promise<any>[] = [];

                    // add the sprite maps
                    tileMaps.forEach((tilemap, index) => {

                        // add the map and the dimension
                        tilemap.map = tileMapStack[index];
                        tilemap.dimension = tilemaps[index].tileMapDimension;
                        tilemap.layerCount = tilemaps[index].layerCount;

                        // register all sub images
                        tileMapTransformPromise.push(
                            TileMap.registerTileMapSubImages(tilemap)
                        );
                    });

                    // await the sprite transform
                    return Promise.all(tileMapTransformPromise).then(() => {

                        // return all generated image assets
                        resolve(tileMaps);
                    });
                });
            });
        })));*/
    };
    /**
     * registers every tileMap image as image in the asset system
     *
     * @param tileMap the tilemap to register
     */
    TileMap.registerTileMapSubImages = function (tileMap) {
        return __awaiter(this, void 0, void 0, function () {
            var tileMapHeight, tileMapWidth, horizontalTileAmount, verticalTileAmount, canvas, ctx, itemRegisterPromiseStack, tileCounter, v, h;
            return __generator(this, function (_a) {
                tileMapHeight = tileMap.getData().height;
                tileMapWidth = tileMap.getData().width;
                horizontalTileAmount = tileMapWidth / tileMap.dimension.x;
                verticalTileAmount = tileMapHeight / tileMap.dimension.y;
                canvas = document.createElement('canvas');
                ctx = canvas.getContext('2d');
                itemRegisterPromiseStack = [];
                // height and width of each tile is fixed
                canvas.width = tileMap.dimension.x;
                canvas.height = tileMap.dimension.y;
                tileCounter = 0;
                // iterate through all tiles
                for (v = 0; v < verticalTileAmount; v++) {
                    // now every horizontal image in the line v
                    for (h = 0; h < horizontalTileAmount; h++) {
                        // clear to get a transparent background
                        ctx.clearRect(0, 0, tileMap.dimension.x, tileMap.dimension.y);
                        // draw the image at the canvas
                        ctx.drawImage(tileMap.getData(), -(h * tileMap.dimension.x), -(v * tileMap.dimension.y));
                        // get the image as data uri to register the new image
                        itemRegisterPromiseStack.push(Image_1.Image.register({
                            name: tileMap.name + "[" + tileCounter++ + "]",
                            path: canvas.toDataURL()
                        }));
                    }
                }
                // await the registration process
                return [2 /*return*/, Promise.all(itemRegisterPromiseStack)];
            });
        });
    };
    return TileMap;
}(AbstractAsset_1.AbstractAsset));
exports.TileMap = TileMap;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BaseCamera_1 = __webpack_require__(32);
var CameraMode_1 = __webpack_require__(33);
/**
 * an orthogonal camera for the view of the player
 */
var OrthogonalCamera = (function (_super) {
    __extends(OrthogonalCamera, _super);
    function OrthogonalCamera() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * the camera mode
         */
        _this.mode = CameraMode_1.CameraMode.Orthogonal;
        return _this;
    }
    return OrthogonalCamera;
}(BaseCamera_1.BaseCamera));
exports.OrthogonalCamera = OrthogonalCamera;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
var entity_1 = __webpack_require__(12);
var math_1 = __webpack_require__(0);
var CollisionDetection = (function () {
    function CollisionDetection() {
    }
    /**
     * checks if the given entities collides with the world
     *
     * @param entities the entities to test
     * @param world the current world
     */
    CollisionDetection.entitiesWithWorld = function (entities, world, camera) {
        // only take entities that can collide
        entities.filter(function (entity) { return entity instanceof entity_1.CollidableEntity; }).forEach(function (entity) {
            // calculate the entity position in every direction from its
            // current position
            var position = {};
            // get the position of the entity
            var entityPosition = entity.getPosition();
            var tileDimension = world.getTileMap().getDimension();
            var entityCollidesWithWorldBounds = entity.getWorldBoundCollision();
            // calculate the tile position on the map
            var tilePosition = entityPosition
                .divide(camera.getScaleVector())
                .divide(math_1.Vector2D.from(tileDimension.y, tileDimension.y))
                .round(0);
            // now the system should check if the entity can move
            position[entity_1.Direction.Left] = tilePosition.add(math_1.Vector2D.from(-1, 0));
            position[entity_1.Direction.Right] = tilePosition.add(math_1.Vector2D.from(1, 0));
            position[entity_1.Direction.Up] = tilePosition.add(math_1.Vector2D.from(0, -1));
            position[entity_1.Direction.Down] = tilePosition.add(math_1.Vector2D.from(0, 1));
            // iterate the directions
            Object.keys(position).forEach(function (key) {
                var direction = parseInt(key);
                var collision = false;
                // get the tile numbers that are at the players point
                var tileNumbers = world.getTileNumbersForPosition(position[direction]);
                // on a collidable tile?
                var collidableTileNumbers = world.getCollidableTileNumbers();
                // test collision
                tileNumbers.forEach(function (number) {
                    // does the number exist?
                    if (
                    // collidable tile
                    collidableTileNumbers.indexOf(number) !== -1
                        ||
                            // world bound
                            (entityCollidesWithWorldBounds && number === -2)) {
                        collision = true;
                    }
                });
                // set the direction
                entity.setDirectionBlocked(direction, collision);
            });
        });
    };
    return CollisionDetection;
}());
exports.CollisionDetection = CollisionDetection;


/***/ }),
/* 67 */
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
 * a class that handles entity animations for different states
 */
var Animation = (function () {
    function Animation(animation, entity, loop) {
        if (loop === void 0) { loop = false; }
        this.animation = animation;
        this.entity = entity;
        this.loop = loop;
        /**
         * holder of the current visible animation phase
         */
        this.currentAnimationPhase = 0;
    }
    /**
     * play one animation
     *
     * @todo: possible observable return type to let the user know when an animation changes it's state
     *
     * @param animation the animation to play
     */
    Animation.prototype.play = function () {
        // save the image of the entity
        this.previousEntityImage = this.entity.getImage();
        // display the animation
        this.nextAnimationFrame();
    };
    /**
     * get the name of the animation
     */
    Animation.prototype.getName = function () {
        return this.animation.name;
    };
    /**
     * displays the next animation frame
     */
    Animation.prototype.nextAnimationFrame = function () {
        // get the current state
        var currentState = this.animation.states[this.currentAnimationPhase];
        // set the image of the entity
        this.entity.setImage(this.animation.sprite + "[" + currentState.image + "]");
        // request the next state
        this.currentAnimationPhase += 1;
        // check if the animation should loop or if there is a next animation state
        if (this.loop || this.currentAnimationPhase < this.animation.states.length) {
            // checks if the state should overflow
            if (this.loop && this.currentAnimationPhase >= this.animation.states.length) {
                this.currentAnimationPhase = 0;
            }
            // wait for the next frame request
            if (currentState.duration !== -1)
                this.currentTimeoutHolder = window.setTimeout(this.nextAnimationFrame.bind(this), currentState.duration);
        }
        else {
            // animation is completed
            this.stopAndRestore();
        }
    };
    /**
     * stops the animation and restores the image of the entity
     */
    Animation.prototype.stopAndRestore = function () {
        // stop the animation
        window.clearTimeout(this.currentTimeoutHolder);
        // restores the image
        // currently no restore
        // @todo: should this be optional?
        //this.entity.setImage(this.previousEntityImage);
    };
    return Animation;
}());
exports.Animation = Animation;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Entity_1 = __webpack_require__(35);
/**
 * a helper type for eg. blocked directions
 */
var Direction;
(function (Direction) {
    Direction[Direction["Left"] = 0] = "Left";
    Direction[Direction["Right"] = 1] = "Right";
    Direction[Direction["Up"] = 2] = "Up";
    Direction[Direction["Down"] = 3] = "Down";
})(Direction = exports.Direction || (exports.Direction = {}));
;
/**
 * the client class for a collidable entity
 */
var CollidableEntity = (function (_super) {
    __extends(CollidableEntity, _super);
    function CollidableEntity(entityWidth, entityHeight, position) {
        var _this = _super.call(this, position) || this;
        _this.entityWidth = entityWidth;
        _this.entityHeight = entityHeight;
        /**
         * the current mass of the entity
         */
        _this.mass = 0;
        /**
         * the state of entity world bound collision
         */
        _this.collidesWithWorldBounds = true;
        /**
         * a state object for blocked directions
         */
        _this.directionBlocked = {
            Left: false,
            Right: false,
            Up: false,
            Down: false
        };
        return _this;
    }
    /**
     * get the width of the entity
     */
    CollidableEntity.prototype.getWidth = function () {
        return this.entityWidth;
    };
    /**
     * get the height of the entity
     */
    CollidableEntity.prototype.getHeight = function () {
        return this.entityHeight;
    };
    /**
     * get the current mass of the entity
     */
    CollidableEntity.prototype.getMass = function () {
        return this.mass;
    };
    /**
     * set a new mass to an entity
     */
    CollidableEntity.prototype.setMass = function (mass) {
        this.mass = mass;
    };
    /**
     * get the directions of the entity that are blocked
     */
    CollidableEntity.prototype.getBlockedDirections = function () {
        return this.directionBlocked;
    };
    /**
     * set the given direction as blocked or unblocked
     *
     * @param direction the direction
     * @param blocked blocked or not?
     */
    CollidableEntity.prototype.setDirectionBlocked = function (direction, blocked) {
        if (blocked === void 0) { blocked = true; }
        this.directionBlocked[Direction[direction]] = blocked;
    };
    /**
     * allow this entity to collide with the world bounds
     * and set the direction to blocked at the end of the world
     *
     * @param collision if the entity should collide with the world bound
     */
    CollidableEntity.prototype.setWorldBoundCollision = function (collision) {
        if (collision === void 0) { collision = true; }
        this.collidesWithWorldBounds = collision;
    };
    /**
     * get the current world bound collision state
     */
    CollidableEntity.prototype.getWorldBoundCollision = function () {
        return this.collidesWithWorldBounds;
    };
    return CollidableEntity;
}(Entity_1.Entity));
exports.CollidableEntity = CollidableEntity;


/***/ }),
/* 69 */
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
__export(__webpack_require__(70));


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
var math_1 = __webpack_require__(0);
/**
 * a class to handle the window viewport things like
 * getting the player's screen width and height
 */
var Viewport = (function () {
    function Viewport() {
    }
    /**
     * getting the current window dimension
     */
    Viewport.getWindowDimension = function () {
        return new math_1.Dimension(window.innerWidth, window.innerHeight);
    };
    return Viewport;
}());
exports.Viewport = Viewport;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var helper_1 = __webpack_require__(5);
/**
 * a basic class to get user input like keybord or mouse data
 */
var Input = (function (_super) {
    __extends(Input, _super);
    function Input() {
        var _this = _super.call(this) || this;
        /**
         * the currently pressed keys
         */
        _this.currentKeyInput = [];
        // add events
        _this.addEventListener();
        // bind singleton
        Input.bindInstance(_this);
        return _this;
    }
    /**
     * add window events to captcher user input
     */
    Input.prototype.addEventListener = function () {
        window.addEventListener('keydown', this.onKeydown.bind(this));
        window.addEventListener('keyup', this.onKeyUp.bind(this));
    };
    /**
     * reset all keys
     */
    Input.prototype.restoreKeys = function () {
        this.currentKeyInput = [];
    };
    /**
     * fires on user key input
     *
     * @param event the event
     */
    Input.prototype.onKeydown = function (event) {
        // add the key to the stack
        if (this.currentKeyInput.indexOf(event.keyCode) === -1)
            this.currentKeyInput.push(event.keyCode);
    };
    /**
     * fires if the user stop pressing one key
     *
     * @param event the event
     */
    Input.prototype.onKeyUp = function (event) {
        // removes the code from the key input
        this.currentKeyInput.splice(this.currentKeyInput.indexOf(event.keyCode), 1);
    };
    /**
     * get the current user input for arrow keys
     */
    Input.prototype.getArrowKeys = function () {
        return {
            down: this.currentKeyInput.indexOf(40) !== -1,
            up: this.currentKeyInput.indexOf(38) !== -1,
            left: this.currentKeyInput.indexOf(37) !== -1,
            right: this.currentKeyInput.indexOf(39) !== -1
        };
    };
    return Input;
}(helper_1.Singleton));
exports.Input = Input;


/***/ }),
/* 72 */
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
 * example gravity forces. units are m/sec^2
 */
var GravityForce;
(function (GravityForce) {
    GravityForce[GravityForce["Earth"] = 9.8] = "Earth";
    GravityForce[GravityForce["Moon"] = 1.67] = "Moon";
    GravityForce[GravityForce["None"] = 0] = "None";
})(GravityForce = exports.GravityForce || (exports.GravityForce = {}));


/***/ }),
/* 73 */
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
__export(__webpack_require__(74));
__export(__webpack_require__(39));
__export(__webpack_require__(40));
__export(__webpack_require__(13));


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var asset_1 = __webpack_require__(3);
var BasicRenderer_1 = __webpack_require__(39);
var CanvasWorldRenderer_1 = __webpack_require__(40);
var CameraOffsetCalculator_1 = __webpack_require__(13);
var FPS_OFFSET = 25;
/**
 * a game renderer based on the html canvas element
 */
var CanvasRenderer = (function (_super) {
    __extends(CanvasRenderer, _super);
    function CanvasRenderer() {
        var _this = _super.call(this) || this;
        /**
         * holder of the canvas world renderer
         */
        _this.worldRenderer = null;
        _this.currentCamera = null;
        // get the asset loader
        _this.assetLoader = asset_1.AssetLoader.getInstance();
        // bind the instance
        CanvasRenderer.bindInstance(_this);
        return _this;
    }
    /**
     * set up the game environment to a given dimension
     */
    CanvasRenderer.prototype.setup = function (clientConfig) {
        // call super function
        _super.prototype.setup.call(this, clientConfig);
        this.clientConfig = clientConfig;
        // save the dimension and create the canvas
        this.gameDimension = clientConfig.gameDimension;
        this.createCanvas();
        // get the 2d context
        this.ctx = this.canvas.getContext('2d');
    };
    /**
     * set the current camera as the users view into the game
     */
    CanvasRenderer.prototype.setCamera = function (camera) {
        this.currentCamera = camera;
    };
    /**
     * print the current fps on the screen
     *
     * @param fps the current fps
     */
    CanvasRenderer.prototype.printFps = function () {
        // print only if the user want this
        if (!this.clientConfig.printFps)
            return;
        // calculate the fps
        this.calculateFps();
        // write the fps number to the canvas context
        this.ctx.fillStyle = "white";
        this.ctx.font = "30px Arial";
        this.ctx.textAlign = "center";
        this.ctx.fillText(this.fps.fps.toFixed(0), FPS_OFFSET, FPS_OFFSET);
        // black stroke
        this.ctx.strokeStyle = "black";
        this.ctx.font = "361x Arial";
        this.ctx.textAlign = "center";
        this.ctx.strokeText(this.fps.fps.toFixed(0), FPS_OFFSET, FPS_OFFSET);
    };
    /**
     * creates the canvas element and append it to the given parentNode
     */
    CanvasRenderer.prototype.createCanvas = function () {
        // create the canvas
        this.canvas = document.createElement('canvas');
        document.body.appendChild(this.canvas);
        // apply the game dimension
        this.canvas.setAttribute('width', this.gameDimension.x + "px");
        this.canvas.setAttribute('height', this.gameDimension.y + "px");
        this.canvas.setAttribute('style', 'display:block;position:absolute;');
    };
    /**
     * pre rendering
     */
    CanvasRenderer.prototype.preRender = function () {
        // clear the current canvas
        this.ctx.clearRect(0, 0, this.gameDimension.x, this.gameDimension.y);
        // check if a world should be rendered
        if (this.worldRenderer) {
            // render it!
            this.worldRenderer.render();
        }
    };
    /**
     * the method where all the magic takes place. called in gameloop
     * to render all entities and other stuff
     */
    CanvasRenderer.prototype.render = function () {
        var _this = this;
        // get all entities that shoule be visible by the client
        // @todo: only render entitites that are visible by the camera
        var visibleEntities = this.getRenderableEntities();
        // render the entity at its center point
        visibleEntities.forEach(function (entity) {
            // get the draw array
            var renderable = CameraOffsetCalculator_1.CameraOffsetCalculator.imageScaleDrawEntity(entity, _this.currentCamera);
            // check if the element is visible
            if (!renderable)
                return;
            // calculate the new height and width and draw the entity
            (_a = _this.ctx).drawImage.apply(_a, renderable);
            var _a;
        });
        // print fps
        this.printFps();
        // fps update
        this.fps.lastUpdate = +new Date();
    };
    /**
     * set the current visible world as background
     */
    CanvasRenderer.prototype.setWorld = function (world) {
        // instantiate the world renderer
        this.worldRenderer = new CanvasWorldRenderer_1.CanvasWorldRenderer(world, this.canvas, this.ctx, this.currentCamera);
    };
    /**
     * get the current renderd world
     */
    CanvasRenderer.prototype.getWorld = function () {
        if (!this.worldRenderer)
            return;
        return this.worldRenderer.getWorld();
    };
    return CanvasRenderer;
}(BasicRenderer_1.BasicRenderer));
exports.CanvasRenderer = CanvasRenderer;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
var physic_1 = __webpack_require__(38);
var math_1 = __webpack_require__(0);
var asset_1 = __webpack_require__(3);
/**
 * a class to handle world spefific things
 */
var World = (function () {
    /**
     * @param game the game object
     * @param map the map to show
     * @param gravity the gravity that is present on this world
     */
    function World(game, map, gravity) {
        if (gravity === void 0) { gravity = new math_1.Vector2D(physic_1.GravityForce.None, physic_1.GravityForce.None); }
        this.gravity = gravity;
        /**
         * the tile numbers that collides with entities derived from {@link CollidableEntity}
         */
        this.collisionTiles = [];
        // get the tilemap from the asset loader
        this.map = asset_1.AssetStorage.getInstance()
            .getAsset(map, asset_1.AssetType.TileMap);
    }
    /**
     * get the world name aka tilemap name
     */
    World.prototype.getName = function () {
        return this.map.getName();
    };
    /**
     * get the tilemap of the world
     */
    World.prototype.getTileMap = function () {
        return this.map;
    };
    /**
     * get the dimension of the world using the tilemap information
     */
    World.prototype.getWorldDimension = function () {
        return this.map.getWorldDimension();
    };
    /**
     * set single tile numbers to collide with
     *
     * @param tileNumbers the tile numbers to collide with
     */
    World.prototype.setCollisionDetection = function () {
        var tileNumbers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            tileNumbers[_i] = arguments[_i];
        }
        (_a = this.collisionTiles).push.apply(_a, tileNumbers);
        var _a;
    };
    /**
     * set all tiles with this numbers to collide with
     *
     * @param from from tile number
     * @param to to tile number
     */
    World.prototype.setCollisionDetectionBetween = function (from, to) {
        // loop through the tile numbers
        for (var tile = from; tile <= to; tile++) {
            this.collisionTiles.push(tile);
        }
    };
    /**
     * get the collidable tileNumbers for this world
     */
    World.prototype.getCollidableTileNumbers = function () {
        return this.collisionTiles;
    };
    /**
     * get the tile numbers for a position on the map
     * if the position is not on the map, a -2 will be returned
     *
     * @param position the point on the tile map
     */
    World.prototype.getTileNumbersForPosition = function (position) {
        var numbers = [];
        // iterate through the map and each layer
        this.map.map.forEach(function (map, layer) {
            // the y axis
            var line = map.split(String.fromCharCode(13));
            if (line[position.y]) {
                // the x axis
                var tiles = line[position.y].split(',');
                if (tiles[position.x]) {
                    numbers.push(parseInt(tiles[position.x]));
                }
                else {
                    numbers.push(-2);
                }
            }
            else {
                numbers.push(-2);
            }
        });
        return numbers;
    };
    return World;
}());
exports.World = World;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Scene_1 = __webpack_require__(43);
/**
 * a basic loading screen scene
 */
var LoadingScreenScene = (function (_super) {
    __extends(LoadingScreenScene, _super);
    function LoadingScreenScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * creates the scene. the new scene starts only if the promise is resolved.
     *
     * @param game the current game holder instance
     */
    LoadingScreenScene.prototype.create = function (game) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log("scene create");
                return [2 /*return*/];
            });
        });
    };
    /**
     * the update function called during game loop for the currently
     * active scene
     *
     * @param game the current game holder instance
     */
    LoadingScreenScene.prototype.update = function (game) {
        // console.log("scene update");
    };
    /**
     * called if the scene changes. only if the promise is resolved, the
     * new scene will start
     *
     * @param game the current game holder instance
     */
    LoadingScreenScene.prototype.destroy = function (game) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log("scene destroy");
                return [2 /*return*/];
            });
        });
    };
    return LoadingScreenScene;
}(Scene_1.Scene));
exports.LoadingScreenScene = LoadingScreenScene;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var Game_1 = __webpack_require__(44);
var shared_1 = __webpack_require__(2);
var asset_1 = __webpack_require__(3);
var input_1 = __webpack_require__(37);
var collision_1 = __webpack_require__(34);
/**
 * the initiation class of the game client
 */
var Client = (function (_super) {
    __extends(Client, _super);
    function Client(clientConfig) {
        var _this = _super.call(this) || this;
        _this.clientConfig = clientConfig;
        /**
         * the logger instance
         */
        _this.logger = shared_1.Log.getLogger(Client.name);
        // print package and version info
        console.info("%c -= Qhun-Engine v1.0.0 =- [ http://engine.qhun.de ]", "background: green; font-color: white;");
        // step by step setup of the game
        _this.bindLoadEvent();
        // bind to singleton instance
        Client.bindInstance(_this);
        return _this;
    }
    /**
     * bind window events to let the start of the engine pause
     * until the javascript dom is ready
     */
    Client.prototype.bindLoadEvent = function () {
        // at window load, start the internal setup
        window.addEventListener('load', this.internalSetup.bind(this));
    };
    /**
     * internal setup phase
     */
    Client.prototype.internalSetup = function () {
        var _this = this;
        // get all promised from the preload phase and await them
        var assetLoader = asset_1.AssetLoader.getInstance();
        var assetStorage = asset_1.AssetStorage.getInstance();
        // setup renderer
        this.renderer = new this.clientConfig.rederer();
        this.renderer.setup(this.clientConfig);
        // some logging
        this.logger.info("Using", this.renderer.constructor.name, "as Renderer");
        // start the preload phase
        this.emit(shared_1.EventName.BeforePreload);
        this.preload();
        this.emit(shared_1.EventName.AfterPreload);
        // await the asset loading
        Promise.all(assetLoader.getUnresolvedPromised()).then(function () {
            // log the information about the registration process of assets
            _this.logger.info("Registered", assetStorage.getAssetAmount(asset_1.AssetType.Image), "Images");
            _this.logger.info("Registered", assetStorage.getAssetAmount(asset_1.AssetType.TileMap), "TileMaps");
            _this.logger.info("Registered", assetStorage.getAssetAmount(asset_1.AssetType.Audio), "Sounds");
            _this.logger.info("Registered", assetStorage.getAssetAmount(asset_1.AssetType.Json), "JSON Objects");
            // all assets loaded, continue startup
            _this.gameInstance = new Game_1.Game(_this.renderer);
            _this.inputInstance = new input_1.Input();
            // fire loaded event
            _this.emit(shared_1.EventName.BeforeLoaded);
            _this.loaded(_this.gameInstance);
            _this.emit(shared_1.EventName.AfterLoaded);
            _this.printMemoryFootprint();
            // init the game loop
            _this.gameLoop();
        });
    };
    /**
     * logs the current memory footprint to the console
     */
    Client.prototype.printMemoryFootprint = function () {
        var assets = shared_1.RamStorage.getSize("assetloader", shared_1.FileSizeType.Megabyte);
        var misc = shared_1.RamStorage.getSize("singleton", shared_1.FileSizeType.Megabyte);
        var overall = +(assets + misc).toFixed(2);
        // print current memory footprint
        this.logger.info("Memory footprint:", overall, "MB");
        this.logger.info("\t- Assets:\t", assets, "MB");
        this.logger.info("\t- Misc:\t\t", misc, "MB");
    };
    /**
     * the game loop where all things come together
     */
    Client.prototype.gameLoop = function () {
        // call update method
        this.update(this.gameInstance, this.inputInstance);
        // run collision detection
        collision_1.CollisionDetection.entitiesWithWorld(this.gameInstance.getCurrentEntities(), this.renderer.getWorld(), this.gameInstance.getCurrentCamera());
        // call the scene update
        var scene = this.gameInstance.getCurrentScene();
        if (scene)
            scene.update(this.gameInstance);
        // render the game
        if (typeof this.renderer.preRender === 'function')
            this.renderer.preRender();
        this.renderer.render();
        if (typeof this.renderer.postRender === 'function')
            this.renderer.postRender();
        // request the next game frame
        window.requestAnimationFrame(this.gameLoop.bind(this));
    };
    __decorate([
        shared_1.logMethodCall,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Client.prototype, "bindLoadEvent", null);
    __decorate([
        shared_1.logMethodCall,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Client.prototype, "internalSetup", null);
    return Client;
}(shared_1.Singleton));
exports.Client = Client;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = __webpack_require__(14);
var shared_1 = __webpack_require__(2);
/**
 * the player entity
 */
var Link = (function (_super) {
    __extends(Link, _super);
    function Link() {
        var _this = _super.call(this, 16, 24, new shared_1.Vector2D(10, 10)) || this;
        _this.scaleFactor = 2;
        // add the animations for the player
        _this.addAnimation({
            name: 'run_down',
            sprite: 'link_run',
            states: [
                { image: 'link_run_down_1', duration: 100 },
                { image: 'link_run_down_2', duration: 100 },
                { image: 'link_run_down_3', duration: 100 },
                { image: 'link_run_down_4', duration: 100 },
                { image: 'link_run_down_5', duration: 100 },
                { image: 'link_run_down_6', duration: 100 }
            ]
        }, {
            name: 'run_up',
            sprite: 'link_run',
            states: [
                { image: 'link_run_up_1', duration: 100 },
                { image: 'link_run_up_2', duration: 100 },
                { image: 'link_run_up_3', duration: 100 },
                { image: 'link_run_up_4', duration: 100 },
                { image: 'link_run_up_5', duration: 100 },
                { image: 'link_run_up_6', duration: 100 },
            ]
        }, {
            name: 'run_right',
            sprite: 'link_run',
            states: [
                { image: 'link_run_right_1', duration: 100 },
                { image: 'link_run_right_2', duration: 100 },
                { image: 'link_run_right_3', duration: 100 },
                { image: 'link_run_right_4', duration: 100 },
                { image: 'link_run_right_5', duration: 100 },
                { image: 'link_run_right_6', duration: 100 },
            ]
        }, {
            name: 'run_left',
            sprite: 'link_run',
            states: [
                { image: 'link_run_left_1', duration: 100 },
                { image: 'link_run_left_2', duration: 100 },
                { image: 'link_run_left_3', duration: 100 },
                { image: 'link_run_left_4', duration: 100 },
                { image: 'link_run_left_5', duration: 100 },
                { image: 'link_run_left_6', duration: 100 },
            ]
        });
        // play idle animation on constructing
        _this.playAnimation('run_down', true);
        return _this;
    }
    /**
     * get the entities collision type
     */
    Link.prototype.getCollisionType = function () {
        return shared_1.CollisionType.Circle;
    };
    /**
     * an event handler that will fire if another entity collided with this instance
     */
    Link.prototype.onCollision = function (otherEntity) {
        console.log(this, "collided with", otherEntity);
    };
    /**
     * handles the movement and animation for link
     *
     * @param arrowKeys the current pressed keys
     */
    Link.prototype.handleMovement = function (arrowKeys) {
        // get moveable directions
        var blockedDirections = this.getBlockedDirections();
        // move the player
        if (arrowKeys.left && !blockedDirections.Left) {
            this.setPosition(this.position.add(new shared_1.Vector2D(-5, 0)));
            this.playAnimation('run_left', true);
        }
        else if (arrowKeys.right && !blockedDirections.Right) {
            this.setPosition(this.position.add(new shared_1.Vector2D(5, 0)));
            this.playAnimation('run_right', true);
        }
        if (arrowKeys.down && !blockedDirections.Down) {
            this.setPosition(this.position.add(new shared_1.Vector2D(0, 5)));
            this.playAnimation('run_down', true);
        }
        else if (arrowKeys.up && !blockedDirections.Up) {
            this.setPosition(this.position.add(new shared_1.Vector2D(0, -5)));
            this.playAnimation('run_up', true);
        }
        // idle without animation
        if (!(arrowKeys.down || arrowKeys.left || arrowKeys.right || arrowKeys.up)
            &&
                this.isAnimationRunning()) {
            // stop animation
            this.stopAnimation();
        }
    };
    return Link;
}(client_1.CollidableEntity));
exports.Link = Link;


/***/ })
/******/ ]);
//# sourceMappingURL=example.js.map