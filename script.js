"use strict";

const cart = {
  items: [],
  count: 0,
  add(product, price, quantity = 1) {
    this.items.push({ product: product, price: price, quantity: quantity });
  },
  increaseCount(x) {
    return x * this.count;
  },
  calculateItemPrice() {
    return this.items.reduce(
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
  get totalPrice() {
    return this.calculateItemPrice();
  },
};

cart.add("Молоко", 60, 3);
cart.getTotalPrice;
cart.print();
