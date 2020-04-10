#About this repo
This repo contains my notes and examples from: [JavaScript Objects, Prototypes, and Classes](https://app.pluralsight.com/library/courses/javascript-objects-prototypes-classes/table-of-contents) By Jim Cooper

#How to
You can run every .js using nodemon.

```
npm i -g nodemon
nodemon Class-1
```

##Facts

- Arrow Function's scope is the general scope.
- Function's scope is the parent scope.
- Object's properties with functions, are called Methods
- JavaScript has Dyamic nature.
- NaN: Not a number. It is the result of a non-numeric mathematical equation. Example `1 / 'A'`

##ES Things

- Const
- Destructuring

##Creating and Using JavaScript Objects

- Object Literals: Object Equality
- Constructor Functions: Merging properties
- Classes: Immutability
- `'use strict';`: This piece of code enforces cleanner code.
- Self-executing function

###JavaScript Equality Operators

- `==` Should be avoided. Useful only in rare cases. Becase it not type-safe. Example:

```
"42" == 42; // True
0 == false; // True
null == undefined; // True
"" == 0; // True
[ 1, 2 ] == "1, 2"; // True
```

- `===` Most common. Should be used in almost all cases. Its type-safe. Convenient/Concise. Example:

```
NaN === NaN; // False
+0 === -0; // True
```

- `Object.is()` Less common. Like `===` except for a few mathmatical differences. Its type-safe. Verbose Usage: `Object.is(person1, person2);`

```
NaN === NaN; // True
+0 === -0; // False
```

###How Equality works for Objects:

```
let person1 = {
	firstName: 'Jim',
	lastName: 'Cooper'
}
let person2 = {
	firstName: 'Jim',
	lastName: 'Cooper'
}

person1 == person2; // False
person1 === person2; // False
Object.is(person1, person2); // False
```

This is because all of the equality operators compares the memory address of these objects. Its important to know this only happens for Objects, not for primitive types like Strings, Numbers, and Booleans.

```
let firstName1 = 'Jim';
let firstName2 = 'Jim';


firstName1 == firstName2; // True
firstName1 === firstName2; // True
Object.is(firstName1, firstName2); // True
```
