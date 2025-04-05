//console.log("Hello World!");

// ch 1
// function tot_cupcakes(trayone, traytwo)
// {
//     return trayone+traytwo
// }
// console.log(tot_cupcakes(10,20));

// function totalCupcakes(trayOne, trayTwo) {
//     // Return the sum of trayOne and trayTwo
//     return trayOne + trayTwo;
//   }
//  obj = totalCupcakes(12,20);
//  console.log(obj);

// let numberofguest = 4;
// let pizzaSize;

// if(numberofguest <= 2){
//   pizzaSize="Small";
// }
// else if(numberofguest <= 5){
//   pizzaSize="Medium";
// }
// else{
//   pizzaSize="Large";
// }

// console.log(pizzaSize);


// function CalculateGrade(grade){
//   if(grade>=90){
//     console.log("A grade");
//   }
//   else if(grade>=80){
//     console.log("B grade");
//   }
//   else if(grade>=70){
//     console.log("c grade");
//   }
//   else if(grade>=60){
//     console.log("D grade");
//   }
//   else{
//     console.log("Fail");
//   }
// }
// CalculateGrade(grade = 93);

// function sumofarray(numarray)
// {
//   let sum=0;
//   for(let i=0; i<numarray.length; i++)
//   {
//     sum = sum+numarray[i];
//   }
//   return sum;
// }
// let num = [1,2,3,4,5];
// ans = sumofarray(num);
// console.log(`Sum of all number is array ${num} is ${ans}`);

// function checkEvenOdd(num) {
//   // Return "Even" if num is even, otherwise return "Odd"
//   if(num%2==0){
//     return `${num} is even number.`;
//   }
//   else{
//     return `${num} is odd number.`;
//   }
// }
// obj = checkEvenOdd(4);
// console.log(obj);

// function calculateGrade(marks) {
//   // Return grade based on the marks
//   if(marks>=90){
//     return "A";
//   }
//   else if(marks>=80 && marks<90){
//     return "B";
//   }
//   else if(marks>=70 && marks<80){
//     return "C";
//   }
//   else if(marks>=60 && marks<70){
//     return "D";
//   }
//   else{
//     return "F";
//   }
// }
// obj = calculateGrade(85);
// console.log(obj);

// You just need to implement the calculator function
// function calculator(num1, num2, operator) {
//   // Perform basic arithmetic operations using switch case
//   switch(operator){
//     case "+":
//       return num1+num2;
//     case "-":
//       return num1-num2;
//     case "*":
//       return num1*num2;
//     case "/":
//       return num1/num2;
//     default:
//       return "Invalid Operation";
//   }
// }
// obj = calculator(10,5,"+");
// console.log(obj);

  greenGarden = ["Lemon","Tomato","Basil","Office Rose","Snake Plant","White Rose"]
  console.log(greenGarden);

//   //1 length()
//   let len = greenGarden.length;
//   console.log(len);

//   // 2 indexof()
// console.log(greenGarden.indexOf("Basil"));

// watering_plants = greenGarden.slice(1,5);
// console.log(watering_plants);

// // 3 foreach()
// greenGarden.forEach((element) => console.log("Fertizers given to : ",element));

// //4 concate()
let new_plants = ["Palak","Corriender","Methi"];
let fullyGreenGarder = greenGarden.concat(new_plants);

// console.log(fullyGreenGarder);

//push()
fullyGreenGarder.push("Christmas Tree");
console.log(fullyGreenGarder);

sorted_array = fullyGreenGarder.sort()
console.log(sorted_array);

// //7 indexof()
let index = sorted_array.indexOf("Basil");
console.log(index)
// //8 splice()
sorted_array.splice(0,1);
console.log(sorted_array);
//9 unshift()
sorted_array.unshift("Basil seeds");
console.log(sorted_array)

// //10 includes()
let checkPlants = ['Basil seeds',
  'Christmas Tree',
  'Corriender',
  'Lemon',
  'Methi',
  'Office Rose',
  'Palak',
  'Snake Plant',
  'Tomato',
  'White Rose'];

let allPresent = checkPlants.every(element => sorted_array.includes(element));
console.log(allPresent);