import { v4 } from "../node_modules/uuid/dist/esm-browser/index.js";

class Book {
  constructor(title, author, category, year, coverUrl) {
    this.id = v4(); //ID'lerde çakışma olmaması için uuid kütüphanesini kullandım.
    this.title = title;
    this.author = author;
    this.category = category;
    this.year = year;
    this.coverUrl = coverUrl;
  }
}

export default Book;
