window.onload = function() {
	// Create your Phaser game and inject it into an auto-created canvas.
	// We did it in a window.onload event, but you can do it anywhere (requireJS
	// load, anonymous function, jQuery dom ready, - whatever floats your boat)
	//var game = new Phaser.Game(1920, 1080, Phaser.AUTO);
	var game = new Phaser.Game(640, 360, Phaser.AUTO);
	//var game = new Phaser.Game(480, 270, Phaser.AUTO);
	// Add the States your game has.
	game.state.add("Boot", Boot);
	game.state.add("Menu", Menu);
	game.state.add("Preload", Preload);
	game.state.add("Level0", Level0);
	game.state.add("Level1", Level1);
	game.state.add("Level2", Level2);
	game.state.add("Story", Story);
	game.state.add("Howtoplay", Howtoplay);
	game.state.add("End", End);
	
	// Now start the Boot state.
	game.state.start("Boot");
};
