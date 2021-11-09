import Phaser from 'phaser';

export default class Game extends Phaser.Scene
{
    constructor()
    {
        super('game')
    }

    preload(){
        console.log("preload");
    }

    create(){
        console.log("game: create");
        const map = this.make.tilemap({key: 'dungeon'})
        const tileset = map.addTilesetImage('dungeon', 'tiles', 16, 16, 1 ,2)
        map.createLayer("Ground", tileset)
        map.createLayer("Walls", tileset)
    }
}