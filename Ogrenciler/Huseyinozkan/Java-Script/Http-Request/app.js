function getAllData() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "users.json", true);

  xhr.onload = function () {
    if (this.status === 200) {
      const data = JSON.parse(this.responseText);
      let list = document.getElementById("employees");
      list.innerHTML = "";

      data.forEach((user) => {
        list.innerHTML += `
            <tr>
              <td>${user.name}</td>
              <td>${user.department}</td>
              <td>${user.salary}</td>
            </tr>
          `;
      });
    } else {
      console.log("Bir hata oluştu, veriler alınamadı.");
    }
  };

  xhr.send();
}

document.getElementById("getButton").addEventListener("click", getAllData);
