Array.prototype.myIncludes = function(callback){
    for(let i=0;i<this.length;i++){
        if(callback(this[i])){
            return true
        }
    }
    return false
}

const pets = ["cat", "dog", "bat"];
const myPet = pets.myIncludes((name) => name == "cat" )
console.log(myPet);
