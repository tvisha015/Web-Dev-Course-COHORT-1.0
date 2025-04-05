function mul(num){
    return num*5
}
console.log(mul(5));
mul.power=2;
console.log(mul.power);
console.log(mul.prototype);


function createUser(userName, score){
    this.userName=userName;
    this.score=score;
}
createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`The price ${this.userName} is ${this.score}`);
}
const tea = new createUser("chai", 50);
const coffee = new createUser("espresso",250);
tea.printMe();
coffee.printMe();


let name = "Tvisha   ";
console.log(name.length); //wrong length
console.log(name.trim().length);
//lets create a new property: trueLength()




let hero = ["Spider man","Thanos"];

let heroPower = {
    thor : "hammer",
    spiderman : "Sping",

    getSpiderPower : function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
};

Object.prototype.tvisha = function(){
    console.log("Hello, tvisha here!");
}

heroPower.tvisha(); //bcoz everything is object in js
hero.tvisha(); 

Array.prototype.anotherMethod = function(){
    console.log("Method of the array!");
}

hero.anotherMethod();
heroPower.anotherMethod();

//object -> array,string,etc;
//array -> X object     



//inheritance
//now let's make the solution of trueLength
String.prototype.trueLength = function(){
    let num = this.trim().length;
    return num;
}
console.log(name.trueLength());
