// const arr = [5, 6, 7, 2, 3];

// const res = arr.forEach((item, index, mass) => {
//   return item;
// });

// const res = arr.map((item) => item ** 2);

const players = [
  { name: "Messi", age: 2 },
  { name: "Valerchik", age: 1 },
  { name: "Anton", age: 47 },
  { name: "Sergey", age: 51 },
  { name: "Ronaldo", age: 23 },
];

// const res = players.filter((item) => {
//   return item.age;
// });

// const arr = [112, 3, 1, 51, 16];
// [4, 9, 1, ....]

// const res = arr.reduce((acc, item) => [...acc, item**2], []);

// arr.reduce((acc, item, index) => index % 2 === 0 ? acc + item : acc, 0)

// arr.reduce((sum, item) => sum + item)

// console.log(res);

// const res = arr.reduce((sum, num, index, mass) => {
//   return sum + num;
// }, 0);

// const ageable = (obj) => {
//   obj.age = 0;
//   return obj;
// };

// const nameable = (obj) => {
//   obj.name = "Valerchik";
//   return obj;
// };

// const programmable = (obj) => {
//   obj.isProgrammer = true;
//   return obj;
// };

// const Person = [nameable, ageable];
// const Programmer = [...Person, programmable];

// const person = { legs: 2, arms: 2 };

// console.log(Person.reduce((p, f) => f(p), person));

// const blabla = players.find((item, index) => {
//   return item.name === "Valerchik" && index > 2 && players
// });

// const res = players.some((item, index) => {
//   console.log(index);
//   return item.age === 2;
// });

// const res = players.every((item) => item.name === "Valerchik");
// console.log(res);

// const res = players.sort((nextItem, item) => {
//   return item.age - nextItem.age;
// });

// const res2 = ["Olga", "Boris", "Anton", "Oleg", "Kristina", "Victor", "Vlad"];

// console.log(res2);

const arr = [
  { a: 2, b: 1 },
  { a: 5, b: 12 },
  { a: 95, b: 7 },
  { a: 51, b: 5 },
];

// 1. вывести в консоль 'its valid' если во всех оъектах a > b
// вывести  'its invalid' если хотя бы в одном объекте a <= b
// 2. на основе массива arr создать новый массив у объектов которого
// поле b возведено в квадрат
// 3. на основе массива arr созать массив где все значения полей
// a и b помещены как послеовательные значения
// [2, 1, 5, 12, 95, 7, 51, 5]
