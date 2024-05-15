document.getElementById('getButton').addEventListener('click', getAllData);

function getAllData() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
    xhr.onload = function () {
        let list = document.getElementById('posts');
        if (this.status === 200) {
            const data = JSON.parse(this.responseText);
            console.log(data);
            data.forEach(post => {
                list.innerHTML += `
                <tr>
                    <td>${post.id}</td>
                    <td>${post.title}</td>
                    <td>${post.body}</td>
                <tr>
                `;

            })
        } else {
            console.log('Error');
        }
    }
    xhr.send()
}