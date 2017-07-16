/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

export enum EventName {

    BeforePreload = <any>"BeforePreload",
    AfterPreload = <any>"AfterPreload",

    BeforeAssetLoading = <any>"BeforeAssetLoading",
    AfterAssetLoading = <any>"AfterAssetLoading",

    BeforeLoaded = <any>"BeforeLoaded",
    AfterLoaded = <any>"AfterLoaded"
}