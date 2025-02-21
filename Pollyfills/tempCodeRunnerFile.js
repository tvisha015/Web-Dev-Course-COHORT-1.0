Array.prototype.MyEvery = function(callback){
    for(let i=0;i<this.length;i++){
        if(callback(this[i],this,i == true)){
            return true;
        }
    }
    return false;
}