class Request {
    static async get(baseUrl) {
        try {
            const response = await fetch(baseUrl);
            const data = await response.json();
            return data;
        } catch (err) {
            throw new Error("Veri alınamadı.");
        }
    }

    static async post(baseUrl, data) {
        try {
            const response = await fetch(baseUrl, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            });
            const responseData = await response.json();
            return responseData;
        } catch (err) {
            throw new Error("Hata Alındı.");
        }
    }

    static async put(baseUrl, data) {
        console.log(data)
        try {
            const response = await fetch(baseUrl, {
                method: "PUT",
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json;",
                },
            });
            const responseData = await response.json();
            return responseData;
        } catch (err) {
            throw new Error("Hata Alındı.");
        }
    }

    static async delete(baseUrl) {
        try {
            const response = await fetch(baseUrl, {
                method: "DELETE",
            });
            const responseData = await response.json();
            return responseData;
        } catch (err) {
            throw new Error("Hata Alındı.");
        }
    }
}

// class Request {
//     static get(baseUrl) {
//         return new Promise((resolve, reject) => {
//             fetch(baseUrl)
//                 .then((response) => response.json())
//                 .then((data) => resolve(data))
//                 .catch((err) => reject(err, "Veri alınamadı."));
//         });
//     }
//     static post(baseUrl, data) {
//         return new Promise((resolve, reject) => {
//             fetch(baseUrl, {
//                 method: "POST",
//                 body: JSON.stringify(data),
//                 headers: {
//                     "Content-type": "application/json; charset=UTF-8",
//                 },
//             })
//                 .then((response) => response.json())
//                 .then((data) => { resolve(data) })
//                 .catch((err) => reject(err, "Hata Alındı."));
//         });
//     }
//     static put(baseUrl, data) {
//         return new Promise((resolve, reject) => {
//             fetch(baseUrl, {
//                 method: "PUT",
//                 body: JSON.stringify(data),
//                 headers: {
//                     "Content-type": "application/json;",
//                 },
//             })
//                 .then((response) => response.json())
//                 .then((data) => resolve(data))
//                 .catch((err) => reject(err, "Hata Alındı."));
//         });
//     }
//     static delete(baseUrl) {
//         return new Promise((resolve, reject) => {
//             fetch(baseUrl, {
//                 method: "DELETE",
//             })
//                 .then((response) => response.json())
//                 .then(() => resolve("Veri Silindi"))
//                 .catch((err) => reject(err, "Hata Alındı."));
//         });
//     }
// }

//? yeni veri ekleme
// Request.post("http://localhost:3000/books", {
//     name: "Deneme Deneme",
//     author: "Deneme",
//     publisher: "Deneme",
//     price: "125 TL",
//     img: "https://i.dr.com.tr/cache/600x600-0/originals/0001922926001-1.jpg",
//     star: "2"
// })
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));


//? guncelleme
// Request.put("http://localhost:3000/books/902a", {
//     id: "902a",
//     name: "Updated Deneme",
//     author: "Updated Deneme",
//     publisher: "Updated Deneme",
//     price: "0 TL",
//     img: "https://i.dr.com.tr/cache/600x600-0/originals/0001922926001-1.jpg",
//     star: "5"
// })
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));

//? sil
// let silKitap = document.querySelector("#silInput");
// document.querySelector("#silGonder").addEventListener("click", function (e) {
//     e.preventDefault();
//     let silinecek = silKitap.value;

//     Request.delete(`http://localhost:3000/books/${silinecek}`)
//         .then((data) => {
//             console.log(data);
//             return guncelGor();
//         })
//         .catch((err) => console.log(err));
// });

//? ekle
// let ekleKitap = document.querySelector("#ekleInput");
// document.querySelector("#ekleGonder").addEventListener("click", function (e) {
//     e.preventDefault();
//     let eklenecek = ekleKitap.value;

//     // Yeni kitap nesnesi oluştur
//     const newBook = new Book(
//         eklenecek,
//         "Class Yapisi",  // Author
//         "Deneme",                       // Publisher
//         "Kategori",                     // Category
//         "550 TL",                       // Price
//         "https://i.dr.com.tr/cache/600x600-0/originals/0001922926001-1.jpg"  // Image URL
//     );

//     Request.post("http://localhost:3000/books", newBook)
//         .then((data) => {
//             console.log(data);
//             return guncelGor();
//         })
//         .catch((err) => console.log(err));
// });

// let guncelleKitap = document.querySelector("#guncelleInput");
// document.querySelector("#guncelleGonder").addEventListener("click", function (e) {
//     e.preventDefault();
//     let guncellenecek = guncelleKitap.value;

//     Request.put(`http://localhost:3000/books/${guncellenecek}`, {
//         id: guncellenecek,
//         name: "Nabersss",
//         author: "Inputtan Gelen Guncelleme Kitap",
//         publisher: "Deneme",
//         price: "125 TL",
//         img: "https://i.dr.com.tr/cache/600x600-0/originals/0001922926001-1.jpg",
//         star: "2"
//     })
//         .then((data) => {
//             console.log(data);
//             return guncelGor();
//         })
//         .catch((err) => console.log(err));
// });