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
}

//Magazine Subclass
//Inheritance
class Magazine extends Book {
  constructor(title, author, year, month) {
    super(title, author, year);
    this.month = month;
  }
}

//Inherte Magazine
class Telegram extends Magazine {
  constructor(title, author, year, month, day) {
    super(title, author, year, month);
    this.day = day;
  }
  getDay() {
    return `Today is ${this.day} for ${this.author} and his title is ${this.title}`;
  }
}
// const mag1 = new Magazine("Magazine one", "John doe", 2018, "jan");
// console.log(mag1.getSummary());
const t1 = new Telegram("Telegram 1", "Sourav", 2018, "Jan", "Monday");
console.log(t1.getDay());
