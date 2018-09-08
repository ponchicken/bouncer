export default function () {
  this.add.image(400, 300, 'sky')
  this.cursors = this.input.keyboard.createCursorKeys();

  let bottom = getRectObject(this, {
    color: 0x00ff00,
    x: 0,
    y: 350,
    width: 600,
    height: 20
  })

  let platforms = this.physics.add.staticGroup();
  platforms.add(bottom)
  
  // this.player = getRectObject(this, {
  //   color: 0x0000ff,
  //   x: 100,
  //   y: 100,
  //   width: 100,
  //   height: 100
  // })
  // this.physics.add.existing(this.player)
  
  this.player = this.physics.add.sprite(100, 200, 'bomb');
  this.player.setBounce(1);
  this.player.setCollideWorldBounds(true);
  
  console.log(this.player, platforms)
  this.physics.add.collider(this.player, platforms)
}



function getRectObject(game, {
  color, x, y, width, height
}) {
  let obj = game.add.graphics()
  obj.fillStyle(color, 1)
  obj.fillRect(0, 0, width, height)
  obj.x = x
  obj.y = y
  obj.width = width
  obj.height = height
  return obj
}