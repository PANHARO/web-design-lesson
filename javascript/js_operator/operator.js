//There are many types of operators such as
// 1. Assignment Operators
// 2. Arithmetic Operators
// 3. Comparision Operators
// 4. Logical Operators
// 5. Ternary Operators
// 6. String Operators
// 7. other Operators

//1. Assignment Operators:
    // a. Assignment Operator
    // b. Additional Operator
    // c. Substraction Operator
    // d. Multiplication Operator
    // e. Division Operator
    // f. Remainder Operator
    // g. Exponentiation Operator

// 2. Arithmetic Operator ( + - * / % ++ -- **)

// let number1 = parseInt(prompt("Input value Number 1: "));

// let number2 = parseInt(prompt("Input value number 2: "));
// let operator = prompt("Choose The Operators to perform (+ - * / % ++ -- **): ");
// switch(operator){
//     case '+': alert(number1+number2); 
//         break;
//     case '-': alert(number1-number2); 
//         break;
//     case '*': alert(number1*number2); 
//         break;
//     case '/': alert(number1/number2); 
//         break;
//     case '%': alert(number1%number2); 
//         break;
//     case '++': alert(number1++); 
//         break;
//     case '--': alert(-- number1); 
//         break;
//     case '**': alert(number1 ** number2); 
//         break;
//     default: alert("Out of operator"); 
// }
// // Comparision Operator (== != === !== > >= < <=)


// let a = 10;
// let b = 20;
// let rsEqualTo = a == b;
// console.log(`Result of ${a} == ${b}: ${rsEqualTo}`);

// let rsNotEqualTo = a != b;
// console.log(`Result of ${a} != ${b}: ${rsNotEqualTo}`);

// let rsStrictEqualTo = a === b;
// console.log(`Result of ${a} === ${b}: ${rsStrictEqualTo}`);

// let rsStrictNotEqualTo = a !== b;
// console.log(`Result of ${a} !== ${b}: ${rsStrictNotEqualTo}`);

// let rsGreaterThan = a > b;
// console.log(`Result of ${a} > ${b}: ${rsGreaterThan}`);

// let rsGreaterThanOrEqualTo = a >= b;
// console.log(`Result of ${a} >= ${b}: ${rsGreaterThanOrEqualTo}`);

// let rsLessThan = a < b;
// console.log(`Result of ${a} < ${b}: ${rsLessThan}`);

// let rsLessThanOrEqualTo = a<= b;
// console.log(`Result of ${a} <= ${b}: ${rsLessThanOrEqualTo}`);

// // logical operator
// let grade = parseFloat(prompt("Input your score: "));

// Grade A --> score 100 - 90
// Grade B --> score 89 - 70
// Grade C --> score 79 - 70
// Grade D --> score 69 - 60
// Grade E --> score 59 - 50
// Grade F --> score < 50
// if (grade >= 90 && grade <= 100){
//     alert("GRADE A");
// }
// else if (grade <= 89 && grade >= 80){
//     alert("GRADE B");
// }
// else if (grade <= 79 && grade >= 70){
//     alert("GRADE C");
// }
// else if (grade <= 69 && grade >= 60){
//     alert("GRADE D");
// }
// else if (grade <= 59 && grade >= 50){
//     alert("GRADE E");
// }
// else if (grade < 50){
//     alert("GRADE F");
// }
// else{
//     alert("No Grade");
// }

// ternary operator
//                      True            False
// syntax = condition ? expression_1 : expression_2

// let age = 18;
// let result = (age < 18) ? 'Teenager' : 'Adult';

// console.log("The result: ", result);

// let a = 3
// //        condition          expression 1            expression 2
// let rs = (a >= 0) ? (a == 0) ? 'Zero': 'Positive' : 'Negative';
//     console.log(`The number is ${rs}`);

// nullish coalescing assignment (??=)

// let a = {duration: 10, speed: null, time:undefined};
// a.duration ??= 50;
// console.log("The rs of duration: ", a.duration);

// a.speed ??= 30;
// console.log("The rs of speed: ", a.speed);

// a.time ??= 50;
// console.log("The rs of time: ", a.time);

//nullish coalescing operator (??)

// let foo = null ?? 'hello';
// console.log("Food value: ", foo);

// let foo1 = 'world' ?? 'hello';
// console.log("Foo1 value: ", foo1);

// let foo2 = 'Hello world' ?? null;
// console.log("Foo2 value: ", foo2);

// let foo3 = null ?? undefined;
// console.log("Foo3 value: ", foo3);


// let age = 10;

// if (age<18)
//     console.log("Age is under 18");

// console.log("Age is older than 18");

// if else

// let score = 50;

// if(score>50){
//     console.log("You passed!")

// }else{
//     console.log("You failed!")
// }

//if...else if...

let message = "apple";

if(message== "apple"){
    console.log("That's correct!")
} else if(message == "banana"){
    console.log("That's banana")
}else{
    console.log("No option!")
}
