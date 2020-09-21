import imgcity from './assets/city.png'
import imgvirus from './assets/virus.png'
import imgdude from './assets/sprite.png'
import imgstar from './assets/star.png'
import imgsmoke from './assets/smoke.png'
import imgplatform from './assets/platform.png'
import imgph from './assets/ph.png'
import imgdoor from './assets/door.png'
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
let city;
let door;
// let gameOver;
class GameScene extends Scene {

  constructor() {
    super('game')
    this.score = 0;
    // this.gameOver = false;
  }


  preload() {
    this.load.image('sky', imgcity);
    this.load.image('ground', imgplatform);
    this.load.image('groundph', imgph);
    this.load.image('star', imgstar);
    this.load.image('virus', imgvirus);
    this.load.spritesheet('dude', imgdude, { frameWidth: 114, frameHeight: 115 });
    this.load.spritesheet('smoke', imgsmoke,  { frameWidth: 356, frameHeight: 154 });
    this.load.image('door', imgdoor);
  }


  create() {
    city = this.add.image(0, 0, 'sky').setOrigin(0);;
    // door = this.add.image(1000,200, 'door').setScale(0.3, 0.3);
    door = this.physics.add.sprite(1000,4750, 'door').setScale(0.3, 0.3);
    scoreText = this.add.text(20, 20, 'Score: 0')
    platforms = this.physics.add.staticGroup();
    createPlatform();

    player = this.physics.add.sprite(100, 4800, 'dude');
    player.setBounce(0.2);
    // player.setCollideWorldBounds(true);
    city.setScrollFactor(0);
    scoreText.setScrollFactor(0);
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
    repeat: 20,
    setXY: { x: 82, y: player.y - 800, stepX: 70}
  });

  stars.children.iterate(function (child) {
    child.setBounceY(Phaser.Math.FloatBetween(0.1, 0.3));
  });

  this.physics.add.collider(player, platforms);
  this.physics.add.collider(stars, platforms);
  
  viruses = this.physics.add.group();
  sprays = this.physics.add.group();
  spray = this.physics.add.sprite(player.x, player.y, 'smoke')
        // spray.setVelocityY(-100);
        spray.setVisible(false);
  // spray.angle += 8;


  this.physics.add.overlap(spray, viruses, killVirus, null, this);
  this.physics.add.collider(viruses, platforms);

  this.physics.add.overlap(player, stars, collectStar, null, this);
  this.physics.add.overlap(player, door, endGame, null, this);
  this.physics.add.collider(door, platforms);
  this.physics.add.collider(player, viruses, hitVirus, null, this);


  this.myCam = this.cameras.main;
  this.myCam.setBounds(0, 0, 1500, 5000);

  // making the camera follow the player
  this.myCam.startFollow(player);


    function createPlatform() {
      //creating left and right borders
      platforms.create(1500, 1250, 'groundph').refreshBody();
      platforms.create(1500, 3750, 'groundph').refreshBody();
      platforms.create(0, 1250, 'groundph').refreshBody();
      platforms.create(0, 3750, 'groundph').refreshBody();
      platforms.create(400, 4950, 'ground').setScale(6).refreshBody();



      //creating the platform
      // platforms.create(440, 3500, 'ground');
      // platforms.create(40, 3600, 'ground');
      // platforms.create(100, 3700, 'ground');
      // platforms.create(1500, 3700, 'ground');
      // platforms.create(100, 3800, 'ground');
      // platforms.create(100, 3900, 'ground');
      // platforms.create(1000, 3900, 'ground');
      // platforms.create(600, 4000, 'ground');
      // platforms.create(1400, 3600, 'ground');
      // platforms.create(200, 3800, 'ground');
      // platforms.create(1200, 3800, 'ground');



      platforms.create(800, 0, 'ground');
      platforms.create(1500, 0, 'ground');
      platforms.create(50, 0, 'ground');
      // platforms.create(1000, 100, 'ground');
      platforms.create(100, 100, 'ground').setScale(.5).refreshBody();
      platforms.create(900, 300, 'ground');
      platforms.create(300, 300, 'ground').setScale(.5).refreshBody();
      platforms.create(500, 450, 'ground');
      platforms.create(50, 650, 'ground');
      platforms.create(950, 650, 'ground');
      platforms.create(1150, 850, 'ground');
      platforms.create(0, 850, 'ground');




      platforms.create(800, 1000, 'ground');
      platforms.create(1500, 1000, 'ground');
      platforms.create(50, 1000, 'ground');
      platforms.create(100, 1100, 'ground');
      platforms.create(100, 1100, 'ground').setScale(.5).refreshBody();
      platforms.create(900, 1300, 'ground');
      platforms.create(300, 1300, 'ground').setScale(.5).refreshBody();
      platforms.create(500, 1450, 'ground');
      platforms.create(50, 1650, 'ground');
      platforms.create(950, 1650, 'ground');
      platforms.create(1150, 1850, 'ground');
      platforms.create(0, 1850, 'ground');




      platforms.create(800, 1000, 'ground');
      platforms.create(1500, 1000, 'ground');
      platforms.create(50, 1000, 'ground');
      platforms.create(100, 1100, 'ground');
      platforms.create(100, 1100, 'ground').setScale(.5).refreshBody();
      platforms.create(900, 1300, 'ground');
      platforms.create(300, 1300, 'ground').setScale(.5).refreshBody();
      platforms.create(500, 1450, 'ground');
      platforms.create(50, 1650, 'ground');
      platforms.create(950, 1650, 'ground');
      platforms.create(1150, 1850, 'ground');
      platforms.create(0, 1850, 'ground');



      platforms.create(800, 2000, 'ground');
      platforms.create(1500, 2000, 'ground');
      platforms.create(50, 2000, 'ground');
      platforms.create(100, 2100, 'ground');
      platforms.create(100, 2100, 'ground').setScale(.5).refreshBody();
      platforms.create(900, 2300, 'ground');
      platforms.create(300, 2300, 'ground').setScale(.5).refreshBody();
      platforms.create(500, 2450, 'ground');
      platforms.create(50, 2650, 'ground');
      platforms.create(950, 2650, 'ground');
      platforms.create(1150, 2850, 'ground');
      platforms.create(0, 2850, 'ground');


      platforms.create(800, 3000, 'ground');
      platforms.create(1500, 3000, 'ground');
      platforms.create(50, 3000, 'ground');
      platforms.create(100, 3100, 'ground');
      platforms.create(100, 3100, 'ground').setScale(.5).refreshBody();
      platforms.create(900, 3300, 'ground');
      platforms.create(300, 3300, 'ground').setScale(.5).refreshBody();
      platforms.create(500, 3450, 'ground');
      platforms.create(50, 3650, 'ground');
      platforms.create(950, 3650, 'ground');
      platforms.create(1150, 3850, 'ground');
      platforms.create(0, 3850, 'ground');



      platforms.create(800, 4000, 'ground');
      platforms.create(1500, 4000, 'ground');
      platforms.create(1400, 4000, 'ground').setScale(.1).refreshBody();;
      platforms.create(100, 4100, 'ground');
      platforms.create(50, 4100, 'ground');
      platforms.create(900, 4300, 'ground');
      platforms.create(300, 4300, 'ground').setScale(.5).refreshBody();
      platforms.create(500, 4450, 'ground');
      platforms.create(50, 4650, 'ground');
      platforms.create(950, 4650, 'ground');
    };
  }
  
  update ()
  {
      if (cursors.left.isDown)
      {
          player.flipX = false;
          player.flipY = false;
          spray.flipX = false;
          spray.angle = 8
          player.setVelocityX(-180);

          player.anims.play('left', true);
          playerAngleRight = false;

          // if (playerAngleRight) {
          //   spray.setPosition(player.x+230, player.y-20)
          // } else {
          //   spray.setPosition(player.x-230, player.y-20)
          // }
      }
      else if (cursors.right.isDown)
      {
        player.flipX = false;
          spray.flipX = true;
          spray.angle = -8
          player.setVelocityX(180);

          player.anims.play('right', true);
          playerAngleRight = true;

          // if (playerAngleRight) {
          //   spray.setPosition(player.x+230, player.y-20)
          // } else {
          //   spray.setPosition(player.x-230, player.y-20)
          // }
      }
      else
      {
          player.setVelocityX(0);

          player.anims.play('turn');
          // player.flipX = true;

          if (playerAngleRight) {
          spray.flipX = true;
          spray.angle = -8
          player.flipX = true;

          } else {
          spray.flipX = false;
          spray.angle = 8
          player.flipX = false;
          }

          // if (playerAngleRight) {
          //   spray.setPosition(player.x+230, player.y-20)
          // } else {
          //   spray.setPosition(player.x-230, player.y-20)
          // }
      }

      if (cursors.up.isDown && player.body.touching.down)
      {
          player.setVelocityY(-600);

      }

      if (cursors.down.isDown)
      {

        // spray.setCollideWorldBounds(true);
        
        spray.anims.play('smokeAnim', true);
        if (playerAngleRight) {
          spray.setPosition(player.x+230, player.y-20)
        } else {
          spray.setPosition(player.x-230, player.y-20)
        }
        spray.setVelocityY(-0);
        this.time.addEvent({
          delay: 30,
          callback: ()=>{
            spray.setVelocityY(0);
            spray.scaleX = 1;
            spray.scaleY = 0.8;
              spray.setVisible(true)
          },
      })
        ;

      }

      if (cursors.down.isUp)
      {
        spray.disableBody;
        spray.setVisible(false);
        spray.scaleY = 0;
        spray.scaleX = 0;

        spray.setVelocityY(1000);

      }

      if (cursors.right.isUp)
      {
        // player.angle = 0
      }

      console.log(score);

  }

}

function collectStar (player, star)
{
    star.disableBody(true, true);
    score += 1;
    scoreText.setText('Score: ' + score);

    let x = (player.x < 750) ? Phaser.Math.Between(750, 1400) : Phaser.Math.Between(100, 750);
    if (score%3===0){
    let virus = viruses.create(x, player.y-600, 'virus');
    virus.scale = (Phaser.Math.Between(3, 10) / 10)
    virus.setBounce(1);
    // virus.setCollideWorldBounds(true);
    virus.setVelocity(Phaser.Math.Between(-200, 200), 20);
    virus.allowGravity = false;

    if ((score %4 ===0 && score<90))
    {
      console.log('stars generated');
        stars = this.physics.add.group({
          key: 'star',
          repeat: 15,
          setXY: { x: 82, y: player.y - 900, stepX: 70}
        });
        this.physics.add.collider(stars, platforms);
        this.physics.add.overlap(player, stars, collectStar, null, this);
}

if ((score %30 ===0 && score>99))
{
      console.log('stars generated');
      stars = this.physics.add.group({
      key: 'star',
      repeat: 20,
      setXY: { x: 82, y: player.y - 900, stepX: 70}
    });
    this.physics.add.collider(stars, platforms);
    this.physics.add.overlap(player, stars, collectStar, null, this);
}
    }

    if (stars.countActive(true) === 0)
    {
        //  A new batch of stars to collect
        stars.children.iterate(function (child) {

            child.enableBody(true, child.x, 0, true, true);

        });

    }

    // if (gameOver) {
    //   console.log(this);
    //   this.scene.start('winscene')
    // }
}

function hitVirus (player, virus)
{
  virus.disableBody(true, true);
  this.physics.pause();

    player.setTint(0xff0000);

    player.anims.play('turn');

    // gameOver = true;
    this.scene.start('loosscene')

}

function killVirus(player, virus ) {
  virus.disableBody(true, true);
  score += 10;
  scoreText.setText('Score: ' + score);
}

function endGame() {
  // gameOver = true;
  this.scene.start('winscene')

  console.log('gameOver in win scene')
  // console.log(gameOver)
}
export {score, GameScene};