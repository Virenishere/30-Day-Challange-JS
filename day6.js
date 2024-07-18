//Activity 1: Array Creation and Access

// task 1: Create an array of numbers from 1 and 5 and log the array to the console.

const numArr = [1,2,3,4,5];
console.log(numArr); //output is "[1, 2, 3, 4, 5]"
 
//task 2: Access the first and last elements of the array and log them to the console.

console.log(`The first element of Array is: ${numArr[0]} and the last element of Array is: ${numArr[4]}`); // output is "The first element of Array is: 1 and the last element of Array is: 5"

//Activity 2: Array Methods (Basic)

// task 3: Use the push method to add a new number to end of the array and log the updated array.

numArr.push(6)
console.log(numArr); //output is "[ 1, 2, 3, 4, 5, 6 ]"

// task 4: Use the pop method to remove the last element from the array and log the updated array.

numArr.pop();
console.log(numArr); //output is "[1, 2, 3, 4, 5]"

// task 5: Use the shift method to remove the first element from the array and log the updated array.

numArr.shift();
console.log(numArr);//output is "[ 2, 3, 4, 5 ]"

// task 6: Use the unshift method to add a new number to the beginning of the array and log the uppdated array.

numArr.unshift(0);
console.log(numArr); //output is "[ 0, 2, 3, 4, 5 ]"

//Activity 3: Array Methods (Intermediate)

// task 7: Use the map method to create a new array where each number is doubled and log the new array.

const mapArr = [1,2,3,4,5];
const mapNewarr = mapArr.map((num)=>num*2);
console.log(mapNewarr); //output is "[2, 4, 6, 8, 10]"

// task 8: Use the filter method create a new array with only even numbers and log the new array.

const filtArr = [1,2,3,4,5,6,7,8,9,10];
const filtNewarr = filtArr.filter( (num)=>num%2===0)
console.log(filtNewarr); //output is "[2, 4, 6, 8, 10]"

// task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.

const reduceArr = [1,2,3,4,5];
const reduceNewarr = reduceArr.reduce( (acc,item) => acc+item,0)
console.log(reduceNewarr); //output is "15"

//Activity 4: Array Iteration

// task 10: Use a for loop to iterate over the array and log each element to the console.

const loopArr = [1,2,3,4,5];
for(let i=0;i<loopArr.length;i++){
    console.log(i); 
} //output is "1,2,3,4,5"

// task 11: Use the forEach method to iterate over the array and log each element to the console.

const arrNew = [1,2,3,4,5];
 arrNew.forEach( (num)=> 
console.log(num) ) // output is "1 2 3 4 5"

//Activity 5: Multi-dimensional Arrays

// task 12: Create a two-dimensional array (matrix) and log the entire array to the console.

const mulDimarr =[
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15]
]
console.log(mulDimarr); 
//output is
//"[1,2,3,4,5],
//[6,7,8,9,10],
//[11,12,13,14,15]""

// task 13: Access and log a specific element from the two-dimensional array.

const mulDimSparr =[
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15]
]
console.log(mulDimSparr[0][0]); //output is "1"
console.log(mulDimSparr[0][1]); //output is "2"

//Feature Request 

//Array Manipulation Script : Write a scrit that demonstrate the creation of an Array, adding and removing elements using push, pop, shift , and unshift methods.

const manArr = [1,2,3,4,5];
manArr.push(6);
console.log(manArr); //ouput is "[1, 2, 3, 4, 5, 6]"

manArr.pop();
console.log(manArr); //ouput is "[1, 2, 3, 4, 5]"

manArr.unshift(0);
console.log(manArr); //ouput is "[0, 1, 2, 3, 4, 5]"

manArr.shift();
console.log(manArr); //ouput is "[1, 2, 3, 4, 5]"

//Array Transformation Script: Create a script that uses map, filter , and reduce methods to transform and aggregate array data.

const transArr = [1,2,3,4,5]

const newMaparr = transArr.map( (num)=>num*4 );
console.log(newMaparr); //ouput is "[4, 8, 12, 16, 20]"

const newFilarr = transArr.filter ( (num)=>{return num%2 === 0});
console.log(newFilarr); //output is "[2,4]"

const newRedarr = transArr.reduce((acc,item)=>acc+item,0)
console.log(newRedarr); //output is "15"

//Array Iteration Script: Write a script that iterates over an array using both for loop and forEach methods and logs.

const newForeacharr = [1,2,3,4,5];
for(let element of newForeacharr){
    console.log(element); 
}
//output is "1 2 3 4 5"

newForeacharr.forEach( (num)=> console.log(num))
//output is "1 2 3 4 5"

//Two-dimensional Array Script: Create a script that demonstrates the creation and manipulation of a two-dimensional array.

const newTwoarr =[[1,2,3,4],[4,5,6,7,8]];
console.log(newTwoarr[0][0]) //output is "1"
newTwoarr[0][0] = 10; //manipulate
console.log(newTwoarr[0][0])//output is "10"