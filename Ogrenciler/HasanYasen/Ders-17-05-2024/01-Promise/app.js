function getData(data) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (data == "Hasan") {
                console.log("Sonuç olumlu")
                resolve("Data alındı.")
            }
            else {
                console.log("Sonuç olumsuz")
                resolve("Data alınamadı.")
            }
        }, 3000)
    })
}

getData("Hasan").then((response) => console.log(response)).catch((error) => console.log(error))
// getData("Varol").then((response) => console.log(response)).catch((error) => console.log(error))