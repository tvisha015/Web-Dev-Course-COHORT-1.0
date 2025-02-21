let orderDetails = {            
  orderId: 101,
  customer: "Tvisha Sharma",
  size: "Medium",
  quantity: 2,
  bill: 500,
  taxes: 28,
  specialInstructions: null,
  printBill : function(){
    console.log("Bill : ",this.bill)
  },
  //another way of writing function
  printBillWithTax(){
    console.log("To pay : ", this.bill+this.taxes)
  }
};
console.log(orderDetails.printBill());
console.log(orderDetails.printBillWithTax());
console.log(orderDetails.hasOwnProperty("size"));