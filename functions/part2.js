// методы объектов
// this НАЗНАЧАЕТСЯ В МОМЕНТ ВЫЗОВА ФУНКЦИИ!!!!!!!!!!
// const run = function (destination) {
// контекст вызова this
//   console.log(this);
//   console.log(`${this.name} runs towards ${destination}`);
// };

// const person = {
//   name: "John",
//   age: 23,
//   run,
// };

// const person2 = {
//   name: "Valerchik",
//   age: 25,
//   run,
// };

// const walk = function () {
//   function fast() {
//     // console.log(this);
//     console.log(`${this.name} walks fast`);
//   }

//   fast();
// };

// const person3 = {
//   name: "David",
//   age: 80,
//   walk: walk,
// };

// person3.walk();

// function foo() {
//   console.log(this);
// }

// foo();

// const dog = {
//   nickname: "Bobik",
//   age: 23,
//   run,
// };

// dog.run("budka");

// напишите функцию, которая возвращает
// среднее арифметическое переданных
// функции n чисел

// console.log(average(1, 2, 3, 4, 12, 3, 12, 312, 3));

// function average(...args) {}

// arr.splice(1, 2, 'asd', 'zxc','sdf')
// function splice (cursor, deleteAmount, ...addition) {}

// arrow functions
// const foo = (a, b) => a + b;

// difference
// 1. there is no arguments
// const foo = () => {
//   console.log(arguments);
// };

// console.log(foo(2, 3));

// 2. there is no this
// стрелка назначает свой this В МОМЕНТ СОЗДАНИЯ ФУНКЦИИ !!!!!!
// const person = {
//   name: "Valerchik",
//   age: 23,
//   run: () => {
//     console.log(this);
//   },
// };

// person.run();

// const foo = () => {console.log(this)};

// const person = {
//   name: "Valerchik",
//   age: 23,
//   walk: function () {
//     const fast = function ()  {
//       console.log(this);
//     };

//     fast();
//   },
// };

// person.walk();
// person.walk();
// person.walk();

// 3. стрелки не могут быть испольованы как классы
// 4. стрелки не могут поменять конекст вызова

// function scope

// let a = 3;

// const bar = function () {
//   function foo() {
//     console.log(a);
//   }
//   foo();
// };

// bar();

// function begat() {
//   console.log(this);
//   //   const fast = () => {
//   //     console.log(this);
//   //   };

//   const that = this;

//   fast();
// }

// function fast() {
//   console.log("fast WORKS!");
// }

// window.fast();

// const person = {
//   name: "Valerchik",
//   age: 51,
//   run: begat,
// };

// person.fast();
