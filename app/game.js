import SuperEventEmitter from 'super-event-emitter';

export class Game extends Phaser.Game {
    constructor(...args) {
        super(...args);
        SuperEventEmitter.mixin(this);
    }
}
