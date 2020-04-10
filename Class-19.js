// Modifying Property Descriptors on Classes
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

    // Getters and setters: They are created with enumerable as false
    get fullName() {
      return this.firstName + " " + this.lastName;
    }
    set fullName(fullName) {
      var nameParts = fullName.split(" ");
      this.firstName = nameParts[0];
      this.lastName = nameParts[1];
    }
  }
  // Getters and setters live on the prototype, wehereas other properties (constructor ones) live on the object instances. Thats because the getters and setters are stateless because they are functions.
  Object.defineProperty(Person.prototype, "fullName", { enumerable: true });

  let sebastian = new Person("Sebastián", "García", 23);

  for (let propertyName in sebastian) {
    console.log(propertyName);
  }
})();
