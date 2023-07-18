import { User } from "./user.js";

export class Ride {
  constructor(id, user, driver, pickupLocation, destination, fare) {
    this.id = id;
    this.user = user;
    this.driver = driver;
    this.pickupLocation = pickupLocation;
    this.destination = destination;
    this.fare = fare;
    this.status = "pending";
  }

  requestRide(pickupLocation, destination) {
    this.pickupLocation = pickupLocation;
    this.destination = destination;
    this.status = "pending";

    console.log("Ride requested successfully.");
    console.log("Pickup Location:", this.pickupLocation);
    console.log("Destination:", this.destination);
  }

  calculateFare(distance, duration) {
    this.distance = distance;
    this.duration = duration;
    const basicfare = 10;
    const fare = basicfare * distance + duration;
    console.log(`The fare is: ${fare}`);
    return fare;
  }

  assignDriver(ride, driver) {
    this.driver = driver;
    this.status = "assigned";
    console.log(`Ride ${this.id} assigned to driver ${this.driver.name}.`);
  }

  cancelRide() {
    if (this.status === "pending") {
      console.log("Ride request is  canceled.");
    } else if (this.status === "assigned") {
      console.log("Ride request is canceled. Notifying the driver.");
      this.status = "canceled";
    } else {
      console.log("Cannot cancel a completed ride.");
    }
  }

  complete() {
    this.status = "completed";
    console.log(`Ride ${this.id} has been completed.`);
  }

  rateDriver(rating, review) {
    this.driverRating = rating;
    this.driverReview = review;
    console.log(
      `Driver rated successfully. Rating: ${rating}, Review: ${review}`
    );
  }
}

export class RideHistory {
  constructor() {
    this.rides = [];
    this.completedRides = [];
  }

  addRide(ride) {
    this.rides.push(ride);

    if (ride.status === "completed") {
      this.completedRides.push(ride);
    }
  }

  getCompletedRides() {
    console.log(this.completedRides);
    return this.completedRides;
  }
  getAllRides() {
    return this.rides;
  }
}
