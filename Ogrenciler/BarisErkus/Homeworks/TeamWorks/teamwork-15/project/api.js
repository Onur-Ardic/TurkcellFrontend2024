let posts = [];

class API {
    static getPosts = (callback) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
        xhr.onload = function () {
            if (this.status === 200) {
                posts = JSON.parse(this.responseText).slice(0, 20);
                callback(posts);
            } else {
                console.error('Error');
            }
        };
        xhr.send();
    }
}