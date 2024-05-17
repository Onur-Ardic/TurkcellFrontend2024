document.getElementById("getButton").addEventListener("click", getAllData);
function getAllData() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "users.json", true);
    xhr.onload = function () {
        let list = document.getElementById("employees");
        if (this.status == 200) {
            const parsedData = JSON.parse(this.responseText);
            parsedData.forEach(function (e) {
                list.innerHTML += `
          <tr>
            <td>${e.name}</td>
            <td>${e.department}</td>
            <td>${e.salary}</td>
          </tr>
        `;
            });
        } else {
            console.log("Bir hata oluştu.");
        }
    };
    xhr.send();
}