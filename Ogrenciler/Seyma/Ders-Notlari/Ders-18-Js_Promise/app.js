function getData () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof data === 'string')
                console.log("olumlu");
                resolve("data alındı");
            }
            else {
            console.log("olumsuz");
            reject("data alınamadı");
            }, 3000);
    });
    }

    getData("test").then((response) => (console.log(response))
    .catch((error) => (console.log(error)))
);