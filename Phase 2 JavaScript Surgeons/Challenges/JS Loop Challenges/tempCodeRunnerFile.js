function invertedMountain(n) {
  for (let i = n; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "* "; // Append stars to a single line
    }
    console.log(row.trim()); // Print the row
  }
}
function invertedMountain(n) {
  for(let i=n;i>=1;i--){
    let rows="";
    for(let j=1;j<=i;j++){
      rows += "* ";
    }
    console.log(rows.trim());
  }
}
invertedMountain(4);