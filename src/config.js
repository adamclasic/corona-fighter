import Phaser from "phaser";
import GameScene from "./GameScene";
import PreloadScene from "./PreloadScene";
import WinScene from "./WinScene";
import LoosScene from "./LoosScene";
const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  physics: {
    default: 'arcade',
    arcade: {
        gravity: { y: 700 },
        debug: false
    }
  },
  width: 1300,
  height: 730,
  scene: [PreloadScene, GameScene, WinScene, LoosScene]
};
export default config
