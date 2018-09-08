import preload from './scene/preload.js'
import create from './scene/create.js'
import update from './scene/update.js'

const config = {
  type: Phaser.AUTO,
  width: 600,
  height: 400,
  physics: {
      default: 'arcade',
      arcade: {
          gravity: { y: 1000 },
          debug: true
      }
  },
  scene: {
      preload: preload,
      create: create,
      update: update
  },
  world: {
    player: {}
  }
}

var game = new Phaser.Game(config)

