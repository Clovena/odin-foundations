// Time to splice some arrays.
let arr = ['I', 'am', 'learning', 'Javascript'];
console.log(arr);

// To remove elements, use splice.
arr.splice(2, 1);
// This is interpreted as "From index 2, remove 1 element."
console.log(arr);

// You can also replace elements, as below:
arr = ['I', 'am', 'learning', 'Javascript'];
arr.splice(2, 2, 'practicing', 'webdev');
console.log(arr);
// This is interpreted as "From index 2, remove 2 elements and insert ...rest."

let removed = arr.splice(2, 1);
// splicing returns the removed values.
console.log(removed);
console.log(arr);

// splice can also insert elements without replacing an old one, as below:
arr.splice(2, 0, 'learning');
// The index indicates where the values will be inserted *before*, not after.
console.log(arr);

// Negative indices are also allowed, of course.
arr.splice(-1, 0, 'about');
// From index -1 (one step from the end), remove 0 and insert "about" before.
console.log(arr);

// Now for some slicing (not splicing).

arr = ['I', 'am', 'learning', 'about', 'arrays'];
console.log(arr.slice(0, 3));
// The syntax here is "From index 0 (inclusive) to index 3 (exclusive)"
// or, in math shorthand, [0, 3).
// slice does not operate directly on the array the way splice does.
arr.slice(0, 3);
console.log(arr);
// Notice that arr is unaffected by the slice. However:
let slicedArr = arr.slice(0, 3);
console.log(slicedArr);
// slice returns the slice itself.
// slice() with no arguments can be used to make a true copy of the array,
// where subsequent methods do not alter the original array.
let copiedArr = arr.slice();
copiedArr.splice(1, 3, 'work', 'with');
console.log(copiedArr, arr);

// One last method: reverse. Pretty straightforward.
console.log(arr.reverse());

// Now to find values in an array.

arr = [0, 1, false, 'str', 1];
console.log(
  arr.indexOf(1), // returns 1, the first instance
  arr.indexOf('str'), // returns 3
  arr.indexOf(4), // returns -1, indicating no match
  arr.includes(0), // returns true
  arr.includes(7), // returns false
  arr.lastIndexOf(1) // returns 4, the last instance
);
// indexOf uses === so type must match.
// i.e. indexOf(false) in this instance will not match with the 0.

// To retrieve the actual value, rather than the index:
let users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Pete' },
  { id: 3, name: 'Mary' },
];
let user = users.find((item) => item.id == 1);
console.log(user.name);

// To obtain an index here, in this array of objects:
console.log(users.findIndex((user) => user.name === 'Mary'));

// filter can also be used here:
let someUsers = users.filter((item) => item.id < 3);
console.log(someUsers);

// Time to sort.

arr = ['Zac', 'Liv', 'Izzi', 'Josh'];
arr.sort();
console.log(arr);

// This doesn't really work on numbers, though,
// since they get sorted as strings:
arr = [15, 1, 2];
arr.sort();
console.log(arr); // returns ["1", "15", "2"] rather than [1, 2, 15]

// Consider the following function:
function compare(a, b) {
  if (a > b) return 1; // if the first value is greater than the second
  if (a == b) return 0; // if values are equal
  if (a < b) return -1; // if the first value is less than the second
}
// and then see it used in .sort():
arr.sort(compare);
console.log(arr);
// A function within .sort() provides inputs to use in sorting,
// and then sorts the corresponding values to those inputs.
// Another solution:

arr = [3, 8, 2, 9, 4, 6, 1];
// arr.sort(function(a, b) { return a-b });
// Or even:
arr.sort((a, b) => a - b);
console.log(arr);

// Regarding non-English characters:
let countries = ['Österreich', 'Andorra', 'Vietnam'];

console.log(countries.sort()); // Andorra, Vietnam, Österreich (wrong)

console.log(
  countries.sort(
    (a, b) => a.localeCompare(b)
    // .localeCompare() references the lang setting in html
  )
); // Andorra, Österreich, Vietnam (correct!)

// Let's do some splitting and joining of strings.
let str = 'football, baseball, basketball';
console.log(str);
arr = str.split(', ');
console.log(arr);
let letters = arr[0].split('');
console.log(letters);

str = arr.join(', ');
console.log(str);
// .join() does the opposite of split, with the given "glue" arg

// Arrays vs objects

// Technically, arrays are based on objects.
// So if typeof is used on each, both return 'object'.
console.log(
  typeof {}, // object
  typeof []
); // object (same)

// But isArray() can be used to distinguish boolean-ly
console.log(
  Array.isArray({}), // false
  Array.isArray([])
); // true

// Now for some assignments.

//// 1. Create camelize() function to convert text-like-this to textLikeThis

const camelize = function (str) {
  return (
    str
      .split('-')
      .map((word, i) =>
        i === 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      // Remember: the callback in map can handle three arguments.
      // 1. the current element being processed in the array
      // 2. the index of the current element
      // 3. the array `map` was called upon
      .join('')
  );
};

console.log(
  camelize('background-color'),
  camelize('this-is-my-text'),
  camelize('single')
);

//// 2. Create filterRange() function to filter an array
//// to return only values in the range [lower, upper]

const filterRange = function (arr, lower, upper) {
  return arr.filter((num) => num >= lower && num <= upper);
};

let practiceArr = [5, 3, 8, 1];
let filteredArr = filterRange(practiceArr, 1, 4);
console.log(filteredArr);

//// 3. Create sortDecreasing() function to sort numeric arrays decreasing

const sortDecreasing = function (arr) {
  return arr
    .sort((a, b) => b - a);
};
console.log(sortDecreasing(practiceArr));
