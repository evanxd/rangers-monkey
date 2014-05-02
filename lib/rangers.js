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
    // Pick a stage to play.
    center: { x: 640, y: 360 },
    // Config to start a battle.
    start: { x: 693, y: 615},
    cancelGoToShop: { x: 547, y: 483 },
    // Battle screen.
    missile: { x: 194, y: 693 },
    mineral: { x: 1085, y: 688 },
    firstRanger: { x: 372, y: 694 },
    secondRanger: { x: 509, y: 694 },
    thirdRanger: { x: 641, y: 694 },
  },

  tap: function(itemName) {
    var item = this.itemsCoordinates[itemName];
    this.adb.input.tap(item.x, item.y);
  }
};

module.exports = Rangers;
