// JavaScript's Object
"use strict";

(() => {
  let person = {
    firstName: "Jim",
    lastName: "Cooper",
    age: 29,
    isAdult() {
      return person.age >= 18;
    },
  };
  console.log(Object.keys(person));

  // Loop in an object
  for (let propertyName in person) {
    console.log(propertyName);
  }
})();
