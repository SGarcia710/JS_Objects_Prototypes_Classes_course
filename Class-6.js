// Constructor Function
"use strict";

(() => {
  let jim = {
    firstName: "Jim",
    lastName: "Cooper",
    age: 29,
    isAdult() {
      return this.age >= 18;
    },
  };

  console.log(jim.isAdult());

  let sofia = {
    firstName: "Sofia",
    lastName: "Cooper",
    age: 17,
    isAdult() {
      return this.age >= 18;
    },
  };

  console.log(sofia.isAdult());

  // To avoid this large piece of code, we use Constructor functions.

  function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.isAdult = () => this.age >= 18;
  }

  let sebastian = new Person("Sebastián", "García", 23);
  let natalia = new Person("Natalia", "Kock", 16);

  console.log(sebastian.isAdult());
  console.log(natalia.isAdult());
})();
