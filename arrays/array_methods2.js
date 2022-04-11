// двумерные массивы, деструктуризация, рест, спред операторы

// const arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     console.log(arr[j]);
//   }
//   console.log(arr[i]);
// }

// rest, spread, destructurization

// const arr = [1, 2, 3, 4];

// let [,,hi] = arr;

// const one = arr[0];
// const two = arr[1];

// const [one, two] = arr;

// console.log(two);

// const arr = [1, null];

// const [one, two = 200, three = "smth"] = arr;

// console.log(two);

// rest
const arr = [1, 2];

const [one, two, ...novyjMassiv] = arr; // rest

// const someArr = [56,2,423];
// const copy = [...arr, 2, ...someArr, 3]; // spread

console.log(novyjMassiv);
