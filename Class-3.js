// Object function shorthand, only for Object Literals
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
})();
