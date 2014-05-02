'use strict';

function Monkey(commands, options) {
  this.commands = commands;
  if (options && options.interval) {
    this.interval = options.interval;
  }
}

Monkey.prototype = {
  commands: null,
  interval: 1000,

  perform: function() {
    setInterval(function() {
      var commands = this.commands,
          random = Math.random(),
          addUpProbability = 0,
          length = commands.length,
          executableCommand = null;

      for (var i = 0; i < length; i++) {
        addUpProbability += commands[i].probability;
        if (random < addUpProbability) {
          commands[i].strategy();
          break;
        }
      }
    }.bind(this), this.interval);
  }
};

module.exports = Monkey;
