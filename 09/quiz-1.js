class Pet {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  run() {
    console.log(`${this.name} is running!`);
  }
}

const pet1 = new Pet('Happy', 'White');
pet1.run();

console.log('----------------');

class Cat extends Pet {
  constructor(name, color, breed) {
    super(name, color);
    this.breed = breed;
  }
}

Cat.prototype.viewInfo = function() {
  console.log(`Name is ${this.name}, color is ${this.color}, and breed is ${this.breed}!`)
}

const cat1 = new Cat('Sad', 'Brown', '코숏');
cat1.run();
cat1.viewInfo();