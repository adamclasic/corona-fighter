import {Scene} from 'phaser'
import regeneratorRuntime from "regenerator-runtime";
import "regenerator-runtime/runtime.js";
import API from './api';
// import PhaserInput from './node_modules/@azerion/phaser-input/build/phaser-input.js'
import imglogo from './assets/logo.png'
import imgbtn from './assets/btn.png'
import RexUIPlugin from 'phaser3-rex-plugins/templates/ui/ui-plugin'

class WinScene extends Scene {

  
  constructor() {
    super('winscene')
  }


  preload() {

    var url;
    url = 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexbbcodetextplugin.min.js';
    this.load.plugin('rexbbcodetextplugin', url, true);
  
    url = 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rextexteditplugin.min.js';
    this.load.plugin('rextexteditplugin', url, true);



    this.load.image('logo', imglogo)
    this.load.image('playbtn', imgbtn)
  }

  async create() {

var printText = this.add.rexBBCodeText(900, 300, 'Name', {
            color: 'yellow',
            fontSize: '24px',
            fixedWidth: 200,
            // fixedHeight: 80,
            backgroundColor: '#333333',
            // valign: 'center'
        })
            .setOrigin(0.5)
            .setInteractive()
            .on('pointerdown', function () {
                this.plugins.get('rextexteditplugin').edit(printText);
            }, this);

        this.add.text(750, 200, 'Click text to enter your name.')
    
    // console.log(RexUIPlugin)
    this.cameras.main.backgroundColor = Phaser.Display.Color.HexStringToColor("#1d0038");

    this.add.image(300, 350, 'playbtn');
    // this.input.on('pointerdown', () => this.scene.start('game'))
  }
}

export default WinScene