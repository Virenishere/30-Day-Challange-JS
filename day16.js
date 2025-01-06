//Activity 1: Basic Recursion 

//task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.

//the factorial of 3 represents the multiplication of numbers 3, 2, 1, i.e. 3! = 3 × 2 × 1 and is equal to 6.


function factorial(num, i=1){

    if(num<i){
    return 1;
}
return i * factorial(num,(i+1));
}
//console.log(factorial(5)); //120
//console.log(factorial(10)); //3628800
//console.log(factorial(4)); //24
//console.log(factorial(15)); //1307674368000


//task 2: Write a recursive function to calculate the Fibonacci of a number. Log the result for a few test cases.

//a series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers. The simplest is the series 1, 1, 2, 3, 5, 8, etc.

function fibonaci(N){
    if(N<=1){
        return N;
    }
    return fibonaci(N-1) + fibonaci(N-2);
}
//console.log(fibonaci(10)); //55
//console.log(fibonaci(15)); //610
//console.log(fibonaci(5)); //5
//console.log(fibonaci(25)); //75025

//Activity 2: Recursion with Arrays

//task 3: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.

function recArrSum(arr,sum=0){
    if(arr.length === 0){
        return sum;
    }
    sum += arr[0];
    return recArrSum(arr.slice(1), sum);
}

// const arr = [1,2,3,4,5];
// console.log(recArrSum(arr)); 
// Output: 15

//task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.

function maxArr(arr, index = 0, max = -Infinity){
    if(index === arr.length){
        return max;
    }

    if(arr[index] > max){
        max = arr[index]
    }

    return maxArr(arr,index + 1, max);
}

let arr = [1,5,2,6,8,10,56,4];
// console.log(maxArr(arr));

//Activity 3: String Manipulation with Recursion

//task 5: Write a recursive function to reverse a string. Log the result for few test cases.

function revString(str){
    if(str === ""){
        return str;
    }

    return revString(str.slice(1)) + str[0]
}

let string = "virender";
// console.log(revString(string));
// Output: "redneriv"

//task 6: Write a recursive function to check if a string is a pallindrome.Log the result for a few cases.

function pallindromeCheck(str,start = 0,end = str.length-1){
    if(start >= end){
        return true;
    }

    if(str[start] != str[end]){
        return false;
    }

    return pallindromeCheck(str, start + 1 , end -1);
}
let string1 = "madam";
let string2 = "hello";

// console.log(pallindromeCheck(string1));  
// Output: true
// console.log(pallindromeCheck(string2));  
// Output: false

//Activity 4: Recursive Search
// task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases.


function binarySearchRecursive(arr,target, left= 0 , right = arr.length-1){
    if(left>right) return -1;

    const mid = Math.floor((left + right)/2);

    if(arr[mid] === target) return mid;

    if(target < arr[mid]){
        return binarySearchRecursive(arr,target,left,mid-1);
    }else{
        return binarySearchRecursive(arr,target,mid+1,right);
    }
}

const arr1 = [1, 3, 5, 7, 9, 11, 13];

// console.log(binarySearchRecursive(arr1, 7));   
// // Output: 3
// console.log(binarySearchRecursive(arr1, 1));   
// // Output: 0
// console.log(binarySearchRecursive(arr1, 13));  
// // Output: 6
// console.log(binarySearchRecursive(arr1, 4));   
// // Output: -1 (not found)
// console.log(binarySearchRecursive(arr1, 11));  
// Output: 5


// task 8: Write a recursive function to count the occurences of a target element in a array. Log the result for a few cases.


function countOccurrences(arr,target,index=0){
    if(index=== arr.length) return 0;

    const count = arr[index] === target ? 1 : 0;

    return count + countOccurrences(arr,target, index+1)
}

// console.log(countOccurrences([1, 2, 3, 4, 2, 2, 5], 2)); 
// // Output: 3
// console.log(countOccurrences([7, 8, 9, 7, 7, 10], 7));   
// // Output: 3
// console.log(countOccurrences([1, 1, 1, 1, 1], 1));       
// // Output: 5
// console.log(countOccurrences([5, 6, 7, 8], 9));          
// // Output: 0
// console.log(countOccurrences([], 1));                    
// // Output: 0