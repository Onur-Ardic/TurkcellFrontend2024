class Book {
  constructor(title, author, publisher, category, date, cover_image) {
    this.id = crypto.randomUUID;
    this.title = title;
    this.author = author;
    this.publisher = publisher;
    this.category = category;
    this.date = date;
    this.cover_image = cover_image;
  }
}
