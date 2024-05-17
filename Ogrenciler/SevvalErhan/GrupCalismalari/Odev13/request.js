class Request {

    static getPosts(callback) {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "https://jsonplaceholder.typicode.com/posts?_limit=20", true);
        xhr.onload = function() {
            if (this.status === 200) {
                const data = JSON.parse(this.responseText);
                callback(null, data);
            } else {
                callback(console.log("Veri alınamadı."));
            }
        };
        xhr.send(); 
    }

    static getImage(callback) {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", 'https://picsum.photos/200/300', true);
        xhr.responseType = 'blob'; // Yanıt tipini "blob" olarak ayarlar, bu sayede yanıt bir binary veri (resim) olarak gelir.
        xhr.onload = function() {
            if (this.status === 200) {
                const imageUrl = URL.createObjectURL(this.response); // Blob yanıtını bir URL'ye dönüştürür.
                callback(null, imageUrl);
            } else {
                callback(console.log('Resim yüklenirken hata oluştu.'));
            }
        };
        xhr.send();
    }
}