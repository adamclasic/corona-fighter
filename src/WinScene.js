/* eslint-disable no-undef, import/named, import/no-extraneous-dependencies */

import { Scene } from 'phaser';
import regeneratorRuntime from 'regenerator-runtime';
import API from './api';
import imglogodead from './assets/dead virus.png';
import imgbtn from './assets/btn.png';
import imgsub from './assets/submitbtn.png';
import { score } from './GameScene';

class WinScene extends Scene {
  constructor() {
    super('winscene');
  }

  preload() {
    let url;
    url = 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexbbcodetextplugin.min.js';
    this.load.plugin('rexbbcodetextplugin', url, true);

    url = 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rextexteditplugin.min.js';
    this.load.plugin('rextexteditplugin', url, true);


    this.load.image('logodead', imglogodead);
    this.load.image('submit', imgsub);
    this.load.image('playbtn', imgbtn);
  }

  async create() {
    this.cameras.main.backgroundColor = Phaser.Display.Color.HexStringToColor('#1d0038');
    this.add.image(900, 200, 'logodead');
    this.add.text(750, 300, `Your Score is : ${score}`);
    this.add.text(750, 332, 'Enter your name below to submit.');

    const playButton = this.add.dom(250, 600, 'button', 'width: 300px; background-color: rgb(101, 166, 218); padding: 8px 16px; border-radius: 32px; border: 0; color: #1d0038; font-size: 32px;', 'PLAY AGAIN');
    playButton.addListener('click');
    playButton.on('click', () => {
      this.scene.start('game');
    });

    const scoresList = this.add.dom(250, 250, 'div', 'overflow-y: scroll; overflow-x: hidden; background-color: #2d0548;width: 300px; height: 400px; border-radius: 32px; font-size: 22px; color: white; padding: 16px');

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

    const submitButton = this.add.dom(900, 600, 'button', 'width: 300px; background-color: rgb(101, 166, 218); padding: 8px 16px; border-radius: 32px; border: 0; color: #1d0038; font-size: 32px;', 'SUBMIT SCORE');
    submitButton.addListener('click');

    submitButton.on('click', async () => {
      if (input.node.value) {
        await API.postScores(input.node.value, score.toString(10));
        input.node.value = '';
        let onePlayer = '<p>LeaderBoard:</p>';
        const apiData = await API.getScores();
        const scores = apiData.result;
        scores.sort((b, a) => a.score - b.score);
        scores.forEach(ele => {
          onePlayer += `<p>${ele.user}: ${ele.score}</p>`;
        });
        scoresList.node.innerHTML = onePlayer;
      }
    });

    let onePlayer = '<p>LeaderBoard:</p>';
    const apiData = await API.getScores();
    const scores = apiData.result;
    scores.sort((b, a) => a.score - b.score);
    scores.forEach(ele => {
      onePlayer += `<p>${ele.user}: ${ele.score}</p>`;
    });
    scoresList.node.innerHTML = onePlayer;
  }
}

export default WinScene;