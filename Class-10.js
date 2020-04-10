// Object's Properties: Enumerable property
"use strict";

(() => {
  // By default properties on an object are enumerable, meaning we can enumerate over them with for in loops and list them with Object.keys().
  let person = {
    firstName: "Jim",
    lastName: "Cooper",
    age: 29,
  };
  Object.defineProperty(person, "firstName", { enumerable: false });
  for (let propertyName in person) {
    console.log(propertyName);
  }

  // Setting enumerable to false also effects JSON serialization of the object.
  console.log(JSON.stringify(person));
})();
