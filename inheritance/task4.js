const person = {
  name: "John", // {writable: false, value: "John", enumerable: false}
  age: 23, // {writable: true}
  city: "Gomel", // {writable: true}
  isProgrammer: false,
  size: {
    width: 2,
    height: 3,
    some: {
      a: 2,
      b: 3,
    },
  },
};

// Object.preventExtensions(person);
// Object.seal(person);
// Object.freeze(person);

// person.age = 44;

// delete person.city;

// person.field = 20;

// Object.entries(person)
// Object.freeze();
// Object.isFrozen();
// Object.preventExtensions();
// Object.isExtensible();
// Object.seal();
// Object.isSealed();

// console.log(Object.getOwnPropertyDescriptor(person, "city"));
// console.log(Object.getOwnPropertyDescriptors(person));

// Object.defineProperties(person, {
//   city: {
//     writable: false,
//   },
//   soul: {
//     value: false,
//     configurable: false,
//   },
// });

// Object.defineProperty(person, "city", {
//   value: "asdasdd",
//   enumerable: true,
//   configurable: false,
//   get() {
//     return this._city + "FASHION";
//   },
// });

// const res = Object.keys(person).map((fieldName) => {
//   return person[fieldName];
// });

// console.log(person);

// for (let key in person) {
//   console.log(key);
// }

// Object.keys(person).forEach((fieldName) => {
//   console.log(fieldName);
// });
