// ES5
//Constructor
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.getSummery = function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  };
}
// Instatiate an object
const book1 = new Book("Book one", "Sourav", 2013);
const book2 = new Book("Book two", "Majumder", 2016);
console.log(Object.values(book1));
console.log(book2.getSummery());
