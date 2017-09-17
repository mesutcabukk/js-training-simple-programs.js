/**
 * main.js is the entry point to your program.
 * You find the program logic, data structures and function calls in this file 
 */

"use strict";


var urlObject = analyseUrl('https://www.google.ch/search?q=url');
console.log("HOST:", urlObject.host)
console.log("PATH:", urlObject.path)
console.log("QUERY:", urlObject.query)