class Highway {
  constructor(vignetteCost) {
    this.vehicleList = [];
    this.vignetteCost = vignetteCost;
  }

  enterHighway(vehicle) {
    this.vehicleList.push(vehicle);
    vehicle.increaseSpeed(10);
    if (!(vehicle instanceof Police)) {
      vehicle.driver.payVignette(this.vignetteCost);
    }
  }
}

class Vehicle {
  constructor(name, runningSpeed, driver) {
    this.name = name;
    this.runningSpeed = runningSpeed;
    this.driver = driver;
  }

  increaseSpeed(speed) {
    this.runningSpeed += speed;
    console.log(`${this.name} increase speed by ${speed} km/h.`);
  }
}

class Bus extends Vehicle {}
class Car extends Vehicle {}
class Truck extends Vehicle {}

class Driver {
  constructor(name, walletMoney) {
    this.name = name;
    this.walletMoney = walletMoney;
  }

  payVignette(amount) {
    this.walletMoney -= amount;
    console.log(`${this.name} paid vignette fee of $${amount}.`);
  }
}

class Police extends Vehicle {
  static speedLimitsByVehicleType = {
    Bus: 100,
    Car: 130,
    Truck: 90,
  };

  static fineByVehicleType = {
    Bus: 100,
    Car: 150,
    Truck: 200,
  };

  checkVehicleSpeed(vehicle) {
    const speedLimit =
      Police.speedLimitsByVehicleType[vehicle.constructor.name];
    if (vehicle.runningSpeed > speedLimit) {
      const fine = Police.fineByVehicleType[vehicle.constructor.name];

      console.log(
        `Police: ${vehicle.constructor.name} ${vehicle.name} exceeded the speed limit. Fine: $${fine}.`
      );
    } else {
      console.log(
        `Police: ${vehicle.constructor.name} ${vehicle.name} is within the speed limit.`
      );
    }
  }
}

const highway = new Highway(10);

const driver1 = new Driver("John", 100);
const car1 = new Car("Toyota", 60, driver1);
highway.enterHighway(car1); // Car enters highway and pays vignette fee

const policeDriver = new Driver("Officer Smith", 0);
const policeCar = new Police("Police Car", 100, policeDriver);
highway.enterHighway(policeCar); // Police car enters highway, no vignette fee

const driver2 = new Driver("Carl", 200);
const bus1 = new Bus("School Bus", 50, driver2);
highway.enterHighway(bus1); // Bus enters highway and pays vignette fee

const driver3 = new Driver("Mike", 150);
const truck1 = new Truck("Scania", 120, driver3);
highway.enterHighway(truck1); // Truck enters highway and pays vignette fee

const police = new Police("Police Car", 100, new Driver("Officer Johnson", 0));
police.checkVehicleSpeed(car1); // Police checks car speed
police.checkVehicleSpeed(bus1); // Police checks bus speed
police.checkVehicleSpeed(truck1); // Police checks truck speed
