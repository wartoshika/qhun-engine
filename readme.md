[![npm](https://img.shields.io/npm/l/express.svg)]()
[![Coverage Status](https://coveralls.io/repos/github/wartoshika/qhun-engine/badge.svg?branch=refactor1)](https://coveralls.io/github/wartoshika/qhun-engine?branch=refactor1)
[![Build Status](https://travis-ci.org/wartoshika/qhun-engine.svg?branch=refactor1)](https://travis-ci.org/wartoshika/qhun-engine)

Qhun-Engine
===========

A work in progress game engine for web games written in typescript to give you all freedom of the typescript langugage.

A small rpg example with tile maps and orthogonal camera:
![rpg example](qhun-engine-rpg.gif)


TODO
===========
- [x] asset loading (currently images and sprites)
- [x] sprite images incl. converter for sprite to sub images
- [x] split shared/entity into client/entity and server/entity
- [x] entity animations (currently a basic form)
- [x] add camera and the abillity to follow the player
- [x] single layer tilemap import and rendering
- [x] multilayer tilemap import and rendering
- [x] add world scale (can be done by scaling the camera)
-  controls
-  collision detection incl. tilemaps
- physics
- animation states should have possible random values as callback function
- cluster rendering should store all rendered layers as tmp cluster image to improve the rendering speed


Known Bugs
===========
- when a camera scale is very low and the world map fits entierly on the screen, the camera does not work correctly.
