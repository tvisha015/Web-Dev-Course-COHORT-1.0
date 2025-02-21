// objects - represents real world entities (entities->anything which have prototype)
// so objects is entities which have properties(attributes eg - color,size) and methods(action/function)

const { log } = require("console");

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
// JS objects have a special property called prototype. we can set prototype using __proto__
// If we try to print the type of array, it is actually object.
// Prototype -> Objects
// easy example of __prototype__

//classes in js
// Class us an program code template for creating objects. (blueprint of objects)
class Car{
    constructor(brand){
        this.brand=brand;
    }
    carInfo(){
        console.log(`Car brand : ${this.brand}`);
    }
}
let myCar = new Car("Lexus");
myCar.carInfo();

//used constructor in above example. Constructor is automatically invoked by new, initializes object

//Two types of constructor
// 1. Default constructor - 
class Person{

}
//if we make object of it
const p = new Person();
//it makes the default constructor in backgroung(js is smart enough)
// constructor(){

// }

// 2. Parameterized constructor
// explain the below example
class Person{
    constructor(name){
        this.name=name;
    }
}
const p1 = new Person("Tvisha");

//explain below line
Person.prototype=p1.__proto__;