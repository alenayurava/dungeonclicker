var back;

var achivementsBttn;
var optionsBttn;
var playBttn;
var exitBttn;

var createMenu = function(game) {
	back = game.add.sprite(0, 0, 'backMenu');

	playBttn = game.add.button(230, 220, 'playButton', onPlayClick, game);
	achivementsBttn = game.add.button(playBttn.x + playBttn.width + 2, playBttn.y, 'achivementsButton', onAchivementsClick, game);
	optionsBttn = game.add.button(achivementsBttn.x, achivementsBttn.y + achivementsBttn.height + 3, 'optionsButton', onOptionsClick, game);
	exitBttn = game.add.button(optionsBttn.x + optionsBttn.width + 3, optionsBttn.y,'exitButton', onExitClick, game);
}

function onAchivementsClick() {
	console.log('ACHIVEMENTS CLICK');
}

function onOptionsClick() {
	console.log('OPTIONS CLICK');
}

function onPlayClick() {
	console.log('PLAY CLICK');
	dispose();
	game.state.start('Game', false, false);
}

function onExitClick() {
	console.log('EXIT CLICK');
}

function dispose() {
	back.kill();
	playBttn.kill();
	achivementsBttn.kill();
	optionsBttn.kill();
	exitBttn.kill();
}