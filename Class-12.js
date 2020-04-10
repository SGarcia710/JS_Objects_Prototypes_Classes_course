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
    set(value) {
      var nameParts = value.split(" ");
      this.name.first = nameParts[0];
      this.name.last = nameParts[1];
    },
  });

  console.log(person.fullName);
  person.fullName = "Sebastián García";
  console.log(
    "First Name: " + person.name.first + ", Last Name: " + person.name.last
  );
})();
