const usersUrl = "http://localhost:3000/users";
const commentsUrl = "http://localhost:3000/comments";
const profileUrl = "http://localhost:3000/profile";

let data = [];

class API {
    static async get(url) {
        const response = await fetch(url);
        const responseData = await response.json();
        data = responseData;
    }
}
