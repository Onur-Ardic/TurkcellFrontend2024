document.getElementById('getButton').addEventListener('click', getAllData);

function getAllData() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'users.json', true);
    xhr.onload = function () {
        let list = document.getElementById('employees');
        if (this.status === 200) {
            const data = JSON.parse(this.responseText);
            console.log(data);
            data.forEach(user => {
                list.innerHTML += `
                <tr>
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                <tr>
                `;

            })
        } else {
            console.log('Error');
        }
    }
    xhr.send();
}
