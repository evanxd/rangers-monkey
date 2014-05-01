'use strict';

function Rangers(adb, options) {
  this.adb = adb;
  if (options && options.screen &&
      options.screen.width && options.screen.height) {
    this.screen.width = options.screen.width;
    this.screen.height = options.screen.height;
  }
}

Rangers.prototype = {
  screen: {
    width: 1280,
    height: 720
  },

  itemsCoordinates: {
    center: { x: 640, y: 360 },
    cancel: { x: 540, y: 480 },
    missile: { x: 200, y: 650 },
    levelUpMineral: { x: 1100, y: 640 },
    thirdRander: { x: 780, y: 640 },
    stopClearBonus: { x: 650, y: 600 },
    okLevelUp: { x: 500, y: 610 }
  },

  tap: function(itemName) {
    var item = this.itemsCoordinates[itemName];
    this.adb.input.tap(item.x, item.y);
  }
};

module.exports = Rangers;
