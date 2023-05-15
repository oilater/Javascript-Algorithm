class User {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(`Hi! My name is ${this.name}~!`);
  }
}

const me = new User("Kim");
me.sayHi();
console.log(Object.getOwnPropertyNames(User.prototype));
