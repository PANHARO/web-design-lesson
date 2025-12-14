const fruits = ['apple', 'banana', 'orange', 'mango']

for (let i = 0; i<= fruits.length; i++){
    console.log(fruits[i])
}
/**
 * The process of loop above
 * i = 0 --> 0 <= 4 ==> output: fruit[0] = apple true
 * i = 1 --> 1 <= 4 ==> output: fruit[1] = banana true
 * i = 2 --> 2 <= 4 ==> output: fruit[2] = orange true
 * i = 3 --> 3 <= 4 ==> output: fruit[3] = mango true
 * i = 4 --> 4 <= 4 ==> output: fruit[4] = undefined true
 * i = 5 --> 5 <= 4 ==> output: stop execute false
 */  

// for ... in loop (specialize with usage of object)

const dictionary = {
    a: "Apple",     // key = a , value = Apple
    b: "Banana",    // key = b , value = Banana
    c: "Car",       // key = c , value = Car
    d: "Dog",       // key = d , value = Dog
    e: "Elephant",  // key = e , value = Elephant
};

//Add for .. in loop to retrieve object

for (let k in dictionary){
    console.log(`Key: ${k}, Value: ${dictionary[k]}`)
}

// While loop

let i = 1;

while (i<10){
    console.log(i);
    i++;
}

const myArr = [];
let l = 1;

do{
    //block of code
    myArr.push(l);
    l++;
}while(l<10); // condition
console.log("The value of myArr: ", myArr)