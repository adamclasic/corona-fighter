const regeneratorRuntime = require('regenerator-runtime');
const killVirus = require('./GameScene');
const Phaser = require('phaser');

test('EnemyAttack is a subclass of Phaser.Scene', () => {
  expect(killVirus).toBeSubclassOf(Phaser.Physics.Arcade.Sprite);
});