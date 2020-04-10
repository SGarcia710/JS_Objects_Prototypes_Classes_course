// Object's Properties: Writable property
"use strict";

(() => {
  let person = {
    firstName: "Jim",
    lastName: "Cooper",
    age: 29,
    address: { street: 5, num1: 59, num2: 5 },
  };

  console.log(Object.getOwnPropertyDescriptor(person, "firstName"));

  // Writable property:  It defines whether the properties value can be changed from its initial value.

  Object.defineProperty(person, "firstName", { writable: false });
  try {
    person.firstName = "Andrea";
  } catch (error) {
    console.log(error.message);
  }

  Object.defineProperty(person, "address", { writable: false });

  try {
    person.address.street = 10;
    console.log(person.address);
  } catch (error) {
    console.log(error.message);
  }

  // This happens because the address property is really just a pointer to an object in memory. When you make it read only, you're just preventing that pointer from being changed, so you cant point the address property to a new object. But you can change properties on that object.

  // But you can prevent properties on the object from being changed using object.freeze.

  Object.freeze(person.address);
  try {
    person.address.street = 5;
    console.log(person.address);
  } catch (error) {
    console.log(error.message);
  }
})();
