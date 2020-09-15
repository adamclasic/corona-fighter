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
let score = 0;
let scoreText;
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
    scoreText = this.add.text(20, 20, 'Score: 0')
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

  stars = this.physics.add.group({
    key: 'star',
    repeat: 3,
    setXY: { x: 12, y: 0, stepX: 70 }
  });

  stars.children.iterate(function (child) {
    child.setBounceY(Phaser.Math.FloatBetween(0.1, 0.3));
  });

  this.physics.add.collider(player, platforms);
  this.physics.add.collider(stars, platforms);

  this.physics.add.overlap(player, stars, collectStar, null, this);

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
          player.setVelocityY(-550);
      }

  }

}

function collectStar (player, star)
{
    star.disableBody(true, true);
    score += 1;
    scoreText.setText('Score: ' + score);
}

export default GameScene;