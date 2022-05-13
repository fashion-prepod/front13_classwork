// # static Error method delegation

// Создать класс Battery, который инициализирует поля type, energy (заряд, по умолчанию 100). Создать класс Device,
// который принимает параметр batteryType и метод insertBattery, который принимает два параметра (две батарейки). Создать класс Gamepad, который наследует от Device. Класс Gamepad должен содержать поле model, поле isConnected (boolean) и методы connectTo(), который принимает название другого девайса и выводит сообщение типа “gamepadModel connected to TV”, метод disconnect(), который отключает Gamepad и метод play(), который отнимает 10 зарядов от каждой батареи. Если хотя бы одно поле batteryType у Device и type у Battery не совпадают, то вывести сообщение что батарейки не вставлены.

const BATTERY_TYPE = {
  AAA: "AAA",
  BBB: "BBB",
  CCC: "CCC",
};

class Battery {
  energy = 100; // get 0
  constructor(type) {
    //er
    this.type = type;
  }

  getEnergyStatus() {
    return this.energy;
  }
}

const battery1 = new Battery(BATTERY_TYPE.BBB);
const battery2 = new Battery(BATTERY_TYPE.BBB);

class Device {
  batteries = [];

  constructor(batteryType) {
    this.batteryType = batteryType; // get const
  }

  insertBattery(battery1, battery2) {
    if (this.doBatteriesFit(battery1, battery2)) {
      this.batteries.push(battery1, battery2);
    }
  }

  doBatteriesFit(battery1, battery2) {
    return (
      battery1 instanceof Battery &&
      battery2 instanceof Battery &&
      this.batteryType === battery1.type &&
      this.batteryType === battery2.type &&
      this.isBatteriesSlotEmpty()
    );
    //err
  }

  removeBatteries() {
    this.batteries.length = 0;
  }

  isBatteriesSlotEmpty() {
    return this.batteries.length === 0;
  }

  areBatteriesCharged() {
    return this.batteries.every(({ energy }) => energy > 0);
  }

  unchargeBatteries(amount) {
    // this.batteries = this.batteries.map((battery) => (
    // {
    //   ...battery,
    //   energy: battery.energy >= amount ? battery.energy - amount : 0,
    // }
    // ));

    this.batteries.forEach((battery) => {
      battery.energy = battery.energy >= amount ? battery.energy - amount : 0;
    });
  }
}

class Gamepad extends Device {
  isConnected = false;

  constructor(batteryType, model) {
    super(batteryType);
    this.model = model;
  }

  connectTo(deviceName) {
    if (!this.isConnected && !this.isBatteriesSlotEmpty()) {
      this.isConnected = true;
      console.log(`${this.model} is connected to ${deviceName}`);
    } else {
      console.log(`${this.model} cant be connected`);
    }
  }

  disconnect() {
    this.isConnected = false;
  }

  play() {
    if (
      !this.isBatteriesSlotEmpty() &&
      this.isConnected &&
      this.areBatteriesCharged()
    ) {
      console.log("You are playing!");
      this.unchargeBatteries(10);
    } else {
      console.log("You cant play!");
    }
  }
}

const ps5Controller = new Gamepad(BATTERY_TYPE.BBB, "PS5 Controller");
const xboxController = new Gamepad(BATTERY_TYPE.BBB, "XBOX Controller");
ps5Controller.insertBattery(battery1, battery2);
xboxController.insertBattery(battery1, battery2);

console.log(xboxController);

ps5Controller.connectTo("PS5");
ps5Controller.play();
ps5Controller.play();
ps5Controller.play();
ps5Controller.play();
ps5Controller.play();
ps5Controller.play();
ps5Controller.play();
ps5Controller.play();
ps5Controller.play();
ps5Controller.play();
ps5Controller.play();
ps5Controller.play();
ps5Controller.removeBatteries();
ps5Controller.insertBattery(battery1, battery2);
ps5Controller.play();
console.log(ps5Controller);
