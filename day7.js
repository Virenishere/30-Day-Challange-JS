//Activity 1: Object Creation and Access

// task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.

const objBook = {
        title:'Things Fall Apart',
        author:'Chinua Achebe',
        year: 1958
}
console.log(objBook);
//ouput is "{ title: 'Things Fall Apart', author: 'Chinua Achebe', year: 1958 }"

// task 2: Access and log the title and author properties of the book object.

console.log(`The title of the book is ${objBook.title} and the author name is ${objBook.author}`); //output is "The title is "Things Fall Apart" and the author of this book is Chinua Achebe"

//Activity 2: Object Methods

// task 3: Add a method to the book object that returns a string with the book's title, author, and log the result of calling this method.

const objBooknew = {
    title:'Things Fall Apart',
    author:'Chinua Achebe',
    year: 1958,
    getDes: function() {       
        return `The title of the book is ${this.title} and the author name is ${this.author}`
    }
}
console.log(objBooknew.getDes()); //output is "The title is "Things Fall Apart" and the author of this book is Chinua Achebe"

// task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.

const objBookpara = {
    title:'Things Fall Apart',
    author:'Chinua Achebe',
    year:1958,
    updateYear: function(newYear){
        this.year = newYear;
    } 
}
objBookpara.updateYear(1999);
console.log(objBookpara); 
//output is "{
//   title: 'Things Fall Apart',
//   author: 'Chinua Achebe',
//   year: 1999,
//   updateYear: [Function: updateYear]
// }"

//Activity 3: Nested Objects 

// task 5: Create a nested object representing a library with properties like name and books (an array of books objects), and log the library object to the console.

const librObj = {
    name:'My Book List',
    books: [
    {
        title:'Things Fall Apart',
        author:'Chinua Achebe',
    },
    {
        title:'Pride and Prejudice',
        author:'Jane Austen',
    },
    {
        title:'Molloy, Malone Dies, The Unnamable, the trilogy',
        author:'Samuel Beckett"',
    },
    {
        title:'The Decameron',
        author:'Giovanni Boccaccio',
    },
    {
        title:'Beloved',
        author:'Toni Morrison',
    }
            ]
}
console.log(librObj); 
//ouput is "{
//   name: 'My Book List',
//   books: [
//     { title: 'Things Fall Apart', author: 'Chinua Achebe' },
//     { title: 'Pride and Prejudice', author: 'Jane Austen' },
//     {
//       title: 'Molloy, Malone Dies, The Unnamable, the trilogy',
//       author: 'Samuel Beckett"'
//     },
//     { title: 'The Decameron', author: 'Giovanni Boccaccio' },
//     { title: 'Beloved', author: 'Toni Morrison' }
//   ]
// }"

// task 6: Access and log the name of the library and the titles of all books in the library.

for(let book of librObj.books){
    let res = `${book.title}`;
    console.log(res);
}
//output is "Things Fall Apart,Pride and Prejudice,Molloy, Malone Dies, The Unnamable, the trilogy,The Decameron and Beloved"

//Activity 4: The this Keyword

// task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.

const librThisobj = {
    name:'My Book List',
    books: [
    {
        title:'Things Fall Apart',
        author:'Chinua Achebe',
        year: 1958,
        getDes: function(){
            return `title: ${this.title} and year: ${this.year}`;
        }
    },
    {
        title:'Pride and Prejudice',
        author:'Jane Austen',
        year:1813,
        getDes: function(){
            return `title: ${this.title} and year: ${this.year}`;
        }
    },
    {
        title:'Molloy, Malone Dies, The Unnamable, the trilogy',
        author:'Samuel Beckett',
        year:1952,
        getDes: function(){
            return `title: ${this.title} and year: ${this.year}`;
        }
    },
    {
        title:'The Decameron',
        author:'Giovanni Boccaccio',
        year:1351,
        getDes: function(){
            return `title: ${this.title} and year: ${this.year}`;
        }
    },
    {
        title:'Beloved',
        author:'Toni Morrison',
        year:1987,
        getDes: function(){
            return `title: ${this.title} and year: ${this.year}`;
        }
    }
            ]
}

for(let info of librThisobj.books){
    console.log(info.getDes());
}
//ouput is 
//"title: Things Fall Apart and year: 1958
// title: Pride and Prejudice and year: 1813
// title: Molloy, Malone Dies, The Unnamable, the trilogy and year: 1952
// title: The Decameron and year: 1351
// title: Beloved and year: 1987"

//Activity 5: Object Iteration

// task 8: Use a for...in loop to iterate over the properties of the books object and log each property and its value.

for(let book of librThisobj.books){
    console.log(book);
}
//output is 
//"{
//   title: 'Things Fall Apart',
//   author: 'Chinua Achebe',
//   year: 1958,
//   getDes: [Function: getDes]
// }
// {
//   title: 'Pride and Prejudice',
//   author: 'Jane Austen',
//   year: 1813,
//   getDes: [Function: getDes]
// }
// {
//   title: 'Molloy, Malone Dies, The Unnamable, the trilogy',
//   author: 'Samuel Beckett',
//   year: 1952,
//   getDes: [Function: getDes]
// }
// {
//   title: 'The Decameron',
//   author: 'Giovanni Boccaccio',
//   year: 1351,
//   getDes: [Function: getDes]
// }
// {
//   title: 'Beloved',
//   author: 'Toni Morrison',
//   year: 1987,
//   getDes: [Function: getDes]
// }"

// task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.

const librObjiteration = {
    name:'My Book List',
    books: [
    {
        title:'Things Fall Apart',
        author:'Chinua Achebe',
    },
    {
        title:'Pride and Prejudice',
        author:'Jane Austen',
    }]
}

for(let book of librObjiteration.books){
    console.log( `keys: ${Object.keys(book)}` );
    console.log( `value: ${Object.values(book)}` );
    console.log( '---' );
}
//output is 
//"keys: title,author
// value: Things Fall Apart,Chinua Achebe
// ---
// keys: title,author
// value: Pride and Prejudice,Jane Austen
// ---"

