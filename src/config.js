import Phaser from "phaser";
import GameScene from "./GameScene";
const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  physics: {
    default: 'arcade',
    arcade: {
        gravity: { y: 300 },
        debug: false
    }
  },
  width: 800,
  height: 600,
  scene: GameScene
};
export default config