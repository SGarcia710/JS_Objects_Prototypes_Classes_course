// Using Static Properties and Methods
"use strict";

(() => {
  // Static properties and methods are items you can access on a Class without having to create an Instance from that class
  class Person {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
    static adultAge = 18;

    isAdult() {
      return this.age >= this.adultAge;
    }

    get fullName() {
      return this.firstName + " " + this.lastName;
    }
    set fullName(fullName) {
      var nameParts = fullName.split(" ");
      this.firstName = nameParts[0];
      this.lastName = nameParts[1];
    }
  }

  class Student extends Person {
    constructor(firstName, lastName, age) {
      super(firstName, lastName, age);
      this._enrolledCourses = [];
    }

    static fromPerson(person) {
      return new Student(person.firstName, person.lastName, person.age);
    }
    enroll(courseId) {
      this._enrolledCourses.push(courseId);
    }
    getCourses() {
      return (
        this.fullName +
        "'s enrolled courses are: " +
        this._enrolledCourses.join(", ")
      );
    }
  }

  let sebastian = new Person("Sebastián", "García", 23);

  let sebastianStudent = Student.fromPerson(sebastian);

  console.log(sebastian);
  console.log(sebastianStudent);
})();
