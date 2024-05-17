document.getElementById("getButton").addEventListener("click", getAllData);

function getAllData() {
    Request.getPosts((error, posts) => {
        if (error) {
            console.error(error);
            return;
        }

        const list = document.getElementById("posts"); // "posts" ID'sine sahip HTML elemanını alır.
        list.innerHTML = ""; 

        posts.forEach(post => {
            Request.getImage((error, imageUrl) => {
                if (error) {
                    console.error(error);
                    return;
                }

                const card = UI.createCard(post.title, post.body, imageUrl);
                list.appendChild(card);
            });
        });
    });
}
