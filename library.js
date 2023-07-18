import { Book } from "./book.js";

export class Library {
  constructor(name, books) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    {
      this.books = [...this.books, book];
      console.log(`${book.title} by ${book.author} added to library.`);
    }
  }

  removeBook(ISBN) {
    const removedBook = this.books.find((book) => book.ISBN === ISBN);
    if (removedBook) {
      this.books = this.books.filter((book) => book.ISBN !== ISBN);
      console.log(`${removedBook.title} removed from the library.`);
    } else {
      console.log(`Book with ISBN ${ISBN} not found in the library.`);
    }
  }

  findBooksByAuthor(author) {
    const booksByAuthor = this.books.filter((book) => book.author === author);
    return booksByAuthor;
  }

  listBooks() {
    this.books.forEach((book) => {
      console.log(`Title:${book.title}`);
      console.log(`Author: ${book.author}`);
      console.log(`ISBN: ${book.ISBN}`);
    });
  }

  getTotalBooks() {
    return this.books.length;
  }

  getBooksWithTitleContaining(keyword) {
    const booksWithTitle = this.books.filter((book) =>
      book.title.includes(keyword)
    );
    return booksWithTitle;
  }

  getUniqueAuthors() {
    const uniqueAuthorsSet = new Set(this.books.map((book) => book.author));
    const uniqueAuthorsArray = Array.from(uniqueAuthorsSet);
    return uniqueAuthorsArray;
  }
  getTotalBooksByAuthor(author) {
    const totalBooks = this.books.reduce((count, book) => {
      if (book.author === author) {
        return count + 1;
      }
      return count;
    }, 0);
    return totalBooks;
  }
  hasAnyBooksByAuthor(author) {
    return this.books.some((book) => book.author === author);
  }
  haveAllBooksByAuthor(author) {
    return this.books.every((book) => book.author === author);
  }
  getBookTitles() {
    return this.books.map((book) => book.title);
  }
}

const library = new Library();
const book1 = new Book("The Gambler", "Dostoievski", "ISBN1");
const book2 = new Book("book2", "author2", "ISBN2");
const book3 = new Book("book3", "author2", "ISBN3");

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
console.log(library.books);
library.removeBook("ISBN1");

const findBooksByAuthor = library.findBooksByAuthor("author2");
console.log(findBooksByAuthor);

library.listBooks();

const totalBooks = library.getTotalBooks();
console.log(`Nr. of books: ${totalBooks}`);

const booksWithTitleContainingBook =
  library.getBooksWithTitleContaining("book");
console.log(booksWithTitleContainingBook);

const uniqueAuthors = library.getUniqueAuthors();
console.log(uniqueAuthors);

const totalBooksByAuthor2 = library.getTotalBooksByAuthor("author2");
console.log(`Total books by author 2: ${totalBooksByAuthor2}`);

const hasAnyBooksByAuthor2 = library.hasAnyBooksByAuthor("author2");
console.log(hasAnyBooksByAuthor2);

const haveAllBooksByAuthor2 = library.haveAllBooksByAuthor("author2");
console.log(haveAllBooksByAuthor2);

const bookTitles = library.getBookTitles();
console.log(bookTitles);
