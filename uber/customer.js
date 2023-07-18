import { User } from "./user.js";
export class Customer extends User {
  constructor(id, name, email, phoneNumber) {
    super(id, name, email, phoneNumber);
    this.loyaltyPoints = 0;
  }

  redeemLoyaltyPoints(points) {
    if (points <= this.loyaltyPoints) {
      console.log(
        `Redeeming ${points} loyalty points for rewards or discounts.`
      );
      this.loyaltyPoints -= points;
    } else {
      console.log("Insufficient loyalty points to redeem.");
    }
  }
}
const customer1 = new Customer("1", "Brian", "brian@example.com", "1234567890");
customer1.register();
customer1.loyaltyPoints = 100;
customer1.redeemLoyaltyPoints(50);
