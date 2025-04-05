const timeInput = document.getElementById("timeInput");
const startButton = document.getElementById("startButton");
const countdownDisplay = document.getElementById("countdown-display");

function startTimer(){

    let valueInSec = parseInt(timeInput.value);
    
    if(isNaN(valueInSec)){
        countdownDisplay.innerText = "Please enter a number";
        return
    }
    if(valueInSec <= 0){
        countdownDisplay.innerText = "Please enter seconds greater than 0";
        return
    }

    const timer = setInterval(()=>{
        valueInSec--;
        countdownDisplay.innerText = `Time remaining : ${valueInSec} seconds`

        if(valueInSec <= 0){
            clearInterval(timer);
            countdownDisplay.innerText = `Time up ⏰`;
        }
    },1 * 1000);
}

startButton.addEventListener('click',startTimer);