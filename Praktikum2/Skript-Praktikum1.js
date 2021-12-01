const isPrime = function(x){
	if(x>1000) throw "to big"
	for(let i = 2; i <= (x-1); i++) {
        if(x%i == 0) return false
    }
    return true
}

const fibo = function(x){
    if (x <= 1) return 1
    return fibo(--x) + fibo((--x-1))
}

const fibo_approx = function(x){
    let g = (1+Math.sqrt(5))/2
    return g**x /Math.sqrt(5)
}

const fibo_itter = function(x){
    let sum = 0.0;
    let n1 = 1.0
    let n2 = 1.0
    for(let i = 3; i<=x; i++){
        sum = n1 + n2;
        n2 = n1; 
        n1 = sum 
    }
    return sum; 
}

console.time("fibo")
fibo(30)
console.timeEnd("fibo")
console.time("fibo approx")
fibo_approx(30)
console.timeEnd("fibo approx")
console.time("fibo itter")
fibo_approx(30)
console.timeEnd("fibo itter")
console.log(isPrime(6),isPrime(7))
console.log(fibo(7))
console.log(fibo_approx(7))
console.log(fibo_itter(7))