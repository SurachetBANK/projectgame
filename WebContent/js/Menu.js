/**
 * Menu state.
 */
function Menu() {
	Phaser.State.call(this);
}

/** @type Phaser.State */
var proto = Object.create(Phaser.State);
Menu.prototype = proto;

Menu.prototype.preload = function() {
	this.load.pack("start", "assets/assets-pack.json");
	this.load.pack("Howtoplay", "assets/assets-pack.json");
	this.load.pack("Story", "assets/assets-pack.json");
};

Menu.prototype.create = function() {
	var sprite = this.add.sprite(this.world.centerX, this.world.centerY,
			"start1");
	sprite.anchor.set(0.5, 0.5);
	sprite.inputEnabled = true;
	sprite.events.onInputDown.add(this.Gotoplay, this);
	
	
	
	var sprite1 = this.add.sprite(this.world.centerX+200, this.world.centerY+200,
	"V");
	sprite1.anchor.set(0.5, 0.5);
	sprite1.inputEnabled = true;
	sprite1.events.onInputDown.add(this.Gotostory, this);
};


Menu.prototype.Gotoplay = function() {
	this.game.state.start("Howtoplay");
};

Menu.prototype.Gotostory = function() {
	this.game.state.start("Counting");
};