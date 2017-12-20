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

};

Story.prototype.create = function() {

	this.havy = this.add.sound("Heavenly", 2, false);
	this.bg3 = this.game.add.sprite(0, 0, "StoBG");
	this.bg3.width = 640;
	this.bg3.height = 360;
	this.bg3.alpha = 0;
	this.game.add.tween(this.bg3).to({
		alpha : 1
	}, 2000, "Quad.easeInOut", true);
	this.Player = this.addPlayer(-100, 320);
	this.Player.play('run')
	this.game.add.tween(this.Player).to({
		x : 325,
		y : 320
	}, 4000, "Quad.easeInOut", true);

	this.game.time.events.add(Phaser.Timer.SECOND * 4, LV1, this);

	this.button1 = this.game.add.sprite(10, 315, "button3");
	this.button1.scale.set(1.25);
	this.button1.inputEnabled = true;
	this.button1.events.onInputDown.add(this.GotoMenu, this);

	this.butTxt1 = this.add.text(30, 314, "Back to Menu", {
		font : '35px ZoodHarit8Bit',
		fill : 'white'
	}, this.ui);
	this.butTxt1.stroke = "black";
	this.butTxt1.strokeThickness = 5;

};

function LV1() {
	this.Player.play('idle')
	this.Player.scale.x = -4
	this.Cong1 = this.add.text(150, -150, "จิมมี่ เข้าศึกษาในระดับมหาวิทยาลัย",
			{
				font : '100px ZoodHarit8Bit',
				fill : 'white'
			}, this.ui);
	this.Cong1.stroke = "black";
	this.Cong1.strokeThickness = 5;
	this.game.add.tween(this.Cong1).to({
		x : 25,
		y : 25
	}, 2000, "Quad.easeInOut", true);
	this.game.time.events.add(Phaser.Timer.SECOND * 4, LV11, this);
}

function LV11() {
	this.game.add.tween(this.Cong1).to({
		x : 2500,
		y : 25
	}, 2000, "Quad.easeInOut", true);

	this.Cong2 = this.add.text(150, -150, "เขาต้องคอยเก็บคะแนนการทำงาน", {
		font : '100px ZoodHarit8Bit',
		fill : 'white'
	}, this.ui);
	this.Cong2.stroke = "black";
	this.Cong2.strokeThickness = 5;
	this.game.add.tween(this.Cong2).to({
		x : 35,
		y : 25
	}, 2000, "Quad.easeInOut", true);
	this.game.time.events.add(Phaser.Timer.SECOND * 2, LV12, this);
}

function LV12() {
	this.point1 = this.add.sprite(-30, 150, "Point");
	this.point1.scale.set(3);
	this.point1.smoothed = false;
	this.game.add.tween(this.point1).to({
		x : 250,
		y : 325
	}, 2000, "Quad.easeInOut", true);

	this.point2 = this.add.sprite(670, 150, "Point");
	this.point2.scale.set(3);
	this.point2.smoothed = false;
	this.game.add.tween(this.point2).to({
		x : 350,
		y : 325
	}, 2000, "Quad.easeInOut", true);
	this.game.time.events.add(Phaser.Timer.SECOND * 2, LV13, this);

	// this.point1.scale.x = -0;
}

function LV13() {
	this.bling = this.add.sound("Coin", 2, false);
	this.bling.play();
	this.point1.scale.x = -0;
	this.point2.scale.x = -0;
	this.game.add.tween(this.Cong2).to({
		x : 2500,
		y : 25
	}, 2000, "Quad.easeInOut", true);
	this.game.time.events.add(Phaser.Timer.SECOND * 1, LV2, this);

	this.button1 = this.game.add.sprite(10, 315, "button3");
	this.button1.scale.set(1.25);
	this.button1.inputEnabled = true;
	this.button1.events.onInputDown.add(this.GotoMenu, this);

	this.butTxt1 = this.add.text(30, 314, "Back to Menu", {
		font : '35px ZoodHarit8Bit',
		fill : 'white'
	}, this.ui);
	this.butTxt1.stroke = "black";
	this.butTxt1.strokeThickness = 5;

}

function LV2() {

	this.bg2 = this.game.add.sprite(0, 0, "vice");
	this.bg2.width = 640;
	this.bg2.height = 360;
	this.bg2.alpha = 1;
	this.Cong2 = this.add.text(150, -150, "และต้องเอาตัวรอดจากอบายมุข", {
		font : '100px ZoodHarit8Bit',
		fill : 'white'
	}, this.ui);
	this.Cong2.stroke = "black";
	this.Cong2.strokeThickness = 5;
	this.game.add.tween(this.Cong2).to({
		x : 50,
		y : 25
	}, 2000, "Quad.easeInOut", true);

	this.butTxt1.stroke = "black";
	this.butTxt1.strokeThickness = 5;
	this.Player2 = this.addPlayer(325 - 400, 325);
	this.Player2.play('jump');
	//      
	this.E1 = this.addBeer(250 - 400, 325);
	this.E2 = this.addEGame(250 - 60 - 400, 325 - 60);
	this.E3 = this.addCigarOF(250 - 120 - 400, 325);
	this.E4 = this.addCigar(250 - 180 - 400, 325 - 60);
	this.E5 = this.addEWeed(250 - 240 - 400, 325);
	this.E6 = this.addEWY(-50 - 400, 325 - 60);
	this.E7 = this.addBuree(-110 - 400, 325);

	this.game.add.tween(this.Player2).to({
		x : 1300,
		y : 325
	}, 6000, "Quad.easeInOut", true);

	this.game.add.tween(this.E1).to({
		x : 1300 - 75,
		y : 325
	}, 6000, "Quad.easeInOut", true);

	this.game.add.tween(this.E2).to({
		x : 1300 - 75 - 75,
		y : 325 - 60
	}, 6000, "Quad.easeInOut", true);

	this.game.add.tween(this.E3).to({
		x : 1300 - 75 - 75 - 75,
		y : 325
	}, 6000, "Quad.easeInOut", true);

	this.game.add.tween(this.E4).to({
		x : 1300 - 75 - 75 - 75 - 75,
		y : 325 - 60
	}, 6000, "Quad.easeInOut", true);

	this.game.add.tween(this.E5).to({
		x : 1300 - 75 - 75 - 75 - 75 - 75,
		y : 325
	}, 6000, "Quad.easeInOut", true);

	this.game.add.tween(this.E6).to({
		x : 1300 - 75 - 75 - 75 - 75 - 75 - 75,
		y : 325 - 60
	}, 6000, "Quad.easeInOut", true);

	this.game.add.tween(this.E7).to({
		x : 1300 - 75 - 75 - 75 - 75 - 75 - 75 - 75,
		y : 325
	}, 6000, "Quad.easeInOut", true);

	this.button1 = this.game.add.sprite(10, 315, "button3");
	this.button1.scale.set(1.25);
	this.button1.inputEnabled = true;
	this.button1.events.onInputDown.add(this.GotoMenu, this);

	this.butTxt1 = this.add.text(30, 314, "Back to Menu", {
		font : '35px ZoodHarit8Bit',
		fill : 'white'
	}, this.ui);

	this.butTxt1.stroke = "black";
	this.butTxt1.strokeThickness = 5;

	this.game.time.events.add(Phaser.Timer.SECOND * 6, LV31, this);
}

function LV31() {
	this.bg3 = this.game.add.sprite(0, 0, "hall");
	this.bg3.width = 640;
	this.bg3.height = 360;
	this.bg3.alpha = 0;
	this.game.add.tween(this.bg3).to({
		alpha : 1
	}, 2000, "Quad.easeInOut", true);

	this.Cong = this.add.text(150, -150, "เพื่อเป้าหมายสูงสุดของเขา คือ...", {
		font : '100px ZoodHarit8Bit',
		fill : 'white'
	}, this.ui);
	this.Cong.stroke = "black";
	this.Cong.strokeThickness = 5;
	this.game.add.tween(this.Cong).to({
		x : 50,
		y : 25
	}, 2000, "Quad.easeInOut", true);

	this.button1 = this.game.add.sprite(10, 315, "button3");
	this.button1.scale.set(1.25);
	this.button1.inputEnabled = true;
	this.button1.events.onInputDown.add(this.GotoMenu, this);

	this.butTxt1 = this.add.text(30, 314, "Back to Menu", {
		font : '35px ZoodHarit8Bit',
		fill : 'white'
	}, this.ui);
	this.butTxt1.stroke = "black";
	this.butTxt1.strokeThickness = 5;
	this.game.time.events.add(Phaser.Timer.SECOND * 5, LV32, this);
}

function LV32() {
	this.game.add.tween(this.Cong).to({
		x : 2500,
		y : 25
	}, 2000, "Quad.easeInOut", true);
	// this.bg.fixedToCamera = true;
	// video = this.game.add.video('Story');

	// video.play();

	// x, y, anchor x, anchor y, scale x, scale y
	// video.addToWorld();
	this.PlayerKrui = this.addPlayerKrui(320, 500);
	this.game.add.tween(this.PlayerKrui).to({
		x : 320,
		y : 320
	}, 2000, "Quad.easeInOut", true);

	this.Cong = this.add.text(150, -150, "การได้เป็นบัณฑิต นั่นเอง", {
		font : '100px ZoodHarit8Bit',
		fill : 'white'
	}, this.ui);
	this.Cong.stroke = "black";
	this.Cong.strokeThickness = 5;
	this.game.add.tween(this.Cong).to({
		x : 107,
		y : 25
	}, 2000, "Quad.easeInOut", true);

	this.button1 = this.game.add.sprite(10, 315, "button3");
	this.button1.scale.set(1.25);
	this.button1.inputEnabled = true;
	this.button1.events.onInputDown.add(this.GotoMenu, this);

	this.butTxt1 = this.add.text(30, 314, "Back to Menu", {
		font : '35px ZoodHarit8Bit',
		fill : 'white'
	}, this.ui);
	this.butTxt1.stroke = "black";
	this.butTxt1.strokeThickness = 5;
	this.game.time.events.add(Phaser.Timer.SECOND * 0, hav, this);
	this.game.time.events.add(Phaser.Timer.SECOND * 20, TimOt, this);
}

function hav() {
	this.havy.play();
}

function TimOt() {
	this.game.state.start("Menu");
}

Story.prototype.GotoMenu = function() {
	this.havy.stop();
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

Story.prototype.addPlayer = function(x, y) {
	J = this.add.sprite(x, y, "JimmyMotion");
	J.scale.set(4);
	J.animations.add("idle", gframes("idle", 1), 2, true);
	J.animations.add("jump", gframes("jump", 0), 1, true);
	J.animations.add("run", gframes("run", 7), 10, true);
	J.anchor.set(0.5, 0.5);
	J.smoothed = false;
	J.play("idle");
	return J;
};

Story.prototype.addPlayerKrui = function(x, y) {
	J = this.add.sprite(x, y, "JimmyKrui");
	J.scale.set(4);
	J.animations.add("idle", gframes("JimKruiIdle", 1), 1, true);
	J.animations.add("walk", gframes("JimKrui", 3), 1, true);
	J.anchor.set(0.5, 0.5);
	J.smoothed = false;
	J.play('idle');
	return J;
};

Story.prototype.addEGame = function(x, y) {
	G = this.add.sprite(x, y, "EGame");
	G.scale.set(2);
	G.animations.add("idle", gframes("sprite", 3), 5, true);
	G.anchor.set(0.5, 0.5);
	G.smoothed = false;
	G.play("idle");
	return G;
};

Story.prototype.addEWY = function(x, y) {
	G = this.add.sprite(x, y, "EWY");
	G.scale.set(2);
	G.animations.add("idle", gframes("sprite", 1), 3, true);
	G.anchor.set(0.5, 0.5);
	G.smoothed = false;
	G.play("idle");
	return G;
};

Story.prototype.addEWeed = function(x, y) {
	G = this.add.sprite(x, y, "EWeed");
	G.scale.set(2);
	G.animations.add("idle", gframes("sprite", 1), 3, true);
	G.anchor.set(0.5, 0.5);
	G.smoothed = false;
	G.play("idle");
	return G;
};

Story.prototype.addCigar = function(x, y) {
	G = this.add.sprite(x, y, "Cigar");
	G.scale.set(2);
	G.animations.add("idle", gframes("cigarette", 1), 3, true);
	G.anchor.set(0.5, 0.5);
	G.smoothed = false;
	G.play("idle");
	return G;
};

Story.prototype.addCigarOF = function(x, y) {
	G = this.add.sprite(x, y, "cigarOF");
	G.scale.set(2);
	G.animations.add("idle", gframes("cigaretteONF", 1), 3, true);
	G.anchor.set(0.5, 0.5);
	G.smoothed = false;
	G.play("idle");
	return G;
};

Story.prototype.addBuree = function(x, y) {
	G = this.add.sprite(x, y, "buree");
	G.scale.set(2);
	G.animations.add("idle", gframes("buree", 1), 3, true);
	G.anchor.set(0.5, 0.5);
	G.smoothed = false;
	G.play("idle");
	return G;
};

Story.prototype.addBeer = function(x, y) {
	G = this.add.sprite(x, y, "beer");
	G.scale.set(2);
	G.animations.add("idle", gframes("beer", 1), 3, true);
	G.anchor.set(0.5, 0.5);
	G.smoothed = false;
	G.play("idle");
	return G;
};