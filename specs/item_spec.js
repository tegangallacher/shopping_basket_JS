var item = require('../item');
var basket = require('../basket');
var assert = require('assert');

describe('Item', function() {
  beforeEach(function() {
    basket.items = [];
  });
  it('item has a name', function() {
    var item1 = new item("Rioja", 8.50, false);
    assert.equal('Rioja', item1.name);
  });
  it('item has a price', function() {
    var item1 = new item("Rioja", 8.50, false);
    assert.equal(8.50, item1.price);
  });
  it('item has a bogof', function() {
    var item1 = new item("Rioja", 8.50, false);
    assert.equal(false, item1.bogof);
  });
});