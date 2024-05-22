const baseUrl = 'http://localhost:3000';

class API {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    async fetchRequest(url, options) {
        const response = await fetch(url, options);
        if (!response.ok) return [];
        return response.json();
    }
    async getBooks() {
        return this.fetchRequest(`${this.baseUrl}/books`);
    }
    async createBook(book) {
        if (!APIHelper.isValid(book)) throw new Error('Geçersiz kitap bilgisi');
        return this.fetchRequest(`${this.baseUrl}/books`, {
            method: 'POST',
            body: JSON.stringify(book),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
    }
    async updateBook(id, book) {
        if (!APIHelper.isValid(book)) return;
        return this.fetchRequest(`${this.baseUrl}/books/${id}`, {
            method: 'PUT',
            body: JSON.stringify(book),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
    }
    async deleteBook(id) {
        await this.fetchRequest(`${this.baseUrl}/books/${id}`, {
            method: 'DELETE',
        });
    }
}