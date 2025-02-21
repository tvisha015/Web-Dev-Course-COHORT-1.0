Array.prototype.myFind = function(callbackfunc){
    for(let i=0;i<this.length;i++){
        if(callbackfunc(this[i],i,this)){ //checks if the value returns true
            return this[i]; //return value of array
        }
    }
    return undefined;
}
let ages = [12,4,34,56,26]
let found = ages.myFind((val) => val > 25);
console.log(found);
 