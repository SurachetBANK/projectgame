/**
 *
 */
function Credited () {
	Phaser.State.call(this);
}

/** @type Phaser.State */
var proto = Object.create(Phaser.State);
Credited.prototype = proto;

Credited.prototype.preload = function() {
	this.load.pack("Story", "assets/assets-pack.json");
};

Credited.prototype.create = function() {
	this.bg = this.game.add.sprite(0, 0, "BG");
	// this.bg.fixedToCamera = true;
	
	this.Cred = this.game.add.sprite(0, 0, "Credit");
	this.Cred.smoothed = false;
	
	// video = this.game.add.video('s');

	// video.play(true);

	// x, y, anchor x, anchor y, scale x, scale y
	// video.addToWorld();
	this.button1 = this.game.add.sprite(10, 315, "button1");
	this.button1.scale.set(1.25);
	this.button1.inputEnabled = true;
	this.button1.events.onInputDown.add(this.Menu, this);
	
	this.butTxt1 = this.add.text(30, 314, "Back to Menu", {
		font : '35px ZoodHarit8Bit',
		fill : 'white'
	}, this.ui);
	this.butTxt1.stroke = "black";
	this.butTxt1.strokeThickness = 5;

	


};

Credited.prototype.Menu = function() {
	this.game.state.start("Menu");
};