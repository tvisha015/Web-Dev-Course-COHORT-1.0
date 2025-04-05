Array.prototype.myFindIndex = function(callback){
    for(let i=0;i<this.length;i++){
        if(callback(this[i],i,this)){
            return this[i]
        }
    }
}
const array1 = [5, 12, 8, 130, 44];
const ans = array1.findIndex((ele) => ele > 13);
console.log(ans);