// Simplest and most common way to create objects: Object literal
"use strict";

(() => {
  let person = {
    firstName: "Jim",
    lastName: "Cooper",
    age: 29,
    isAdult: function () {
      return person.age >= 18;
    },
  };
})();
