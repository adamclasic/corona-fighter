import {Scene} from 'phaser'
import imglogo from './assets/logo.png'
import imgtrump from './assets/trump with a sign.png'
import imgbtn from './assets/btn.png'

class LoosScene extends Scene {

  
  constructor() {
    super('loosscene')
  }


  preload() {
    this.load.image('logo', imgtrump)
    this.load.image('playbtn', imgbtn)
  }

  create() {
    this.cameras.main.backgroundColor = Phaser.Display.Color.HexStringToColor("#1d0038");

    this.add.image(900, 450, 'logo');
    this.add.image(200, 350, 'playbtn');
    this.input.on('pointerdown', () => this.scene.start('game'))
  }
}

export default LoosScene