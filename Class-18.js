// JavaScript Classes
"use strict";

(() => {
  class Person {
    // Constructor
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }

    //Methods
    isAdult() {
      return this.age >= 18;
    }

    // Getters and setters
    get fullName() {
      return this.firstName + " " + this.lastName;
    }
    set fullName(fullName) {
      var nameParts = fullName.split(" ");
      this.firstName = nameParts[0];
      this.lastName = nameParts[1];
    }
  }

  let sebastian = new Person("Sebastián", "García", 23);

  sebastian.fullName = "Gabriel Perez";
  console.log(sebastian);

  console.log("Sebastián es adulto? ", sebastian.isAdult());
})();
