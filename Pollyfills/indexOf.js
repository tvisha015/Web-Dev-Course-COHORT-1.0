Array.prototype.myIndexOf = function(searchElement, fromIndex=0){
    let start = fromIndex < 0 ? Math.max(this.length+fromIndex, 0) : fromIndex;

    for(let i=start;i<this.length;i++){
        if(this[i] === searchElement){
            return i;
        }
    }
    return "Element not found";
}

const beasts = ["ant", "bison", "camel", "duck", "bison"];
console.log(beasts.myIndexOf("duck"));