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
// function WashDishes(){
//     console.log("I have washed dishes!")
// }
// setTimeout(()=>{
//     WashDishes()
// }, 2000)
// promise is process which pending to wait for (fulfill or reject)
const WashDishes = new Promise((resolve, reject)=>{
    let isTrue = false;
    if (isTrue){
        setTimeout(()=>{
        resolve("You have washed the dishes!")
    },2000);
    }else{
        reject("You haven't washed the dishes!")
    }
})
// 2. Cook Food 
// function CookFood(){
//     console.log("I have cooked the food!")
// }
// setTimeout(()=>{
//     CookFood()
// },5000)
const cookFood = new Promise((resolve, reject)=>{
    let isTrue = true;
    if (isTrue){
        setTimeout(()=>{
        resolve("You have cooked the food!")
    },2000);
    }else{
        reject("You haven't cooked the food!")
    }
})

//3. Take out the trash
// function TakeOutTheTrash(){
//     console.log("I took out the trash!")
// }
// setTimeout(()=>{
//     TakeOutTheTrash()
// },1000)
const TakeOutTheTrash = new Promise((resolve, reject)=>{
    let isTrue = true;
    if (isTrue){
        setTimeout(()=>{
        resolve("You have taken out the trashes!")
    },2000);
    }else{
        reject("You haven't taken out the trashes!")
    }
})

// calling function which implement with promises
WashDishes.then((task)=> {
    console.log(task); return cookFood;
})
        .then((task)=>{
            console.log(task); return TakeOutTheTrash;
        })
        .then((task)=>{
             console.log(task); return console.log("You have completed all task");
        })
        .catch((error)=>console.log(error))

// calling each function
// WashDishes();
// CookFood();
// TakeOutTheTrash();

