/**
 * Praktikum 2
 * Aufgabe 4
 * Dario Züllig
 */

const fibo = function (x) {
    if (x == 0 || x == 1) {
        return x
    }
    return fibo(x-1) + fibo(x-2)
}

const fiboB = function (x) {
    let g = (1 + Math.sqrt(5))/2
    return Math.round(g**x / Math.sqrt(5)) 
}

const test = function () {
    let testValues = [2, 5, 7, 9]

    for (let n of testValues) {
        console.log(n + ": " + fibo(n) + " " + fiboB(n))
    }
}

const timeTest = function() {
    let testValue = 30

    console.time("fibo")
    fibo(testValue)
    console.timeEnd("fibo")

    console.time("fiboB")
    fiboB(testValue)
    console.timeEnd("fiboB")
}

test()
timeTest()