function getData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof data === "string") {
        console.log("String veri tipi alındı");
        resolve("Data Alındı");
      } else {
        console.log("String veri tipi alınamadı");
        reject("Data Alınamadı");
      }
    }, 3000);
  });
}

getData("Merhaba")
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
