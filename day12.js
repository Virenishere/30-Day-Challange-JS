//Activity 1: Basic Error Handling with Try-Catch

// task 1: Write a function that intentionally throws a error and use a try-catch block to handle the error and log an appropriate message to the console.

function throwError(){
    try{
        noExistentFunction();
    }catch(error){
        console.error('Caught an error:');
        console.error(error);
    }
}

throwError();

// task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.

function divideTwonum(a,b){
    return a/b;
}

function errorChecker(){
    try{
        divideTwonum(2,0);
    }catch(error){
        if(error instanceof Error && error.message.includes('division by zero')){
            console.error('Division by zero error caught:');
            console.error(error);
        }else{
            console.error('An unexpected error occured:');
            console.error(error);
        }
    }
}
console.log(divideTwonum(2,4)); 
errorChecker();

//Activity 2: Finally Block 

// task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.

function addofTwonum(a,b){
    try {
        console.log("Starting the operation...");
        if(typeof a !== 'number' || typeof b !== 'number'){
            throw new Error('Invalid input: Both parameters must be numbers');
        }
        console.log(`Performing operation : ${a} + ${b} = ${a+b}`);
    }catch(error){
        console.error('Inside catch block');
        console.error(error);
        throw error;
    } finally{
        console.log('CLeaning up resources...');
    }
}


try{
    addofTwonum(6,3);
}catch(error){
    console.error('Error caught in main script', error.message);
}

try{
    addofTwonum(6,"5");
}catch(error){
    console.error('Error caught in main script', error.message);
}

try {
    exampleFunction(8, undefined);
} catch (error) {
    console.error('Error caught in main script:', error.message);
}

//Activity 3: Custom Error Objects

// task 4: Create a custom error class that extends the build-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.

/////////////////////////////////classes topic/////////////////////////////////// 

// task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.

/////////////////////////////////classes topic/////////////////////////////////// 

//Activity 4: Error Handling in Promises

// task 6: Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console.

function randomPromise(){
    return new Promise(function(resolve, reject){
        const randomNm = Math.random();

        if(randomNm < 0.5){
            resolve("Promise resolved Succesfully");
        }
        else{
            reject(new Error("Promise rejected due to random decision"));
        }
    });
}
randomPromise()
.then(result => {
    console.log('Promise resolved:', result);
})
.catch(error =>{
    console.error('Promise reject:', error.message);
})


// task 7: Use try-catch within async funsction to handle errors from a promise that randonly resolves or rejects, and log the error message.

function randPromise(){
    return new Promise((resolve,reject)=>{
        const randomNm = Math.random();

        if(randomNm < 0.5){
            resolve("promise resolved successfully");
        }else{
            reject(new Error("Promise rejected due to random decision"))
        }
    })
}

async function handleRandomPromise() {
    try{
        const result = await randPromise();
        console.log('Promise resolved:', result);
    }catch(error){
        console.error('Promise rejected:', error.message);
    }
}

handleRandomPromise();

//Activity 5: Graceful Error Handling in Fetch

// task 8: Use the fetch API to request data from an invalid URL and handle the error using .catch() .Log an appropriate error message to the console.

async function fetchData(){
    try{
        const response = await fetch("https://randomuser.me/api/");
        if(!response.ok){
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('data fetched successfully:', data);
        return data;
    }catch(error){
        console.error('Error fetching data:', error.message);
        throw error;
    }
}

fetchData()
    .then(data => {
        console.log('Data received in main script:', data);
    })
    .catch(error => {
              console.error('Error caught in main script:', error.message);
    });

// task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.

const asyncAPIFetch = async () => {
    try {
      const res = await fetch("https://api.kanye.ret/"); 
      const data = await res.json();
      console.log("Data from  Async >>>>", data);
    } catch (error) {
      console.log("Error from Async >>>>", error.message); 
    }
  };
  asyncAPIFetch();