import {Scene} from 'phaser'
import imglogo from './assets/logo.png'
import imgbtn from './assets/btn.png'

class LoosScene extends Scene {

  
  constructor() {
    super('loosscene')
  }


  preload() {
    this.load.image('logo', imglogo)
    this.load.image('playbtn', imgbtn)
  }

  create() {
    this.cameras.main.backgroundColor = Phaser.Display.Color.HexStringToColor("#1d0038");

    this.add.image(100, 350, 'playbtn');
    this.add.image(800, 350, 'playbtn');
    this.input.on('pointerdown', () => this.scene.start('game'))
  }
}

export default LoosScene