//Day 15 : Closures
//Activity 1: Understanding Closures

// task 1: write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.

function fOne(){
    let outerVariables = "Hello from the outer function!"
    console.log("This is function first");
    return function fTwo(){
        console.log("This is function second");
        return `Inner function accessing outer variables: ${outerVariables}`
    }
}

const innerFunction = fOne();

const result = innerFunction();

console.log(result);
// This is function first
//  This is function second
// VM91:14 Inner function accessing outer variables: Hello from the outer function!

// task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.

function createCounter(){
    let counter = 0;
    return {
        increment : function(){
            counter ++;
        },
        getvalue : function(){
            return counter;
        }
    };
}

const myCounter = createCounter();

myCounter.increment();
myCounter.increment();


console.log(myCounter.getvalue()); // 2

//Activity 2: Practical Closures

// task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.

function createUniqueIdGenerator(){
    let lastID = 0;
    return function generateId(){
        lastID++;
        return lastID;
    }
}

const generateUniqueId = createUniqueIdGenerator();

console.log(`userid: ${generateUniqueId()}`);  //userid: 1
console.log(`userid: ${generateUniqueId()}`); //userid: 2
console.log(`userid: ${generateUniqueId()}`); //userid: 3

// task 4: Create a closure that captures a user's name and returns a function that greets the user by name.

function userName(){
    let username = "Virender";
    return function greetUser(){
        return `Hi! ${username} Welcome...`;
    }
}

let welcomeMessage = userName();
console.log(welcomeMessage()); // Hi! Virender Welcome...

//Activity 3: Closures in Loops

// task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.

const functionsArray = [];

for (let i=0; i<5; i++){
    functionsArray.push(function(){
        console.log(i);
    });
}

functionsArray.forEach(funct => funct()); // 0 1 2 3 4 

//Activity 4: Module Pattern

// task 6: Use closures to creata a simple module for managing a collection of items. Implement methods to add, remove and list items.

function createItemManager(){
    let items = [];
    
    return {
        addItems: function(item){
            items.push(item);
            console.log(`Added items: ${item}`);
        },
        removeItems: function(item){
            const index = items.indexOf(item);
            if(index > -1){
                items.splice(index, 1);
                console.log(`Removed items: ${item}`)   
            }else{
                console.log(`Item not found: ${item}`);
            }
        },
        listItems: function(){
            console.log('Current items:', items);
            return items.slice();
        }
    };
}
const itemManager = createItemManager();
itemManager.addItems('Apple'); //Added items: Apple
itemManager.addItems('Banana'); //Added items: Banana
itemManager.listItems(); //Current items: (2) ['Apple', 'Banana']
itemManager.removeItems('Apple'); //Removed items: Apple
itemManager.listItems(); //Current items: ['Banana']
itemManager.removeItems('Cherry'); //Item not found: Cherry

//Activity 5: Memoization

//task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.

function memoize(fn) {
    const cache = {};
    return function(arg){
        if (cache[arg] !== undefined) {
            console.log('Fetching from cache:', arg);
            return cache[arg];
    }
    console.log('Computing result:', arg);
        const result = fn(arg); // Compute result if not cached
        cache[arg] = result; // Store result in cache
        return result;
    };
}

function slowFunction(x) {
    // Simulate a slow computation
    for (let i = 0; i < 1e9; i++) {}
    return x * x;
}

const memoizedSlowFunction = memoize(slowFunction);


console.log(memoizedSlowFunction(5)); // Computing result: 5 // 25
console.log(memoizedSlowFunction(5)); // Fetching from cache: 5 //25
console.log(memoizedSlowFunction(10)); // Computing result: 10 //100
console.log(memoizedSlowFunction(10)); // Fetching from cache: 10 //100


//task 8: Create a memoized version of a function that calculates the factorial of a number.

function memoize(fn) {
    const cache = {}; // Private variable to store cached results

    return function(arg) {
        if (cache[arg] !== undefined) {
            console.log('Fetching from cache:', arg);
            return cache[arg]; // Return cached result if it exists
        }

        console.log('Computing result:', arg);
        const result = fn(arg); // Compute result if not cached
        cache[arg] = result; // Store result in cache
        return result;
    };
}

// Factorial function
function factorial(n) {
    if (n < 0) {
        throw new Error('Factorial is not defined for negative numbers');
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Create a memoized version of the factorial function
const memoizedFactorial = memoize(factorial);

// Test the memoized factorial function
console.log(memoizedFactorial(5)); // Computing result: 5
console.log(memoizedFactorial(5)); // Fetching from cache: 5
console.log(memoizedFactorial(6)); // Computing result: 6
console.log(memoizedFactorial(6)); // Fetching from cache: 6