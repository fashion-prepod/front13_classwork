console.log(1);

const foo = () => {
  console.log("foo");
};

const bar = () => {
  console.log("bar");
  foo();
};

bar();

console.log(3);

//
//
//
//
//
