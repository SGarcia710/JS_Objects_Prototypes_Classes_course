// Validating Strings with the RegExp.test() Function
"use strict";
(function () {
  // The JavaScript Regular Expression Object can be used to search strings to see if they contain text that matches a regular expression

  // Regular expressions are search patterns, and the syntax for all the different possible search patterns are beyond the scope of this course.

  function checkPasswordComplexity(password) {
    // This regex will check if the password has lowercase characters, uppercase characters, numbers and at least 8 characters long.
    // let regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$", "gi");
    // Shorthand for regex in JavaScript
    let regex2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return regex2.test(password);
  }

  console.log(checkPasswordComplexity("holaA123"));
})();
