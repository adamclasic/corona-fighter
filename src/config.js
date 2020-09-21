/* eslint-disable import/no-extraneous-dependencies */
import Phaser from 'phaser';
import RexUIPlugin from 'phaser3-rex-plugins/templates/ui/ui-plugin';
import { GameScene } from './GameScene';
import PreloadScene from './PreloadScene';
import WinScene from './WinScene';
import LoosScene from './LoosScene';

const config = {
  type: Phaser.AUTO,
  parent: 'divId',
  dom: {
    createContainer: true,
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 700 },
      debug: false,
    },
  },
  width: 1300,
  height: 730,
  scene: [PreloadScene, GameScene, WinScene, LoosScene],
  // scene: [LoosScene]
};
export default config;
