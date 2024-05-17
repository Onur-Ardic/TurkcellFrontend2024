class Request {
    static getPosts(callback) {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "https://jsonplaceholder.typicode.com/posts?_limit=20", true);
        xhr.onload = function() {
            if (this.status === 200) {
                const data = JSON.parse(this.responseText);
                callback(null, data);
            } else {
                callback(new Error("Veri alınamadı."));
            }
        };
        xhr.send();
    }

    static getImage(callback) {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", 'https://picsum.photos/200/300', true);
        xhr.responseType = 'blob';
        xhr.onload = function() {
            if (this.status === 200) {
                const imageUrl = URL.createObjectURL(this.response);
                callback(null, imageUrl);
            } else {
                callback(new Error('Resim yüklenirken hata oluştu.'));
            }
        };
        xhr.send();
    }
}
