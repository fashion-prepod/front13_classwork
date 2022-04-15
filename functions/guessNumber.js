// есть два игрока
// игрок1 называет максимальное число которое
// можно загадывать
// игрок2 загадывает число не больше максимального
// игрок1 пытается отгадать загаданное число
// программа должна подсказывать игроку1
// больше ли или меньше предложенное им число чем загаданное
// когда игрок1 отгадает число выводиим сколько
// попыток игрок совершил и предложение начать новую игру

// pure function
// idempotent
// no sharing state
// no mutation
// no side effect

// function sum (a,b) {
//     console.log('a and b'); // side effect
//     return a + b;
// }

// function foo () {
//     fetch() // side effect
//     return 2 + 3;
// }

// foo(arr);

// function foo(a, b) {
//   return a + b + smth;
// }

// идепмотентная функция
// foo(2, 3); // 5
// foo(2, 3); // 5

const isValidNum = (userNumber) =>
  !(
    isNaN(userNumber) ||
    userNumber === null ||
    userNumber === "" ||
    +userNumber < 0
  );

function getNumberFromUser(message, maxNumber) {
  let userNumber;

  do {
    userNumber = prompt(message);

    if (userNumber === null) {
      return null;
    }

    if (isValidNum(userNumber)) {
      if (maxNumber) {
        if (+userNumber < maxNumber) {
          return +userNumber;
        } else {
          alert("please enter number less than max number");
        }
      } else {
        return +userNumber;
      }
    } else {
      alert("number is not valid, please try again");
    }
  } while (true);
}

function startGame() {
  const maxNumber = getNumberFromUser("enter max number");
  const secretNumber = getNumberFromUser(
    "enter secret number, less than max number",
    maxNumber
  );

  for (let triesAmount = 1; ; triesAmount++) {
    let playerGuessNumber = getNumberFromUser("guess a number");

    if (playerGuessNumber === null) {
      alert("you LOST!");
      return;
    }

    if (playerGuessNumber === secretNumber) {
      if (
        confirm(
          `You won! You've made ${triesAmount} attempts. Start new game ?`
        )
      ) {
        return startGame();
      } else {
        return;
      }
    } else if (playerGuessNumber > secretNumber) {
      alert("secret number is less than yours");
    } else if (playerGuessNumber < secretNumber) {
      alert("secret number is bigger than yours");
    }
  }
}

startGame();
