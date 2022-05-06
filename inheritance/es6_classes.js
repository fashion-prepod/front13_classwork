// function Person(name) {
//   this.name = name;
// }

class Person {
  soul = true;
  walk = function () {
    console.log(`${this.name} walk`);
  };

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  run() {
    console.log(`${this.name} runs`);
  }
}

class SuperHero extends Person {
  constructor(name, age, isBad) {
    super(name, age);

    this.isBad = isBad;

    const PI = 3.14;

    this.foo = () => {
      return PI + 2;
    };
  }

  fly() {}
}

const sh = new SuperHero("Valerchik", 30, false);

console.log(sh.foo());

// Person.prototype.run = function () {
//   console.log(`${this.name} runs`);
// };

// const pr = new SuperHero("Valerchik", 20);

// console.log(pr);
