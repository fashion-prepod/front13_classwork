const swim = (where, speed) => {
  console.log(`${this.name} swims to ${where} with ${speed}km/h`);
};

let person = {
  name: "John",
  age: 23,
  city: "Gomel",
  techStack: ["CSS", "JS", "HTML"],
};

const human = {
  name: "Peter",
  age: 50,
  city: "Boston",
  techStack: ["Dig"],
  //   fly: fly,
};

// function fly(where, speed) {
//   console.log(
//     `${this.name} flies from ${this.city} to ${where} with ${speed}km/h`
//   );
// }

// console.log(human.fly === fly);

// setTimeout(fly.bind(human, "Gomel", 200), 1000);

// setTimeout(function () {
//   human.fly("Gomel", 200);
// }, 1000);

// .call() .apply()             .bind()

// fly.call(person, "Buda-koshelevo", 900);
// fly.apply(human, ["Eremino", 1000]);
// const binded = fly.bind(person); // ВОЗВРАЩАЕТ НОВУЮ ФУНКЦИЮ!!!

// const bindedArrow = swim.bind(null, "Mogilev");
// bindedArrow(1000);

// const binded = fly.bind(person, "Brest", 900);
// binded();
