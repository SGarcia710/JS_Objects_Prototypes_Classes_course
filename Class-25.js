// Searching Strings with the RegExp.exec() Function
"use strict";
(() => {
  // RegExp are stateful. Thats why we can use Flagas to configure its way to search
  function findAlerts(logData) {
    let regex = /ERROR(.*?):(.*?);/g;
    let result = regex.exec(logData);
    while (result !== null) {
      console.log(result[1]);
      console.log(result[2]);
      console.log("---------");
      result = regex.exec(logData);
    }
  }

  let logData =
    "INFO:Ok;ERROR(HIGH):Something broke;ERROR(LOW):Something fishy;ERROR(HIGH):Oh boy;";

  findAlerts(logData);

  // Why it is returning the exact text of our Regex in the array?
  // What if we want to search something thats repeated on the string?
  // Why it returns an array if there's only one result?
})();
