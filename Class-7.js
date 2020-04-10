// Object.create()
"use strict";

(() => {
  let person = {
    firstName: "Jim",
    lastName: "Cooper",
    age: 29,
  };

  let person2 = Object.create(Object.prototype, {
    firstName: {
      value: "Sebastián",
      enumerable: true,
      writable: true,
      configurable: true,
    },
    lastName: {
      value: "García",
      enumerable: true,
      writable: true,
      configurable: true,
    },
    age: {
      value: 23,
      enumerable: true,
      writable: true,
      configurable: true,
    },
  });

  console.log("Person 1", person);
  console.log("Person 2", person2);

  // Nobody wants to use Object.create() because its too much verbose. The Object Literal or Constructor Functions is so much cleaner and easier.
})();
