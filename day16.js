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

