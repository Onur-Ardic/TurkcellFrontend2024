  function getId() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

window.onload = function() {
    getData(getId());
};

function getData(id) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/" + id, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const user = JSON.parse(xhr.responseText);
            const randomImage = 'https://source.unsplash.com/random/300x200';
            const card = `
            <header class="bg-dark py-5 rounded-4 ">
            <div class="container px-5">
                <div class="row gx-5 align-items-center justify-content-center">
                    <div class="col-lg-8 col-xl-7 col-xxl-6">
                        <div class="my-5 text-center text-xl-start">
                            <h1 class="display-5 fw-bolder text-white mb-2">${user.title}</h1>
                            <p class="lead fw-normal text-white-50 mb-4">${user.body}</p>
                        </div>
                    </div>
                    <div class="col-xl-5 col-xxl-6 d-none d-xl-block text-center"><img class="img-fluid rounded-3 my-5" src=${randomImage}  alt="..."></div>
                </div>
            </div>
            </header>
            `;
            document.getElementById('cards').innerHTML += card;
        }
    };
    xhr.send();
}

