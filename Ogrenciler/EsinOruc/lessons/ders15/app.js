function getAllData() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "users.json", true);
  xhr.onload = function () {
    let list = document.getElementsById("employees");
    if (this.status === 200) {
      const data = JSON.parse(this.responseText);
      data.forEach((user) => {
        list.innerHtml += `<tr>
            <td>${user.name}</td>
            <td>${user.age}</td>
            <td>${user.city}</td>
            <tr>`;
      });
    } else {
      console.log("Error");
    }
  };
  xhr.send();
}

let getButton = document.getElementById("getButton");
getButton.addEventListener("click", getAllData);
