// Создать класс Device, который имеет параметр isOn (по умолчанию false),
// вызываемого абонента и метод switchDevice, который переключает параметр isOn. Позвонить абоненту можно только тогда, когда параметр isOn == true, иначе вывести сообщение, что звонок невозможен.

// .diagonal = ???;
// Необходимо также создать классы Smartphone(принимает имя и диагональ экрана(не может быть больше 8))
// метод callSmbd, который принимает имя

//  и Tablet(принимает имя и диагональ экрана (не может быть меньше 8)), которые наследуют от класса Device.
// .watchMovies(movieName)

class Device {
  #isOn = false;

  switchDevice() {
    this.#isOn = !this.#isOn;
  }
}

const kolonka = new Device();

kolonka.switchDevice();
console.log(kolonka);
