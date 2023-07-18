import { Book } from "./book.js";

export class Magazine extends Book {
  constructor(title, author, ISBN) {
    super(title, author, ISBN);
    this.issueNumber = issueNumber;
  }

  get issueNumber() {
    return this.issueNumber;
  }

  set issueNumber(newIssueNumber) {
    this.issueNumber = newIssueNumber;
  }
}
