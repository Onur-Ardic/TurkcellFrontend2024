function getData() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (typeof data === "string") {
        resolve("Data received");
      } else {
        reject("Data could not be received");
      }
    }, 2000);
  });
}
getData("test")
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
