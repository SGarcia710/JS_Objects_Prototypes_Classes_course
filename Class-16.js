// Multiple Levels of Inheritance
"use strict";
(() => {
  function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  Person.prototype.age = 4;

  var jim = new Person("Jim", "Cooper");
  // Going thrught the prototype chain, you will always find a null prototype and this is usually after hitting Object's prototype
  console.log(jim.__proto__);
  console.log(jim.__proto__.__proto__);
  console.log(jim.__proto__.__proto__.__proto__);

  // By default, all objects in JavaScript inherit from Object, and object has no prototype.
})();
