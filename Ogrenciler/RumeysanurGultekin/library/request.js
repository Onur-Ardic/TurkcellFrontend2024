// class Request {
//     constructor(url){
//         this.url = "http://localhost:3000/books";
//     }
//     async get(url) {
//       const response = await fetch(this.url);
//       if (!response.ok) {
//         throw new Error("Bir hata oluştu", response.status);
//       };
//       const data = await response.json();
//       return data;
//     }

//     async post(url, data) {
//         const response = await fetch(this.url, {
//             method : "POST",
//             body: JSON.stringify(post),
//             headers: {
//               "Content-type": "application/json;",
//             },
//         });
//         if (!response.ok) {
//           throw new Error("Bir hata oluştu", response.status);
//         };
//         const data = await response.json();
//         return data;
//       }

//     async put(id, data) {
//         const response = await fetch(this.url + "/" + id, {
//             method : "PUT",
//             body: JSON.stringify(data),
//             headers: {
//               "Content-type": "application/json;",
//             },
//         });
//         if (!response.ok) {
//           throw new Error("Bir hata oluştu", response.status);
//         };
//         const data = await response.json();
//         return data;
//       }  

//     async delete(id) {
//         const response = await fetch(this.url + "/" + id, {
//             method : "DELETE",
//         });
//         if (!response.ok) {
//           throw new Error("Bir hata oluştu", response.status);
//         };
//         const data = await response.json();
//         return data;
//       }    
//   }
  
class Request {
  constructor(url){
            this.url = url;
        }

  static get(url) {
      fetch(`${url}/books`)
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((err) => reject(err, "Veri alınamadı."));
  }
  static post(url, data) {
    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json;",
      },
    })
      .then(response => console.log(response.json()))
      .then(response => {
        console.log("response:"+JSON.stringify(data)); alert("Book Added!")
      })
      .then((data) => console.log(data))
  }
  // static put(url,data,id) {    
  //     fetch(url + "/" + id, {
  //       method: "PUT",
  //       body: JSON.stringify(data),
  //       headers: {
  //         "Content-type": "application/json;",
  //       },
  //     })
  //       .then(response => response.json())
  //       .then(response => {
  //         console.log("response:"+JSON.stringify(data)); alert("Book Added!")
  //       })
  //       .then((data) => console.log(data))
  // }
  // static delete(url) {
  //   return new Promise((resolve, reject) => {
  //     fetch("http://localhost:3000/books", {
  //       method: "DELETE",
  //     })
  //       .then((response) => response.json())
  //       .then(() => resolve("Veri Silindi"))
  //       .catch((err) => reject(err, "Hata Alındı."));
  //   });
  // }
}

function resolve(data){
  console.log(data);
}