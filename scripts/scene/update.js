export default function () {
  let {
    cursors, player
  } = this

  if (cursors.left.isDown) {
    this.player.setVelocityX(-300);
  } else if (cursors.right.isDown) {
    this.player.setVelocityX(300);
  } else {
    this.player.setVelocityX(0);
  }
  if (cursors.down.isDown) {
    this.player.setVelocityY(600);
  }

  if (cursors.up.isDown) {
    // player.setVelocityY(-600);
    console.log('up')
  }
}