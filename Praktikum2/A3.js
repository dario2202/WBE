/**
 * WBE Praktikum 2
 * Aufgabe 3
 * Dario Züllig
 */

const isPrime = function (x) {
    for (let i = 2; i<x; i++) {
        if(x%i == 0) {
            return false;
        }
    }
    return true;
}

const test = function() {
    let testValues = [1, 5, 7, 12, 18, 22]
    for (let n of testValues) {
        console.log(n + ": " + isPrime(n))
    }
}

test()