// You just need to implement the getDayOfWeek function
function getDayOfWeek(day) {
    // Return the corresponding day of the week based on the input number
    switch(day){
        case 1:
        return "Monday";
        break;
      case 2:
        return "Tuesday";
        break;
      case 3:
        return "Wednesday";
        break;
      case 4:
        return "Thursday";
        break;
      case 5:
        return "Friday";
        break;
      case 6:
        return "Saturday";
        break;
      case  7:
        return "Sunday";
      default:
        return "Invalid Day";
      }
  }
  
  // Please don't remove the code below
  const readline = require('readline');
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  rl.on('line', (input) => {
    const { day } = JSON.parse(input);
    const result = getDayOfWeek(day);
    process.stdout.write(JSON.stringify(result));
  });