class Book {
  constructor(title, author, category, date, cover_image) {
    this.id = crypto.randomUUID;
    this.title = title;
    this.author = author;
    this.category = category;
    this.date = date;
    this.cover_image = cover_image;
  }
}
