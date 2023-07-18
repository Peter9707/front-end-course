import { User } from "./user.js";
import { Ride } from "./ride.js";
import { RideHistory } from "./ride.js";

export class Driver extends User {
  constructor(id, name, email, phoneNumber, vehicle, licensePlate, earnings) {
    super(id, name, email, phoneNumber);
    this.vehicle = vehicle;
    this.licensePlate = licensePlate;
    this.registeredDrivers = [];
    this.earnings = earnings;
    this.rideHistory = new RideHistory();
  }

  register() {
    const driver = {
      id: this.id,
      name: this.name,
      email: this.email,
      phonenumber: this.phonenumber,
      vehicle: this.vehicle,
      licensePlate: this.licensePlate,
    };
    this.registeredDrivers.push(driver);
  }

  updateProfile(newName) {
    this.name = newName;
    console.log(`The driver's new name is: ${this.name}`);
  }

  acceptRideRequest(ride, driver) {
    console.log(`Driver ${this.name} accepted the ride request.`);
    ride.assignDriver(ride, driver);
  }

  cancelRideRequest(ride) {
    console.log(`Driver ${this.name} canceled the ride request.`);
    ride.cancelRide();
  }

  notifyRideCanceled() {
    console.log(`Notification: Your ride request has been canceled.`);
  }

  completeRide(ride) {
    console.log(`Driver ${this.name} completed the ride.`);
    ride.complete();
    const earnings = ride.fare;
    this.earnings += earnings;
    console.log(
      `Driver ${this.name} earned ${earnings}. Total earnings: ${this.earnings}`
    );
    this.rideHistory.addRide(ride);
  }

  viewEarnings() {
    console.log(`Earnings for driver ${this.name}: ${this.earnings}`);
    console.log("Completed rides:");
    this.rideHistory.completedRides.forEach((ride) => {
      console.log(`Ride ID: ${ride.id}`);
      console.log(`Fare: ${ride.fare}`);
      console.log(`Pickup Location: ${ride.pickupLocation}`);
      console.log(`Destination: ${ride.destination}`);
    });
  }
}

const driver1 = new Driver(
  1,
  "John",
  "john@example.com",
  "72345674",
  "Toyota",
  "123",
  0
);

driver1.register();
driver1.updateProfile("Joshua");

const user1 = new User(1, "Peter", "peter@yahoo.com", "0772456543");
const ride2 = new Ride("2", user1, "Location B", "Location C", 20, "pending");
driver1.acceptRideRequest(ride2, driver1);
driver1.cancelRideRequest(ride2);

const ride3 = new Ride(
  "3",
  user1,
  driver1,
  "Location C",
  "Location D",
  10,
  "pending"
);
driver1.acceptRideRequest(ride3, driver1);
driver1.completeRide(ride3);

driver1.viewEarnings();

const user2 = new User(2, "John", "john@example.com", "1234567890");
const ride4 = new Ride("4", user2);
ride4.requestRide("Location A", "Location B");
ride4.calculateFare(10, 5);
ride4.rateDriver(5, "Great driver!");
