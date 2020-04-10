// Prototype
"use strict";
(() => {
  // A prototype is an object that exist on every function in JavaScript.

  let myFunction = function () {};

  console.log(myFunction.prototype);

  // While Objects have a prototype, but they dont have a prototype property.

  let person = { firstName: "Sebas" };
  console.log(person.prototype);
  console.log(person.__proto__);

  // Object and Function prototype are used differently.

  function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  Person.prototype.age = 29;

  let jim = new Person("Jim", "Cooper");
  let sofia = new Person("Sofia", "Cooper");

  sofia.__proto__.age = 19;

  console.log(Person.prototype);
  console.log(jim.__proto__);
  console.log(sofia.__proto__);

  // So the object instance that is the function's prototype becomes the prototype for all the objects created from that prototype

  console.log(Person.prototype === jim.__proto__);
  // They are the same, because they are pointing to the same object in memory that is the function's prototype
})();
