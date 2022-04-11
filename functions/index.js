// functions

// const arr = [1,2,2,3,4];

// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
// const result = sum/arr.length;

// function declaration
// function sum(a = 0, b = 0) {
//   if (Math.random() > 0.5) {
//     return 1;
//   }
//   return 2;
// }

// console.log(sum());

// function expression
// const foo = function () {
//   console.log("I WORK!");
// };

// hoisting - всплытие
// temporary dead zone

// let a = 2;
// function foo
// var bar = undefined

// let a = 2;

// console.log(a);

// foo();

// function foo() {
//   console.log("foo");
// }

// bar();

// const bar = function () {
//   console.log("bar");
// };

// IIFE immediately invoked function expression

// anonymous function
// function () {}

// console.log(function () {
//   let a = 2;
// });

// (function () {
//   console.log("WORKING!");
// })();

// const result = (function (a, b) {
//   return a + b;
// })(2, 3);

// console.log(result);

// function foo(a) { // a = person
//   a.age = 100;
// }

// let person = {
//   name: "John",
//   age: 23,
// };
// foo(person);
// console.log(person);
