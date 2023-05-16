// let user = {};

// user["my name"] = "kim sung hyeon";

// console.log(user["my name"]);

// let key = "my name";

function makeUser(name, age) {
  return {
    name,
    age,
  };
}

let user = makeUser("kim", 29);
console.log("asdf" in user);
