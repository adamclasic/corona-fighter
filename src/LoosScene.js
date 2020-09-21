import { Scene } from 'phaser';
import imgloos from './assets/loos.png';
import imgbtn from './assets/btn.png';

class LoosScene extends Scene {
  constructor() {
    super('loosscene');
  }


  preload() {
    this.load.image('playbtn', imgbtn);
    this.load.image('imgloos', imgloos);
  }

  create() {
    this.cameras.main.backgroundColor = Phaser.Display.Color.HexStringToColor('#1d0038');

    this.add.image(900, 450, 'imgloos');
    const restartButton = this.add.dom(300, 600, 'button', 'width: 300px; background-color: rgb(101, 166, 218); padding: 8px 16px; border-radius: 32px; border: 0; color: #1d0038; font-size: 32px;', 'REPLAY');
    restartButton.addListener('click');
    restartButton.on('click', () => {
      this.scene.start('game');
    });
    // this.add.image(200, 350, 'playbtn');
    this.input.on('pointerdown', () => this.scene.start('game'));
  }
}

export default LoosScene;