Array.prototype.MySome = function(callback){
    for(let i=0;i<this.length;i++){
        if(callback(this[i],this,i) == true){
            return true
        }
    }
    return false;
}

const array = [1, 3, 5, 4];
const ans = array.MySome((ele) => ele%2===0)
console.log(ans);