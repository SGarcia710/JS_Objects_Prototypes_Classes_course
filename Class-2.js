// Create Object Literal with a function
"use strict";

(() => {
  function registeruser(firstName, lastName) {
    return {
      firstName,
      lastName,
    };
  }
  let person = registeruser("Sebastián", "García");
  console.log(person);
})();
