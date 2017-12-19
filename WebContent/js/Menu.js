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
	// this.bg.fixedToCamera = true;

	// ////////////////////////////////////
	this.bg1 = this.game.add.sprite(0, 0, "BG");
	// this.bg.fixedToCamera = true;
	this.bg1.width = 1280;
	this.bg1.height = 380;
	this.bg2 = this.game.add.sprite(0, 0, "Menu");
	this.bg2.scale.set(.62);
	this.bg2.smoothed = false;
	this.button1 = this.game.add.sprite(30, 190, "button2");
	this.button1.scale.set(1.25);
	this.button1.inputEnabled = true;
	this.button1.events.onInputDown.add(this.Gotoplay, this);
	
	this.butTxt1 = this.add.text(44, 189, 
			"Start the Game", {font:'35px ZoodHarit8Bit',
		fill : 'white'}, this.ui);
	this.butTxt1.stroke = "black";
	this.butTxt1.strokeThickness = 5;
	
	this.button2 = this.game.add.sprite(85, 245, "button3");
	this.button2.scale.set(1.25);
	this.button2.inputEnabled = true;
	this.button2.events.onInputDown.add(this.Gotostory, this);
	this.butTxt2 = this.add.text(44+85-26, 189+245-190, 
			"Story of Game", {font:'35px ZoodHarit8Bit',
		fill : 'white'}, this.ui);
	this.butTxt2.stroke = "black";
	this.butTxt2.strokeThickness = 5;
	
	this.button3 = this.game.add.sprite(140, 295, "button1");
	this.button3.scale.set(1.25);
	this.butTxt3 = this.add.text(44-26+165, 189-190+295, 
			"Credited", {font:'35px ZoodHarit8Bit',
		fill : 'white'}, this.ui);
	this.butTxt3.stroke = "black";
	this.butTxt3.strokeThickness = 5;


	this.GameN = this.add.text(190, 25, 
			"life in college", {font:'100px ZoodHarit8Bit',
		fill : 'white'}, this.ui);
	this.GameN.stroke = "black";
	this.GameN.strokeThickness = 10;
	
	/*var sprite = this.add.sprite(this.world.centerX, this.world.centerY,
			"start1");
	sprite.scale.set(0.5);
	sprite.anchor.set(0.5, 0.5);
	sprite.inputEnabled = true;
	sprite.events.onInputDown.add(this.Gotoplay, this);*/
	this.picture = this.game.add.sprite(600, 300,
			'JimmyMotion', 8);
	this.picture.scale.set(7);
	this.picture.anchor.setTo(0.5, 0.5);
	this.picture.scale.x = -7;
	this.picture.smoothed = false;

	var sprite1 = this.add.sprite(this.world.centerX + 200,
			this.world.centerY + 200, "V");

	sprite1.anchor.set(0.5, 0.5);
	sprite1.inputEnabled = true;
	sprite1.events.onInputDown.add(this.Gotostory, this);
};

Menu.prototype.Gotoplay = function() {
	this.game.state.start("Level0");
};

Menu.prototype.Gotostory = function() {
	this.game.state.start("Story");
};