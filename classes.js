// ES6
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }

  getAge() {
    const years = new Date().getFullYear() - this.year;
    return `${this.author} is ${years} old`;
  }
  revise(newYear) {
    this.year = newYear;
    this.revised = true;
  }
  static topBookStore() {
    return "Barnes & Noble";
  }
}

// Instantiate object
const book1 = new Book("Book one", "Sourav", 2018);
// console.log(book1);
// book1.revise(2022);
// console.log(book1);
console.log(Book.topBookStore());
