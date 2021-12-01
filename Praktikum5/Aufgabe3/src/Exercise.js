function Exercise(){

}

Exercise.prototype.findTag = function (tag){
    const regex = /(?<=<)(\w*)(?=>)/; //Beschreibung siehe OneNote
    const match = regex.exec(tag)
    if(match){
        const tagname = match[1];
        return tagname
    }
    return ;
}

Exercise.prototype.equal = function (param1, param2) { 
    if (param1.isArray && param2.isArray) {
        if(param1.length === param2.length && param1.every((val, index) => val === param2[index])){
            return true
        }
        return false
    }
    if (typeof param1 === "object" && typeof param2 === "object") {
        obj1Length = Object.keys(param1).length;
        obj2Length = Object.keys(param2).length;
        if(obj1Length === obj2Length) {
            return Object.keys(param1).every(
                key => param2.hasOwnProperty(key)
                   && param2[key] === param1[key]);
        }
        return false;
    }
    if (param1 === param2) {
        return true 
    }
    else {
        return false
    }
}

Exercise.prototype.fibonacci = function (n) {
    if(n < 2) return n
    else return this.fibonacci(n-1) + this.fibonacci(n-2)
}