let getButton = document.getElementById("getButton");
getButton.addEventListener("click", getAllData);
function getAllData() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "users.json", true);
  xhr.onload = function () {
    let list = document.getElementById("employess");
    if (this.status === 200) {
      const data = json.parse(this.responseText);
      data.forEach((user) => {
        list.innerHTML += `
                <tr>
                    td>${user.name}</td>
                    <td>${user.department}</td>
                    <td>${user.salary}</td>
                    </tr>
                    `;
      });
    } else {
      console.log("Error");
    }
  };
  xhr.send();
}
