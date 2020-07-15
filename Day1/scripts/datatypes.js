//Data Types In Javascript

/*  There are eight basic data types in JavaScript.*/

// 1. Number :  The number type represents both integer and floating point numbers.

let n = 123;
n = 12.345;

// 2. BigInt :  BigInt type was recently added to the language to represent integers of arbitrary length.A BigInt value is created by appending n to the end of an integer:
 
const bigInt = 1234567890123456789012345678901234567890n;

// 3. String :  A string in JavaScript must be surrounded by quotes.

let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;


// 4. Boolean (logical type) :  The boolean type has only two values: true and false.

let nameFieldChecked = true; 
let ageFieldChecked = false;


// 5. The “null” value :  The special null value does not belong to any of the types described above.It forms a separate type of its own which contains only the null value.

let age = null;

// 6. The “undefined” value :  The special value undefined also stands apart. It makes a type of its own, just like null.The meaning of undefined is “value is not assigned”.If a variable is declared, but not assigned, then its value is undefined.

let age;

alert(age); 

// 7. Objects and Symbols :  The symbol type is used to create unique identifiers for objects

// 8. The typeof operator :  The typeof operator returns the type of the argument. It’s useful when we want to process values of different types differently or just want to do a quick check.It supports two forms of syntax:
                            // 1. As an operator: typeof x.
                            // 2. As a function: typeof(x).
 
/*

typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)

*/


