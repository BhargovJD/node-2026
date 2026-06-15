console.log("Server is runnug...");

(function(){
    console.log("Function without calling.")
})();


// Callback function:
// A callback function is simply a function passed as an argument to another function and executed later.
function greet(name, callback) {
console.log("Hello " + name);
callback();
}

function sayBye() {
console.log("Goodbye!");
}

greet("Bhargov", sayBye);


// OS module
const os = require('os'); 
const userInfo = os.userInfo();
console.log(userInfo);


// File system module: with callback function
const fs = require('fs');
fs.appendFile('sample.txt', '\nHello Bhargov!', (err) => {
if (err) {
console.log(err);
return;
}

console.log('Content added successfully');

});



// import file
const notes = require('./notes.js');

console.log(notes.age)



// Lodash
// Lodash is a popular JavaScript utility library 
// that provides helpful functions for working with arrays, objects, strings, and data manipulation.
var _ = require('lodash');


const arr = [1, 2, 2, 3, 3, 4];

console.log(_.uniq(arr));

