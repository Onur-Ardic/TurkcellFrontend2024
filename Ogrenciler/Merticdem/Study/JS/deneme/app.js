class user {
  constructor(name, sayHello) {
    this.name = name;
    this.sayHello = sayHello;
  }
  sayHello() {
    console.log(this);
  }
  deneme() {
    setTimeout(this.sayHello, 1000);
  }
}
const user1 = new user("mert");
user1.sayHello;
user1.deneme();
