/**
 * syntax of function
 * 
 * function nameOfFunction(){
 * function body
 * }
 */

// declaration of function
// function greetingStudent(){
//     // set or define function body or function definition
//     console.log("Hello everyone.")
// }
// // calling function
// greetingStudent();
// greetingStudent();


// // function with parameter
// function sumOfTwoValue(n1, n2){
//     console.log("The sum of two value: ", n1+n2);
// }

// // calling function
// sumOfTwoValue(500,200); //n1=10, n2=20

// function with default parameter
// function substraction(x=20, y=10){
//     return x - y; //function definition
// }

// //calling function

// console.log(substraction(30,5)); // x = 30 y = 5
// console.log(substraction(5)); // x= 5
// console.log(substraction()); // x = 20 y = 10 

// function with return

// function multiplication (n,m){
//     // console.log("Value of n: ", n);
//     // console.log("Value of m: ", m);
//     // console.log(`The result of n*m: ${n*m} `)   
//     return n*m; // return result of n*m
// }
// // calling function with return
// multiplication(10,10);
// console.log(multiplication(10,10));
// console.log(`The result of n*m = ${multiplication(10,10)}`);

//about global and local variable scope
// global
// let message = "Dear my beloved students.";

// function myMessage(){
//     console.log(message);
// }
// //calling function
// myMessage();

// function yourMessage(){
//     console.log(message);
// }
// //calling function
// yourMessage();

// // local scope of variable
// function myLocalFunction(){
//     let reply = "Hello Teachers."; // local scope
//     console.log(message);
//     console.log(reply);
// }
// //calling function
// myLocalFunction();

// function yourLocalFunction(){
//     console.log(message);
//     console.log(reply); //❌cannot use reply variable scope because reply is not define in yourLocalFunction
// }
// //calling function
// yourLocalFunction();

//arrow function
// const person =[
//     {
//         name: 'koko',
//         age: 18,
//         pob: 'pp'
//     },
//     {
//         name: 'koko1',
//         age: 20,
//         pob: 'kp'
//     }
// ]
// person.map(person => console.log(person.name))

// //arrow function with expression
// let isLogin = true;
// let authorize = (isLogin) ? () => console.log("You have logined!") : () => console.log("Please sign up!!");
// //calling arrow function
// authorize();
// multiple line of function definition in arrow function

    // let res = (x,y,z) =>{
    //     let sum = x + y + z;
    //     return sum;
    // }
    // // calling arrow function
    // console.log(res(6,7,8));


    // const animal = {
    //     species: 'mammal',
    //     action: () => {
    //         console.log(`This is animal species: ${this.species}`)
    //     }
    // }
    // animal.action()// ❌undefined

