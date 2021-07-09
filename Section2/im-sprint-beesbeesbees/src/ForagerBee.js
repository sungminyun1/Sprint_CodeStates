const Bee = require('./Bee');

class ForagerBee extends Bee {
  // TODO..
  constructor(age, color, food, job, canFly, treasureChest) {
    super(color, food)
      this.age = 10;
      this.job = 'find pollen';
      this.canFly = true;
      this.treasureChest = [];
  }

  forage(treasure) {
    this.treasureChest.push(treasure);
  }
}

module.exports = ForagerBee;
