// objects

const person = {
  age: 52,
  stack: ["CSS", "HTML", "JS"],
  smth: [
    [1, 2, 3],
    [4, 5, 6, 7],
  ],
  isProgrammer: true,
  specs: {
    height: 23,
    weight: 51,
    width: 100,
  },
  city: "Gomel",
};

const personCopy = {};

for (let key in person) {
  personCopy[key] = person[key];
}

personCopy.specs.height = "blabla";

console.log(person);

// const personCopy = person;
// person.age = 1000;
// console.log(personCopy);

// for in

// for (let key in person) {
//   console.log(person[key]);
// }
