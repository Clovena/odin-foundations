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

// Now let's compare primitive types to object types.
let data = 42;
// data is a primitive type (number).
let dataCopy = data;
dataCopy = 43;
// Changing dataCopy does not alter data
console.log(data); // outputs 42
console.log(dataCopy); // outputs 43
// This is how primitive types behave. On the other hand...

const obj = { data: 42 };
const objCopy = obj;
objCopy.data = 43;
// Making changes to this reference will also change the original obj.
console.log(obj.data);
console.log(objCopy.data);

// Now let's do some more advanced array work.
console.log('Advanced Array Methods');
// Consider a function that intakes an array of numbers,
// triples all the even numbers, and sums those tripled numbers.
function sumOfTripledEvens(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    // Step 1: If the element is an even number
    if (array[i] % 2 === 0) {
      // Step 2: Multiply this number by three
      const tripleEvenNumber = array[i] * 3;

      // Step 3: Add the new number to the total
      sum += tripleEvenNumber;
    }
  }
  return sum;
}
const arr = [1, 2, 3, 4, 5, 6];
console.log(sumOfTripledEvens(arr));

// This can be made more concise using the map method.
// It expects a callback argument (another function).
function tripledEven(num) {
  if (num % 2 === 0) {
    return num * 3;
  } else {
    return 0;
  }
}
// This function does not require a for loop to iterate through an array.
// The function is applied to each element in the array provided via map.

const mappedArr = arr.map(tripledEven);
// This creates a new object, without changing the original object.
console.log(mappedArr);

// You can also define a function inline, as below:
const newMappedArr = arr.map((num) => num * 3);
console.log(newMappedArr);

// map is pretty powerful, especially when paired with filter.
function isEven(num) {
  return num % 2 === 0;
}

const oddArr = arr.filter(isEven);
console.log(oddArr);
// To achieve our original goal of summing tripled evens, consider:
const trimmedArr = arr.filter(isEven).map((num) => num * 3);
console.log(trimmedArr);
// This gets us one step closer, removing the zeroes from our new array
// (though technically in summing the elements together, 0 doesn't change the sum).

// For the final step, we need the reduce method.
// reduce takes a callback with two arguments,
// not just one like map and filter.
const numSum = arr.reduce((total, currentItem) => {
  return total + currentItem;
}, 0);
// In this instance, reduce takes two arguments itself.
// The second argument, 0, is the initialValue.
// This sets the starting point of the callback in the first argument.
// If this is not declared, the reduce method sets the first array element
// as the initialValue.
//
// The first argument is the callback function
// (total, currentItem) => total + currentItem
// which itself has two arguments.
// total is the accumulator, which holds the result
// at any given point in the loop.
// currentItem is the current value, where the array elements iterate through.
//
// In summary, this reduce method begins at `0`,
// iterates arr through `currentItem`,
// and keeps a running value in `total`.
console.log(numSum);

// Let's once again revisit our sum of tripled evens problem.
// We need to filter down to even numbers;
// triple the remaining numbers,
// and sum them.
const finalArr = [1, 2, 3, 4, 5, 6];

function getEvens(num) {
  return num % 2 === 0;
}
function getTriple(num) {
  return num * 3;
}
function getSum(total, currentItem) {
  return total + currentItem;
}

const finalResult = finalArr.filter(getEvens).map(getTriple).reduce(getSum);
console.log(finalResult);
// Technically, you can drop the 0 in reduce this time.
// Starting the sum at 0 is no different
// than starting the sum at the first element.
// In some cases, though, an initialValue is needed.

// Alternatively, with callbacks defined inline:
const altFinalResult = finalArr
  .filter((num) => num % 2 === 0)
  .map((num) => num * 3)
  .reduce((total, currentItem) => {
    return total + currentItem;
  });
console.log(altFinalResult);
// Check out this crazy syntax, by the way.
// You can line break before the dot-method.
// In a way, the dot is like the %>% pipe in R's tidyverse.

console.log('There is more to be done in the additional .js files!');
