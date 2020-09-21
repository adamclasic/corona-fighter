import { Scene } from 'phaser';
import imglogo from './assets/logo.png';
import imgbtn from './assets/btn.png';
import imgcmd from './assets/commands.png';

class PreloadScene extends Scene {
  constructor() {
    super('preload');
  }


  preload() {
    this.load.image('logo', imglogo);
    // this.load.image('playbtn', imgbtn)
    this.load.image('cmdimg', imgcmd);
  }

  create() {
    this.cameras.main.backgroundColor = Phaser.Display.Color.HexStringToColor('#1d0038');
    const logo = this.add.image(900, 400, 'logo');
    const cmdimg = this.add.image(300, 400, 'cmdimg');
    this.tweens.add({
      targets: logo,
      y: 450,
      duration: 2000,
      ease: 'Power1',
      yoyo: true,
      loop: -1,
    });
    // this.add.image(300, 600, 'playbtn');
    const startButton = this.add.dom(300, 600, 'button', 'width: 300px; background-color: rgb(101, 166, 218); padding: 8px 16px; border-radius: 32px; border: 0; color: #1d0038; font-size: 32px;', 'PLAY NOW');
    startButton.addListener('click');
    startButton.on('click', () => {
      this.scene.start('game');
    });

    this.input.on('pointerdown', () => this.scene.start('game'));
  }
}

export default PreloadScene;