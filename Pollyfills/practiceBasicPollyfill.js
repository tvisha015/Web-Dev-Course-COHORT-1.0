//creating an function of our choice (here, chai)

Object.prototype.chai = function(){
    console.log("Chai");
}
const myarr = [1,2,3,4];
console.log(myarr.chai());
Array.prototype
myarr.__proto__

// 1 forEach

const arr = [1,2,3,4,5,6,7,8];
Array.prototype.forEach = null;
if(!Array.prototype.forEach){
    Array.prototype.forEach = function(userfunc){
        const originalarr = this
        for(i=0;i<originalarr.length;i++){
            userfunc(i,originalarr[i]);
        }
    }
}
arr.forEach(function(value,index){
    console.log(`The value at index ${index} is ${value}`)
})


//2 map
Array.prototype.map = null;

if(!Array.prototype.map){
    Array.prototype.map = function(mapuserfunc){
        const result = []
        for(i=0;i<this.length;i++){
            const val = mapuserfunc(this[i],i);
            result.push(val)
        }
        return result
    }
}

const n2 = arr.map((e) => e*2);
console.log(n2);


//3 Filter 
Array.prototype.filter = null;

if(!Array.prototype.filter){
    Array.prototype.filter = function(filteruserfunc){
        const result = []

        for(i=0;i<this.length;i++){
            if(filteruserfunc(this[i])){
                result.push(this[i])
            }
        }
        return result
    }
}
const n3 = arr.filter((e) => e%2 == 0)
console.log(n3);
