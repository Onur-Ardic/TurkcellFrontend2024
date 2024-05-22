class Book {
    constructor(name, author, category, written_date, img) {
        this.id = crypto.randomUUID();
        this.name = name;
        this.author = author;
        this.category = category;
        this.written_date = written_date;
        this.img = img;
    }
}