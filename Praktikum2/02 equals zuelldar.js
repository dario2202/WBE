function equals(a,b){
    if(a===b) return true
    else {
        if(typeof(a) == typeof(b) && typeof(a) == 'object'){
            if(Object.keys(a).length !== Object.keys(b).length){
                return false
            }
            if(Object.keys(a).length == 0 && Object.keys(b).length == 0){
                return true
            }
            else{
                for(let i = 0; i <= Object.keys(a).length; i++){
                    if(Object.keys(b).includes(Object.keys(a)[i])) return true
                    else return false
                }
            } 
        }else{
            return false
        }
    }
}

console.log(equals("hi", "hi"))
console.log(equals({},{}))
console.log(equals({a:1,b:2},{a:1,b:2}))
console.log(equals({a:1,b:2},{b:2,a:1}))
console.log(equals({a:1,b:2},{b:2,a:1, c:2}))
console.log(equals({a:{}},{a:{}}))
let emptyObj = {}
console.log(equals({a:emptyObj},{a:emptyObj}))

console.log(typeof({}))