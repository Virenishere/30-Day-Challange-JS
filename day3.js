//Activity 1: If-Else Statements

// task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.

let numChecker = prompt("Enter a number to check:");
if (numChecker > 0) {
  console.log(`The number is positive`);
} else if (numChecker < 0) {
  console.log(`The number is negative`);
} else {
  console.log(`The number is zero`);
}
//output is "Enter the number is 10 then it gives The number is positive"

// task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.

let age = prompt("Enter the age to check if you are eligible for vote:");
if (age >= 18) {
  console.log("You are eligible to vote");
} else {
  console.log("You are not eligible to vote");
}
//output is "given the age as 19 then it gives You are eligible to vote"

//Activity 2: Nested If-Else Statements

//task 3: Write a program to find the largest to the three numbers using nested if-else statements.

let firstNum = prompt("Enter the first number:");
let secondNum = prompt("Enter the second number:");
let thirdNum = prompt("Enter the third number:");

if (firstNum > secondNum && firstNum > thirdNum) {
  console.log(`${firstNum} is greater than ${secondNum} and ${thirdNum}`);
} else if (secondNum > firstNum && secondNum > thirdNum) {
  console.log(`${secondNum} is greater than ${firstNum} and ${thirdNum}`);
} else {
  console.log(`${thirdNum} is greater than ${firstNum} and ${secondNum}`);
}
//output is "took first as 10, second as 20 and third as 30 then it gives 30is greater than 10 and 20"

//Activity 3: Switch Case

//task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
let day = parseInt(prompt("The number from 1 to 7:"));
switch (day) {
  case 1:
    console.log("The day is Monday");
    break;
  case 2:
    console.log("The day is Tuesday");
    break;
  case 3:
    console.log("The day is Wednesday");
    break;
  case 4:
    console.log("The day is Thursday");
    break;
  case 5:
    console.log("The day is Friday");
    break;
  case 6:
    console.log("The day is Saturday");
    break;
  case 7:
    console.log("The day is Sunday");
    break;
  default:
    console.log("Invalid number please assign values from 1 to 7 only...");
    break;
}
//output is "when choose number 1 is gives The day is monday"

//task 5: Write a program that uses a switch case to assign a grade ('A','B','C','D','E','F') based on a score and log the grade to the console.

let givenMarks = parseInt(prompt("Enter the score:"));
switch (true) {
  case givenMarks >= 90 && givenMarks <= 100:
    console.log("Grade A");
    break;
  case givenMarks >= 80 && givenMarks <= 89:
    console.log("Grade B");
    break;
  case givenMarks >= 70 && givenMarks <= 79:
    console.log("Grade C");
    break;
  case givenMarks >= 60 && givenMarks <= 69:
    console.log("Grade D");
    break;
  case givenMarks >= 50 && givenMarks <= 59:
    console.log("Grade F");
    break;
  default:
    console.log("Invalid number");
    break;
}
//output is "when enter the score is 90 then it gives Grade A"

//Activity 4: Conditional (Ternary) Operator

//task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

let checkNum = parseInt(
  prompt("Please enter the number to check whether number is odd or eve:")
);
const checker =
  checkNum % 2 === 0
    ? `${checkNum} is Even Number`
    : `${checkNum} is Odd Number`;
console.log(checker);
//output is "when enter the number as 1 then it gives 1 is Odd Number"

//Activity 5: Combining Conditions

//task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

let currentYear = prompt("Enter the year please to check if leap year or not:");
const checkYear =
  (currentYear % 4 === 0 && currentYear % 100 !== 0) || currentYear % 400 === 0
    ? `${currentYear} is a Leap year`
    : `${currentYear} is not a Leap year`;
console.log(checkYear);
//output is "when enter the year 2000 : 2000 is a Leap year"
