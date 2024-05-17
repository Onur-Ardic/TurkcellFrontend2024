// function getTextFile(){
//     fetch("text.txt")
//         .then((response)=>response.text())
//         .then((data)=>console.log(data))
//         .catch((error)=>console.log(error))
// };
// getTextFile();;

// function getJsonFile(){
//     fetch("users.json")
//         .then((response)=>response.json())
//         .then((data)=>console.log(data))
//         .catch((error)=>console.log(error))
// };

// getJsonFile();

// function getExternalApi(){
//     fetch("https://jsonplaceholder.typicode.com/users")
//         .then((response)=>response.json())
//         .then((data)=>console.log(data))
//         .catch((error)=>console.log(error))
// }
// getExternalApi();

class Request {
    static get(url){
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(err => reject(err, "Veri Alınamadı"));
        });
    }
    static post(url, data){
        return new Promise((resolve, reject)=>{
            fetch(url, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json;'
                }
            })
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err, "Veri Gönderilemedi"));
        })
    }
    static put(url, data){
        return new Promise((resolve, reject)=>{
            fetch(url, {
                method: 'PUT',
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json;'
                }
            })
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err, "Veri Güncellenemedi"));
        })
    }
    static delete(url){
        return new Promise((resolve, reject)=>{
            fetch(url, {
                method: 'DELETE'
            })
            .then(() => resolve("Veri Silindi"))
            .catch(err => reject(err, "Veri Silinemedi"));
        })
    }
}

Request.get("https://jsonplaceholder.typicode.com/users")
.then((data)=> console.log(data))
.catch((err)=> console.log(err));

Request.post("https://jsonplaceholder.typicode.com/users", {name: "Erkan", username: "tokmak"})
.then((data)=> console.log(data))
.catch((err)=> console.log(err));

Request.put("https://jsonplaceholder.typicode.com/users/1", { id:1 , name: "Test", username: "Test"})
.then((data)=> console.log(data))
.catch((err)=> console.log(err));