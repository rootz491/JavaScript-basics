//  console.log('karan');

//  object
/*
const book = {
    name: "Alchemist",
    author: "panlo caeino"
}

//  console.log(book)

console.log(Object.keys(book));
console.log(Object.values(book));
*/

//  constructor
function book(name, author) {
    this.name = name;
    this.author = author;    
}

book.prototype.updateAuthor = (author) => {
    this.author = author;
    this.update = true;
}

book.prototype.summary = () => {
    console.log(`${this.name} is written by ${this.author}`);
}

book.prototype.updateBook = (book) => {
    this.book = book;
    this.update = true;
}











//  instaniate an object
let first = new book('Alchemist', 'panlo caeino');

/*
console.log(book);
console.log(Object.keys(first));
console.log(Object.values(first));
*/



let second = new book('concept of physics', 'R. D. Sharma');
//console.log(second.summary());

console.log(first)
first.updateAuthor('karan');
console.log(first)

