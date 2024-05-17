function getData(data) {
    return new Promise(function (resolve, reject) {
        setTimeout(()=>{
            if (typeof data === 'string'){
                console.log("sonuç olumlu");
                resolve("Data Alındı");
            } else {
                console.log("sonuç olumsuz");
                reject("Data alınamadı");
            }
        }, 3000);
    });
}

getData("test")
    .then((response => console.log(response)))
    .catch((error) => console.log(error));