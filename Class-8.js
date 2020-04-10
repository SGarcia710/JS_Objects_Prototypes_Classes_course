// Bracket notation
"use strict";

(() => {
  let person = {
    firstName: "Jim",
    lastName: "Cooper",
    age: 29,
  };

  console.log(person.firstName);
  console.log(person["firstName"]);

  // Why do you ever use bracket notation?
  // What if you, for some reason, needed to create a property on an object using a property name that is not a valid identifier, for exmaple a property name with a space in it or some other special character.

  person["hair color"] = "Brown";
  console.log(person["hair color"]);

  // Common usage:
  let propertyName = "firstName";
  console.log(person[propertyName]);

  for (let propertyName in person) {
    console.log(propertyName + ": " + person[propertyName]);
  }
})();
