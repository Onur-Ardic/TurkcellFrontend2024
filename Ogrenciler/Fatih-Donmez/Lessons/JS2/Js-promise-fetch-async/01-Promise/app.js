function getData(data) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (typeof data === "string") {
        console.log("Sonuç Olumlu");
        resolve("Data Alındı");
      } else {
        console.log("Sonuç Olumsuz");
        reject("Data Bulunamadı");
      }
    }, 3000);
  });
}

getData("test")
  .then((res) => console.log(res))
  .catch((error) => console.log(error));
