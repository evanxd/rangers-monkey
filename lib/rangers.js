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
    // Battle screen.
    missile: { x: 194, y: 693 },
    levelUpMineral: { x: 1085, y: 688 },
    firstRander: { x: 373, y: 696 },
    secondRander: { x: 509, y: 687 },
    thirdRander: { x: 641, y: 689 },

    stopClearBonus: { x: 650, y: 600 },
    okLevelUp: { x: 500, y: 610 }
  },

  tap: function(itemName) {
    var item = this.itemsCoordinates[itemName];
    this.adb.input.tap(item.x, item.y);
  }
};

module.exports = Rangers;
