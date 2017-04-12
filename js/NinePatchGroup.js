/**
 * NinePatchGroup
 *
 * @author Negue
 * @extends {Phaser.Group}
 * @param game
 * @constructor
 */
var NinePatchGroup = function (game, x, y, targetWidth, targetHeight, imageKey) {
   Phaser.Group.call(this, game);

   var self = this;

   this.x = x;
   this.y = y;

   this.targetWidth = targetWidth;
   this.targetHeight = targetHeight;

   this.imageKey = imageKey;

   var currentTargetWidth = targetWidth;
   var currentTargetHeight = targetHeight;

   var baseTexture = PIXI.BaseTextureCache[imageKey];
   var partRows = 3;
   var partCols = 3;
   var width = baseTexture.width;
   var height = baseTexture.height;
   var partWidth = width / partCols;
   var partHeight = height / partRows;

   var images = [
      [],
      [],
      []
   ];

   function UpdateImageSizes() {
      currentTargetWidth = Number(self.targetWidth+"");
      currentTargetHeight = Number(self.targetHeight+"");

      // Update Width / Height  and Coordinates
      var topCenter = images[0][1];
      topCenter.x = partWidth;
      topCenter.width = currentTargetWidth - (partWidth*2);

      var topRight = images[0][2];
      topRight.x = currentTargetWidth - partWidth;

      var middleY = partHeight;
      var middleHeight = currentTargetHeight-(partHeight*2);

      var leftMiddle = images[1][0];
      leftMiddle.y = middleY;
      leftMiddle.height = middleHeight;

      var centerMiddle = images[1][1];
      centerMiddle.y = middleY;
      centerMiddle.height = middleHeight;
      centerMiddle.x = partWidth;
      centerMiddle.width = topCenter.width;

      var rightMiddle = images[1][2];
      rightMiddle.x = topRight.x;
      rightMiddle.y = middleY;
      rightMiddle.height = middleHeight;

      var bottomY = currentTargetHeight - partHeight;

      var bottomLeft = images[2][0];
      bottomLeft.y = bottomY;

      var bottomCenter = images[2][1];
      bottomCenter.y = bottomY;
      bottomCenter.x = partWidth;
      bottomCenter.width = topCenter.width;

      var bottomRight = images[2][2];
      bottomRight.x = topRight.x;
      bottomRight.y = bottomY;
   }

   function CreateImages() {
      var frameData = new Phaser.FrameData();
      var frameCount = 0;

      for (var partRow = 1; partRow <= partRows; partRow++) {
         for (var partCol = 1; partCol <= partCols; partCol++) {
            var frameName = partRow + '-' + partCol;

            var textureId = self.imageKey+'_'+frameName;

            var xVal = (partCol - 1) * partWidth;
            var yVal = (partRow - 1) * partHeight;

            PIXI.TextureCache[textureId] = new PIXI.Texture(baseTexture, {
               x: xVal,
               y: yVal,
               width: partWidth,
               height: partHeight
            });

            frameData.addFrame(new Phaser.Frame(frameCount++, xVal, yVal, partWidth, partHeight, partRow + '-' + partCol, textureId));
         }
      }

      var imageCache = game.cache._images[imageKey];
      imageCache.spriteSheet = true;
      imageCache.frameData = frameData;

      // Top
      images[0][0] = game.add.image(0, 0, imageKey, '1-1');
      images[0][1] = game.add.image(0, 0, imageKey , '1-2');
      images[0][2] = game.add.image(0, 0, imageKey, '1-3');

      // Middle
      images[1][0] = game.add.image(0, 0, imageKey, '2-1');
      images[1][1] = game.add.image(0, 0, imageKey, '2-2');
      images[1][2] =  game.add.image(0, 0, imageKey, '2-3');

      // Bottom
      images[2][0] = game.add.image(0, 0, imageKey, '3-1');
      images[2][1] = game.add.image(0, 0, imageKey, '3-2');
      images[2][2] = game.add.image(0, 0, imageKey, '3-3');

      for(var y=0;y<3;y++){
         for(var x=0;x<3;x++){
            self.add(images[y][x]);
         }
      }

      UpdateImageSizes();
   }

   CreateImages();

   var oldUpdate = this.update;
   this.update = function () {
      oldUpdate.call(this);

      if (this.targetHeight != currentTargetHeight || this.targetWidth != currentTargetWidth) {
         UpdateImageSizes();
      }
   }

   this.kill = function() {
      self.removeAll(true);
   }
};

// Extend from Phaser.Group
NinePatchGroup.prototype = Object.create(Phaser.Group.prototype);
NinePatchGroup.prototype.constructor = NinePatchGroup;