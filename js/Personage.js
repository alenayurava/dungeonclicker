//Типы персонажей
//1.шанс крита: 0 (начальное значение), +0-75% (от чего до чего прокачивается). 0,25 за лвл
//2.блок\деф: 0,  всегда блочит +0-75% урона.
//3.ответный урон: 0, +0-75% от полученного урона
//4.реген энергии: 1, х0-300%
//5.реген хп: 1, х0-300%
//6.уворот: 0, +0-75%
//7.лайфстил: 0,  +0-100%
//8.хп: 100, +0-3009.энергия: 50, +0-150
//10.сила крита: 200% х0-100%.
//11. атака: +Х-ХХХ
//12. убийство: +0-10%
//13. возрождение: +0-10%
//14. стун: +0-75%

var types = ['block','crit','evasion','lifesteel','regen'];


var Personage = function (game, type, x, y) {
	Phaser.Group.call(this, game);

	var self = this;

	this.type = type;
	this.level = 1;

	var bmd = game.add.bitmapData(70,103);

    // draw to the canvas context like normal
    bmd.ctx.beginPath();
    bmd.ctx.rect(0,0,90,128);
    bmd.ctx.fillStyle = '#111111';
    bmd.ctx.fill();

    // use the bitmap data as the texture for the sprite
    var sprite = game.add.sprite(x, y, bmd);

    var anim = game.add.sprite(x,y,types[this.type]);
    anim.x = x + (sprite.width - anim.width) / 2;
    anim.y = y + (sprite.height - anim.height) / 2;
    anim.animations.add('anim', [1, 2, 3, 4, 3, 2], 8, false);
    anim.animations.play('anim', 4, true);

    this.textLvl = game.add.text(x, y + 7, 'LVL ' + this.level, { font:'12px Verdana', fill: '#f7941d'});
    this.textLvl.x = x + (sprite.width - this.textLvl.width) / 2;

    this.price = game.add.text(x, y + 82, '5000 G', { font:'12px Verdana', fill: '#f7941d'});
    this.price.x = x + (sprite.width - this.price.width) / 2;

    this.buyBttn = game.add.button(x, y, 'addLevel', onBuyClick, game);
    this.buyBttn.x = x + (sprite.width - this.buyBttn.width) / 2;
    this.buyBttn.y = y - this.buyBttn.height;
}

function onBuyClick() {
	console.log('BUY CLICK');
}

// Extend from Phaser.Group
Personage.prototype = Object.create(Phaser.Group.prototype);
Personage.prototype.constructor = Personage;