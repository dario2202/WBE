const person = {
    isHuman: false,
    printIntroduction: function() {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
  };
  
  console.log(person.beget);
  
  if (typeof person.beget !== 'function') {
    person.beget = function (o) {
      var F = function () {};
      F.prototype = o;
      return new F();
    }
  }
  
  console.log(person.beget);
  console.log(person.beget());