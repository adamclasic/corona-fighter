import imgcity from './assets/city.png'
import imgvirus from './assets/virus.png'
import imgdude from './assets/sprite.png'
import imgstar from './assets/star.png'
import imgsmoke from './assets/smoke.png'
import imgplatform from './assets/platform.png'
import imgwapon from './assets/gun.png'
import Phaser, {Scene} from 'phaser'
let player;
let stars;
let viruses;
let platforms;
let cursors;
let score = 0;
let scoreText;
let spray;
let sprays;
let playerAngleRight;
class GameScene extends Scene {
  preload() {
    this.load.image('sky', imgcity);
    this.load.image('ground', imgplatform);
    this.load.image('star', imgstar);
    this.load.image('virus', imgvirus);
    this.load.spritesheet('dude', imgdude, { frameWidth: 114, frameHeight: 115 });
    this.load.spritesheet('smoke', imgsmoke,  { frameWidth: 356, frameHeight: 154 });
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

  this.anims.create({
    key: 'smokeAnim',
    frames: this.anims.generateFrameNumbers('smoke', { start: 0, end: 21 }),
    frameRate: 20,
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
  // this.physics.add.collider(spray, platforms);
  
  viruses = this.physics.add.group();
  sprays = this.physics.add.group();
  spray = this.physics.add.sprite(player.x, player.y, 'smoke')
  spray.setVisible(false);
  spray.angle += 8;


  this.physics.add.collider(spray, viruses, killVirus, null, this);
  this.physics.add.collider(viruses, platforms);

  this.physics.add.overlap(player, stars, collectStar, null, this);
  this.physics.add.collider(player, viruses, hitVirus, null, this);

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
        player.flipX = false;

          player.setVelocityX(-180);

          player.anims.play('left', true);
          playerAngleRight = false;
      }
      else if (cursors.right.isDown)
      {
        player.flipX = false;
          player.setVelocityX(180);

          player.anims.play('right', true);
          playerAngleRight = true;

      }
      else
      {
          player.setVelocityX(0);

          player.anims.play('turn');
          // player.flipX = true;

          if (playerAngleRight) {
            player.flipX = true;

          } else {
            player.flipX = false;
          }

      }

      if (cursors.up.isDown && player.body.touching.down)
      {
          player.setVelocityY(-550);

      }

      if (cursors.down.isDown)
      {

        // spray.setCollideWorldBounds(true);
        spray.setVelocityY(0);
          // spray.enableBody(true, true);
          spray.setVisible(true);

          spray.anims.play('smokeAnim', true);
          spray.setPosition(player.x-230, player.y-20)
          spray.setVelocityY(0);

      }

      if (cursors.down.isUp)
      {
        spray.setVisible(false);

      }

      if (cursors.right.isUp)
      {
        // player.angle = 0
      }

      // console.log(player.x)
  }

}

function collectStar (player, star)
{
    star.disableBody(true, true);
    score += 1;
    scoreText.setText('Score: ' + score);
    if (stars.countActive(true) === 0)
    {
        //  A new batch of stars to collect
        stars.children.iterate(function (child) {

            child.enableBody(true, child.x, 0, true, true);

        });

        let x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

        let virus = viruses.create(x, 16, 'virus');
        virus.setBounce(1);
        virus.setCollideWorldBounds(true);
        virus.setVelocity(Phaser.Math.Between(-200, 200), 20);
        virus.allowGravity = false;

    }
}

function hitVirus (player, virus)
{
  virus.disableBody(true, true);
  this.physics.pause();

    player.setTint(0xff0000);

    player.anims.play('turn');

    // gameOver = true;
}

function killVirus(player, virus ) {
  virus.disableBody(true, true);
  score += 10;
  scoreText.setText('Score: ' + score);
  
  // if (viruses.countActive(true) === 0)
  //   {
  //       //  A new batch of viruses to collect
  //       viruses.children.iterate(function (child) {

  //           child.enableBody(true, child.x, 0, true, true);

  //       });

  //       let x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

  //       let bomb = bombs.create(x, 16, 'virus');
  //       bomb.setBounce(0.8);
  //       bomb.setCollideWorldBounds(true);
  //       bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
  //       bomb.allowGravity = false;

  //   }
}
export default GameScene;