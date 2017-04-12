

var BezieDrop = function (game, object, text) {
	 Phaser.Group.call(this, game);

	var self = this;
	var game = game;

	var _x = 0;
	var _y = 0;

	//this.obj = new Phaser.Text(null, 0, 13, text, { font:'14px Verdana', fill: '#f7941d'});
	this.obj = this.game.add.text(0, 13, text, { font:'14px Verdana', fill: '#f7941d'});
	this.obj.x = game.input.x;
	this.obj.y = game.input.y;

	var Xs = this.obj.x;
	var Ys = this.obj.y;

	var Xf = this.obj.x + (Math.random() * object.width) - object.width/2;
	var Yf = this.obj.y + (Math.random() * object.height);

	var N = 200;
	var dY = Math.random() * 3;
	var addY = 0;
	var directionX = (Math.random() * 3) - 1.5;
	var step = 0;
	var k = 0;

	this.move = function() {
		_x += 3;
		_y = Math.abs(N * Math.sin(0.1 * _x));
		N += ( -N) / 10;
		addY += dY;

		if (_x >= 96)	{
			var timer2 = game.time.events.add(Phaser.Timer.SECOND * 3, function() {
				console.log(self);
				game.time.events.remove(timer2);

				if (self) {
					self.obj.destroy();
					self.destroy();
					self = null;
				}
			});
			return;
		}

		self.obj.x = Xs + _x*directionX;
		self.obj.y = (Ys - _y) + addY;

		var timer1 = game.time.events.add(Phaser.Timer.SECOND * 0.07, function() {
			game.time.events.remove(timer1);
			self.move();			
		}).autoDestroy = true;
	}
}

// Extend from Phaser.Group
BezieDrop.prototype = Object.create(Phaser.Group.prototype);
BezieDrop.prototype.constructor = BezieDrop;