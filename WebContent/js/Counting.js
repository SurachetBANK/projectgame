/**
 * Counting state.
 */
function Counting() {
	Phaser.State.call(this);
}

/** @type Phaser.State */
var proto = Object.create(Phaser.State);
Counting.prototype = proto;

Counting.prototype.create = function() {
	

	this.ConDrum = this.add.sound("Drum", 1, false);
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
	this.PlayerRun = this.addPlayer(-700, 200);
	this.PlayerRun.play("run");

	this.game.add.tween(this.PlayerRun).to({
		x : 500,
		y : 200
	}, 4000, "Linear", true);
	this.coun = this.addCount(500, 280);

	this.game.time.events.add(Phaser.Timer.SECOND * 4, fadePicture, this);

	// Here we'll create a basic timed event. This is a one-off event, it won't
	// repeat or loop:
	// The first parameter is how long to wait before the event fires. In this
	// case 4 seconds (you could pass in 4000 as the value as well.)
	// The next parameter is the function to call ('fadePicture') and finally
	// the context under which that will happen.

}

function fadePicture() {

	this.picture = this.game.add.sprite(500, 280, 'Counting',
			Cscore(this.game.score));
	this.picture.scale.set(10);
	this.picture.anchor.setTo(0.5, 0.5);
	this.game.add.tween(this.coun).to({
		x : 320,
		y : 250
	}, 1000, "Quad.easeInOut", true);
	this.game.add.tween(this.picture).to({
		x : 320,
		y : 250
	}, 1000, "Quad.easeInOut", true);
	this.game.add.tween(this.PlayerRun).to({
		x : 320,
		y : 150
	}, 1000, "Quad.easeInOut", true);

	this.Ugrade = this.game.add.sprite(75, 500, 'Counting', 9);
	this.Ugrade.scale.set(3);

	this.game.add.tween(this.Ugrade).to({
		x : 75,
		y : 175
	}, 1500, "Quad.easeInOut", true);

	this.game.time.events.add(Phaser.Timer.SECOND * 4, NextLevel, this);
}

function NextLevel() {
	this.game.state.start("Level1", true, false, this.BGmusic);
}

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

Counting.prototype.addPlayer = function(x, y) {
	J = this.add.sprite(x, y, "JimmyMotion");
	J.scale.set(4);
	J.animations.add("idle", gframes("idle", 1), 5, true);
	J.animations.add("jump", gframes("jump", 0), 1, true);
	J.animations.add("run", gframes("run", 7), 10, true);
	J.anchor.set(0.5, 0.5);
	J.smoothed = false;
	return J;
};

Counting.prototype.addCount = function(x, y) {
	C = this.add.sprite(x, y, "Counting");
	C.scale.set(10);
	C.animations.add("run", gframes("Counting", 8), 40, true);
	C.anchor.set(0.5, 0.5);
	C.smoothed = false;
	C.play("run");
	return C;
};
