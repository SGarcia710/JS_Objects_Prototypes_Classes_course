// Object's Properties: Configurable property
"use strict";

(() => {
  // The configurable property locks down a property to prevent the property descriptors themselvs from being changed. It also prevent the property from being deleted from the object
  let person = {
    firstName: "Jim",
    lastName: "Cooper",
    age: 29,
  };
  Object.defineProperty(person, "firstName", { configurable: false });
  try {
    Object.defineProperty(person, "firstName", { enumerable: false });
    console.log("You have changed enumerable property");
  } catch (error) {
    console.log(error.message);
  }
  try {
    Object.defineProperty(person, "firstName", { configurable: true });
    console.log("You have changed configurable property");
  } catch (error) {
    console.log(error.message);
  }
  try {
    Object.defineProperty(person, "firstName", { writable: true });
    console.log("You have changed writable property");
  } catch (error) {
    console.log(error.message);
  }

  let person2 = {
    firstName: "Sebatián",
    lastName: "García",
    age: 23,
  };

  delete person2.firstName;
  console.log(person2);

  Object.defineProperty(person2, "lastName", { configurable: false });
  // It wont let you delete lastName property
  try {
    delete person2.lastName;
  } catch (error) {
    console.log(error.message);
  }
})();
