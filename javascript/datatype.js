// there are several data type in js
// 1. String
// 2. Number
// 3. BigInt
// 4. Boolean
// 5. Undefined
// 6. Null
// 7. Symbols
// 8. Object
const message = "Welcome everyone";
console.log("The data type of message: ", typeof(message));

const money = 2500;
console.log("The data type of money", typeof(money));

const salary = 2000.50;
console.log("The data type of salary: ", typeof(salary));

const bigNumber = 123456789n;
console.log("The data type of big number: ", typeof(bigNumber));

const isTrue = true;
console.log("The data type of isTrue: ", typeof(isTrue));

let undefinedValue;
console.log("The data type of undefinedValue: ", typeof(undefinedValue));

let dataOfNull = null;
console.log("The data type of dataOfNull: ", typeof(dataOfNull));

let symbolsData = Symbol("Symbols");
console.log("The data type of symbols: ", typeof(symbolsData));

let object = {
    firstName : "koko",
    lastName : "kaka",
    age : 25
};
console.log("The data type of object: ", typeof(object));

// String declareation of using
// SingleQuote ('')
// DoubleQuote ("")
// Backtick (``)

let textMessage = 'Hello';
let replyMessage = "Welcome Home";
let content = `Dear everyone ${replyMessage}.`

console.log(`${textMessage} ${replyMessage} ${content}`);

// number scope declaration
let sum = 3/0;
console.log(`The sum value: ${sum}`);

let sum1 = -3/0;
console.log(`The sum value:  ${sum1}`);

let sum2 = "abc"/3;
console.log(`The sum of 2 value:  ${sum2}`);

//bigInt
let bigNumber1 = 123456789n;

let sumOfBigNumber = bigNumber1 + 23456789n;

console.log(`The result of sumOfBigNumber: ${sumOfBigNumber}`);

let sumOfBigAndIntergerNumber = parseInt(bigNumber1) + 1;
console.log(`The result of sumOfBigAndIntergerNumber: ${sumOfBigAndIntergerNumber}` );

// boolean : True, False
// let isYes = confirm("Do you want to come to school?");
// console.log("The value of isYes: ", isYes);
// if(isYes){
//     alert("Yes, lets go to school!");
// }else{
//     alert("I want to sleep more than go to school!");
// }

//object is a colection of data which has the format as key-value pair

const person = {
    firstName: 'KEO',
    lastName: 'Sovannpanharo',
    age: 19,
    salary: 0,
    isMarried: false
};
//update data of properties in object
// person.firstName = "Jessi";
// console.log(`The name of person: ${person.firstName}`);

console.table([person])