// Changing a Function's Prototype
"use strict";
(() => {
  function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  Person.prototype.age = 29;

  var jim = new Person("Jim", "Cooper");
  var sofia = new Person("Sofia", "Cooper");

  // If we make the function prototype's pointer to point to a new object, it wont change the pointer for the Function's instances
  Person.prototype = { age: 18 };

  // But the new instances from that Function will have proto property pointing to the new object.
  let kris = new Person("Kris", "Cooper");

  console.log(Person.prototype);
  console.log(kris.age);
  console.log(jim.age);
  console.log(sofia.age);
})();
