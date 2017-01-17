
var discount = {
  tenPercentDiscount: function(basket) {
    if(basket.totalPrice() >= 20) {
      newTotal = basket.totalPrice() * 0.9;
    }
    return newTotal;
  },
  loyaltyCard: function(basket) {
    if(basket.loyaltyCard === true) {
      loyaltyprice = basket.totalPrice() * 0.95;
    }
    return loyaltyprice;
  }
}

module.exports = discount;