function getData(data) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (typeof data === "string") {
        console.log("Sonuç olumlu");
        resolve("Data Alındı");
      } else {
        console.log("Sonuç olumsuz");
        reject("Dta alınamadı");
      }
    }, 3000);
  });
}
getData("Test")
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
