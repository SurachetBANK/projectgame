
function Howtoplay() {
	Phaser.State.call(this);
}

/** @type Phaser.State */
var proto = Object.create(Phaser.State);
Howtoplay.prototype = proto;


Howtoplay.prototype.preload = function() {
	this.load.pack("Story", "assets/assets-pack.json");
	

   this.game.load.video('s', 'assets/images/T.mp4');

};

Howtoplay.prototype.create = function() {
   
   //video = this.game.add.video('s');

   //video.play(true);

   //  x, y, anchor x, anchor y, scale x, scale y
   //video.addToWorld();
   
   var sprite = this.add.sprite(this.world.centerX, this.world.centerY,
	"sp");
   sprite.anchor.set(0.5, 0.5);
   sprite.inputEnabled = true;
   sprite.events.onInputDown.add(this.startGame, this);

};

Howtoplay.prototype.startGame = function() {
	this.game.state.start("Level");
};

