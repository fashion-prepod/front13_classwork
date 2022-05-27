// const pr = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("one");
//     resolve(10);
//   }, Math.random() * 1000);

//   console.log("IM WORKING!");
// })
//   .then((num) => {
//     console.log("TWO", num);
//     // return num * 2; // resolve()
//     // throw new Error("OMG!");
//     return "Hello";
//   })
//   .catch(() => {
//     console.log("FIRST CATCH");
//     // throw new Error("OMG!"); // reject
//   })
//   .then((obj) => {
//     console.log("THREE", obj);
//     // throw 10;
//   })
//   .catch((err) => {
//     console.log("SECOND CATCH");
//     console.dir(err);
//     // return num * 3; // resolve
//   })
//   .then(() => {
//     console.log("VAL");
//     // throw new Error("FINAL THEN");
//     let data = 200;

//     foo(data);
//   });

//   .finally(() => {
//     console.log("FINALLY!");
//     throw new Error("ERROR IN FINALLY");
//   })
//   .then((val) => {
//     console.log("AFTER FINALLY", val);
//   })
//   .finally(() => {
//     console.log("ANOTHER FINALLY");
//   })
//   .catch((err) => {
//     console.log("ERR ?");
//     console.warn(err.message);
//   });

// function foo () {
//     const pr = new Promise();
//     return pr;
// }

// foo().result

new Promise((res) => {
  setTimeout(() => {
    console.log("one");
    res();
  }, Math.random() * 1000);
})
  .then(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("two");
        resolve("someval");
      }, Math.random() * 1000);
    }).then(() => {
      console.log("four");
      setTimeout(() => {
        console.log("TIMEOUT four");
      }, Math.random() * 2000);
    });
  })
  .then((pr) => {
    // console.log("PR", pr);
    setTimeout(() => {
      console.log("three");
    }, Math.random() * 500);
  });
