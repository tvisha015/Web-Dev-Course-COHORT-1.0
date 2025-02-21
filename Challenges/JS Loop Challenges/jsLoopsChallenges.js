// 1
// You just need to implement the distributeGifts function
function distributeGifts(totalGifts, friends) {
    // write your code here
    for(let i=0;i<totalGifts.length;i++){
        console.log(`${friends[i]} gets a ${totalGifts[i]}.`);
    }
  }
  totalGifts = ["watch","pendant","earrings","antique coin"];
  friends = ["Jenna","Nick","Noah","Lion"];
  distributeGifts(totalGifts,friends);

// 2
function countApples(apples) {
    let totalApples = 0;
    for(i=0;i<apples;i++){
        totalApples++;
    }
    return totalApples;
}
obj = countApples(5)
console.log(obj);

// 3
function countBoxes(totalBars, barsPerBox) {
    let totalBox=0;
    totalBox = totalBars/barsPerBox;
    return(totalBox);
}
obj = countBoxes(20,4);
console.log(obj);

// 4
function totalWater(waterAmounts) {
    let totalWater=0;
    waterAmounts.forEach(element => {
        totalWater += element;
    });
    return totalWater;
}
obj = totalWater([1,2,3,4]);
console.log(obj);

// 5
function totalStars(starLevels) { 
    let allTotalStars=0;
    let count=0;
    for(let i=0;i<starLevels.length;i++){
      for(let j=0;j<starLevels[i].length;j++){
        count++;
      }
      allTotalStars = allTotalStars + count;
      count=0;
    }
    return allTotalStars;
  }
  obj = totalStars([["*","*","*"],["*","*","*"],["*"]]);
  console.log(obj);

//6
// You just need to implement the workingDays function
function workingDays(days) {
  // your code here
  return days.length;
}
obj = workingDays(["Monday","Tuesday","Friday"])
console.log(obj);

//7
// You just need to implement the totalStars function
function totalStars(starLevels) { 
  let allTotalStars=0;
    let count=0;
    for(let i=0;i<starLevels.length;i++){
      for(let j=0;j<starLevels[i].length;j++){
        count++;
      }
      allTotalStars = allTotalStars + count;
      count=0;
    }
    return allTotalStars;
}
obj = totalStars([["*","*","*"],["*","*"],["*"]]);
console.log(obj);


// 8
function totalPrice(prices) {
    let totalPrice=0;
    for(let i=0;i<prices.length;i++){
      totalPrice = totalPrice+prices[i];
    }
    return totalPrice;
  }
  arr = [1.5,2.3,3.7]
  obj = totalPrice(arr)
  console.log(obj);

// 9
//   *
//  ***
// *****
//  ***
//   *        

function shinyDiamondRug(n) {
  for (let i = 1; i <= n; i += 2) {
    console.log(" ".repeat((n - i) / 2) + "*".repeat(i));
} 
// Lower half
for (let i = n - 2; i >= 1; i -= 2) {
    console.log(" ".repeat((n - i) / 2) + "*".repeat(i));
}
}
console.log(shinyDiamondRug(5));

// 10
// function invertedMountain(n) {
//   for (let i = n; i >= 1; i--) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//       row += "* "; // Append stars to a single line
//     }
//     console.log(row.trim()); // Print the row
//   }
// }
// function invertedMountain(n) {
//   for(let i=n;i>=1;i--){
//     let rows="";
//     for(let j=1;j<=i;j++){
//       rows += "* ";
//     }
//     console.log(rows.trim());
//   }
// }
// invertedMountain(4);
