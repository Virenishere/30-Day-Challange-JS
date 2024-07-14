//Activity 1: Arithmetic Operations

// task 1: Write a program to add two numbers and log the result to the console.

let num1 = 6;
let num2 = 12;
console.log(`The sum of two numbers is: ${num1 + num2}`); //output is "The sum of two numbers is: 18"

//task 2: Write a program to subtract two numbers and log the result to the console.

let num3 = 12;
let num4 = 6;
console.log(`The subtraction of two numbers is: ${num3 - num4}`); //output is "The subtraction of two numbers is: 6"

//task 3: Write a program to multiply two numbers and log the result to the console.

let num5 = 2;
let num6 = 4;
console.log(`The multliplication of two numbers is: ${num5 * num6}`); //output is "The multliplication of two numbers is: 8"

//task 4: Write a program to divide two numbers and log the result to the console.

let num7 = 4;
let num8 = 2;
console.log(`The division of two numbers is: ${num7 / num8}`); // output is "The division of two numbers is: 2"

//task 5: Write a program to find the remainder when one number is divided by another by another and log the result to the console.

let num9 = 5;
let num10 = 2;
console.log(`The remainder of two numbers is: ${num9 % num10}`); // output is "The mod of two numbers is: 1"

//Activity 2: Assignment Operators

//task 6: Use the += operator to add a number to a variable and log the result to the console.

num1 += 10;
console.log(`The += operators result is: ${num1}`); // output is "The += operators result is: 16"

//task 7: Use the -= operator to subtract a number from a variable and log the result to the console.

num2 -= 10;
console.log(`The -= operators result is: ${num2}`); // output is "The -= operators result is: 2"

//Activity 3: Comparison Operators

//task 8: Write a program to compare two numbers using > and < and log the result to the console.

let comp1 = 2;
let comp2 = 4;
console.log(comp1 < comp2); // output is "true"
console.log(comp1 > comp2); // output is "false"

//task 9: Write a program to compare two numbers using >= and <= and log the result to the console.

let comp3 = 5;
let comp4 = 10;
let comp5 = 15;
let testParaTwo = comp5 - comp3;

console.log(comp4 >= testParaTwo); //output is "true"
console.log(comp4 > comp5); //output is "false"

//task 10: Write a program to compare two numbers using == and === and log the result to the console.

let testSampOne = 10;
let testSampTwo = "10";
console.log(testSampOne == testSampTwo); //output is "true"
console.log(testSampOne === testSampTwo); //output is "false"

//Activity 4: Logical Operators

//task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.

let a = 10;
let b = 15;
let c = 20;
console.log(a < b && b < c); //output is "true"

//task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.

console.log(a > b || b < c); //output is "true"

//task 13: Write a program that uses the ! operator to combine two conditions and log the result to the console.

console.log(a > b && !(b > c)); //output is "flase"
console.log(a > b || !(b > c)); //output is "true"

//Activity 3: Ternary Operators

//task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.

let testCondSamp = 10;
let testCond = testCondSamp >= 0 ? "positive" : "negative";
console.log(testCond); //output is "positive"
