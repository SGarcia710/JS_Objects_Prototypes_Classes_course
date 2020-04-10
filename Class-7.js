// Object.create()
"use strict";

(() => {
  let person = {
    firstName: "Jim",
    lastName: "Cooper",
    age: 29,
  };
  // Object.create receives as first parameter the prototype for the object and as second parameter the properties for the instance (The second is optional)
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
