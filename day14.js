//Day 14 : Classes
//Activity 1: Class Definition 

// task 1: Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message.

class Person{
    constructor(name,age){
        this.name= name;
        this.age= age;
    }
    greeting(){
        return (`Hi!, my name is ${this.name} and I am ${this.age} year old`)
    }

    //task 2 

    updatedAge(){
        console.log(`Updated age: ${this.age}`);
    }

    //task 5
    static genericGreeting(){
        return "Hello Welcom to our platform";
    }
}
let mesg = new Person("Virender", 25);
console.log(mesg.greeting());


// task 2: Add a method to the Person class that updates the age property and logs the updated age.

mesg.updatedAge(26)
console.log(mesg.greeting());

//Activity 2: Class Inheritance 

// task 3: Define a class Student that extends the Person class. Add a property studentID and a method to return the student ID. Create an instance of the Student class and log the student ID.

class Student extends Person{
    
        //task6
        static numberOfStudents = 0;

    constructor(name,age,studentID){
        super(name,age);
        this.studentID = studentID;
        //task6
        Student.numberOfStudents++;
    
    }

    //task 4 Override
    greeting(){
        return `${super.greeting()} My student ID is ${this.studentID}`
    }
    
    getStudentId(){
        return `Student ID: ${this.studentID}`
    }

    //task6
    static getNumberOfStudents(){
        return `Total number of students: ${Student.numberOfStudents}`
    }
}

let student = new Student("Virender", 25, "S12345");
console.log(student.getStudentId());


// task 4: Override the greeting method in the Student class to include the student ID in the message. Log the overriden greeting message.

console.log(student.greeting());

//Acitivity 3: Static Methods and Properties 

// task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.

console.log(Person.genericGreeting);


// task 6: Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.

let student1 = new Student("Alice", 22, "S12121");
let student2 = new Student("Bob", 24, "S67890");
console.log(Student.getNumberOfStudents());

//Activity 4: Getters and Setters

// task 7: Add a getter method to the Person class to return the full name (assume a firstName and lastName property). Create an instance and log the full name using the getter.

class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    greeting(){
        return `Hi! My name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`;
    }

    updatedAge(newAge){
        this.age = newAge;
        console.log((`updated age: ${this.age}`));
    }

    static genericGreeting(){
        return `Hello! Welcome to our platform`;
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }

    //task8

    set fullName(name){
        const [firstName,lastName] = name.split(' ');
        this.firstName = firstName || '';
        this.lastName = lastNanme || '';
    }
}

let person = new Person('Virender' ,'Prasad', 25);

console.log(person.fullName);


// task 8: Add a setter method to the Person class to update the name properties (firstName and lastName). Update the name using the setter and log the updated full name.

person.fullName = "Hitesh Choudhary";
console.log(person.fullName);


//Activity 5: Private Fields (Optional)

// task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.

class Account{
    #balance;

    constructor(initialBalance){
        this.balance = initialBalance;
    }

    deposit(amount){
        if(amount > 0){
            this.#balance += amount;
            console.log(`Deposited the $${amount}. New balance is : $${this.#balance}`);
        }else{
            console.log('Depost amount must be positive');
            
        }
    }

    withdraw(amount){
        if(amount > 0){
             if(amount <= this.#balance){
             this.#balance -= amount;
             console.log('Withdraw $${amount}. New balance: $${balance}');
        }else{
            console.log("Insufficent funds");
        } 
    }
        else {
            console.log('Withdrawal amount must be positive');            
        }
    }

    getBalance(){
        return this.#balance;
    }
}
    
let account = new Account(100); 
account.deposit(50);    
account.withdraw(30);  
console.log(`Final balance: $${account.getBalance()}`);


// task 10: Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation.


class Account {
    #balance; // Private field for balance

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    // Method to deposit money
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited $${amount}. New balance: $${this.#balance}`);
        } else {
            console.log('Deposit amount must be positive.');
        }
    }

    // Method to withdraw money
    withdraw(amount) {
        if (amount > 0) {
            if (amount <= this.#balance) {
                this.#balance -= amount;
                console.log(`Withdrew $${amount}. New balance: $${this.#balance}`);
            } else {
                console.log('Insufficient funds.');
            }
        } else {
            console.log('Withdrawal amount must be positive.');
        }
    }

    // Method to check balance (not required, but useful for demonstration)
    getBalance() {
        return this.#balance;
    }
}

// Create an instance of Account with an initial balance of $200
let myAccount = new Account(200);

// Test deposit method
myAccount.deposit(50);  // Deposit $50
console.log(`Balance after deposit: $${myAccount.getBalance()}`); // Log balance after deposit

// Test withdraw method
myAccount.withdraw(30); // Withdraw $30
console.log(`Balance after withdrawal: $${myAccount.getBalance()}`); // Log balance after withdrawal

// Attempt to withdraw more than the balance
myAccount.withdraw(250); // Attempt to withdraw $250 (should show insufficient funds)
console.log(`Balance after attempted overdraw: $${myAccount.getBalance()}`); // Log balance after attempted overdraw

// Test deposit with invalid amount
myAccount.deposit(-20); // Attempt to deposit -$20 (should show deposit amount must be positive)
console.log(`Balance after invalid deposit: $${myAccount.getBalance()}`); // Log balance after invalid deposit
