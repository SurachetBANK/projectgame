/**
 * Counting state.
 */
function Counting1() {
	Phaser.State.call(this);
}

/** @type Phaser.State */
var proto = Object.create(Phaser.State);
Counting1.prototype = proto;

Counting1.prototype.create = function() {

	this.ConDrum = this.add.sound("Drum", 2, false);
	this.ConDrum.play();

	this.bg = this.game.add.sprite(0, 0, "BG");
	// this.bg.fixedToCamera = true;
	this.bg.width = 1920;
	this.bg.height = 1080;

	// ////////////////////////////////////
	this.bg = this.game.add.sprite(0, 0, "BG");
	// this.bg.fixedToCamera = true;
	this.bg.width = 1920;
	this.bg.height = 1080;
	/*
	 * this.PlayerRun = this.addPlayer(-700, 200); this.PlayerRun.play("run");
	 * 
	 * this.game.add.tween(this.PlayerRun).to({ x : 700, y : 200 }, 4000,
	 * "Linear", true);
	 */
	this.coun = this.addCount(320, 250);

	this.game.time.events.add(Phaser.Timer.SECOND * 4, fadePicture, this);
	this.game.time.events.add(Phaser.Timer.SECOND * 4, ConS, this);

	// Here we'll create a basic timed event. This is a one-off event, it won't
	// repeat or loop:
	// The first parameter is how long to wait before the event fires. In this
	// case 4 seconds (you could pass in 4000 as the value as well.)
	// The next parameter is the function to call ('fadePicture') and finally
	// the context under which that will happen.
	this.Ugrade = this.add.text(220, 280, "Your Grade.", {
		font : '80px ZoodHarit8Bit',
		fill : 'white'
	});
	this.Ugrade.stroke = "black";
	this.Ugrade.strokeThickness = 5;

	this.button1 = this.game.add.sprite(460, 305, "button2");
	this.button1.scale.set(1.25);
	this.button1.inputEnabled = true;
	this.button1.events.onInputDown.add(this.NextY, this);

	this.butTxt1 = this.add.text(473, 304, "Go to Next Year", {
		font : '35px ZoodHarit8Bit',
		fill : 'white'
	}, this.ui);
	this.butTxt1.stroke = "black";
	this.butTxt1.strokeThickness = 5;

	this.button2 = this.game.add.sprite(30, 305, "button3");
	this.button2.scale.set(1.25);
	this.button2.inputEnabled = true;
	this.button2.events.onInputDown.add(this.Resi, this);
	this.butTxt2 = this.add.text(50, 304, "Resign College!", {
		font : '35px ZoodHarit8Bit',
		fill : 'white'
	}, this.ui);
	this.butTxt2.stroke = "black";
	this.butTxt2.strokeThickness = 5;
	this.wow = this.add.sound("wow", 2, false);
	this.kid = this.add.sound("Kids", 2, false);
	this.ho = this.add.sound("OH", 2, false);
	this.baby = this.add.sound("BABY", 2, false);
	this.hey = this.add.sound("Hey", 2, false);
	this.sad = this.add.sound("sad", 2, false);

}

function ConS() {

	
	if (this.game.score > 100) {
		this.wow.play();
	} else if (this.game.score >= 96 && this.game.score <= 100) {
		this.wow.play();
	} else if (this.game.score >= 90 && this.game.score <= 95) {
		this.kid.play();
	} else if (this.game.score >= 86 && this.game.score <= 89) {
		this.kid.play();
	} else if (this.game.score >= 80 && this.game.score <= 85) {
		this.hey.play();
	} else if (this.game.score >= 76 && this.game.score <= 79) {
		this.baby.play();
	} else if (this.game.score >= 70 && this.game.score <= 75) {
		this.ho.play();
	} else if (this.game.score >= 66 && this.game.score <= 69) {
		this.ho.play();
	} else {
		this.sad.play();
	}

}

function fadePicture() {

	this.picture = this.game.add.sprite(320/* 500 */, /* 280 */250,
			'Counting', Cscore(this.game.score));
	this.picture.scale.set(10);
	this.picture.anchor.setTo(0.5, 0.5);
	/*
	 * this.game.add.tween(this.coun).to({ x : 320, y : 250 }, 1000,
	 * "Quad.easeInOut", true); this.game.add.tween(this.picture).to({ x : 320,
	 * y : 250 }, 1000, "Quad.easeInOut", true);
	 * /*this.game.add.tween(this.PlayerRun).to({ x : 320, y : 150 }, 1000,
	 * "Quad.easeInOut", true);
	 */

	/*
	 * this.game.add.tween(this.Ugrade).to({ x : 210, y : 280 }, 1500,
	 * "Quad.easeInOut", true);
	 */

	/*
	 * this.Ugrade = this.game.add.sprite(75, 500, 'Counting', 9);
	 * this.Ugrade.scale.set(3);
	 * 
	 * this.game.add.tween(this.Ugrade).to({ x : 75, y : 175 }, 1500,
	 * "Quad.easeInOut", true);
	 * 
	 * this.game.time.events.add(Phaser.Timer.SECOND * 4, NextLevel, this);
	 */

}

Counting1.prototype.NextY = function() {
	this.ConDrum.stop();
	this.wow.stop();
	this.kid.stop();
	this.ho.stop();
	this.baby.stop();
	this.hey.stop();
	this.sad.stop();
	this.game.state.start("Level2");
};

Counting1.prototype.Resi = function() {
	this.ConDrum.stop();
	this.wow.stop();
	this.kid.stop();
	this.ho.stop();
	this.baby.stop();
	this.hey.stop();
	this.sad.stop();
	this.game.state.start("Menu");
};

function Cscore(score) {
	if (score > 100) {
		return 0;
	} else if (score >= 96 && score <= 100) {
		return 1;
	} else if (score >= 90 && score <= 95) {
		return 2;
	} else if (score >= 86 && score <= 89) {
		return 3;
	} else if (score >= 80 && score <= 85) {
		return 4;
	} else if (score >= 76 && score <= 79) {
		return 5;
	} else if (score >= 70 && score <= 75) {
		return 6;
	} else if (score >= 66 && score <= 69) {
		return 7;
	} else {
		return 8;
	}

}

function gframes(key, n) {
	var f = [];
	for (var i = 0; i <= n; i++) {
		var kf = key + "_" + i;
		f.push(kf);
	}
	return f;
}

Counting1.prototype.addPlayer = function(x, y) {
	J = this.add.sprite(x, y, "JimmyMotion");
	J.scale.set(4);
	J.animations.add("idle", gframes("idle", 1), 5, true);
	J.animations.add("jump", gframes("jump", 0), 1, true);
	J.animations.add("run", gframes("run", 7), 10, true);
	J.anchor.set(0.5, 0.5);
	J.smoothed = false;
	return J;
};

Counting1.prototype.addCount = function(x, y) {
	C = this.add.sprite(x, y, "Counting");
	C.scale.set(10);
	C.animations.add("run", gframes("Counting", 8), 40, true);
	C.anchor.set(0.5, 0.5);
	C.smoothed = false;
	C.play("run");
	return C;
};
