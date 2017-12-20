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
	/*
	 * this.bg2 = this.game.add.sprite(0, 0, "Menu"); this.bg2.scale.set(.62);
	 * this.bg2.smoothed = false;
	 */
	this.button1 = this.game.add.sprite(30, 190-50, "button2");
	this.button1.scale.set(1.25);
	this.button1.inputEnabled = true;
	this.button1.events.onInputDown.add(this.Gotoplay, this);

	this.butTxt1 = this.add.text(44, 189-50, "Start the Game", {
		font : '35px ZoodHarit8Bit',
		fill : 'white'
	}, this.ui);
	this.butTxt1.stroke = "black";
	this.butTxt1.strokeThickness = 5;
	
	     
	
	this.OnB1 = this.addBuree(125, 205);
	this.OnB2 = this.addCigarOF(155, 206);
	this.OnB3 = this.addEWeed(185, 205);
	this.OnB4 = this.addCigar(166, 281);
	this.OnB5 = this.addEWY(213, 281);
	this.OnB6 = this.addEGame(261, 281);

	this.button2 = this.game.add.sprite(85, 245-25, "button3");
	this.button2.scale.set(1.25);
	this.button2.inputEnabled = true;
	this.button2.events.onInputDown.add(this.Gotostory, this);
	this.butTxt2 = this.add.text(103, 244-25,
			"Story of Game", {
				font : '35px ZoodHarit8Bit',
				fill : 'white'
			}, this.ui);
	this.butTxt2.stroke = "black";
	this.butTxt2.strokeThickness = 5;

	this.button3 = this.game.add.sprite(140, 295, "button1");
	this.button3.scale.set(1.25);
	this.butTxt3 = this.add.text(183, 294, "Credited", {
		font : '35px ZoodHarit8Bit',
		fill : 'white'
	}, this.ui);
	this.butTxt3.stroke = "black";
	this.butTxt3.strokeThickness = 5;
	
	this.concat = this.game.add.sprite(300, 97, 'Congut');
	this.concat.scale.set(5);
	this.concat.anchor.setTo(0.5, 0.5);
	this.concat.scale.x = -5;
	this.concat.smoothed = false;

	this.GameN = this.add.text(35/* 190 */, 25, "life in college", {
		font : '100px ZoodHarit8Bit',
		fill : 'white'
	}, this.ui);
	this.GameN.stroke = "black";
	this.GameN.strokeThickness = 10;

	/*
	 * var sprite = this.add.sprite(this.world.centerX, this.world.centerY,
	 * "start1"); sprite.scale.set(0.5); sprite.anchor.set(0.5, 0.5);
	 * sprite.inputEnabled = true; sprite.events.onInputDown.add(this.Gotoplay,
	 * this);
	 */
	this.picture = this.game.add.sprite(600, 300, 'JimmyMotion', 8);
	this.picture.scale.set(7);
	this.picture.anchor.setTo(0.5, 0.5);
	this.picture.scale.x = -7;
	this.picture.smoothed = false;
	
	
	
	
	
	
};

Menu.prototype.Gotoplay = function() {
	this.game.state.start("Level0");
};

Menu.prototype.Gotostory = function() {
	this.game.state.start("Story");
};

Menu.prototype.addEGame = function(x, y) {
	G = this.add.sprite(x, y, "EGame");
	G.animations.add("idle", gframes("sprite", 3), 5, true);
	G.anchor.set(0.5, 0.5);
	G.smoothed = false;
	G.play("idle");
	return G;
};

Menu.prototype.addEWY = function(x, y) {
	G = this.add.sprite(x, y, "EWY");
	G.animations.add("idle", gframes("sprite", 1), 3, true);
	G.anchor.set(0.5, 0.5);
	G.smoothed = false;
	G.play("idle");
	return G;
};

Menu.prototype.addEWeed = function(x, y) {
	G = this.add.sprite(x, y, "EWeed");
	G.animations.add("idle", gframes("sprite", 1), 3, true);
	G.anchor.set(0.5, 0.5);
	G.smoothed = false;
	G.play("idle");
	return G;
};

Menu.prototype.addCigar = function(x, y) {
	G = this.add.sprite(x, y, "Cigar");
	G.animations.add("idle", gframes("cigarette", 1), 3, true);
	G.anchor.set(0.5, 0.5);
	G.smoothed = false;
	G.play("idle");
	return G;
};

Menu.prototype.addCigarOF = function(x, y) {
	G = this.add.sprite(x, y, "cigarOF");
	G.animations.add("idle", gframes("cigaretteONF", 1), 3, true);
	G.anchor.set(0.5, 0.5);
	G.smoothed = false;
	G.play("idle");
	return G;
};

Menu.prototype.addBuree = function(x, y) {
	G = this.add.sprite(x, y, "buree");
	G.animations.add("idle", gframes("buree", 1), 3, true);
	G.anchor.set(0.5, 0.5);
	G.smoothed = false;

	G.play("idle");
	return G;
};