// Date object
"use strict";
(function () {
  // Creating a date object with the current date
  let date = new Date();
  console.log(date);

  // Using parameters for the constructor
  let date2 = new Date(0); // Unix Epoch Time
  console.log(date2);

  let date3 = new Date("2050-03-25T13:01:30Z");
  console.log(date3);

  // Best constructor ( Month is 0 based )
  let date4 = new Date(2050, 3, 25, 13, 1, 30, 50);
  console.log(date4.toString());

  // Methods:

  // Setters
  date4.setMonth(4);

  // Getters
  console.log(date4.getFullYear());
  console.log(date4.getMonth());
  console.log(date4.getDate());
  console.log(date4.getHours());
  console.log(date4.getMinutes());
  console.log(date4.getSeconds());
  console.log(date4.getMilliseconds());

  // Its important to know that these getters return values that correspond to the time zone of the computer they're running on. But there are also UTC version of these.

  // UTC Methods:
  console.log(date4.getUTCFullYear());
  console.log(date4.getUTCMonth());
  console.log(date4.getUTCDate());
  console.log(date4.getUTCHours());
  console.log(date4.getUTCMinutes());
  console.log(date4.getUTCSeconds());
  console.log(date4.getUTCMilliseconds());

  // Subtract two dates to know the difference between them:

  let dateOne = new Date(2050, 3, 25, 13, 1, 30, 50);
  let dateTwo = new Date(2050, 3, 25, 13, 1, 30, 55);

  let timeBetweenTwoDates = dateTwo - dateOne;
  console.log("Difference Between the two dates: ", timeBetweenTwoDates + "ms");
})();
