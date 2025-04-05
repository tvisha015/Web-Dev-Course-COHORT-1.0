const arr = [1,2,3,4,5]

Array.prototype.forEach = null //now forEach is not supported to be used

if(!Array.prototype.forEach){
    Array.prototype.forEach = function(callBackValue){
        for(let val of this){
            callBackValue(val)
        }

        for (let i = 0; i < this.length; i++) {
            callBackValue(this[i])
        }
    }
}

arr.forEach((val) =>
{
    console.log(val*2);
})

