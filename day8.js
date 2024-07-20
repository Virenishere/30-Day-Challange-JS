//Activity 1: Template Literals

// task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.

const personName = "Virender";
const personAge = 25;
console.log(`The age of ${personName} is ${personAge} years old.`); //output is "The age of Virender is 25 years old."

// task 2: Create a multi-line string using a template literals and log it to the console.

console.log(`this is a test of multi-line
    Where I entered the text over the next
    line to check it.`); 
// output is "this is a test of multi-line
    // Where I entered the text over the next
    // line to check it."
 
//Activity 2: Destructing

// task 3: Use array destructing to extract the first and second elements from an array of numbers and log them to the console.

const desArr = [1,2,3,4,5];
const [one,two] = desArr;
console.log(one); //output is "1"
console.log(two); //output is "2"


// task 4: Use object destructing to extract the title and author from a book object and log them to the console.

const desObj = {
    firstName: "Virender",
    lastName: "Prasad",
    age: 25
};
const { firstName, lastName, age } = desObj;

console.log(firstName); // output is "Virender"  
console.log(lastName); // output is "Prasad"  
console.log(age);  // output is "25"

//Activity 3: Spread and Rest Operators

// task 5: Use the spread operator to create a new array that includes all elements of an exisiting array plus additional elements, and log the new array to the console.

myArr = [1,2,3,4,5]
const newArr = [...myArr, 6,7,8];
console.log(newArr); // output is "[1,2,3,4,5,6,7,8]"

// task 6: Use the rest operator in a function to accept an arbitary number of arguments, sum them, and return the result.

function sum(...numbers){
    let total = 0;
    for(let number of numbers){
        total += number;
    }
    return total;
}
console.log(sum(1,2,3,4,5)); //output is "15"
console.log(sum(1,2,3)); //ouput is "6"

//Activity 4: Default Parameters

// task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with a without the second parameter.

function getProduct(a,b=1){
    return a*b;
} 
const res = getProduct(5);
console.log(res); // output is "5"

//Activity 5: Enhanced Object Literals

// task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.

const perFirstname = "Virender";
const perLastname = "Prasad";

const result = {
  perFirstname,
  perLastname,
  add(a,b) {
    return a+b;
  },
  getRes(){
    return `${this.perFirstname} and ${this.perLastname}`;
  }
}
console.log(result);
// output is "{
//   perFirstname: 'Virender',
//   perLastname: 'Prasad',
//   add: [Function: add],
//   getRes: [Function: getRes]
// }"

// task 9: Create an object with computed property names based on variables and log the objects to the console.

const propName1 = 'firstName';
const propName2 = 'lastName';

const info = {
    [propName1] : "Virender", 
    [propName2] : "Prasad",
    ['age'] : 25,
    ['getFullName'](){
        return `My first name is :${this[propName1]} and the last name is :${this[propName2]}`
    }
};

console.log(info);
//output is "{
//   firstName: 'Virender',
//   lastName: 'Prasad',
//   age: 25,
//   getFullName: [Function: getFullName]
// }"