export const person ={
    name: "Virender Prasad",
    age: 25,
    greet: function(){
        console.log(`Hello, My name is ${this.name} and I am ${this.age} years old.`);
    }
}