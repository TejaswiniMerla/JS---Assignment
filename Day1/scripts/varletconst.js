//DAY 1  ASSIGNMENT 2

/*   Var : JavaScript variables are containers for storing data values.
           A variable declared without a value will have the value undefined. */ 

var name = "teju";
var age = "19";
var canFly = false;
var languages = ['English','Telugu','Hindi'];

//Objects

var friends = {
    name : "pavani",
    hobby : "drawing",
}

var a = 10;
console.log(a);

var a = null;
console.log(a);

/*    Let :  The let statement declares a block-scoped local variable, optionally initializing it to a value. */


{
    let x = 1;

    if (x === 1) {
      let x = 2;
    
      console.log(x);
    }
    
    console.log(x);
}

/*    const - Constant : Variables defined with const behave like let variables, except they cannot be reassigned. */

const country = "India";
console.log(country);

//country = "UK"  //error occured because we cannot give value to the variable which is a constant.

const fruits = ["mango","apple"]
console.log(fruits)
fruits.push('banana');
console.log(fruits)
