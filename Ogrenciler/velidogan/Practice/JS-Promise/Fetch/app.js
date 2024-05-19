// function getTextFile (data) {
//     fetch("text.txt")
//     .then((response) => response.text())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))
// }

// getTextFile();

// function getTextFile (data) {
//     fetch("users.json").then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))
// }

// getTextFile();

// function getApi (data) {
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))
// }

// getApi();

class Request{
    static get(url){
        return new Promise((resolve,reject) => {
            fetch(url).then((response) => response.json())
                .then((data) => resolve(data))
                .catch((err) => reject(err,"Veri alınamadı."))
        })
    }
    static post(url,data){
        return new Promise((resolve,reject) => {
            fetch(url, {method:"POST",body:JSON.stringify(data),headers:{"Content-type":"application/json"}})
                .then((response) => response.json())
                .then((data) => resolve(data))
                .catch((err) => reject(err,"Hata alındı"))
        })
    }
    static put(url,data){
        return new Promise((resolve,reject) => {
            fetch(url, {method:"PUT",body:JSON.stringify(data),headers:{"Content-type":"application/json"}})
                .then((response) => response.json())
                .then((data) => resolve(data))
                .catch((err) => reject(err,"Hata alındı"))
        })
    }
    static delete(url,data){
        return new Promise((resolve,reject) => {
            fetch(url, {method:"delete"})
                .then((response) => response.json())
                .then(() => resolve("Veri silindi."))
                .catch((err) => reject(err,"Hata alındı"))
        })
    }
}

Request.get("https://jsonplaceholder.typicode.com/users")
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

Request.post("https://jsonplaceholder.typicode.com/users",{    
        "id": 11,
        "name": "Deneme Deneme",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
          "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
          }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
          "name": "Romaguera-Crona",
          "catchPhrase": "Multi-layered client-server neural-net",
          "bs": "harness real-time e-markets"
        }
    })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

Request.put("https://jsonplaceholder.typicode.com/users/1",{    
        "id": 11,
        "name": "Deneme Deneme",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

Request.delete("https://jsonplaceholder.typicode.com/users/1",)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));