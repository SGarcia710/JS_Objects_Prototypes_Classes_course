// Getters and setters
"use strict";

(() => {
  // Getters and setters are a couple of pretty cool attributes on a property that let you specify the return value of a property using a function, and set the value of a property using a function.
  let person = {
    name: {
      first: "Jim",
      last: "Cooper",
    },
    age: 29,
  };

  Object.defineProperty(person, "fullName", {
    get() {
      return this.name.first + " " + this.name.last;
    },
  });

  console.log(person.fullName);
})();
