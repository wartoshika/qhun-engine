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
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__log_LogLevel__ = __webpack_require__(8);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__log_Log__ = __webpack_require__(26);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__log_Log__["a"]; });
/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */




/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_Helper__ = __webpack_require__(10);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__math_Helper__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_Vector2D__ = __webpack_require__(36);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__math_Vector2D__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math_Dimension__ = __webpack_require__(11);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__math_Dimension__["a"]; });
/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */





/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssetType; });
/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
/**
 * an enumeration of loadable assets via AssetLoader
 */
var AssetType;
(function (AssetType) {
    AssetType[AssetType["Image"] = 0] = "Image";
    AssetType[AssetType["Audio"] = 1] = "Audio";
    AssetType[AssetType["Json"] = 2] = "Json";
})(AssetType || (AssetType = {}));


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helper_Singleton__ = __webpack_require__(27);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__helper_Singleton__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helper_Binary__ = __webpack_require__(37);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__helper_Binary__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helper_File__ = __webpack_require__(12);
/* unused harmony namespace reexport */
/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */





/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__storage_RamStorage__ = __webpack_require__(28);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__storage_RamStorage__["a"]; });
/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__asset_Image__ = __webpack_require__(19);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__asset_Sprite__ = __webpack_require__(46);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__asset_Sprite__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__asset_Sound__ = __webpack_require__(47);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__asset_AssetType__ = __webpack_require__(2);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__asset_AssetType__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__asset_AssetLoader__ = __webpack_require__(20);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_4__asset_AssetLoader__["a"]; });
/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */







/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AssetLoader__ = __webpack_require__(20);
/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

/**
 * a basic class for implementing the getter and setter function
 * of the required asset interface
 */
class AbstractAsset {
    constructor(name, path, type, data) {
        this.name = name;
        this.path = path;
        this.type = type;
        this.data = data;
    }
    /**
     * get the asset loader instance to load the desired asset
     */
    static getAssetLoader() {
        return AbstractAsset.assetLoader;
    }
    getName() {
        return this.name;
    }
    getPath() {
        return this.path;
    }
    getAssetType() {
        return this.type;
    }
    getData() {
        return this.data;
    }
    setName(name) {
        this.name = name;
    }
    setPath(path) {
        this.path = path;
    }
    setData(data) {
        this.data = data;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = AbstractAsset;

/**
 * holder of the asset loader
 */
AbstractAsset.assetLoader = __WEBPACK_IMPORTED_MODULE_0__AssetLoader__["a" /* AssetLoader */].getInstance();


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__decorator_logMethodCall__ = __webpack_require__(25);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__decorator_logMethodCall__["a"]; });
/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogLevel; });
/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
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
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_helper__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entity__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__camera__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scene__ = __webpack_require__(17);
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




/**
 * a class that handles adding of entities, cameras, physics ...
 */
class Game extends __WEBPACK_IMPORTED_MODULE_0__shared_helper__["b" /* Singleton */] {
    constructor(renderer) {
        super();
        this.renderer = renderer;
        // bind singleton
        Game.bindInstance(this);
    }
    /**
     * add a thing to the game
     *
     * @param things the things to add
     */
    add(...things) {
        // iterate through all things
        things.forEach(thing => {
            // check the type of the thing
            if (thing instanceof __WEBPACK_IMPORTED_MODULE_1__entity__["b" /* Entity */]) {
                this.addEntity(thing);
            }
            else if (thing instanceof __WEBPACK_IMPORTED_MODULE_2__camera__["a" /* Camera */]) {
                this.addCamera(thing);
            }
            else if (thing instanceof __WEBPACK_IMPORTED_MODULE_3__scene__["b" /* Scene */]) {
                this.addScene(thing);
            }
        });
    }
    /**
     * add one entity to the game
     *
     * @param entity the entity to add
     */
    addEntity(entity) {
        this.renderer.addEntity(entity);
    }
    /**
     * add one camera to the game
     *
     * @param camera the camera to add
     */
    addCamera(camera) {
        console.log("add camera", camera);
    }
    /**
     * add one scene to the game
     *
     * @param scene the scene to add
     * @param autostart should the scene start?
     */
    addScene(scene, autostart = false) {
        if (autostart) {
            // load the scene
            this.loadScene(scene);
        }
    }
    /**
     * get the currently visible scene
     */
    getCurrentScene() {
        return this.currentScene;
    }
    /**
     * load a new scene
     *
     * @param scene the scene to load
     */
    loadScene(scene) {
        return __awaiter(this, void 0, void 0, function* () {
            let promise = new Promise(r => r());
            // destruct the current scene
            if (this.currentScene) {
                // wait for complete destruction
                yield this.currentScene.destroy(this);
            }
            // set the new scene
            this.currentScene = scene;
            this.currentScene.create(this);
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Game;



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
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
/* harmony export (immutable) */ __webpack_exports__["a"] = Helper;



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
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
/* harmony export (immutable) */ __webpack_exports__["a"] = Dimension;



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FileSizeType; });
/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
var FileSizeType;
(function (FileSizeType) {
    FileSizeType[FileSizeType["Byte"] = 0] = "Byte";
    FileSizeType[FileSizeType["Kilobyte"] = 1] = "Kilobyte";
    FileSizeType[FileSizeType["Megabyte"] = 2] = "Megabyte";
    FileSizeType[FileSizeType["Gigabyte"] = 3] = "Gigabyte";
    FileSizeType[FileSizeType["Terrabyte"] = 4] = "Terrabyte";
})(FileSizeType || (FileSizeType = {}));
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
/* harmony export (immutable) */ __webpack_exports__["a"] = File;



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entity_Entity__ = __webpack_require__(14);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__entity_Entity__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entity_CollidableEntity__ = __webpack_require__(41);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__entity_CollidableEntity__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entity_AnimationEntity__ = __webpack_require__(15);
/* unused harmony namespace reexport */
/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */





/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AnimationEntity__ = __webpack_require__(15);
/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

/**
 * the base class for all game entities
 */
class Entity extends __WEBPACK_IMPORTED_MODULE_0__AnimationEntity__["a" /* AnimationEntity */] {
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Entity;



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_entity__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Animation__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_log__ = __webpack_require__(0);
/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */



/**
 * a base class for animations on entities
 */
class AnimationEntity extends __WEBPACK_IMPORTED_MODULE_0__shared_entity__["a" /* Entity */] {
    constructor() {
        super(...arguments);
        /**
         * all animations of the entity
         */
        this.animationStack = [];
        /**
         * the visibility flag
         */
        this.visible = true;
    }
    /**
     * add one or many animations to the entity
     */
    addAnimation(...animations) {
        this.animationStack.push(...animations);
    }
    /**
     * play the given animation
     * @todo: possible observable return type to let the user know when an animation changes it's state
     */
    playAnimation(name, loop = false) {
        // if there is allready a running animation, stop it
        if (this.currentAnimation)
            this.currentAnimation.stopAndRestore();
        // get the animation player
        let animation = this.animationStack.find(a => a.name === name);
        // check if the animation is valid
        if (!animation) {
            __WEBPACK_IMPORTED_MODULE_2__shared_log__["a" /* Log */].warning("Animation", name, "was not added to", this.constructor.name, ". Ignoring this animation.");
            return;
        }
        // play!
        this.currentAnimation = new __WEBPACK_IMPORTED_MODULE_1__Animation__["a" /* Animation */](animation, this, loop);
        this.currentAnimation.play();
    }
    /**
     * stops the currently playing animation
     */
    stopAnimation() {
        // currently playing an animation?
        if (!this.currentAnimation) {
            // log a warning
            __WEBPACK_IMPORTED_MODULE_2__shared_log__["a" /* Log */].warning("trying to stop an animation on", this.constructor.name, "but there is no active animation");
            return;
        }
        // stops the animation
        this.currentAnimation.stopAndRestore();
        this.currentAnimation = null;
    }
    /**
     * get the image asset that displays the current entity
     */
    getImage() {
        return this.currentTemplate;
    }
    /**
     * set the new image for this entity
     *
     * @param image the current image that should represent this entity during rendering
     */
    setImage(image) {
        this.currentTemplate = image;
    }
    /**
     * is the entity visible? if not, the renderer will not render this entity
     */
    isVisible() {
        return this.visible;
    }
    /**
     * sets the visibility of the entity
     */
    setVisible(visible) {
        this.visible = visible;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = AnimationEntity;



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(1);
/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

/**
 * the base class for all game entities
 */
class Entity {
    constructor(position = new __WEBPACK_IMPORTED_MODULE_0__math__["c" /* Vector2D */](0, 0)) {
        this.position = position;
    }
    /**
     * get the current position of the entity (center point)
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
/* harmony export (immutable) */ __webpack_exports__["a"] = Entity;



/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scene_Scene__ = __webpack_require__(18);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__scene_Scene__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scene_LoadingScreenScene__ = __webpack_require__(44);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__scene_LoadingScreenScene__["a"]; });
/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */




/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
/**
 * a basic scene
 */
class Scene {
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Scene;



/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AssetType__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AbstractAsset__ = __webpack_require__(6);
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


/**
 * the image class handles exactly one image
 */
class Image extends __WEBPACK_IMPORTED_MODULE_1__AbstractAsset__["a" /* AbstractAsset */] {
    constructor(name, path, data) {
        super(name, path, __WEBPACK_IMPORTED_MODULE_0__AssetType__["a" /* AssetType */].Image, data);
    }
    /**
     * register an image asset
     *
     * @param name the unique name of the image
     * @param path the path to the image
     */
    static register(...images) {
        return __awaiter(this, void 0, void 0, function* () {
            // add the asset type
            images.forEach(image => image.assetType = __WEBPACK_IMPORTED_MODULE_0__AssetType__["a" /* AssetType */].Image);
            // resiger all given images
            return Image.getAssetLoader().registerAsset(Image, ...images);
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Image;



/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AssetType__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_helper__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_storage__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_log__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__network__ = __webpack_require__(21);
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





/**
 * a class that can handle asset loading such as images and audio
 */
class AssetLoader extends __WEBPACK_IMPORTED_MODULE_1__shared_helper__["b" /* Singleton */] {
    constructor() {
        super(...arguments);
        /**
         * the holder of all asset loads
         */
        this.assetLoaderPromiseStack = [];
    }
    /**
     * register one or many assets to adress then later in the game
     * an asset name should allways be unique, event if the asset type
     * is different
     *
     * @param assetClass the class of the asset
     * @param assets the asset to register
     */
    registerAsset(assetClass, ...assets) {
        return __awaiter(this, void 0, void 0, function* () {
            let outerPromise = [];
            let resourceStack = [];
            // iterate through all given assets
            assets.forEach(asset => {
                // check if the asset exists
                if (__WEBPACK_IMPORTED_MODULE_2__shared_storage__["a" /* RamStorage */].has(this.getAssetStorageName(asset.name, asset.assetType))) {
                    // log a warning that an asset has a double register
                    __WEBPACK_IMPORTED_MODULE_3__shared_log__["a" /* Log */].warning("The given asset with the name", asset.name, "is allready registered.");
                }
                // add a promise to await its loading
                outerPromise.push(new Promise(resolve => {
                    // construct an instance of the asset
                    let instance = new assetClass();
                    instance.setName(asset.name);
                    instance.setPath(asset.path);
                    // fill the instance
                    this.loadAsset(instance).then(resource => {
                        // store the asset
                        __WEBPACK_IMPORTED_MODULE_2__shared_storage__["a" /* RamStorage */].add(this.getAssetStorageName(asset.name, asset.assetType), resource);
                        resourceStack.push(resource);
                        // resolve the promise
                        resolve(resource);
                    });
                }));
            });
            // stack all loading promises to the asset loading process
            this.assetLoaderPromiseStack.push(...outerPromise);
            // return the promise
            return Promise.all(outerPromise).then(() => { return resourceStack; });
        });
    }
    /**
     * loads one asset
     *
     * @param instance the instance to be loaded
     */
    loadAsset(instance) {
        return __awaiter(this, void 0, void 0, function* () {
            let callback;
            switch (instance.getAssetType()) {
                case __WEBPACK_IMPORTED_MODULE_0__AssetType__["a" /* AssetType */].Image:
                    callback = this.loadImage.bind(this);
                    break;
                default:
                    throw `Asset type ${instance.getAssetType()} is not implemented`;
            }
            // load the resource
            return callback(instance.getPath()).then(resource => {
                // set the resource data to the asset instance
                instance.setData(resource);
                return instance;
            });
        });
    }
    /**
     * get an asset from the storage
     *
     * @param name the name of the asset
     */
    getAsset(name, type) {
        // ask the ram storage for the asset
        return __WEBPACK_IMPORTED_MODULE_2__shared_storage__["a" /* RamStorage */].get(this.getAssetStorageName(name, type));
    }
    /**
     * get the amount of currently registered assets of the given type
     *
     * @param type the asset type
     */
    getAssetAmount(type) {
        return __WEBPACK_IMPORTED_MODULE_2__shared_storage__["a" /* RamStorage */].amount(this.getAssetStorageName('', type));
    }
    /**
     * get all unresolved assets from the register process
     */
    getUnresolvedPromised() {
        return this.assetLoaderPromiseStack;
    }
    /**
     * add promises to the asset loader. this can be used to delay the game
     * startup until all assets are loaded.
     *
     * @param promises the promises to add
     */
    addAssetLoaderPromise(...promises) {
        this.assetLoaderPromiseStack.push(...promises);
        return promises;
    }
    /**
     * get the storage asset name
     *
     * @param name the name of the asset
     */
    getAssetStorageName(name, type) {
        let path = `assetloader.${type}`;
        if (name)
            path += `.${name}`;
        return path;
    }
    /**
     * load an image
     *
     * @param path the path to the image
     */
    loadImage(path) {
        return __awaiter(this, void 0, void 0, function* () {
            // if the path is a data uri, return this instantly
            if (path.indexOf('data:image/') === 0) {
                return new Promise(resolve => {
                    resolve(createImageBitmap(__WEBPACK_IMPORTED_MODULE_1__shared_helper__["a" /* Binary */].dataUriToBlob(path)));
                });
            }
            // make an xhr call to the file
            return __WEBPACK_IMPORTED_MODULE_4__network__["a" /* Request */].getBinary(path).then((image) => {
                // create the image bitmap for the blob
                return createImageBitmap(__WEBPACK_IMPORTED_MODULE_1__shared_helper__["a" /* Binary */].dataUriToBlob(image));
            });
        });
    }
    /**
     * load an audio file
     *
     * @param path the path to the audio file
     */
    loadAudio(path) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    /**
     * load a json file and parse its body
     *
     * @param path the path to the json file
     */
    loadJSON(path) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    /**
     * creates an html element at the dom to load assets
     *
     * @param tagName the tagname of the new element
     */
    createDomElement(tagName) {
        // return the created element
        return document.createElement(tagName);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = AssetLoader;



/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__network_Request__ = __webpack_require__(45);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__network_Request__["a"]; });
/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */



/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_helper__ = __webpack_require__(3);
/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

/**
 * the basic renderer class that all renderers should extend
 */
class BasicRenderer extends __WEBPACK_IMPORTED_MODULE_0__shared_helper__["b" /* Singleton */] {
    constructor() {
        super(...arguments);
        this.entities = [];
        /**
         * holder of fps things
         */
        this.fps = {
            fps: 0,
            lastUpdate: +new Date(),
            filter: 50
        };
    }
    /**
     * sets up the renderer
     *
     * @param clientConfig the current config
     */
    setup(clientConfig) {
    }
    /**
     * get all renderable entities
     */
    getRenderableEntities() {
        let renderableEntities = [];
        this.entities.forEach(entity => {
            // only visible entities and entities that have an image
            if (entity.isVisible() && entity.getImage())
                renderableEntities.push(entity);
        });
        // just return the currently visible entities
        return renderableEntities;
    }
    /**
     * print the current fps on the canvas
     */
    calculateFps() {
        // @see https://stackoverflow.com/questions/5078913/html5-canvas-performance-calculating-loops-frames-per-second
        let thisFrameFps = 1000 / ((this.fps.now = +new Date()) - this.fps.lastUpdate);
        // if there was an update
        if (this.fps.now != this.fps.lastUpdate) {
            // yes, calculate the new fps
            this.fps.fps += (thisFrameFps - this.fps.fps) / this.fps.filter;
            this.fps.lastUpdate = this.fps.now;
        }
    }
    /**
     * add an entity to the current game scene
     */
    addEntity(entity) {
        this.entities.push(entity);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = BasicRenderer;



/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__client_Client__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__client_render__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__client_environment__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__client_Game__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__client_asset__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_decorator__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__entity_Player__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__client_scene__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_math__ = __webpack_require__(1);
/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









class MyAwesomeGame extends __WEBPACK_IMPORTED_MODULE_0__client_Client__["a" /* Client */] {
    constructor() {
        super({
            gameDimension: __WEBPACK_IMPORTED_MODULE_2__client_environment__["a" /* Viewport */].getWindowDimension(),
            rederer: __WEBPACK_IMPORTED_MODULE_1__client_render__["a" /* CanvasRenderer */],
            printFps: true
        });
    }
    /**
     * preload function that allows to load sprites and do some heavy
     * stuff before the game actually starts
     */
    preload() {
        __WEBPACK_IMPORTED_MODULE_4__client_asset__["c" /* Sprite */].register({
            name: 'player',
            path: 'asset/image/player.png'
        });
    }
    /**
     * a function that is called if the preload phase is completed
     * you now have access to the registered assets
     */
    loaded(game) {
        // add the player to the game
        this.player = new __WEBPACK_IMPORTED_MODULE_6__entity_Player__["a" /* Player */]();
        game.add(this.player);
        game.loadScene(new __WEBPACK_IMPORTED_MODULE_7__client_scene__["a" /* LoadingScreenScene */]());
        // play idle animation
        this.player.playAnimation('idle', true);
    }
    /**
     * update function handles the interaction with the player eg. the keybord
     * input and changing the players direction or speed.
     * this method is called during game loop BEFORE rendering!
     *
     * @warning dont do heavy stuff in here because this meight cause performance issues
     */
    update(game, input) {
        let keys = input.getArrowKeys();
        // move the player
        if (keys.down) {
            this.player.setPosition(this.player.getPosition().add(new __WEBPACK_IMPORTED_MODULE_8__shared_math__["c" /* Vector2D */](0, 5)));
        }
        else if (keys.up) {
            this.player.setPosition(this.player.getPosition().add(new __WEBPACK_IMPORTED_MODULE_8__shared_math__["c" /* Vector2D */](0, -5)));
        }
        if (keys.left) {
            this.player.setPosition(this.player.getPosition().add(new __WEBPACK_IMPORTED_MODULE_8__shared_math__["c" /* Vector2D */](-5, 0)));
        }
        else if (keys.right) {
            this.player.setPosition(this.player.getPosition().add(new __WEBPACK_IMPORTED_MODULE_8__shared_math__["c" /* Vector2D */](5, 0)));
        }
    }
}
__decorate([
    __WEBPACK_IMPORTED_MODULE_5__shared_decorator__["a" /* logMethodCall */],
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__client_Game__["a" /* Game */]]),
    __metadata("design:returntype", void 0)
], MyAwesomeGame.prototype, "loaded", null);
// start the game
new MyAwesomeGame();


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_decorator__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_log__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Game__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_storage__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__asset__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__input__ = __webpack_require__(48);
/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * the initiation class of the game client
 */
class Client {
    constructor(clientConfig) {
        this.clientConfig = clientConfig;
        // print package and version info
        console.info("%c -= Qhun-Engine v1.0.0 =- [ http://engine.qhun.de ]", "background: green; font-color: white;");
        // step by step setup of the game
        this.bindLoadEvent();
    }
    /**
     * bind window events to let the start of the engine pause
     * until the javascript dom is ready
     */
    bindLoadEvent() {
        // at window load, start the internal setup
        window.addEventListener('load', this.internalSetup.bind(this));
    }
    /**
     * internal setup phase
     */
    internalSetup() {
        // get all promised from the preload phase and await them
        let assetLoader = __WEBPACK_IMPORTED_MODULE_4__asset__["a" /* AssetLoader */].getInstance();
        // setup renderer
        this.renderer = new this.clientConfig.rederer();
        this.renderer.setup(this.clientConfig);
        // some logging
        __WEBPACK_IMPORTED_MODULE_1__shared_log__["a" /* Log */].info("Using", this.renderer.constructor.name, "as Renderer");
        // start the preload phase
        this.preload();
        // await the asset loading
        Promise.all(assetLoader.getUnresolvedPromised()).then(() => {
            // log the information about the registration process of assets
            __WEBPACK_IMPORTED_MODULE_1__shared_log__["a" /* Log */].info("Registered", assetLoader.getAssetAmount(__WEBPACK_IMPORTED_MODULE_4__asset__["b" /* AssetType */].Image), "Images");
            __WEBPACK_IMPORTED_MODULE_1__shared_log__["a" /* Log */].info("Registered", assetLoader.getAssetAmount(__WEBPACK_IMPORTED_MODULE_4__asset__["b" /* AssetType */].Audio), "Sounds");
            __WEBPACK_IMPORTED_MODULE_1__shared_log__["a" /* Log */].info("Registered", assetLoader.getAssetAmount(__WEBPACK_IMPORTED_MODULE_4__asset__["b" /* AssetType */].Json), "JSON Objects");
            // all assets loaded, continue startup
            this.gameInstance = new __WEBPACK_IMPORTED_MODULE_2__Game__["a" /* Game */](this.renderer);
            this.inputInstance = new __WEBPACK_IMPORTED_MODULE_5__input__["a" /* Input */]();
            // fire loaded event
            this.loaded(this.gameInstance);
            this.printMemoryFootprint();
            // init the game loop
            this.gameLoop();
        });
    }
    /**
     * logs the current memory footprint to the console
     */
    printMemoryFootprint() {
        let assets = __WEBPACK_IMPORTED_MODULE_3__shared_storage__["a" /* RamStorage */].getSize("assetloader");
        let misc = __WEBPACK_IMPORTED_MODULE_3__shared_storage__["a" /* RamStorage */].getSize("singleton");
        let overall = assets + misc;
        // print current memory footprint
        __WEBPACK_IMPORTED_MODULE_1__shared_log__["a" /* Log */].info("Memory footprint:", overall, "MB");
        __WEBPACK_IMPORTED_MODULE_1__shared_log__["a" /* Log */].info("\t- Assets:\t", assets, "MB");
        __WEBPACK_IMPORTED_MODULE_1__shared_log__["a" /* Log */].info("\t- Misc:\t\t", misc, "MB");
    }
    /**
     * the game loop where all things come together
     */
    gameLoop() {
        // call update method
        this.update(this.gameInstance, this.inputInstance);
        // call the scene update
        let scene = this.gameInstance.getCurrentScene();
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
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Client;

__decorate([
    __WEBPACK_IMPORTED_MODULE_0__shared_decorator__["a" /* logMethodCall */],
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Client.prototype, "bindLoadEvent", null);
__decorate([
    __WEBPACK_IMPORTED_MODULE_0__shared_decorator__["a" /* logMethodCall */],
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Client.prototype, "internalSetup", null);


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = logMethodCall;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__log__ = __webpack_require__(0);
/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

/**
 * a decorator for logging method calls to debug console
 *
 * @param target
 * @param propertyKey
 * @param descriptor
 */
function logMethodCall(target, key, descriptor) {
    return {
        value: function (...args) {
            // log the call
            __WEBPACK_IMPORTED_MODULE_0__log__["a" /* Log */].debug("@logMethodCall", `${target.constructor.name}:${key}()`);
            // original method call
            return descriptor.value.apply(this, args);
        }
    };
}


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__LogLevel__ = __webpack_require__(8);
/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

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
     * get the current log level
     */
    static getLogLevel() {
        return Log.logLevel;
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
Log.logLevel = __WEBPACK_IMPORTED_MODULE_0__LogLevel__["a" /* LogLevel */].Debug;


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__storage__ = __webpack_require__(4);
/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

/**
 * a class to handle the singleton paradigmen
 */
class Singleton {
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
        if (!__WEBPACK_IMPORTED_MODULE_0__storage__["a" /* RamStorage */].has(this.generateStorageName())) {
            // get the constructor and store an instance of the class at the ram storage
            let constructor = this;
            __WEBPACK_IMPORTED_MODULE_0__storage__["a" /* RamStorage */].add(this.generateStorageName(), new constructor());
        }
        // get the instance
        return __WEBPACK_IMPORTED_MODULE_0__storage__["a" /* RamStorage */].get(this.generateStorageName());
    }
    /**
     * bind the instance to the singleton storage
     *
     * @param instance the instance that should be bound
     */
    static bindInstance(instance) {
        // save the instance
        __WEBPACK_IMPORTED_MODULE_0__storage__["a" /* RamStorage */].add(this.generateStorageName(), instance);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Singleton;



/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helper_File__ = __webpack_require__(12);
/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
// the dependency to get the memory footprint ob stored objects
let sizeof = __webpack_require__(29);


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
     * unit is in MB or the given type
     *
     * @param path the path to the object. dots can be used to structure
     */
    static getSize(path = "", type = __WEBPACK_IMPORTED_MODULE_1__helper_File__["b" /* FileSizeType */].Byte) {
        let byteCounter = 0;
        Object.keys(RamStorage.cache).forEach(key => {
            // if the path is present, update counter
            if (key.indexOf(path) === 0)
                byteCounter += sizeof(RamStorage.cache[key]);
        });
        let mb = __WEBPACK_IMPORTED_MODULE_1__helper_File__["a" /* File */].byteToSize(byteCounter, type);
        return __WEBPACK_IMPORTED_MODULE_0__math__["b" /* Helper */].roundToPrecision(mb, 2);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = RamStorage;

// the private cache object
RamStorage.cache = {};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright 2014 Andrei Karpushonak



var ECMA_SIZES  = __webpack_require__(30);
var Buffer = __webpack_require__(31).Buffer;

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
/* 30 */
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
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(33)
var ieee754 = __webpack_require__(34)
var isArray = __webpack_require__(35)

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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(32)))

/***/ }),
/* 32 */
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
/* 33 */
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
/* 34 */
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
/* 35 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Helper__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Dimension__ = __webpack_require__(11);
/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */


/**
 * represents a 2D vector with x and y coordinates.
 */
class Vector2D extends __WEBPACK_IMPORTED_MODULE_1__Dimension__["a" /* Dimension */] {
    /**
     *
     * @param x the x coordinate
     * @param y the y coordinate
     */
    constructor(x = 0, y = 0) {
        super(x, y);
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
        return new Vector2D((__WEBPACK_IMPORTED_MODULE_0__Helper__["a" /* Helper */].roundToPrecision(this.x, precision)), (__WEBPACK_IMPORTED_MODULE_0__Helper__["a" /* Helper */].roundToPrecision(this.y, precision)));
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
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Vector2D;



/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
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
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Binary;



/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entity_Entity__ = __webpack_require__(16);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__entity_Entity__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entity_CollidableEntity__ = __webpack_require__(39);
/* unused harmony namespace reexport */
/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */




/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entity_Entity__ = __webpack_require__(16);
/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

/**
 * an entity that can collide with other collidable entities
 */
class CollidableEntity extends __WEBPACK_IMPORTED_MODULE_0__entity_Entity__["a" /* Entity */] {
    constructor(entityWidth, entityHeight, position) {
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
}
/* unused harmony export CollidableEntity */



/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
/**
 * a class that handles entity animations for different states
 */
class Animation {
    constructor(animation, entity, loop = false) {
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
    play() {
        // save the image of the entity
        this.previousEntityImage = this.entity.getImage();
        // display the animation
        this.nextAnimationFrame();
    }
    /**
     * displays the next animation frame
     */
    nextAnimationFrame() {
        // get the current state
        let currentState = this.animation.states[this.currentAnimationPhase];
        // set the image of the entity
        this.entity.setImage(`${this.animation.sprite}[${currentState.image}]`);
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
    }
    /**
     * stops the animation and restores the image of the entity
     */
    stopAndRestore() {
        // stop the animation
        window.clearTimeout(this.currentTimeoutHolder);
        // restores the image
        this.entity.setImage(this.previousEntityImage);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Animation;



/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Entity__ = __webpack_require__(14);
/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

/**
 * the client class for a collidable entity
 */
class CollidableEntity extends __WEBPACK_IMPORTED_MODULE_0__Entity__["a" /* Entity */] {
    constructor(entityWidth, entityHeight, position) {
        super(position);
        this.entityWidth = entityWidth;
        this.entityHeight = entityHeight;
        /**
         * the current mass of the entity
         */
        this.mass = 0;
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
     * get the current mass of the entity
     */
    getMass() {
        return this.mass;
    }
    /**
     * set a new mass to an entity
     */
    setMass(mass) {
        this.mass = mass;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CollidableEntity;



/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__camera_Camera__ = __webpack_require__(43);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__camera_Camera__["a"]; });
/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */



/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
class Camera {
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Camera;



/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scene_Scene__ = __webpack_require__(18);
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

/**
 * a basic loading screen scene
 */
class LoadingScreenScene extends __WEBPACK_IMPORTED_MODULE_0__scene_Scene__["a" /* Scene */] {
    /**
     * creates the scene. the new scene starts only if the promise is resolved.
     *
     * @param game the current game holder instance
     */
    create(game) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("scene create");
        });
    }
    /**
     * the update function called during game loop for the currently
     * active scene
     *
     * @param game the current game holder instance
     */
    update(game) {
        // console.log("scene update");
    }
    /**
     * called if the scene changes. only if the promise is resolved, the
     * new scene will start
     *
     * @param game the current game holder instance
     */
    destroy(game) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("scene destroy");
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = LoadingScreenScene;



/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

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
class Request {
    /**
     * make an asynchronus get request to the given url
     * and returns a blob instance
     *
     * @param path the url
     */
    static getBinary(path) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                // create xhr instance and set properties
                let xhr = new XMLHttpRequest();
                xhr.responseType = 'blob';
                xhr.open('GET', path);
                // register finish event
                xhr.onload = () => {
                    // create the blob reader
                    let reader = new FileReader();
                    reader.onloadend = () => {
                        resolve(reader.result);
                    };
                    reader.readAsDataURL(xhr.response);
                };
                // send the request
                xhr.send();
            });
        });
    }
    /**
     * make an asynchronus get request to the given url
     *
     * @param path the url
     */
    static get(path) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                // create xhr instance and set properties
                let xhr = new XMLHttpRequest();
                xhr.open('GET', path);
                // register finish event
                xhr.onload = () => {
                    resolve(xhr.response);
                };
                // send the request
                xhr.send();
            });
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Request;



/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AssetType__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Image__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AbstractAsset__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__network__ = __webpack_require__(21);
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




const SPRITE_MAP_DELIMITER = ',';
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
class Sprite extends __WEBPACK_IMPORTED_MODULE_2__AbstractAsset__["a" /* AbstractAsset */] {
    constructor(name, path, data, map) {
        super(name, path, __WEBPACK_IMPORTED_MODULE_0__AssetType__["a" /* AssetType */].Image, data);
        this.map = map;
    }
    /**
     * register a sprite asset
     *
     * @param name the unique name of the image
     * @param path the path to the image
     */
    static register(...sprites) {
        return __awaiter(this, void 0, void 0, function* () {
            // get the asset loader
            let assetLoader = Sprite.getAssetLoader();
            let mapLoaderPromise = [];
            let spriteMap = [];
            // load sprite maps and add asset type to the inline asset
            sprites.forEach(sprite => {
                // set the asset type
                sprite.assetType = __WEBPACK_IMPORTED_MODULE_0__AssetType__["a" /* AssetType */].Image;
                // get the sprite data file to split up the images
                mapLoaderPromise.push(__WEBPACK_IMPORTED_MODULE_3__network__["a" /* Request */].get(sprite.path + '.sprite')
                    .then(map => spriteMap.push(map)));
            });
            // if the maps are loaded, start the regist
            // previously the current map loader promises should be added to
            // the asset loadering promises to prevent game from beeing started to early
            return Promise.all(assetLoader.addAssetLoaderPromise(new Promise(resolve => {
                // now await the map loading
                return Promise.all(mapLoaderPromise).then(() => {
                    // register the sprite as image
                    return assetLoader.registerAsset(Sprite, ...sprites).then(resources => {
                        // cast the resources
                        let sprites = resources;
                        let spriteTransformPromise = [];
                        // add the sprite maps
                        sprites.forEach((sprite, index) => {
                            // add the map
                            sprite.map = spriteMap[index];
                            // register all sub images
                            spriteTransformPromise.push(Sprite.registerSpriteSubImages(sprite));
                        });
                        // await the sprite transform
                        return Promise.all(spriteTransformPromise).then(() => {
                            // return all generated image assets
                            resolve(sprites);
                        });
                    });
                });
            })));
        });
    }
    /**
     * extracts all sub images from a sprite image by its map
     * and register them as single image
     */
    static registerSpriteSubImages(sprite) {
        return __awaiter(this, void 0, void 0, function* () {
            // split the map into lines and count them
            let mapLines = sprite.map.split(String.fromCharCode(13));
            let countImages = mapLines.length;
            let itemRegisterPromiseStack = [];
            // create a canvas element for the picture extraction
            let canvas = document.createElement('canvas');
            let ctx = canvas.getContext('2d');
            // iterate through all sub images
            for (let i = 0; i < countImages; i++) {
                // get the information of image width and height
                let info = mapLines[i].split(',');
                // set the canvas height and width
                canvas.width = parseInt(info[SpriteMapInformation.Width]);
                canvas.height = parseInt(info[SpriteMapInformation.Height]);
                // draw the image on the canvas
                ctx.drawImage(sprite.getData(), -parseInt(info[SpriteMapInformation.OffsetLeft]), -parseInt(info[SpriteMapInformation.OffsetTop]));
                // get the image as data uri to register the new image
                itemRegisterPromiseStack.push(__WEBPACK_IMPORTED_MODULE_1__Image__["a" /* Image */].register({
                    name: `${sprite.name}[${info[SpriteMapInformation.Name].trim()}]`,
                    path: canvas.toDataURL()
                }));
            }
            // await the registration process
            return Promise.all(itemRegisterPromiseStack);
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Sprite;



/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AssetType__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AbstractAsset__ = __webpack_require__(6);
/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */


class Sound extends __WEBPACK_IMPORTED_MODULE_1__AbstractAsset__["a" /* AbstractAsset */] {
    constructor(name, path, data) {
        super(name, path, __WEBPACK_IMPORTED_MODULE_0__AssetType__["a" /* AssetType */].Audio, data);
    }
    /**
     * register an image asset
     *
     * @param name the unique name of the image
     * @param path the path to the image
     */
    static register(...sounds) {
        // add the asset type
        sounds.forEach(sound => sound.assetType = __WEBPACK_IMPORTED_MODULE_0__AssetType__["a" /* AssetType */].Audio);
        // resiger all given sounds
        Sound.getAssetLoader().registerAsset(Sound, ...sounds);
    }
}
/* unused harmony export Sound */



/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__input_Input__ = __webpack_require__(49);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__input_Input__["a"]; });
/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */



/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_helper__ = __webpack_require__(3);
/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

/**
 * a basic class to get user input like keybord or mouse data
 */
class Input extends __WEBPACK_IMPORTED_MODULE_0__shared_helper__["b" /* Singleton */] {
    constructor() {
        super();
        /**
         * the currently pressed keys
         */
        this.currentKeyInput = [];
        // add events
        this.addEventListener();
        // bind singleton
        Input.bindInstance(this);
    }
    /**
     * add window events to captcher user input
     */
    addEventListener() {
        window.addEventListener('keydown', this.onKeydown.bind(this));
        window.addEventListener('keyup', this.onKeyUp.bind(this));
    }
    /**
     * reset all keys
     */
    restoreKeys() {
        this.currentKeyInput = [];
    }
    /**
     * fires on user key input
     *
     * @param event the event
     */
    onKeydown(event) {
        // add the key to the stack
        if (this.currentKeyInput.indexOf(event.keyCode) === -1)
            this.currentKeyInput.push(event.keyCode);
    }
    /**
     * fires if the user stop pressing one key
     *
     * @param event the event
     */
    onKeyUp(event) {
        // removes the code from the key input
        this.currentKeyInput.splice(this.currentKeyInput.indexOf(event.keyCode), 1);
    }
    /**
     * get the current user input for arrow keys
     */
    getArrowKeys() {
        return {
            down: this.currentKeyInput.indexOf(40) !== -1,
            up: this.currentKeyInput.indexOf(38) !== -1,
            left: this.currentKeyInput.indexOf(37) !== -1,
            right: this.currentKeyInput.indexOf(39) !== -1
        };
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Input;



/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__render_CanvasRenderer__ = __webpack_require__(51);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__render_CanvasRenderer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__render_BasicRenderer__ = __webpack_require__(22);
/* unused harmony namespace reexport */
/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */




/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__asset__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__render_BasicRenderer__ = __webpack_require__(22);
/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */


const FPS_OFFSET = 25;
/**
 * a game renderer based on the html canvas element
 */
class CanvasRenderer extends __WEBPACK_IMPORTED_MODULE_1__render_BasicRenderer__["a" /* BasicRenderer */] {
    constructor() {
        super();
        // get the asset loader
        this.assetLoader = __WEBPACK_IMPORTED_MODULE_0__asset__["a" /* AssetLoader */].getInstance();
        // bind the instance
        CanvasRenderer.bindInstance(this);
    }
    /**
     * set up the game environment to a given dimension
     */
    setup(clientConfig) {
        // call super function
        super.setup(clientConfig);
        this.clientConfig = clientConfig;
        // save the dimension and create the canvas
        this.gameDimension = clientConfig.gameDimension;
        this.createCanvas();
        // get the 2d context
        this.ctx = this.canvas.getContext('2d');
    }
    /**
     * print the current fps on the screen
     *
     * @param fps the current fps
     */
    printFps() {
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
    }
    /**
     * creates the canvas element and append it to the given parentNode
     */
    createCanvas() {
        // create the canvas
        this.canvas = document.createElement('canvas');
        document.body.appendChild(this.canvas);
        // apply the game dimension
        this.canvas.setAttribute('width', `${this.gameDimension.x}px`);
        this.canvas.setAttribute('height', `${this.gameDimension.y}px`);
        this.canvas.setAttribute('style', 'display:block;position:absolute;');
    }
    /**
     * the method where all the magic takes place. called in gameloop
     * to render all entities and other stuff
     */
    render() {
        // clear the current canvas
        this.ctx.fillStyle = '#ffffff';
        this.ctx.fillRect(0, 0, this.gameDimension.x, this.gameDimension.y);
        // get all entities that shoule be visible by the client
        // @todo: only render entitites that are visible by the camera
        let visibleEntities = this.getRenderableEntities();
        // render the entity at its center point
        visibleEntities.forEach(entity => {
            // draw the entity
            this.ctx.drawImage(
            // get the image of the entity
            this.assetLoader.getAsset(entity.getImage(), __WEBPACK_IMPORTED_MODULE_0__asset__["b" /* AssetType */].Image).getData(), entity.getPosition().x, entity.getPosition().y);
        });
        // print fps
        this.printFps();
        // fps update
        this.fps.lastUpdate = +new Date();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CanvasRenderer;



/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environment_Viewport__ = __webpack_require__(53);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__environment_Viewport__["a"]; });
/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */



/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_math__ = __webpack_require__(1);
/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

/**
 * a class to handle the window viewport things like
 * getting the player's screen width and height
 */
class Viewport {
    /**
     * getting the current window dimension
     */
    static getWindowDimension() {
        return new __WEBPACK_IMPORTED_MODULE_0__shared_math__["a" /* Dimension */](window.innerWidth, window.innerHeight);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Viewport;



/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__client_entity__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_math__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_collision__ = __webpack_require__(55);
/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */



/**
 * the player entity
 */
class Player extends __WEBPACK_IMPORTED_MODULE_0__client_entity__["a" /* CollidableEntity */] {
    constructor() {
        super(20, 20, new __WEBPACK_IMPORTED_MODULE_1__shared_math__["c" /* Vector2D */](10, 10));
        // add the animations for the player
        this.addAnimation({
            name: 'idle',
            sprite: 'player',
            states: [
                { image: 'red_eyes_open', duration: 2500 },
                { image: 'red_eyes_closed', duration: 250 },
                { image: 'red_eyes_open', duration: 250 },
                { image: 'red_eyes_closed', duration: 250 }
            ]
        }, {
            name: 'jump',
            sprite: 'player',
            states: [
                { image: 'red_mouth_open', duration: -1 }
            ]
        });
    }
    /**
     * get the entities collision type
     */
    getCollisionType() {
        return __WEBPACK_IMPORTED_MODULE_2__shared_collision__["a" /* CollisionType */].Circle;
    }
    /**
     * an event handler that will fire if another entity collided with this instance
     */
    onCollision(otherEntity) {
        console.log(this, "collided with", otherEntity);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Player;



/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__collision_CollisionType__ = __webpack_require__(56);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__collision_CollisionType__["a"]; });
/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */



/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollisionType; });
/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
/**
 * an enumeration for all available collision types
 */
var CollisionType;
(function (CollisionType) {
    CollisionType[CollisionType["Circle"] = 0] = "Circle";
    CollisionType[CollisionType["Rectangle"] = 1] = "Rectangle";
    CollisionType[CollisionType["RotatedRectangle"] = 2] = "RotatedRectangle";
})(CollisionType || (CollisionType = {}));


/***/ })
/******/ ]);
//# sourceMappingURL=example.js.map