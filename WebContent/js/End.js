/**
 *
 */
function End() {
	Phaser.State.call(this);
}

/** @type Phaser.State */
var proto = Object.create(Phaser.State);
End.prototype = proto;

End.prototype.create = function() {

	   
	   var sprite = this.add.sprite(this.world.centerX, this.world.centerY,
		"sp");
	   sprite.anchor.set(0.5, 0.5);
	   sprite.inputEnabled = true;
	   sprite.events.onInputDown.add(this.startGame, this);

	};

End.prototype.startGame = function() {
		this.game.state.start("Menu");
	};