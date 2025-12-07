// There are 2 ways to define variable in js
// we can use let and var keyword for declaring variable

const { default: createPlugin } = require("tailwindcss/plugin");

// so what are the difference of var and let?

// var keyword (old version)

var firstName = "panharo";
var firstName = "Koko";

console.log("First Name: ", firstName);
// In overall var keyword can used the same name of variable

//let keyword (new version)
let lastName = "Mona Lisa";
lastName = "Meow Lisa";
// let lastName1 = "Mono Lisa";// in let keyword we cannot redeclare variable which has the same name again
console.log("Last Name: ", lastName);
// constant need to initialize immiediately and cannot redeclare
const dob = "2003 July 11";

console.clear();
console.log("Console log");
console.error("Console error");
console.count();
console.dir(window.location);
console.info("Console info");
console.warn(['apple', 'banana']);
console.debug();
console.table(['Name','FirstName','LastName']);

 document.getElementById("demo").innerHTML = "Everyone need to focus!";
        //single line
        /* Multi
        line */
        //Documenation comment
        /** 
         * @param {number} x - x for first value.
         * @param {number} y - y for second value.
         * @returns {number} The sum of the two numbers.
        **/
        function sumOfTwoNumber(x,y){
            return x+y;
        }
        sumOfTwoNumber(10,20);