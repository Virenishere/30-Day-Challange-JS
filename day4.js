//Activity 1: For Loop

// task 1: Write a program to print numbers from 1 to 10 using a loop.

for (let num = 1; num <= 10; num++) {
  console.log(num);
}
// output is "1 2 3 4 5 6 7 8 9 10"

// task 2: Write a program to print the multiplication table of 5 using a for loop.

for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}
// output is
//"  5 x 1 = 5
//  5 x 2 = 10
//  5 x 3 = 15
//  5 x 4 = 20
//  5 x 5 = 25
//  5 x 6 = 30
//  5 x 7 = 35
//  5 x 8 = 40
//  5 x 9 = 45
//  5 x 10 = 50 "

//Activity 2: While Loop

// task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.

let firstNum = 1;
let sum = 0;
while (firstNum <= 10) {
  sum += firstNum;
  firstNum++;
}
console.log(`The sum of numbers from 1 to 10 is : ${sum}`);
//output is "The sum of numbers from 1 to 10 is : 55"

// task 4: Write a program to print numbers from 10 to 1 using a while loop.

let revNum = 10;
while (revNum >= 1) {
  console.log(revNum);
  revNum--;
}
//output is "10 9 8 7 6 5 4 3 2 1 "

//Activity 3: Do...While Loop

// task 5: Write a program to print numbers from 1 to 5 using a do... while loop.

let doNum = 1;
do {
  console.log(doNum);
  doNum++;
} while (doNum <= 5);

// task 6: Write a program to calculate the factorial of a number using a do...while loop.

let fNum = parseInt(prompt("Enter any number to calculate the factorial:"));
let originalNum = fNum;
let fac = 1;
do {
  fac *= fNum;
  fNum--;
} while (fNum >= 1);
console.log(`The factorial of ${originalNum} is : ${fac}`);
// output is The factorial of 5 is : 120

//Activity 4: Nested Loops

// task 7: Write a program to print a pattern using nested for loops:
// *
// **
// ***
// ****
// *****

for (let i = 1; i <= 5; i++) {
  let pattern = "";
  {
    for (let j = 1; j <= i; j++) {
      pattern += "*";
    }
    console.log(pattern);
  }
}
// output is
// *
// **
// ***
// ****
// *****

//Activity 5: Loop Control Statements

// task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}
//output is "1 2 3 4 6 7 8 9 10"

//task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.

for (let i = 1; i <= 10; i++) {
  if (i === 7) {
    break;
  }
  console.log(i);
}
