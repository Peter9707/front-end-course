function Product(name, price) {
  this.name = name;
  this.price = price;
}

Product.prototype.getPrice = function () {
  return this.price;
};

function DiscountedProduct(name, price, discount) {
  Product.call(this, name, price);
  this.discount = discount;
}

DiscountedProduct.prototype = Object.create(Product.prototype);
DiscountedProduct.prototype.constructor = DiscountedProduct;

DiscountedProduct.prototype.getPrice = function () {
  const discountedPrice = this.price - this.price * this.discount;
  return discountedPrice;
};

function Cart(products) {
  this.products = [];

  this.addProduct = function (product) {
    this.products.push(product);
  };

  this.removeProduct = function (product) {
    const index = this.products.indexOf(product);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  };

  this.getTotalPrice = function () {
    let totalPrice = 0;
    for (let i = 0; i < this.products.length; i++) {
      totalPrice += this.products[i].getPrice();
    }
    return totalPrice;
  };
}

const cart = new Cart();

const product1 = new Product("iPhone", 2300);
const product2 = new Product("Samsung", 1000);
const product3 = new DiscountedProduct("Huawei", 3000, 0.2);

cart.addProduct(product1);
cart.addProduct(product2);
cart.addProduct(product3);

console.log(cart.products);

const totalPrice = cart.getTotalPrice();
console.log(totalPrice);

cart.removeProduct(product1);
console.log(cart.products);
console.log(cart.getTotalPrice());
