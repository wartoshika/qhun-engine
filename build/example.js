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
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssetType; });
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
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__log_LogLevel__ = __webpack_require__(7);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__log_Log__ = __webpack_require__(21);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__log_Log__["a"]; });




/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helper_Singleton__ = __webpack_require__(22);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__helper_Singleton__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helper_Binary__ = __webpack_require__(24);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__helper_Binary__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helper_File__ = __webpack_require__(42);
/* unused harmony namespace reexport */





/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_Helper__ = __webpack_require__(12);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_Vector2D__ = __webpack_require__(25);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__math_Vector2D__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math_Dimension__ = __webpack_require__(13);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__math_Dimension__["a"]; });





/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__asset_Image__ = __webpack_require__(30);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__asset_Image__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__asset_Sprite__ = __webpack_require__(33);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__asset_Sprite__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__asset_Sound__ = __webpack_require__(34);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__asset_AssetType__ = __webpack_require__(0);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__asset_AssetType__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__asset_AssetLoader__ = __webpack_require__(16);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_4__asset_AssetLoader__["a"]; });







/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_client_asset_AssetLoader__ = __webpack_require__(16);

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
AbstractAsset.assetLoader = __WEBPACK_IMPORTED_MODULE_0_client_asset_AssetLoader__["a" /* AssetLoader */].getInstance();


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__decorator_logMethodCall__ = __webpack_require__(20);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__decorator_logMethodCall__["a"]; });



/***/ }),
/* 7 */
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
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_shared_helper__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_shared_entity__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_client_camera__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_client_scene__ = __webpack_require__(14);
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
class Game extends __WEBPACK_IMPORTED_MODULE_0_shared_helper__["b" /* Singleton */] {
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
            if (thing instanceof __WEBPACK_IMPORTED_MODULE_1_shared_entity__["b" /* Entity */]) {
                this.addEntity(thing);
            }
            else if (thing instanceof __WEBPACK_IMPORTED_MODULE_2_client_camera__["a" /* Camera */]) {
                this.addCamera(thing);
            }
            else if (thing instanceof __WEBPACK_IMPORTED_MODULE_3_client_scene__["b" /* Scene */]) {
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
                promise = this.currentScene.destroy(this);
            }
            // await the destructing
            return promise.then(() => {
                // set the new scene
                this.currentScene = scene;
                this.currentScene.create(this);
            });
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Game;



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__storage_RamStorage__ = __webpack_require__(23);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__storage_RamStorage__["a"]; });



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entity_Entity__ = __webpack_require__(11);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__entity_Entity__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entity_CollidableEntity__ = __webpack_require__(26);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__entity_CollidableEntity__["a"]; });




/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_shared_math__ = __webpack_require__(3);

/**
 * the base class for all game entities
 */
class Entity {
    constructor(position = new __WEBPACK_IMPORTED_MODULE_0_shared_math__["b" /* Vector2D */](0, 0)) {
        this.position = position;
        /**
         * the visibility flag
         */
        this.visible = true;
    }
    /**
     * get the current position of the entity (center point)
     */
    getPosition() {
        return this.position;
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
/* harmony export (immutable) */ __webpack_exports__["a"] = Entity;



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Helper;



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scene_Scene__ = __webpack_require__(15);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__scene_Scene__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scene_LoadingScreenScene__ = __webpack_require__(29);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__scene_LoadingScreenScene__["a"]; });




/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * a basic scene
 */
class Scene {
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Scene;



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_client_asset_AssetType__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_shared_helper__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_shared_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_shared_log__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_client_network__ = __webpack_require__(31);
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
class AssetLoader extends __WEBPACK_IMPORTED_MODULE_1_shared_helper__["b" /* Singleton */] {
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
                if (__WEBPACK_IMPORTED_MODULE_2_shared_storage__["a" /* RamStorage */].has(this.getAssetStorageName(asset.name, asset.assetType))) {
                    // log a warning that an asset has a double register
                    __WEBPACK_IMPORTED_MODULE_3_shared_log__["a" /* Log */].warning("The given asset with the name", asset.name, "is allready registered.");
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
                        __WEBPACK_IMPORTED_MODULE_2_shared_storage__["a" /* RamStorage */].add(this.getAssetStorageName(asset.name, asset.assetType), resource);
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
                case __WEBPACK_IMPORTED_MODULE_0_client_asset_AssetType__["a" /* AssetType */].Image:
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
        return __WEBPACK_IMPORTED_MODULE_2_shared_storage__["a" /* RamStorage */].get(this.getAssetStorageName(name, type));
    }
    /**
     * get the amount of currently registered assets of the given type
     *
     * @param type the asset type
     */
    getAssetAmount(type) {
        return __WEBPACK_IMPORTED_MODULE_2_shared_storage__["a" /* RamStorage */].amount(this.getAssetStorageName('', type));
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
                    resolve(createImageBitmap(__WEBPACK_IMPORTED_MODULE_1_shared_helper__["a" /* Binary */].dataUriToBlob(path)));
                });
            }
            // make an xhr call to the file
            return __WEBPACK_IMPORTED_MODULE_4_client_network__["a" /* Request */].getBinary(path).then((image) => {
                // create the image bitmap for the blob
                return createImageBitmap(__WEBPACK_IMPORTED_MODULE_1_shared_helper__["a" /* Binary */].dataUriToBlob(image));
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
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_shared_helper__ = __webpack_require__(2);

/**
 * the basic renderer class that all renderers should extend
 */
class BasicRenderer extends __WEBPACK_IMPORTED_MODULE_0_shared_helper__["b" /* Singleton */] {
    constructor() {
        super(...arguments);
        this.entities = [];
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
     * add an entity to the current game scene
     */
    addEntity(entity) {
        this.entities.push(entity);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = BasicRenderer;



/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_client_Client__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_client_render__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_client_environment__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_client_Game__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_client_asset__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_shared_decorator__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_example_entity_Player__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_client_scene__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








class MyAwesomeGame extends __WEBPACK_IMPORTED_MODULE_0_client_Client__["a" /* Client */] {
    constructor() {
        super({
            gameDimension: __WEBPACK_IMPORTED_MODULE_2_client_environment__["a" /* Viewport */].getWindowDimension(),
            rederer: __WEBPACK_IMPORTED_MODULE_1_client_render__["a" /* CanvasRenderer */]
        });
    }
    /**
     * preload function that allows to load sprites and do some heavy
     * stuff before the game actually starts
     */
    preload() {
        __WEBPACK_IMPORTED_MODULE_4_client_asset__["c" /* Image */].register({
            name: 'SuperDuperImage',
            path: 'asset/image/test.png'
        });
        __WEBPACK_IMPORTED_MODULE_4_client_asset__["d" /* Sprite */].register({
            name: 'Sprite',
            path: 'asset/image/sprite.png'
        });
    }
    /**
     * a function that is called if the preload phase is completed
     * you now have access to the registered assets
     */
    loaded(game) {
        // add the player to the game
        this.player = new __WEBPACK_IMPORTED_MODULE_6_example_entity_Player__["a" /* Player */]();
        game.add(this.player);
        game.loadScene(new __WEBPACK_IMPORTED_MODULE_7_client_scene__["a" /* LoadingScreenScene */]());
    }
    /**
     * update function handles the interaction with the player eg. the keybord
     * input and changing the players direction or speed.
     * this method is called during game loop BEFORE rendering!
     *
     * @warning dont do heavy stuff in here because this meight cause performance issues
     */
    update() {
    }
}
__decorate([
    __WEBPACK_IMPORTED_MODULE_5_shared_decorator__["a" /* logMethodCall */],
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_client_Game__["a" /* Game */]]),
    __metadata("design:returntype", void 0)
], MyAwesomeGame.prototype, "loaded", null);
// start the game
new MyAwesomeGame();


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_shared_decorator__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_shared_log__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_client_Game__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_client_asset__ = __webpack_require__(4);
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
        console.info("%c -= Qhun-Engine v1.0.0 =- [http://engine.qhun.de]", "background: green; font-color: white;");
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
        let assetLoader = __WEBPACK_IMPORTED_MODULE_3_client_asset__["a" /* AssetLoader */].getInstance();
        // setup renderer
        this.renderer = new this.clientConfig.rederer();
        this.renderer.setup(this.clientConfig.gameDimension);
        // start the preload phase
        this.preload();
        // await the asset loading
        Promise.all(assetLoader.getUnresolvedPromised()).then(() => {
            // log the information about the registration process of assets
            __WEBPACK_IMPORTED_MODULE_1_shared_log__["a" /* Log */].info("Registered", assetLoader.getAssetAmount(__WEBPACK_IMPORTED_MODULE_3_client_asset__["b" /* AssetType */].Image), "Images");
            __WEBPACK_IMPORTED_MODULE_1_shared_log__["a" /* Log */].info("Registered", assetLoader.getAssetAmount(__WEBPACK_IMPORTED_MODULE_3_client_asset__["b" /* AssetType */].Audio), "Sounds");
            __WEBPACK_IMPORTED_MODULE_1_shared_log__["a" /* Log */].info("Registered", assetLoader.getAssetAmount(__WEBPACK_IMPORTED_MODULE_3_client_asset__["b" /* AssetType */].Json), "JSON Objects");
            // all assets loaded, continue startup
            this.gameInstance = new __WEBPACK_IMPORTED_MODULE_2_client_Game__["a" /* Game */](this.renderer);
            this.loaded(this.gameInstance);
            // init the game loop
            this.gameLoop();
        });
    }
    /**
     * the game loop where all things come together
     */
    gameLoop() {
        // call update method
        this.update();
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
    __WEBPACK_IMPORTED_MODULE_0_shared_decorator__["a" /* logMethodCall */],
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Client.prototype, "bindLoadEvent", null);
__decorate([
    __WEBPACK_IMPORTED_MODULE_0_shared_decorator__["a" /* logMethodCall */],
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Client.prototype, "internalSetup", null);


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = logMethodCall;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_shared_log__ = __webpack_require__(1);

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
            __WEBPACK_IMPORTED_MODULE_0_shared_log__["a" /* Log */].debug("@logMethodCall", `${target.constructor.name}:${key}()`);
            // original method call
            return descriptor.value.apply(this, args);
        }
    };
}


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__LogLevel__ = __webpack_require__(7);

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
Log.logLevel = __WEBPACK_IMPORTED_MODULE_0__LogLevel__["a" /* LogLevel */].Debug;


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_shared_storage__ = __webpack_require__(9);

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
        if (!__WEBPACK_IMPORTED_MODULE_0_shared_storage__["a" /* RamStorage */].has(this.generateStorageName())) {
            // get the constructor and store an instance of the class at the ram storage
            let constructor = this;
            __WEBPACK_IMPORTED_MODULE_0_shared_storage__["a" /* RamStorage */].add(this.generateStorageName(), new constructor());
        }
        // get the instance
        return __WEBPACK_IMPORTED_MODULE_0_shared_storage__["a" /* RamStorage */].get(this.generateStorageName());
    }
    /**
     * bind the instance to the singleton storage
     *
     * @param instance the instance that should be bound
     */
    static bindInstance(instance) {
        // save the instance
        __WEBPACK_IMPORTED_MODULE_0_shared_storage__["a" /* RamStorage */].add(this.generateStorageName(), instance);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Singleton;



/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
}
/* harmony export (immutable) */ __webpack_exports__["a"] = RamStorage;

// the private cache object
RamStorage.cache = {};
window.storage = RamStorage;


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_shared_math_Helper__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_shared_math_Dimension__ = __webpack_require__(13);


/**
 * represents a 2D vector with x and y coordinates.
 */
class Vector2D extends __WEBPACK_IMPORTED_MODULE_1_shared_math_Dimension__["a" /* Dimension */] {
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
        return new Vector2D(this.x + vector.x, this.y + vector.y);
    }
    /**
     * substract another vector
     *
     * @param vector the other vector
     */
    substract(vector) {
        return new Vector2D(this.x - vector.x, this.y - vector.y);
    }
    /**
     * divide another vector
     *
     * @param vector the other vector
     */
    divide(vector) {
        return new Vector2D(this.x / vector.x, this.y / vector.y);
    }
    /**
     * multiply two vectors
     *
     * @param vector the other vector
     */
    multiply(vector) {
        return new Vector2D(this.x * vector.x, this.y * vector.y);
    }
    /**
     * rounds the vector to a given precision
     */
    round(precision = 2) {
        return new Vector2D(__WEBPACK_IMPORTED_MODULE_0_shared_math_Helper__["a" /* Helper */].roundToPrecision(this.x, precision), __WEBPACK_IMPORTED_MODULE_0_shared_math_Helper__["a" /* Helper */].roundToPrecision(this.y, precision));
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
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_shared_entity_Entity__ = __webpack_require__(11);

/**
 * an entity that can collide with other collidable entities
 */
class CollidableEntity extends __WEBPACK_IMPORTED_MODULE_0_shared_entity_Entity__["a" /* Entity */] {
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
/* harmony export (immutable) */ __webpack_exports__["a"] = CollidableEntity;



/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__camera_Camera__ = __webpack_require__(28);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__camera_Camera__["a"]; });



/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Camera {
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Camera;



/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_client_scene_Scene__ = __webpack_require__(15);
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
class LoadingScreenScene extends __WEBPACK_IMPORTED_MODULE_0_client_scene_Scene__["a" /* Scene */] {
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
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_client_asset_AssetType__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_client_asset_AbstractAsset__ = __webpack_require__(5);
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
class Image extends __WEBPACK_IMPORTED_MODULE_1_client_asset_AbstractAsset__["a" /* AbstractAsset */] {
    constructor(name, path, data) {
        super(name, path, __WEBPACK_IMPORTED_MODULE_0_client_asset_AssetType__["a" /* AssetType */].Image, data);
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
            images.forEach(image => image.assetType = __WEBPACK_IMPORTED_MODULE_0_client_asset_AssetType__["a" /* AssetType */].Image);
            // resiger all given images
            return Image.getAssetLoader().registerAsset(Image, ...images);
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Image;



/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__network_Request__ = __webpack_require__(32);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__network_Request__["a"]; });



/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_client_asset_AssetType__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_client_asset_Image__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_client_asset_AbstractAsset__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_client_network__ = __webpack_require__(31);
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
class Sprite extends __WEBPACK_IMPORTED_MODULE_2_client_asset_AbstractAsset__["a" /* AbstractAsset */] {
    constructor(name, path, data, map) {
        super(name, path, __WEBPACK_IMPORTED_MODULE_0_client_asset_AssetType__["a" /* AssetType */].Image, data);
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
                sprite.assetType = __WEBPACK_IMPORTED_MODULE_0_client_asset_AssetType__["a" /* AssetType */].Image;
                // get the sprite data file to split up the images
                mapLoaderPromise.push(__WEBPACK_IMPORTED_MODULE_3_client_network__["a" /* Request */].get(sprite.path + '.sprite')
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
                itemRegisterPromiseStack.push(__WEBPACK_IMPORTED_MODULE_1_client_asset_Image__["a" /* Image */].register({
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
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_client_asset_AssetType__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_client_asset_AbstractAsset__ = __webpack_require__(5);


class Sound extends __WEBPACK_IMPORTED_MODULE_1_client_asset_AbstractAsset__["a" /* AbstractAsset */] {
    constructor(name, path, data) {
        super(name, path, __WEBPACK_IMPORTED_MODULE_0_client_asset_AssetType__["a" /* AssetType */].Audio, data);
    }
    /**
     * register an image asset
     *
     * @param name the unique name of the image
     * @param path the path to the image
     */
    static register(...sounds) {
        // add the asset type
        sounds.forEach(sound => sound.assetType = __WEBPACK_IMPORTED_MODULE_0_client_asset_AssetType__["a" /* AssetType */].Audio);
        // resiger all given sounds
        Sound.getAssetLoader().registerAsset(Sound, ...sounds);
    }
}
/* unused harmony export Sound */



/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__render_CanvasRenderer__ = __webpack_require__(36);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__render_CanvasRenderer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__render_BasicRenderer__ = __webpack_require__(17);
/* unused harmony namespace reexport */




/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_shared_log__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_client_asset__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_client_render_BasicRenderer__ = __webpack_require__(17);



/**
 * a game renderer based on the html canvas element
 */
class CanvasRenderer extends __WEBPACK_IMPORTED_MODULE_2_client_render_BasicRenderer__["a" /* BasicRenderer */] {
    constructor() {
        super();
        // some logging
        __WEBPACK_IMPORTED_MODULE_0_shared_log__["a" /* Log */].info("Using", this, "as Renderer");
        // get the asset loader
        this.assetLoader = __WEBPACK_IMPORTED_MODULE_1_client_asset__["a" /* AssetLoader */].getInstance();
        // bind the instance
        CanvasRenderer.bindInstance(this);
    }
    /**
     * set up the game environment to a given dimension
     */
    setup(gameDimension) {
        // save the dimension and create the canvas
        this.gameDimension = gameDimension;
        this.createCanvas();
        // get the 2d context
        this.ctx = this.canvas.getContext('2d');
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
            this.assetLoader.getAsset(entity.getImage(), __WEBPACK_IMPORTED_MODULE_1_client_asset__["b" /* AssetType */].Image).getData(), entity.getPosition().x, entity.getPosition().y);
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CanvasRenderer;



/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environment_Viewport__ = __webpack_require__(38);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__environment_Viewport__["a"]; });



/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_shared_math__ = __webpack_require__(3);

/**
 * a class to handle the window viewport things like
 * getting the player's screen width and height
 */
class Viewport {
    /**
     * getting the current window dimension
     */
    static getWindowDimension() {
        return new __WEBPACK_IMPORTED_MODULE_0_shared_math__["a" /* Dimension */](window.innerWidth, window.innerHeight);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Viewport;



/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_shared_entity__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_shared_math__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_shared_collision__ = __webpack_require__(40);



/**
 * the player entity
 */
class Player extends __WEBPACK_IMPORTED_MODULE_0_shared_entity__["a" /* CollidableEntity */] {
    constructor() {
        super(20, 20, new __WEBPACK_IMPORTED_MODULE_1_shared_math__["b" /* Vector2D */](10, 10));
    }
    /**
     * get the entities collision type
     */
    getCollisionType() {
        return __WEBPACK_IMPORTED_MODULE_2_shared_collision__["a" /* CollisionType */].Circle;
    }
    /**
     * an event handler that will fire if another entity collided with this instance
     */
    onCollision(otherEntity) {
        console.log(this, "collided with", otherEntity);
    }
    getImage() {
        return "Sprite";
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Player;



/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__collision_CollisionType__ = __webpack_require__(41);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__collision_CollisionType__["a"]; });



/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollisionType; });
/**
 * an enumeration for all available collision types
 */
var CollisionType;
(function (CollisionType) {
    CollisionType[CollisionType["Circle"] = 0] = "Circle";
    CollisionType[CollisionType["Rectangle"] = 1] = "Rectangle";
    CollisionType[CollisionType["RotatedRectangle"] = 2] = "RotatedRectangle";
})(CollisionType || (CollisionType = {}));


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
        return path.split('').pop();
    }
}
/* unused harmony export File */



/***/ })
/******/ ]);
//# sourceMappingURL=example.js.map