// synchronous programming
// let name = "koka";
// const greeting = "Hello" + name;

// console.log(name);
// console.log(greeting);

// asynchronous programming

// using setTimeOut 

// I have three tasks to complete at home
// 1. Wash Dishes
// 2. Cook Food
// 3. Take out the trash

// 1. Wash Dishes
function WashDishes(){
    console.log("I have washed dishes!")
}
setTimeout(()=>{
    WashDishes()
}, 2000)
// 2. Cook Food 
function CookFood(){
    console.log("I have cooked the food!")
}
setTimeout(()=>{
    CookFood()
},5000)

//3. Take out the trash
function TakeOutTheTrash(){
    console.log("I took out the trash!")
}
setTimeout(()=>{
    TakeOutTheTrash()
},1000)

// calling each function
// WashDishes();
// CookFood();
// TakeOutTheTrash();

