// const arr = [];
// const arr = new Array(10).fill(new Array(10));
// console.log([2, 312, 3, 21, 321, 321, 321, 3].fill("Hello"));

// console.log(Array.isArray("asdasd"));
// const obj = new Object();
// console.log(obj);

const objOne = {
  a: 1,
  b: 2,
  //   city: "Gomel",
  //   tech: ["HTML", "CSS"],
  //   specs: {
  //     width: 100,
  //     height: 10,
  //     length: 9,
  //   },
};

const objTwo = {
  b: 100,
  c: 2000,
};

const result = Object.assign(objTwo, objOne, { b: 999 });
// const result2 = {
//   ...objTwo,
//   ...objOne,
//   blabla: "new field",
// };
// const userName = "Valerchik";

// const obj = {
//   [userName]: 100,
//   userName: "2323",
// };
// console.log(obj);
// console.log(result2);

// let {
//   a,
//   b = 100,
//   city: someVar = "Eremino",
//   specs: { height: vysota = 99 },
//   tech: [blabla = "WALK"],
// } = objOne;

// console.log(blabla);

// const result = Object.assign(objTwo, objOne, { b: 999 });
// console.log(result);
