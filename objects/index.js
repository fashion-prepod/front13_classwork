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

// 1. Создать пустой объект pokemon.
// Добавить в объект поле name: с именем pikachu
// и поле level (от 1 до 3)
// После этого, поменять имя покемона на bulbasaur
// Удалить поле level
// вывести покемона в консоль

// const pokemon = {};
// pokemon.name = "pikachu";
// pokemon.level = 2;
// pokemon.name = "bulbasaur";
// delete pokemon.level;
// console.log(pokemon);

// 2. Создайте объект пупырки. Внутри объекта должны быть
// поля
// blue: 250,
// red: 124,
// orange: 34,
// purple: 11
// С помощью цикла for in  посчитайте сумму всех четных пупырок

// const pupyrki = {
//   blue: 250,
//   red: 124,
//   orange: 42,
//   purple: 11,
// };

// let sum = 0;

// for (let key in pupyrki) {
//   if (pupyrki[key] % 2 === 0) {
//     sum += pupyrki[key];
//   }
// }

// 3. Создать объект
// const student = {
//   math: 5,
//   biology: 4,
//   language: 2,
//   isOboltus: true
// };
// Напишите цикл который посчитает средни балл успеваемости студента

// let sum = 0;
// let count = 0;
// for (let key in student) {
//   if (typeof student[key] === 'number') {
//     sum += student[key];
//     count++;
//   }
// }
