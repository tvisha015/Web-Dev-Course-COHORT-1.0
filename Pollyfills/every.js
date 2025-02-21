Array.prototype.myEvery = function(callback){
    for(let i=0;i<this.length;i++){
        if(!callback(this[i],this,i)){
            return false;
        }
    }
    return true;
}

const array = [23,54,7,30,44,1];
const res = array.myEvery((ele) => ele < 60);
console.log(res);