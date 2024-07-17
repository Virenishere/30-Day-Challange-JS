//Activity 1: Function Declaration

// task 1: Write a function to check if a number is even or odd and log the result to the console.

function checkNum(num) {
  const checker = num % 2 === 0 ? `${num} is even` : `${num} is odd`;
  return checker;
}
console.log(checkNum(2));
//output is "2 is even"

// task 2: Write a function to calculate the square of a number and return the result.

function squareNum(num) {
  return console.log(`The square of ${num} is ${Math.pow(num, 2)}`);
}
squareNum(2);
//output is "The square of 2 is 4"

//Activity 2: Function Expression

// task 3: Write a function expression to find the maximum of two numbers and log the result to the console.

function maxNum(firstNum, secondNum) {
  const checker =
    firstNum > secondNum
      ? `${firstNum} is greater than ${secondNum}`
      : `${secondNum} is greater than ${firstNum}`;
  return checker;
}
console.log(maxNum(10, 2));
//output is "10 is greater than 2"

// task 4: Write a function expression to find to concatenate two strings and return the result.

function concatStr(firstStr, secondStr) {
  return `Concatenate of two strings are: ${firstStr + secondStr}`;
}
console.log(concatStr("hello", "world"));
//output is "Concatenate of two strings are: helloworld"

//Activity 3: Arrow Functions

// task 5: Write an arrow function to calculate the sum of two numbers and return the result.

const sumOfTwo = (firstNum, secondNum) => firstNum + secondNum;
console.log(`The sum of two numbers is: ${sumOfTwo(10, 2)}`);
//output is "The sum of two number is: 12"

// task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.

const containsChar = (str, char) => str.includes(char);
console.log(containsChar("hello", "e")); //output is "true"
console.log(containsChar("hello", "z")); //output is "false"

//Activity 4: Function Parameters and Default Values

// task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.

const productNum = (num1, num2 = 10) => num1 * num2;
console.log(productNum(10, 20)); //output is "200"
console.log(productNum(10)); //output is "100" // since num2 defaults to 10

// task 8: Write a function that takes a person's name and age and returns their product. Provide a default value for the age.

const productOfNameAge = (personName = "", age = 18) =>
  `Hello ${personName} and age is ${age}`;
console.log(productOfNameAge("Virender")); //output is "Hello Virender and age is 18"
console.log(productOfNameAge("Virender", 25)); //output is "Hello Virender and age is 25"

//Activity 5: Higher-Order Functions

// task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.

const callFunc = (func, num) => {
  for (let i = 0; i < num; i++) {
    func();
  }
};
const welMessage = () => {
  console.log("Hello!");
};
callFunc(welMessage, 4); //output is "Hello" //prints 5 times

// task 10: Write a higher-order function that takes two functions and value, applies the first function to the value, and then applies the second function to the result.

const compFunc = (func1, func2, value) => {
  const resultFromfunc1 = func1(value);
  const finalResult = func2(resultFromfunc1);
  return finalResult;
};

const addTwo = (x) => x + 2;
const mulTwo = (x) => x * 2;

const finalResult = compFunc(addTwo, mulTwo, 5);

console.log(finalResult); //output is "14"
