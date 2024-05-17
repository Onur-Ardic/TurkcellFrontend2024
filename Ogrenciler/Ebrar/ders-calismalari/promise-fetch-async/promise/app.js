function getData(data) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (typeof data === "string") {
        console.log("sonuc olumlu");
        resolve("data alindi");
      } else {
        console.log("sonuc olumsuz");
        reject("data bulunamadi");
      }
    }, 3000);
  });
}

getData("test")
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
