import imgcity from './assets/city.png'
import imgvirus from './assets/bom.png'
import imgdude from './assets/sprite.png'
import imgstar from './assets/star.png'
import imgplatform from './assets/platform.png'
import imgwapon from './assets/gun.png'
import Phaser, {Scene} from 'phaser'
let player;
let stars;
let platforms;
let cursors;
class GameScene extends Scene {
  preload() {
    this.load.image('sky', imgcity);
    this.load.image('ground', imgplatform);
    this.load.image('star', imgstar);
    this.load.image('bomb', imgvirus);
    this.load.spritesheet('dude', imgdude, { frameWidth: 114, frameHeight: 115 });
  }


  create() {
    this.add.image(400, 300, 'sky');

    platforms = this.physics.add.staticGroup();
    createPlatform();
    
    player = this.physics.add.sprite(100, 450, 'dude');
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);


    
    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 8 }),
      frameRate: 15,
      repeat: -1
  });

  this.anims.create({
      key: 'turn',
      frames: [ { key: 'dude', frame: 9 } ],
      frameRate: 20
  });

  this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('dude', { start: 19, end: 10 }),
      frameRate: 15,
      repeat: -1
  });

  cursors = this.input.keyboard.createCursorKeys();


    function createPlatform() {
      platforms.create(400, 568, 'ground').setScale(2).refreshBody();
      platforms.create(600, 400, 'ground');
      platforms.create(50, 250, 'ground');
      platforms.create(750, 220, 'ground');
    };
  }

  
  update ()
  {
      if (cursors.left.isDown)
      {
          player.setVelocityX(-180);

          player.anims.play('left', true);
      }
      else if (cursors.right.isDown)
      {
          player.setVelocityX(180);

          player.anims.play('right', true);
      }
      else
      {
          player.setVelocityX(0);

          player.anims.play('turn');
      }

      if (cursors.up.isDown && player.body.touching.down)
      {
          player.setVelocityY(-330);
      }
  }
}


export default GameScene;