/**
 * Level2 state.
 */
function Level2() {
	Phaser.State.call(this);
}

/** @type Phaser.State */
var proto = Object.create(Phaser.State);
Level2.prototype = proto;

Level2.prototype.create = function() {
	

	this.Jump = this.add.sound("Jump",2,false);
	this.Hit = this.add.sound("Hit",1.5,false);
	this.Hit.allowMultiple=true;
	this.point = this.add.sound("Coin",1,false);
	this.point.allowMultiple=true;
	// this.game.physics.startSystem(Phaser.Physics.ARCADE);
	this.physics.startSystem(Phaser.Physics.ARCADE);
	this.game.physics.arcade.gravity.y = 1000;

	this.bg = this.game.add.sprite(0, 0, "BG");
	// this.bg.fixedToCamera = true;
	this.bg.width = 1920;
	this.bg.height = 1080;

	this.map = this.game.add.tilemap("mymap1");
	this.map.addTilesetImage('street');
	this.maplayer = this.map.createLayer("Tile Layer 1");
	this.Amaplayer = this.map.createLayer("Tile Layer 2");
	this.maplayer.resizeWorld();
	this.map.setCollisionBetween(0, 99, true, this.map_layer);
	// this.addPlayer(this.world.centerX, this.world.centerY);

	this.cursor = this.input.keyboard.createCursorKeys();

	// แสดง sprite
	this.enemies = this.add.group();
	this.Gpoint = this.add.group();
	this.concat = this.add.group() ;
	this.ui = this.add.group();
	this.ui.fixedToCamera = true;
	// /////////////////////////////////////////////

	// ////////////////////////////////////
	for (x in this.map.objects.object) {
		var obj = this.map.objects.object[x];
		if (obj.type == "player") {
			console.log(this.player);
			this.player = this.addPlayer(obj.x, obj.y);
			this.game.camera.follow(this.player,
					Phaser.Camera.FOLLOW_PLATFORMER);

		} else if (obj.type == "point") {
			console.log(this.point);
			var p = this.addPoint(obj.x, obj.y);
			this.Gpoint.add(p);

		} else if (obj.type == "enemy") {
			var Enemy = this.addEGame(obj.x, obj.y);
			this.enemies.add(Enemy);
		} else if (obj.type == "enemy1") {
			var Enemy1 = this.addEWY(obj.x, obj.y);
			this.enemies.add(Enemy1);
		} else if (obj.type == "enemy2") {
			var Enemy2 = this.addEWeed(obj.x, obj.y);
			this.enemies.add(Enemy2);
		} else if (obj.type == "enemy3") {
			var Enemy3 = this.addEWeed(obj.x, obj.y);
			this.enemies.add(Enemy3);
		} else if (obj.type == "enemy4") {
			var Enemy4 = this.addEWY(obj.x, obj.y);
			this.enemies.add(Enemy4);
		} else if (obj.type == "enemy5") {
			var Enemy5 = this.addEGame(obj.x, obj.y);
			this.enemies.add(Enemy5);
		} else if (obj.type == "enemy6") {
			var Enemy6 = this.addEWeed(obj.x, obj.y);
			this.enemies.add(Enemy6);
		}else if (obj.type == "goal") {
			var goal = this.addGoal(obj.x, obj.y);
			this.concat.add(goal);
		}
	}
	this.game.score = 0;
	this.scoreText = this.add.text(this.game.width - 610, 20, "คะแนน : "
			+ this.game.score, {
		fill : 'white'
	}, this.ui);
	this.scoreText.stroke = "black";
	this.scoreText.strokeThickness = 5;

};

function gframes(key, n) {
	var f = [];
	for (var i = 0; i <= n; i++) {
		var kf = key + "_" + i;
		f.push(kf);
	}
	return f;
}

Level2.prototype.addGoal = function(x, y) {
	J = this.add.sprite(x, y, "NextYear");
	J.animations.add("idle", gframes("NextY", 9), 5, true);
	J.anchor.set(0.5, 0.5);
	J.smoothed = false;
	this.game.physics.arcade.enable(J);
	this.game.physics.enable(J);
	this.game.physics.arcade.gravity.y = 1000;     
	J.play("idle");
	J.body.collideWorldBounds = true;
	return J;
};

Level2.prototype.addPlayer = function(x, y) {
	J = this.add.sprite(x, y, "JimmyMotion");
	J.animations.add("idle", gframes("idle", 1), 5, true);
	J.animations.add("jump", gframes("jump", 0), 1, true);
	J.animations.add("run", gframes("run", 7), 10, true);
	J.anchor.set(0.5, 0.5);
	J.smoothed = false;
	this.game.physics.arcade.enable(J);
	this.game.physics.enable(J);
	this.game.physics.arcade.gravity.y = 1000;
	J.play("idle");
	J.body.collideWorldBounds = true;
	return J;
};

Level2.prototype.addEGame = function(x, y) {
	G = this.add.sprite(x, y, "EGame");
	G.animations.add("idle", gframes("sprite", 3), 5, true);
	G.anchor.set(0.5, 0.5);
	G.smoothed = false;
	this.game.physics.arcade.enable(G);
	this.game.physics.enable(G);
	this.game.physics.arcade.gravity.y = 1000;
	G.play("idle");
	G.body.collideWorldBounds = true;
	return G;
};

Level2.prototype.addEWY = function(x, y) {
	G = this.add.sprite(x, y, "EWY");
	G.animations.add("idle", gframes("sprite", 1), 3, true);
	G.anchor.set(0.5, 0.5);
	G.smoothed = false;
	this.game.physics.arcade.enable(G);
	this.game.physics.enable(G);
	this.game.physics.arcade.gravity.y = 1000;
	G.play("idle");
	G.body.collideWorldBounds = true;
	return G;
};

Level2.prototype.addEWeed = function(x, y) {
	G = this.add.sprite(x, y, "EWeed");
	G.animations.add("idle", gframes("sprite", 1), 3, true);
	G.anchor.set(0.5, 0.5);
	G.smoothed = false;
	this.game.physics.arcade.enable(G);
	this.game.physics.enable(G);
	this.game.physics.arcade.gravity.y = 1000;
	G.play("idle");
	G.body.collideWorldBounds = true;
	return G;
};

Level2.prototype.addPoint = function(x, y) {

	P = this.add.sprite(x, y, "Point");
	// this.game.physics.arcade.enable(P);
	P.animations.add("idle", gframes("point", 7), 2, true);
	P.anchor.set(0.5, 1);
	P.smoothed = false;
	this.game.physics.enable(P);
	P.play("idle");
	P.body.collideWorldBounds = true;
	return P;

};

Level2.prototype.update = function() {
	this.game.physics.arcade.collide(this.player, this.maplayer);
	this.game.physics.arcade.collide(this.Gpoint, this.maplayer);
	this.game.physics.arcade.collide(this.enemies, this.maplayer);
	this.game.physics.arcade.collide(this.concat, this.maplayer);

	this.physics.arcade.collide(this.Gpoint, this.player, this.onCollidePlayerPoint, null,
			this);
	this.physics.arcade.collide(this.enemies, this.player, this.onCollidePlayerEnemy, null,
			this);
	this.physics.arcade.collide(this.concat, this.player, this.onCollidePlayerConcat, null,
			this);

	// //////////
	if (this.cursor.left.isDown) {
		this.player.scale.x = -1;
		this.player.body.velocity.x = 250 * -1;
		this.player.play("run");
		if (this.cursor.up.isDown) {
			if (this.player.body.velocity.y == 0) {
				this.player.body.velocity.y = -350;
				this.player.play("jump");
				this.Jump.play();
			}
			
		}
	} else if (this.cursor.right.isDown) {
		this.player.scale.x = 1;
		this.player.body.velocity.x = 250;
		this.player.play("run");
		if (this.cursor.up.isDown) {
			if (this.player.body.velocity.y == 0) {
				this.player.body.velocity.y = -350;		
				this.player.play("jump");
				this.Jump.play();
			}
			
		}
	} else if (this.cursor.up.isDown) {
		if (this.player.body.velocity.y == 0) {
			this.player.body.velocity.y = -350;
			this.player.play("jump");
			this.Jump.play();
		}
	} else {
		this.player.play("idle");
		this.player.body.velocity.x = 0;
	}
	
	this.enemies.forEachAlive(function(enemy){
		if(this.math.distance(this.player.x,this.player.y,enemy.x,enemy.y)<200){
			
			
			this.physics.arcade.moveToObject(enemy, this.player, enemy.speed);
			
			
			if(enemy.body.velocity.y<0){
				enemy.body.velocity.y = 0;
			}
			
		
		}
	},this);
	
};

Level2.prototype.onCollidePlayerPoint = function(player, Gpoint) {
	Gpoint.kill();
	this.game.score = this.game.score + 5;
	this.scoreText.text = "คะแนน : " + this.game.score;
	this.point.play();

};

Level2.prototype.onCollidePlayerEnemy = function(player, enemies) {
	player.canHit = false;
	enemies.canHit = false;
	this.Hit.play();
	player.body.velocity.y = -300;
	this.game.score = this.game.score -1;
	this.scoreText.text = "คะแนน : " + this.game.score;
};

Level2.prototype.onCollidePlayerConcat = function(player, concats){
	//this.BGmusic.stop();
	this.game.state.start("Level",true,false,this.player);
	};

