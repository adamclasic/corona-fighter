import {Scene} from 'phaser'
import regeneratorRuntime from "regenerator-runtime";
import "regenerator-runtime/runtime.js";
import API from './api';
// import PhaserInput from './node_modules/@azerion/phaser-input/build/phaser-input.js'
import imglogo from './assets/dead virus.png'
import imgbtn from './assets/btn.png'
import imgsub from './assets/submitbtn.png'
import RexUIPlugin from 'phaser3-rex-plugins/templates/ui/ui-plugin'
import {score} from './GameScene'

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
    this.load.image('submit', imgsub)
    this.load.image('playbtn', imgbtn)
  }

  async create() {

// var input = this.add.rexBBCodeText(900, 300, 'Name', {
//             color: 'yellow',
//             fontSize: '24px',
//             fixedWidth: 200,
//             // fixedHeight: 80,
//             backgroundColor: '#333333',
//             // valign: 'center'
//         })
//             .setOrigin(0.5)
//             .setInteractive()
//             .on('pointerdown', function () {
//                 this.plugins.get('rextexteditplugin').edit(input);
//             }, this);
//         this.add.text(750, 200, 'Click text to enter your name.')
//             console.log(input)
    // console.log(RexUIPlugin)
    this.cameras.main.backgroundColor = Phaser.Display.Color.HexStringToColor("#1d0038");
    this.add.image(900, 200, 'logo');
    this.add.text(750, 300, 'Your Score is : ' + score);
    this.add.text(750, 332, 'Enter your name below to submit.');
    // this.add.image(300, 350, 'playbtn');
    // this.input.on('pointerdown', () => this.scene.start('game'))


    let playButton = this.add.dom(250, 600, 'button', "width: 300px; background-color: rgb(101, 166, 218); padding: 8px 16px; border-radius: 32px; border: 0; color: #1d0038; font-size: 32px;", 'PLAY AGAIN');
    playButton.addListener('click');
    playButton.on('click', () => {
        console.log('clicked');
        this.scene.start('game');
    });

    let scoresList = this.add.dom (250, 250, 'div', "overflow-y: scroll; overflow-x: hidden; background-color: #2d0548;width: 300px; height: 400px; border-radius: 32px; font-size: 22px; color: white; padding: 16px")

    const input = this.add.dom(900, 410, 'input', {
      type: 'text',
      name: 'nameField',
      fontSize: '32px',
      backgroundColor: '#fff',
      padding: '16px 32px',
      borderRadius: '32px',
    });
    input.scaleX = 0.4;
    input.scaleY = 0.6;

    console.log(input);
    let submitButton = this.add.dom(900, 600, 'button', "width: 300px; background-color: rgb(101, 166, 218); padding: 8px 16px; border-radius: 32px; border: 0; color: #1d0038; font-size: 32px;", 'SUBMIT');
    submitButton.addListener('click');
    submitButton.on('click', async () => {
        if (input.node.value) {
        // this.scene.start('game');

        console.log(input.node.value)
        API.postScores(input.node.value, score.toString(10));

        let onePlayer = '<p>LeaderBoard:</p>';
        let scores = await API.getScores();
        // console.log(scores.result);
        scores.result.forEach(ele => {
          onePlayer = onePlayer + `<p>${ele.user}: ${ele.score}</p>`;
        });
        scoresList.node.innerHTML = onePlayer;
    }});
    let onePlayer = '<p>LeaderBoard:</p>';

    let scores = await API.getScores();
    // console.log(scores.result);
    scores.result.forEach(ele => {
      onePlayer = onePlayer + `<p>${ele.user}: ${ele.score}</p>`;
    });
    scoresList.node.innerHTML = onePlayer;
    // submitButton.on('click', () => {
    //   if (input.node.value) {
    //     this.model = this.sys.game.globals.model;
    //     this.model.userName = input.node.value;
    //     this.scene.start('Game');
    //   }
    // });
  }
}

export default WinScene