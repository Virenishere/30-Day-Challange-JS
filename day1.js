//Activity 1: Variable Declaration

//task 1 : Declare a variable using var, assign it a number, and log the value to the console.

var myNum = 5;
console.log("The output is:", myNum); // output is ""The output is: 5""

//task 2 : Declare a variable usinga let, assign it a string, and log the value to the console.

let myName = "Virender";
console.log("My name is:", myName); //output is "My name is: Virender"

//Activity 2: Constant Declaration

//task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.

const dayOne = true;
console.log("JS of chaiaurcode Day 1 Completed:", dayOne); // output is "JS of chaiaur Day 1 Completed: true"

//Activity 3: Data Types

//task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.

let num = 1;
console.log(typeof num); //output is number

let str = "Hello";
console.log(typeof str); //output is string

let boolvalue = true;
console.log(typeof boolvalue); //output is boolean

let objTest = {};
console.log(typeof objTest); //output is object

let arrOne = [1, 2, 3, 4, 5];
console.log(typeof arrOne); //output is object

//Activity 1: Reassigning Variables

//task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.

let firstNum = 10;
console.log("The initial value is:", firstNum); //output is "The initial value is: 10"

firstNum = 20;
console.log("The changed value is:", firstNum); //output is "The changed value is: 20"

//Activity 5: Understanding const

//task 6: Try reassigning a variable decalred with const and observe the error.

const val = 30;
console.log("The const value is:", val);

val = 40;
console.log("The reassigned const value is:", val);

//output is "TypeError: Assignment to constant variable."

//Feature Request

// 1.Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and types of each variables to the console.

console.log(`The value of ${num} and type is ${typeof num}`); //output is "The value of 1 and type is number"

console.log(`The value of ${str} and type is ${typeof str}`); //output is "The value of Hello and type string"

console.log(`The value of ${boolvalue} and type is ${typeof boolvalue}`); //output is "The value of true and type" boolean

console.log(`The value of ${objTest} and type is ${typeof objTest}`); //output is "The value of [object Object] and type object"

console.log(`The value of ${arrOne} and type is ${typeof arrOne}`); //output is "The value of 1,2,3,4,5 and type object"

// 2.Reassignment Demo: Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment.

let newOne = "hello";
newOne = "World!";

console.log(newOne); //output is "World!"

const newTwo = "hello";
newTwo = "World!";

console.log(newTwo);

//output is "TypeError: Assignment to constant variable."
