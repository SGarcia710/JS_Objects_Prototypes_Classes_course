// Instance vs. Protype Properties
"use strict";
(() => {
  function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  Person.prototype.age = 29;

  let jim = new Person("Jim", "Cooper");
  let sofia = new Person("Sofia", "Cooper");

  // If change one person's age, it will change it only for that instance. Because it creates a new property with that name
  sofia.age = 19;

  console.log(jim.age);
  console.log(sofia.age);

  // Sofia will still have access to both of them
  console.log("Sofia prototype's property: ", sofia.__proto__.age);
  console.log("Sofia's property: ", sofia.age);

  // JavaScript will ask first if the object has the requested property, if not, it will search at its prototype.
  // At this momento only Sofia has the own property age
  console.log(jim.hasOwnProperty("age"));
  console.log(sofia.hasOwnProperty("age"));
})();
