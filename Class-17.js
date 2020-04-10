// Creating your own Protypal Inheritance Chains
"use strict";
(() => {
  function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    Object.defineProperty(this, "fullName", {
      get() {
        return this.firstName + " " + this.lastName;
      },
      enumerable: true,
    });
  }

  function Student(firstName, lastName, age) {
    // This call function allows us to call the Person function while setting the context of this
    Person.call(this, firstName, lastName, age);
    this._enrolledCourses = [];
    this.enroll = (courseId) => {
      this._enrolledCourses.push(courseId);
    };
    this.getCourses = () => {
      return (
        this.fullName +
        "'s enrolled courses are: " +
        this._enrolledCourses.join(", ")
      );
    };
  }

  // Create a prototype inheritance chain:
  Student.prototype = Object.create(Person.prototype);
  // We need this line after creating the chain, because after doing the last instruction, the Student's constructor will be the Person's one. So, to undo that side effect, we just set it back to the Student's one.
  Student.prototype.constructor = Student;

  // Creating static function for a Constructor Function:
  Student.fromPerson = function (person) {
    return new Student(person.firstName, person.lastName, person.age);
  };

  let jim = new Student("Jim", "Cooper", 29);

  jim.enroll("CS205");
  jim.enroll("MA101");
  jim.enroll("PS101");

  console.log(jim);
  console.log("Jim's prototype: ", jim.__proto__);
  console.log("Jim's prototype's prototype: ", jim.__proto__.__proto__);

  console.log(jim.getCourses());
})();
