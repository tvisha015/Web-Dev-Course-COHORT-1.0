Array.prototype.reduce = null

let price = [1,2,3,4,5]

if(!Array.prototype.reduce){
    Array.prototype.reduce = function(reduceUserFunc, initialVal){
        let accumulator = initialVal;
        for(let i=0;i<this.length;i++){
            accumulator = reduceUserFunc(accumulator,this[i],i,this)
        }
        return accumulator;
    };
}

let sum = price.reduce((preVal, nextVal) => preVal + nextVal, 0);
console.log(`Total : Rs.${sum}`);
    