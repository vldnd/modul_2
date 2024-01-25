"use strict";

const cart = {
  items: [],
  totalPrice: 0,
  count: 0,
  getTotalPrice() {
    return this.totalPrice;
  },
  add(product, price, quantity = 1) {
    this.items.push({ product: product, price: price, quantity: quantity });
  },
  increaseCount(x) {
    return x * this.count;
  },
  calculateItemPrice() {
    this.totalPrice = this.items.reduce(
      (acc, curr) => acc + curr.price * curr.quantity,
      0
    );
  },
  clear() {
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
  },
  print() {
    const x = JSON.stringify(this.items);

    console.log(x, this.totalPrice);
  },
};

cart.add("Молоко", 60, 3);
cart.calculateItemPrice();
cart.print();
