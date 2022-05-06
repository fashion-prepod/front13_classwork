// function foo() {}

// const bar = () => {};

// foo.city = "Gomel";

// console.dir(foo);

// function run() {
//   console.log(`${this.name} runs`);
// }

// const person = {
//   name: "John",
//   age: 23,
//   techStack: ["HTML", "CSS"],
//   run,
//   soul: true,
//   documents: ["Born doc"],
//   photos: [],
//   places: [],
// };

// const Dog = () => {};

// function Person(name = "Valerchik", age = 1, techStack = []) {
//   // const obj = {};
//   // this = {};
//   this.name = name;
//   this.age = age;
//   this.techStack = techStack;
//   this.run = function () {};
//   this.soul = true;
//   this.documents = ["Born doc"];
//   this.photos = [];
//   this.places = [];

//   // return [1, 2, 3];
//   // return this;
// }

// const pr = new Person("John", 10, ["watch"]);
// const pr2 = new Person("Valerchik", 2, [
//   "drive a car",
//   "pilot an ariplane",
//   "eat glass",
// ]);

// const valerchiks = new Array(70).fill(1).map(() => new Person());

// console.log(valerchiks[5]);

function run() {
  console.log(`${this.name} runs`);
}

function Person(name = "Valerchik", age = 1, techStack = []) {
  this.name = name;
  this.age = age;
  this.techStack = techStack;
  this.soul = true;
  this.documents = ["Born doc"];
  this.photos = [];
  this.places = [];
  this.toString = () => "own object toString";
}

Person.prototype.run = run;
Person.prototype.toString = () => {
  return "STRING FROM PROTOTYPE";
};
Person.prototype.x = 2;

function fly() {
  console.log(`${this.name} flies!`);
}

function saleSoul() {
  this.soul = false;
}

function SuperHero(isBad = false) {
  // this = {};
  Person.apply(this, Array.prototype.slice.call(arguments, 1));

  this.saleSoul = isBad ? saleSoul : () => "IM GOOD!";
}

SuperHero.prototype = Object.create(Person.prototype);
SuperHero.prototype.constructor = SuperHero;
SuperHero.prototype.fly = fly;

const pr = new Person("Oleg", 23, ["Eat"]);
const pr2 = new Person("Evlampij", 90, ["sleep"]);
const sh = new SuperHero(true, "Batman", 54, ["ride a car", "spend money"]);

console.log(sh instanceof SuperHero);

function JapanSuperHero() {
  this.amountOfSticks = 100;
}

// const arr = [1, 2, 3];

// const arr2 = new Array(10);

// Array.prototype.log = function () {
//   for (let i = 0; i < this.length; i++) {
//     console.log(this[i]);
//   }
// };

// Object.prototype.toString = function () {
//   return "HELLO WORLD!" + this.name;
// };

// console.log({} + "");
// console.log([].__proto__ );

// const arr = new Array();
// const arr2 = [];

// Array.prototype
// [].__proto__

// function test () {}
// test.prototype

// const person = {
//   name: "Valerchik",
// };

// console.log(person + ""); // person.toString()

// function walk() {
//   console.log("walk");
// }

// walk.call()
// walk.apply()

// console.log(Function.prototype === walk.__proto__);
// console.log(walk instanceof Function);

// console.log(walk instanceof Object);
// console.log([1, 2]);
