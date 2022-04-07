//Object literal
const book1 = {
  title: "book one",
  author: "john dow",
  year: "2013",
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
};
const book2 = {
  title: "book two",
  author: "jahn dow",
  year: "2014",
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
};
// console.log(book2.getSummary());
console.log(Object.values(book2));
console.log(Object.keys(book2));
