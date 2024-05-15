class Post {
  constructor(title, body) {
    this.title = title;
    this.body = body;
  }
  static randomNumber() {
    let random = Math.round(Math.random() * 100);
    return random;
  }
}
