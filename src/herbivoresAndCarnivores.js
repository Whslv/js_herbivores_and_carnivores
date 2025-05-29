'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.nama = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(type) {
    if (type.hidden === false) {
      type.health -= 50;

      if (type.health <= 0) {
        const index = Animal.alive.findIndex((animal) => animal === type);

        if (index !== -1) {
          Animal.alive.splice(index, 1);
        }
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
