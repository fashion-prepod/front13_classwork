// callbacks and closure
// callbacks

// const foo = () => {};
// const a = 2;

// const person = {
//   foo: () => {},
//   a: 2,
// };

// function bar(a) {
//   a();
// }

// bar(() => {
//   console.log("HI THERE!");
// });

// function request (callback) {

//     setTimeout((result) => {
//         callback(result);
//         console.log("request recieved");
//     }, 2000);

// }

// // request(generateUsersDivs);
// request(findAdmin);

// function generateUsersDivs (freshUsers) {
//     freshUsers
// }

// function findAdmin () {
//     users
// }

// const timeoutId = setTimeout(() => {
//   console.log("HI!");
// }, 1000);

// clearTimeout(timeoutId);

// const intervalId = setInterval(() => {
//   console.log("HELLO!");
// }, 1000);

// clearInterval(intervalId);

// создать функцию которая логгирует HELLO WORLD!
// с помощью setInterval запускать эту функцию в течении 6 сек
// (каждую секунду)
// setTimeout
// setInterval
// clearInterval

// const intervalId = setInterval(() => {
//   console.log("HELLO WORLD!");
// }, 1000);

// function foo () {
//     clearInterval(intervalId);
// }

// setTimeout(foo, 6000);

// closures замыкания

// count(); // 1
// count(); // 2

// function countCreator() {
//   let counter = 0;

//   return function () {
//     let counter = 2;
//     return function () {
//       return counter;
//     };
//   };
// }

// const foo = countCreator();
// foo()

// const count = countCreator()()();
// const anotherCount = countCreator();

// curry карирование, partially applied function

// sum(1)(2)(3)
// sum(1,2)(3)

// sum(1,2,3)
// const sum = a => b => c => a + b + c;

// const onePlus = sum(1);
// const onePluseTwo = sum(1)(2);

// console.log(onePluseTwo(3))

// console.log(count());
// console.log(count());
// console.log(count());
// console.log(anotherCount());

// const a = 2;
// const foo = () => {};

// const person = {
//     a: 2,
//     foo: () => {}
// };

// bar(2);
// bar(() => {});

// function test () {
//     return 2;
// }

// function test () {
//     return function () {};
// }

// function foo () {
//     return function () {
//         console.log('HI THERE!');
//     }
// }

// const result = foo();

// result();
