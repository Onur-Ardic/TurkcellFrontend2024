function getData(data) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (typeof data === "string") {
                console.log("sonuç olumlu");
                resolve("data alındı")
            } else {
                console.log("sonuç olumsuz");
                reject("data bulunamadı");
            }
        }, 3000);
    });
}

getData("test")
    .then((response) => console.log(response))
    .catch((error) => console.log(console.error));