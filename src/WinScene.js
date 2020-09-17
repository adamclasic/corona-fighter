import {Scene} from 'phaser'
import imglogo from './assets/logo.png'
import imgbtn from './assets/btn.png'

class WinScene extends Scene {

  
  constructor() {
    super('winscene')
  }


  preload() {
    this.load.image('logo', imglogo)
    this.load.image('playbtn', imgbtn)
  }

  create() {
    this.cameras.main.backgroundColor = Phaser.Display.Color.HexStringToColor("#1d0038");

    this.add.image(300, 350, 'playbtn');
    this.input.on('pointerdown', () => this.scene.start('game'))
  }
}

export default WinScene