class Book {
    constructor(nameBook, writer, description, category, date, image) {
        this.id = crypto.randomUUID();
        this.nameBook = nameBook,
        this.writer = writer,
        this.description = description,
        this.category = category,
        this.date = date,
        this.image = image || "https://dusunbil.com/wp-content/uploads/2018/01/YourCareer-Dec15-1024x768.jpg"
    }
}