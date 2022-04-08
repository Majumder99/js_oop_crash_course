// Object of Protos
const bookProtos = {
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
  getAge: function () {
    const years = new Date().getFullYear() - this.year;
    return `${this.author} is ${years} old`;
  },
};

const bookProtos1 = {
  getSummary: function () {
    return `${this.title} was written by ${this.author}`;
  },
  getAge: function () {
    const years = new Date().getFullYear() - this.year;
    return `${this.author} is ${years} old`;
  },
};

//Create object
// const book1 = Object.create(bookProtos);
// book1.title = "Book one";
// book1.author = "John Doe";
// book1.year = 2013;
// console.log(book1.getSummary());

const book1 = Object.create(bookProtos, {
  title: { value: "book one" },
  author: { value: "John doe" },
  year: { value: 2022 },
});
console.log(book1.getSummary());

const book2 = Object.create(bookProtos1);
book2.title = "Book Two";
book2.author = "Majumder";
book2.year = 2222;
console.log(book2.getSummary());
