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

// Magazine constructor
function Magazine(title, author, year, month) {
  // this variable pass this magazine function
  Book.call(this, title, author, year);
  this.month = month;
}

// Inherit prototype
Magazine.prototype = Object.create(Book.prototype);

//Instantiate Magazine Object
const mag1 = new Magazine("Meg one", "John doe", 2018, "Jan");
console.log(mag1);

console.log(mag1.getSummery());

// Use magaine constructor
Magazine.prototype.costructor = Magazine;
console.log(mag1);
