import {Scene} from 'phaser'
import imglogo from './assets/logo.png'
import imgbtn from './assets/btn.png'

class PreloadScene extends Scene {

  
  constructor() {
    super('preload')
  }


  preload() {
    this.load.image('logo', imglogo)
    this.load.image('playbtn', imgbtn)
  }

  create() {
    this.cameras.main.backgroundColor = Phaser.Display.Color.HexStringToColor("#1d0038");
    let logo = this.add.image(900, 400, 'logo');
    this.tweens.add({
      targets: logo,
      y: 450,
      duration: 2000,
      ease: "Power1",
      yoyo: true,
      loop: -1
    });
    this.add.image(300, 350, 'playbtn');
    this.input.on('pointerdown', () => this.scene.start('game'))
  }
}

export default PreloadScene