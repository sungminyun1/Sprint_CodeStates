const Bee = require('./Bee');

class HoneyMakerBee extends Bee {
  // TODO..
  constructor(age, color, food, job, honeyPot) {
    super(color, food)
    this.age = 10;
    this.job = 'make honey';
    this.honeyPot = 0;
  }

  makeHoney() {
    this.honeyPot++;
  }

  giveHoney() {
    this.honeyPot--;
  }
}

module.exports = HoneyMakerBee;
