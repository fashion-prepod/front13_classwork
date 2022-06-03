// Promise api

// const p1 = new Promise((res, rej) =>
//   setTimeout(() => {
//     console.log("one");
//     res(1);
//   }, 2000)
// );

// const p2 = new Promise((res, rej) => {
//   setTimeout(() => {
//     console.log("two");
//     res(2);
//   }, 3000);
// });

// const p3 = new Promise((res, rej) => {
//   setTimeout(() => {
//     console.log("three");
//     rej(3);
//   }, 1500);
// });

// Promise.any([p1, p2, p3]).then((data) => {
//   console.log(data);
// });

// Promise.race([p1, p2, p3]).then((data) => {
//   console.log(data);
// });

// Promise.allSettled([p1, p2, p3]).then((data) => {
//   if (data.some((res) => res.reason)) {
//     throw new Error("REJECT!!!!");
//   }
// });

// Promise.all([p2, p3, p1]).then((data) => {
//   console.log("ALL DONE");
//   console.log(data);
// }).catch(() => {})

// fetch
// JSON

// const jsonina = JSON.stringify({ a: 2, b: true, c: ["bla", "bla"] });
// console.log(JSON.parse(jsonina));
// const person = {
//   name: "John",
//   age: 23,
//   size: {
//     height: 200,
//     stack: [2, 3, 5],
//   },
// };

// const obj = Object.create(person);
// obj.a = 2;

// const objCopy = JSON.parse(JSON.stringify(obj));

// person.size.stack[2] = "Valerchik";

// console.log(obj);
// console.log(objCopy);

// fetch("https://api.agify.io/?name=michael")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// fetch("https://reqres.in/api/users", {
//   method: "POST",
//   body: JSON.stringify({
//     name: "Valerchik",
//     job: "balbes",
//   }),
// })
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   });

// fetch("https://reqres.in/api/users?page=1")
//   .then((res) => {
//     return res.json();
//   })
//   .then((responseData) => {
//     responseData.data.forEach((user) => {
//       console.log(user.first_name);
//     });
//   }).catch()

// async await

// const foo = async () => {
//   try {
//     const res = await fetch("https://reqres.in/api/users?page=1");
//     const data = await res.json();
//   } catch (err) {
//     console.log(err.message);
//   }

//   return data;
// };

// foo();

// const str1 = "  <h1>Hello world</h1>";
// const str2 = "  <pre>some code</pre>";

// document.write(str1 + str2);

// сделать GET запрос на list users (reqres.in)
// вывести список (ul) юзеров document.write()
// (имя каждого юзера должно быть "обернуто" в li )
// пользователь вводит имя (prompt),
// если такое имя есть в list users, вывести имя это юзера
// с помощью document.write();
