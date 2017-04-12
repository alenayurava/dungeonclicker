var loadAssets = function loadAssets(game) {
	game.load.image('torpeda', 'assets/Interface/expGold.png');
	game.load.image('leftStats', 'assets/Interface/HPNRG.png');
	game.load.image('rightStats', 'assets/Interface/STRDEF.png');
	game.load.image('keys', 'assets/Interface/Keys.png');
	game.load.image('menu', 'assets/Interface/Menu.png');
	game.load.image('redButton', 'assets/Interface/StrUP.png');
	game.load.image('blueButton', 'assets/Interface/DefUP.png');
	game.load.image('addLevel', 'assets/Interface/AddLevel.png');

	game.load.image('caveExp', 'assets/Level/Tiles/Cave01.png');
	game.load.image('cave1', 'assets/Level/Tiles/Cave01.png');
	game.load.image('cave2', 'assets/Level/Tiles/Cave02.png');
	game.load.image('cave3', 'assets/Level/Tiles/Cave03.png');
	game.load.image('silverLock', 'assets/Stuff/Silverlock.png');
	game.load.image('goldenLock', 'assets/Stuff/Goldenlock.png');

	//main menu
	game.load.image('backMenu', 'assets/MainMenu/clickerquest.png');
	game.load.image('achivementsButton', 'assets/MainMenu/achivki.png');
	game.load.image('exitButton', 'assets/MainMenu/exit.png');
	game.load.image('optionsButton', 'assets/MainMenu/options.png');
	game.load.image('playButton', 'assets/MainMenu/play.png');

	//light
	game.load.image('lampBig', 'assets/Level/torch1.png');
	game.load.image('lampLittle', 'assets/Level/torch2.png');
	game.load.image('light', 'assets/Level/light.png');
	game.load.image('shadow', 'assets/Level/shadow.png');

	//resources
	game.load.spritesheet('goldLittle', 'assets/Stuff/gold1/gold1.png', 56, 40);
	game.load.spritesheet('goldMiddle', 'assets/Stuff/gold2/gold2.png', 87, 59);
	game.load.spritesheet('goldBig', 'assets/Stuff/gold3/gold3.png', 101, 65);

	//backs
	game.load.image('backCave', 'assets/Level/backCave.png');
	game.load.image('backLibr', 'assets/Level/backLibr.png');
	game.load.image('backSwamp', 'assets/Level/backSwamp.png');

	//personages
	game.load.spritesheet('block', 'assets/Chars/Block/Block.png', 48, 48);
	game.load.spritesheet('crit', 'assets/Chars/Crit/Crit.png', 56, 49);
	game.load.spritesheet('evasion', 'assets/Chars/Evasion/Evasion.png', 38, 54);
	game.load.spritesheet('lifesteel', 'assets/Chars/Lifesteel/Lifesteel.png', 39, 45);
	game.load.spritesheet('regen', 'assets/Chars/Regen/Regen.png', 42, 52);

	//load monsters
	//cave
	game.load.spritesheet('angryCyclope', 'assets/Monsters/Cave/AngryCyclope/AngryCyclope.png', 176, 84);
	game.load.spritesheet('angryRectangularJellyfish', 'assets/Monsters/Cave/AngryRectangularJellyfish/AngryRectangularJellyfish.png', 50, 79);
	game.load.spritesheet('beholder', 'assets/Monsters/Cave/Beholder/Beholder.png', 64, 88);
	game.load.spritesheet('blob', 'assets/Monsters/Cave/Blob/Blob.png', 47, 30);
	game.load.spritesheet('ghost', 'assets/Monsters/Cave/Ghost/Ghost.png', 78, 82);
	game.load.spritesheet('giantWorm', 'assets/Monsters/Cave/GiantWorm/GiantWorm.png', 53, 87);
	game.load.spritesheet('halfaGolem', 'assets/Monsters/Cave/HalfaGolem/HalfaGolem.png', 83, 48);
	game.load.spritesheet('kingSnake', 'assets/Monsters/Cave/KingSnake/KingSnake.png', 147, 31);
	game.load.spritesheet('mimic', 'assets/Monsters/Cave/Mimic/Mimic.png', 61, 55);

	//hauntedLibrary
	game.load.spritesheet('bat', 'assets/Monsters/HauntedLibrary/Bat/Bat.png', 148, 50);
	game.load.spritesheet('bokWorm', 'assets/Monsters/HauntedLibrary/BookWorm/BookWorm.png', 82, 116);
	game.load.spritesheet('bust', 'assets/Monsters/HauntedLibrary/Bust/Bust.png', 45, 50);
	game.load.spritesheet('candle', 'assets/Monsters/HauntedLibrary/Candle/Candle.png', 120, 103);
	game.load.spritesheet('evilBook', 'assets/Monsters/HauntedLibrary/EvilBook/EvilBook.png', 102, 63);
	game.load.spritesheet('flyingBrain', 'assets/Monsters/HauntedLibrary/FlyingBrain/FlyingBrain.png', 163, 100);
	game.load.spritesheet('hauntedPainting', 'assets/Monsters/HauntedLibrary/HauntedPainting/HauntedPainting.png', 174, 204);
	game.load.spritesheet('killerOttoman', 'assets/Monsters/HauntedLibrary/KillerOttoman/KillerOttoman.png', 50, 46);

	//swamp
	game.load.spritesheet('evilReed', 'assets/Monsters/Swamp/EvilReed/EvilReed.png', 63, 140);
	game.load.spritesheet('fly', 'assets/Monsters/Swamp/Fly/Fly.png', 53, 50);
	game.load.spritesheet('giantSpider', 'assets/Monsters/Swamp/GiantSpider/GiantSpider.png', 130, 87);
	game.load.spritesheet('giantsSkullInEktoplasm', 'assets/Monsters/Swamp/GiantsSkullInEktoplasm/GiantsSkullInEktoplasm.png', 89, 86);
	game.load.spritesheet('maggot', 'assets/Monsters/Swamp/Maggot/Maggot.png', 102, 38);
	game.load.spritesheet('shapeshifter', 'assets/Monsters/Swamp/Shapeshifter/Shapeshifter.png', 104, 94);
	game.load.spritesheet('zombie', 'assets/Monsters/Swamp/Zombie/Zombie.png', 44, 56);
};