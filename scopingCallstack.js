'use strict';

//function declaration -global
function calcAge(birthYear) {
  const age = 2027 - birthYear;

  function printAge() {
    let output = `${firstName} are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1991 && birthYear <= 1996) {
      var millenial = true;
      // redassigned from outer scope fine to do
      output = 'NEW OUTPUT';
      const firstName = 'Steven';
      const str = `Oh, and you’re a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);

    // var variable scope is available in entire function - dont use var
    console.log(millenial);
    console.log(output);

    //below function call out of scope will output error
    add(2, 3);
  }
  printAge();
  return age;
}

const firstName = 'William';

calcAge(1991);
console.log(age);
printAge();
