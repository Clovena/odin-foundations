let user = {};
// Declare new object

user = {
  name: 'Zac',
  age: 27,
};
// Here, key-value pairs are introduced.
// Commas separate keys; colons after keys define values
// The hanging comma after age allows properties to more easily
// be moved around, appended, removed, etc. All lines become alike.

console.log(user.name);

user.isActive = true;
// keys can be added to an object using this syntax
user.isAdmin = true;

delete user.isActive;
// this syntax deletes all instances of the specified key

user = {
  name: 'Zac',
  age: 27,
  'likes birds': true,
};
// A key with multiple words must be wrapped in quotation marks.
// This is probably bad practice, though.

delete user['likes birds'];
// Square brackets can be used to select keys,
// regardless of naming convention.

let selectedKey = 'name';
console.log(user[selectedKey]);
// Key names can be assigned to variables and then accessed
// via square bracket notation. Dot notation does not work:
// console.log(user.selectedKey); returns undefined.

let fruit = 'apple';
let groceryList = {
  [fruit]: 3,
};
// In this instance, the first key value is computed based on
// the variable `fruit`. This results in:
// groceryList = {
//   apple: 3,
// }

let techList = {
  [fruit + 'Computers']: 1,
};
// Square bracket notation also allows for computed
// variables beyond the variable value itself, as above.

function makeUser(name, age) {
  return {
    name: name,
    age: age,
  };
}
// This function allows for new entries to be created
// in the object, but there is a shorthand...

function makeFastUser(name, age) {
  return {
    name, // same as name: name
    age, // same as age: age
    // ...
  };
}
user = makeFastUser('Zac', 27);
console.log(user.name);

let teams = {
  bkb: 'Jacob',
  tor: 'Zac',
  iqt: 'Bret',
  nfd: 'Dewees',
};
// elements can be looped upon, as below:
for (let key in teams) {
  console.log(`${teams[key]} is owned by ${key}`);
}

let contacts = {
  name: ['Zac', 'Ricker'],
  age: 27,
  bio() {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
  },
};
// Objects can be self-referential using `this.[key]`, as above,
// as well as the declaration of a function using () on the key name.
contacts['bio']();
// The additional () calls the function on the bio key.

let chain = {
  name: {
    first: 'Zac',
    last: 'Ricker',
  },
  age: 27,
  bio() {
    console.log(`${this.name.first} ${this.name.last} is ${age} years old.`);
  },
};
// Objects can hold other objects!
// They can be called using the following syntax:
console.log(chain.name.first);
console.log(chain['name']['last']);
// Also notice how the bio() key uses chained dot notation,
// not square bracket notation.
