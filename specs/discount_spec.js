var basket = require('../basket');
var item = require('../item');
var discount = require('../discount')
var assert = require('assert');

var item1 = new item("Rioja", 8.50, false);
var item2 = new item("cheese", 3.50, false);
var item3 = new item("jeans", 22, false);

describe("basket", function(){
  beforeEach(function() {
    basket.items = [];
  });
 it("10 percent discount over 20 price", function() {
  basket.addItem(item3);
  assert.equal(19.8, discount.tenPercentDiscount(basket));
; })
 it('checkloyaltycard', function() {
  basket.addItem(item1);
  basket.addItem(item2);
  assert.equal(11.4, discount.loyaltyCard(basket).toFixed(2));
 })
});