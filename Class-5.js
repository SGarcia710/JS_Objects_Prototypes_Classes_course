// Create a new object from an existing one and merge the properties of two objects together.
"use strict";

(() => {
  let person1 = {
    firstName: "Jim",
    lastName: "Cooper",
    age: 29,
    isAdult: function () {
      return person.age >= 18;
    },
  };

  let person2 = {};
  Object.assign(person2, person1);
  console.log(person2);

  let healthStats = {
    height: 170,
    weight: 68,
  };
  // The good immutability practice says that a function really shouldnt ever mutate the objects that are passed into it.
  // Dont do this:
  // Object.assign(person2, healthStats);
  // console.log(person2);

  // Do this instead:
  function mergeHealthStats(person, healthStats) {
    // Object.assign() merge all the right parameters (unlimited) to the first object.
    return Object.assign({}, person, healthStats);
  }

  let mergedPerson = mergeHealthStats(person2, healthStats);
  console.log("Original object", person2);
  console.log("Merged Object", mergedPerson);
})();
