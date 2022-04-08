//Constructor
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

//Getsummery
Book.prototype.getSummery = function () {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};
//Getage
Book.prototype.getAge = function () {
  const years = new Date().getFullYear() - this.year;
  return `${this.author} is ${years} old`;
};
// Revise / change year
Book.prototype.revise = function (newYear) {
  this.year = newYear;
  this.revised = true;
};
// Instatiate an object
const book1 = new Book("Book one", "Sourav", 2013);
const book2 = new Book("Book two", "Majumder", 2016);
// console.log(Object.values(book1));
console.log(book2);
book2.revise(2018);
console.log(book2);
