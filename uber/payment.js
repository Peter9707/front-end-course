export class paymentMethod {
  constructor(id, type, lastFourDigits) {
    this.id = id;
    this.type = type;
    this.LastFourDigits = lastFourDigits;
  }
}

const payment1 = new paymentMethod("1", "credit card", "1234");
console.log(payment1);
