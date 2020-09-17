import {Scene} from 'phaser'
import imglogo from './assets/logo.png'

class PreloadScene extends Scene {

  
  constructor() {
    super('preload')
  }


  preload() {
    this.load.image('logo', imglogo)
  }

  create() {
    this.add.image(400, 400, 'logo');
    this.input.on('pointerdown', () => this.scene.start('game'))
  }
}

export default PreloadScene