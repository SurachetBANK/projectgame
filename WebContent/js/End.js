/**
 * 
 */
function End() {
	Phaser.State.call(this);
}

/** @type Phaser.State */
var proto = Object.create(Phaser.State);
End.prototype = proto;

End.prototype.preload = function() {
	this.load.pack("End", "assets/assets-pack.json");

};

End.prototype.create = function() {
	this.game.time.events.add(Phaser.Timer.SECOND * 2, kids, this);
	this.bg = this.game.add.sprite(0, 0, "hall");
	this.bg.width = 640;
	this.bg.height = 360;
	// this.bg.fixedToCamera = true;
	// video = this.game.add.video('End');

	// video.play();

	// x, y, anchor x, anchor y, scale x, scale y
	// video.addToWorld();
	this.PlayerRun1 = this.addPlayer(320, 500);
	this.game.add.tween(this.PlayerRun1).to({
		x : 320,
		y : 320
	}, 2000, "Quad.easeInOut", true);
	this.Cong = this.add.text(150, -150, "Congratulation", {
		font : '100px ZoodHarit8Bit',
		fill : 'white'
	}, this.ui);
	this.Cong.stroke = "black";
	this.Cong.strokeThickness = 10;
	this.game.add.tween(this.Cong).to({
		x : 150,
		y : 25
	}, 2000, "Quad.easeInOut", true);

	this.game.time.events.add(Phaser.Timer.SECOND * 5, ConSEND, this);

};

function ConSEND() {
	this.button1 = this.game.add.sprite(483, 315, "button3");
	this.button1.scale.set(1.25);
	this.button1.inputEnabled = true;
	this.button1.events.onInputDown.add(this.Menu, this);
	this.button1.alpha = 0;

	this.game.add.tween(this.button1).to({
		alpha : 1
	}, 4000, "Quad.easeInOut", true);

	this.butTxt1 = this.add.text(508, 314, "Happy Ending", {
		font : '35px ZoodHarit8Bit',
		fill : 'white'
	}, this.ui);
	this.butTxt1.stroke = "black";
	this.butTxt1.strokeThickness = 5;
	this.butTxt1.alpha = 0;
	this.game.add.tween(this.butTxt1).to({
		alpha : 1
	}, 4000, "Quad.easeInOut", true);
	
	this.game.time.events.add(Phaser.Timer.SECOND * 10, TimOt, this);
}

function kids() {
	this.kid = this.add.sound("Kids", 2, false);
	this.kid.play();
}

function TimOt() {
	this.game.state.start("Menu");
}
End.prototype.Menu = function() {
	this.game.state.start("Menu");
};

function gframes(key, n) {
	var f = [];
	for (var i = 0; i <= n; i++) {
		var kf = key + "_" + i;
		f.push(kf);
	}
	return f;
}

End.prototype.addPlayer = function(x, y) {
	J = this.add.sprite(x, y, "JimmyKrui");
	J.scale.set(4);
	J.animations.add("idle", gframes("JimKruiIdle", 1), 1, true);
	J.animations.add("walk", gframes("JimKrui", 3), 1, true);
	J.anchor.set(0.5, 0.5);
	J.smoothed = false;
	J.play('idle');
	return J;
}
