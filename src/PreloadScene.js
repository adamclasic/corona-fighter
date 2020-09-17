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
    this.cameras.main.backgroundColor = Phaser.Display.Color.HexStringToColor("#1d0038");
    this.add.text(300, 350, 'PLAY NOW')
    this.add.image(900, 400, 'logo');
    this.input.on('pointerdown', () => this.scene.start('game'))
  }
}

export default PreloadScene