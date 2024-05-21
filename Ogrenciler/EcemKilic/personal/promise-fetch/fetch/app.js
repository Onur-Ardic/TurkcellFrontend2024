function getData() {
    const userList = document.getElementById('user-list');
    const url = `https://jsonplaceholder.typicode.com/users`;

    fetch(url).then(response => {
        if (!response.ok) {
            throw new Error('hata');
        }
        return response.json();
    })
    .then(data => {
        data.forEach((item) => {
            userList.innerHTML += `
            <li>${item.name}</li>
            `
        }) 
        console.log('fetch ile gelen veri: ', data);
    })
    .catch(error => {
        console.log('fetchte hata: ', error);
    })
}

getData();