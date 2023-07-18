import { Ride } from "./ride.js";
import { RideHistory } from "./ride.js";
export class User {
  constructor(id, name, email, phonenumber, password) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.phonenumber = phonenumber;
    this.paymentMethods = [];
    this.registeredUsers = [];
    this.loggedIn = false;
    this.rideHistory = new RideHistory();
  }

  register() {
    const user = {
      id: this.id,
      name: this.name,
      email: this.email,
      phonenumber: this.phonenumber,
    };
    this.registeredUsers.push(user);
  }

  login(email, password) {
    if (this.email === email && this.password === password) {
      this.loggedIn = true;
    } else {
      console.log(`Invalid email or password.`);
    }
  }

  updateProfile(newName) {
    this.name = newName;
    console.log(`The user's new name is: ${this.name}`);
  }
  linkPaymentMethod(paymentMethod) {
    this.paymentMethods.push(paymentMethod);
    console.log(`${this.paymentMethods}`);
  }

  viewRideHistory() {
    const allRides = this.rideHistory.getAllRides();
    console.log(`Ride history for user: ${this.name}`);
    allRides.forEach((ride) => {
      console.log(`Ride ID: ${ride.id}`);
      console.log(`Driver: ${ride.driver}`);
      console.log(`Pickup Location: ${ride.pickupLocation}`);
      console.log(`Destination: ${ride.destination}`);
      console.log(`Fare: ${ride.fare}`);
    });
  }
}

const user1 = new User(1, "Peter", "peter@yahoo.com", "0772456543");
user1.register();
console.log(user1.registeredUsers);
user1.updateProfile("David");
user1.linkPaymentMethod("card");
const ride1 = new Ride(
  "1",
  user1,
  "Driver 1",
  "Location A",
  "Location B",
  10,
  "pending"
);
user1.rideHistory.addRide(ride1);
user1.viewRideHistory();
