describe("findTag", function() {
    //var findTag = require('../index');
    var findTag

    beforeEach(function(){
        findTag = new Exercise()
    })
    /*Die Funktion beforeAll wird einmal und nur einmal für den sie enthaltenden describe-Block ausgeführt,
    und zwar vor allen beforeEach-Funktionen oder vor allen Spezifikationen.
    Die beforeEach-Funktion wird vor jeder Spezifikation im describe-Block ausgeführt, der sie enthält,
    sowie vor jeder Spezifikation, die in einem inneren describe-Block enthalten ist.  */
    
    it("should return tag", function(){
        expect(findTag.findTag("<html>")).toEqual("html")//Konvention "should" -> Was macht der Test genau?    
        //demonstrates use of custom matcher
    });

    it("should not return tag", function(){
        expect(findTag.findTag("<html")).toBeUndefined() // Weil ein return ; ohne Wert zurueckgegeben wird
        expect(findTag.findTag("html>")).toBeUndefined()
        expect(findTag.findTag("html")).toBeUndefined()
    });
});

describe("Test recursive fibonacci", function(){
    //var Fibonacci = require('../index')
    var Fibonacci = new Exercise()
    
    it("fibonacci 0 .. 10, 20, 30", function(){
        expect(Fibonacci.fibonacci(0)).toBe(0)
        expect(Fibonacci.fibonacci(1)).toBe(1)
        expect(Fibonacci.fibonacci(2)).toBe(1)
        expect(Fibonacci.fibonacci(3)).toBe(2)
        expect(Fibonacci.fibonacci(4)).toBe(3)
        expect(Fibonacci.fibonacci(5)).toBe(5)
        expect(Fibonacci.fibonacci(6)).toBe(8)
        expect(Fibonacci.fibonacci(7)).toBe(13)
        expect(Fibonacci.fibonacci(8)).toBe(21)
        expect(Fibonacci.fibonacci(9)).toBe(34)
        expect(Fibonacci.fibonacci(10)).toBe(55)
        expect(Fibonacci.fibonacci(20)).toBe(6765)
        expect(Fibonacci.fibonacci(30)).toBe(832040)
        
    });

});

describe("Test equal function", function(){
        //var Vergleich = require('../index')
        var Vergleich 
    
        beforeAll(function(){
            Vergleich = new Exercise()
        })
    
        it("should be true", function(){
            expect(Vergleich.equal(16,16)).toBeTrue
            expect(Vergleich.equal("hi","hi")).toBeTrue
            expect(Vergleich.equal({},{})).toBeTrue
            expect(Vergleich.equal({a:1,b:2},{b:2,a:1})).toBeTrue //Da der Inhalt der Objekte der selbe ist
            expect(Vergleich.equal({a:1,b:2},{c:3,b:2,a:1})).toBeFalse // Da der Inhalt der Objekte unterschiedlich ist -> Zusaetzliches Element
            expect(Vergleich.equal({a:{}},{a:{}})).toBeFalse // Da die Objekte dem Attribut a hinzugefuegt werden und jeweils eine unterschiedliche Referenznummer beinhalten.
            let emptyObj = {}
            expect(Vergleich.equal({a:emptyObj},{a:emptyObj})).toBeTrue // Vergleich ob ein neu erzeugtes Objekt mit dem Attribut a und einem zuvor erzeugten
            //und bei beiden gleichen Objekt der selbe Inhalt gefunden wird -> Sollte true sein
        });
    
});