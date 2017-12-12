/**
 *
 */
function Story() {
	Phaser.State.call(this);
}

/** @type Phaser.State */
var proto = Object.create(Phaser.State);
Story.prototype = proto;

Story.prototype.preload = function() {
	this.load.pack("Story", "assets/assets-pack.json");
	

    this.game.load.video('space', 'assets/images/wormhole.mp4');

};

Story.prototype.create = function() {
    
    video = this.game.add.video('space');

    video.play(true);

    //  x, y, anchor x, anchor y, scale x, scale y
    video.addToWorld();
    
    var sprite = this.add.sprite(this.world.centerX, this.world.centerY,
	"sp");
    sprite.anchor.set(0.5, 0.5);
    sprite.inputEnabled = true;
    sprite.events.onInputDown.add(this.startGame, this);

};

Story.prototype.startGame = function() {
	this.game.state.start("Howtoplay");
};