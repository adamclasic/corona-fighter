import Phaser from "phaser";
import GameScene from "./GameScene";
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
  scene: GameScene
};
export default config
