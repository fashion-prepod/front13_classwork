// arrays

// const fbPlayers = ["Messi", "Ronaldo", "Rivaldo", "Zidane", "Batistuta"];
// fbPlayers = 2;

// let arr = [23,1,2,32131,23];
// arr = [false, true, false, false];
// const arr = [undefined, null, false, [], 2, "asd"];
// console.log(arr);
// const pl = "Messi";

// console.log(fbPlayers[0]);
// console.log(fbPlayers.length);
// console.log(pl);
// console.log(fbPlayers.length + 2);

// const fbPlayers = ["Messi", "Ronaldo", "Rivaldo", "Zidane", "Batistuta"];
// console.log(fbPlayers[100]); // undefined
// fbPlayers[0] = "smth"; // store
// fbPlayers = 2; // doesnt store

// console.log(fbPlayers[2] + " " + fbPlayers[1]);
// console.log(["Messi", "Ronaldo", "Rivaldo", "Zidane", "Batistuta"].length);
// console.log(fbPlayers[1]);
// console.log([1, 2, 55].length);

// const numbers = [1,2,3,4];
// console.log(numbers[3]);

// const fbPlayers = ["Messi", "Ronaldo", "Rivaldo", "Zidane", "Batistuta"];

// fbPlayers[1] = "Valerchik";
// fbPlayers[3] = "Antoha";
// fbPlayers.length = 3;

// console.log(fbPlayers);

// console.log(fbPlayers[fbPlayers.length]);

// delete fbPlayers[1];

// console.log(fbPlayers);

// const fbPlayers = ["Messi", "Ronaldo", "Rivaldo", "Zidane", "Batistuta"];

// for (let i = 0; i < fbPlayers.length ; i++) {
//   console.log(fbPlayers[i]);
// }

// Создать массив из 10ти элементов и вывести на экран сумму всех элементов массива

// const arr = [2, -3, 15, -5, 3, -45, 2, -34, 64, 3];

// const someArr = [];

// someArr[0] = 100;
// someArr[1] = 200;

// console.log(someArr);

// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }

// console.log(sum);

// Найти среднее арифметическое значение элементов массива, которые стоят на четных местах.

// const arr = [23, 123, 5, 3, 435, 32, 421, 4, 21, 321, 32, 3];

// let sum = 0;
// let amount = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (i % 2 === 0) {
//     sum += arr[i];
//     amount++;
//   }
// }

// console.log(sum / amount);

// Создать массив, элементы которого равны элементам исходного массива,
//  но с противоположными знаками.
// (Длина исходного массива должна быть не меньше 10ти элементов).

// const arr = [23, -123, 5, 3, 435, -32, 421, -4, -21, 321, -32, 3];
// const reversedArr = [];

// for (let i = 0; i < arr.length; i++) {
//   reversedArr[i] = -arr[i];
// }

// console.log(arr);
// console.log(reversedArr);

// Автоматически заполнить массив нулями, кроме первого и последнего элементов,
//  которые должны быть единицами. (Количество элементов массива: 8)

// const arr = [];

// for (let i = 0; arr.length !== 8; i++) {
//    arr[i] = i === 0 || i === 7 ? 1 : 0;
// }

// console.log(arr);

// Заполнить массив нулями и единицами,
//  при этом данные значения чередуются, начиная с нуля.

// const arr = [];

// for (let i = 0; arr.length !== 10; i++) {
// v1
//arr[i] = i % 2 === 0 ? 0 : 1;

// v2
// if (i % 2 === 0) {
//     arr[i] = 0;
// } else {
//     arr[i] = 1;
// }

// v3
// if (i % 2 === 0) {
//     arr[i] = 0;
//     continue;
// }
// arr[i] = 1;
// }

// console.log(arr);

// Заполнить массив последовательными нечетными числами начиная
// с единицы. (Количество элементов массива: 8)

// const arr = [];

// for (let elementValue = 0; arr.length !== 8; elementValue++) {
//   if (i % 2 !== 0) {
//     arr[arr.length] = elementValue;
//   }
// }

// let a = 'za';
// let b = 'ika';

// console.log(arr);
