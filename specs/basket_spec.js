var basket = require('../basket');
var item = require('../item');
var assert = require('assert');

var item1 = new item("Rioja", 8.50, false);
var item2 = new item("cheese", 3.50, false);

describe("basket", function(){
  beforeEach(function() {
    basket.items = [];
  });
  it("can add items to basket", function() {
    basket.addItem(item1);
    assert.equal(1, basket.items.length);    
  });
  it("can remove items from basket", function() {
    basket.addItem(item1);
    basket.addItem(item2);
    basket.removeItem(item1);
    assert.equal(1, basket.items.length);    
  });
  it('can calculate total price of item', function() {
    basket.addItem(item1);
    basket.addItem(item2);
    assert.equal(12, basket.totalPrice());
  });
});
