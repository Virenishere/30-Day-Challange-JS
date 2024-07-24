//Activity 1: Understanding Promises

// task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.

const promiseMsg = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Message is delay and send after 2 second');
        resolve()
    },2000)
})

// task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch().

const PromiseMsgrej = new Promise(function(resolve, reject) {
    setTimeout(function() {
        const message = "Promise with reject message";
        let error = true; 
        
        if (!error) {
            resolve(message); 
        } else {
            reject("ERROR: Something went wrong"); 
        }
    }, 2000);
});

PromiseMsgrej.then(function(message) {
    console.log('Promise resolved with message:', message);
}).catch(function(error) {
    console.error('Promise rejected with error:', error);
});

//Activity 2: Chaining Promises

// task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order. 

function fetchData1(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('Data 1 fetched')
        },1000);
    })
}

function fetchData2(){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            resolve('Data 2 fetched');
        }, 1500);
    })
}

function fetchData3(){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            resolve('Data 3 fetched');
        }, 2000);
    })
}


fetchData1().then(function(message){
    console.log(message);
    return fetchData2();
})
.then(function(message){
    console.log(message);
    return fetchData3();
})
.then(function(message){
    console.log(message);
    return fetchData('All data fetched completely');
})
.catch(function(error){
    console.log("Error on fetching data:", error);
})

//Activity 3: Using Async/Await

// task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.

function fetchData() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve('Data fetched successfully');
        }, 2000);
    });
}
async function logResolvedValue() {
    try {
        const result = await fetchData(); 
        console.log('Resolved Value:', result); 
    } catch (error) {
        console.error('Error:', error); 
    }
}

logResolvedValue();

// task 5: Write an async function that handles a rejected promise using try-catch and logs the error message 

function fetchData() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            const error = true; // Simulating an error condition
            if (error) {
                reject('Error: Data fetching failed');
            } else {
                resolve('Data fetched successfully');
            }
        }, 2000);
    });
}

// Async function that handles a rejected promise using try-catch and logs the error message

async function handleRejectedPromise() {
    try {
        const result = await fetchData(); 
        console.log('Resolved Value:', result); 
    } catch (error) {
        console.error(error);
    }
}

handleRejectedPromise();

//Activity 4: Fecthing Data from an API

// task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.

fetch('https://api.github.com/users/hiteshchoudhary')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); 
    })
    .then(data => {
        console.log(data); 
    })
    .catch(error => {
        console.error('Fetch error:', error); 
    });



// task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.

async function getAllUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

getAllUsers();


//Activity 5: Concurrent Promises

// task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.

function fetchData1() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve('Data 1 fetched');
        }, 1000);
    });
}

function fetchData2() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve('Data 2 fetched');
        }, 1500);
    });
}

function fetchData3() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve('Data 3 fetched');
        }, 2000);
    });
}

const promises = [fetchData1(), fetchData2(), fetchData3()];

Promise.all(promises)
    .then(function(values) {
        console.log('All values resolved:', values);
    })
    .catch(function(error) {
        console.error('Error:', error);
    });

// task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises. 


function fetchData1() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve('Data 1 fetched');
        }, 1000);
    });
}

function fetchData2() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve('Data 2 fetched');
        }, 1500);
    });
}

function fetchData3() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve('Data 3 fetched');
        }, 2000);
    });
}


const promisesarr = [fetchData1(), fetchData2(), fetchData3()];

Promise.race(promisesarr)
    .then(function(value) {
        console.log('First resolved value:', value);
    })
    .catch(function(error) {
        console.error('Error:', error);
    });
