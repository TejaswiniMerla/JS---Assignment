//DAY 1  ASSIGNMENT 1

//   alert("click me to proceed")

//   In javascript, the console is an object which provides access to the browser debugging console.

//   Methods In console Function:

/*   console.log() : The console. log() is a function in JavaScript which is used to print any kind of variables 
                     defined before in it or to just print any message that needs to be displayed to the user. */

console.log("Hey I am a javascript code ")

/*   console.error() : The console.error() method writes an error message to the console. */

console.error("an error occured!")

/*   console.warn() : The console.warn() method writes a warning to the console. */
    
console.warn("Hey this is a warning!!")

/*   console.table() : It presents the data in a clear tabular format. Hence, improving the readability.
                       The method takes two arguments:
                       data: a collection of data with any type, usually an array of objects.
                       properties: an array of strings of the fields you want to use to display the table. */

var  a = {name:"teju",age:"19",city:"Kakinada"}
var  b = {name:"yamu",age:"21",city:"Banglore"}
var  c = {name:"ammu",age:"18",city:"chennai"}

console.table({a,b,c})

/*   console.time() : This method starts a timer in the console view.
                      This method allows you to time certain operations in your code for testing purposes. */
     
console.time('Time taken');

/*   console.timeEnd() : This  method ends a timer, and writes the result in the console view.
                         This method allows you to time certain operations in your code for testing purposes. */

console.timeEnd('Time taken');

/*   console.assert() : method writes an error message to the console if the assertion is false.
                        If the assertion is true, nothing happens. */

x = 5;
y = 8;
console.assert(x>y)

/*   console.count() : Writes to the console the number of times that particular console.count() is called. */

console.count()
console.count()

/*    console.group() : The console.group() method indicates the start of a message group.
                        All messages will from now on be written inside this group. */

console.log("This is the outer level");
console.group();
console.log("Level 2");
console.group();
console.log("Level 3");

/*    console.groupCollapsed() : The console.groupCollapsed() method indicates the start of a collapsed message group.
                                 Click the expand button to open the message group.
                                 All messages will from now on be written inside this group. */

console.log("Hello world!");
console.groupCollapsed();
console.log("Hello again, this time inside a collapsed group!");

/*    console.groupEnd() : This method indicates the end of a message group. */

console.log("Hello world!");
console.group();
console.log("Hello again, this time inside a group!");
console.groupEnd();
console.log("and we are back.");

/*     console.info() : This method writes a message to the console. */

console.info("Hello world!");

/*     console.trace() : This method displays a trace that show how the code ended up at a certain point. */

/*   console.clear() : Clear all messages in the console. */

//console.clear()




