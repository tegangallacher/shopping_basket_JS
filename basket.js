var item = require("./item");

var basket = {
  loyaltyCard: true,
  items: [],
  addItem: function(item) {
    this.items.push(item);
  },
  removeItem: function(item) {
    var i = this.items.indexOf(item)
      this.items.splice(i, 1);
  },
  totalPrice: function() {
    var total = 0
    for (var item of this.items) {
      total += item.price;
    }
    return total;
  }
}

module.exports = basket;



// Shopping Basket Lab
// We need to find the price of a shopping basket. A shopping basket can have multiple items. It should be able to add and remove items.

// Discounts:

// 10% discount for all shopping baskets over £20
// If the customer has a valid discount card then they get an additional 5% off.
// Extension (hard!) Add the ability to have buy one get one free items.