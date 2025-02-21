// You just need to implement the cleanObject function
function cleanObject(obj) {
    // Remove all properties with null or undefined values
    if(typeof obj === "object" && obj!==null){
      let arrayOfObj = Object.entries(obj);
      let filteredArray = arrayOfObj.filter(([_,value]) => value!=null);
      let filteredObject = Object.fromEntries(filteredArray);
      return Object.keys(filteredObject).length > 0 ? filteredObject : {};
    }
    return {};
  }
  
  // Please don't remove the code below
  const readline = require('readline');
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  rl.on('line', (input) => {
    const { obj } = JSON.parse(input);
    const result = cleanObject(obj);
    process.stdout.write(JSON.stringify(result));
  });