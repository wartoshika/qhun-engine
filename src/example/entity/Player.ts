import { CollidableEntity } from 'shared/entity';
import { Vector2D } from 'shared/math';
import { CollisionType } from 'shared/collision';
import { AssetLoader, AssetType, Image } from 'client/asset';

/**
 * the player entity
 */
export class Player extends CollidableEntity {

    constructor() {

        super(20, 20, new Vector2D(10, 10));
    }

    /**
     * get the entities collision type
     */
    public getCollisionType(): CollisionType {

        return CollisionType.Circle;
    }

    /**
     * an event handler that will fire if another entity collided with this instance
     */
    public onCollision(otherEntity: CollidableEntity): void {

        console.log(this, "collided with", otherEntity);
    }

    /**
     * get the image asset that displays the current entity
     */
    public getImage(): Image {

        return AssetLoader.getInstance<AssetLoader>().getAsset<Image>(
            'SuperDuperImage', AssetType.Image
        );
    }

}