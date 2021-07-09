const Grub = require('./Grub');

class Bee extends Grub {
  // TODO..
  constructor(age, color, food, job) {
    super(food)
    this.age = 5;
    this.color = 'yellow';
    this.job = 'Keep on growing';
  }
}

module.exports = Bee;
