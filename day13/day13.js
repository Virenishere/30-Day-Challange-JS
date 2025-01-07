//Day 13 : Modules
//task 1: create a modules that exports a function to add two numbers. Import and use this module in another script

import {add} from "./modules/add.js"

console.log(add(1,3)); 

//task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.

import {person} from "./modules/person.js"

console.log(person);
person.greet();

// task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.

import mathOperations from "./modules/mulexp.js";
console.log("Addition:", mathOperations.sum(5,5)); 
console.log("Multiplication:", mathOperations.mul(5,5));
console.log("Subtraction:", mathOperations.sub(5,2));
console.log("Division:", mathOperations.div(4,2));

// task 4: Create a module that exports a single function using default export. Import and use this function in another script.

import factorial from "./modules/singlefunc.js"
console.log("The factorial is:",factorial.fact(10)); 

// task 5: Created a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.

import operations from "./modules/constant.js"
console.log(operations.Name);
console.log(operations.fibonacci(10));
console.log(operations.power(2,2));

// task 6: Install a third-party module (e.g., lodash) using a npm. Import and use a function form this module in a script.

import _ from 'lodash';

const array= [1,2,3,4,5];
const reverseArray = _.reverse([...array]);

console.log(`Reversed Array: ${JSON.stringify(reverseArray)}`);

// task 7: Install a third party module (e.g., axios) using npm. Import and use a function from this module in a script.

import axios from 'axios';

axios.get('https://jsonplaceholder.typicode.com/users').then(response =>{
    console.log(response.data);
}).catch(error => {
    console.error(error);
});