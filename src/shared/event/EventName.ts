/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

export enum EventName {

    BeforePreload = 'BeforePreload' as any,
    AfterPreload = 'AfterPreload' as any,

    BeforeAssetLoading = 'BeforeAssetLoading' as any,
    AfterAssetLoading = 'AfterAssetLoading' as any,

    BeforeLoaded = 'BeforeLoaded' as any,
    AfterLoaded = 'AfterLoaded' as any,
}
