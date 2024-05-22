class Request {
    constructor(url){
              this.url = url;
          }
          
    static get(url) {
            fetch(`${url}`)
                .then((response) => response.json())
                .then((data) => {
                    const ui = new UI(); 
                    data.forEach((book) => {
                        ui.createCard(book); 
                    });
                })
                .catch((err) => console.error(err, "Veri alınamadı."));
        }
    static post(url, data) {
      fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then(response => console.log(response.json()))
        .then(response => {
          console.log("response:"+JSON.stringify(data)); alert("Book Added!")
        })
        .then((data) => console.log(data))
    }
     static delete(url, id) {
        fetch(`${url}/${id}`, { 
            method: "DELETE",
        })
        .then((response) => response.json())
        .then(() => console.log("Veri Silindi"))
        .catch((err) => console.error(err, "Hata Alındı."));
  }
      static update(url, id, newData) {
        fetch(`${url}/${id}`, {
            method: "PUT",
            body: JSON.stringify(newData),
            headers: {
                "Content-type": "application/json",
            },
        })
        .then(response => response.json())
        .then(() => console.log("Veri Güncellendi"))
        .catch((err) => console.error(err, "Hata Alındı."));
      }
    
  }
  
  function resolve(data){
    console.log(data);
  }
  
  