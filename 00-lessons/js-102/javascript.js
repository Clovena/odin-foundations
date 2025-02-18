const string = "The revolution will not be televised.";
console.log(string);
const templateLiteral = `Backticks are used to declare a template literal string.`;
console.log(templateLiteral);
const newLine = `Template literals respect
any line breaks in the variable assignment,
so you can print line breaks easily.`;
console.log(newLine);
const literalDetail1 =
  "Embed Javascript into a template literal using the syntax ${ }.";
console.log(literalDetail1);
console.log("For example:");
let kendrickLamar = `Kendrick Lamar inverted the meaning of the phrase
"${string}" in his Super Bowl halftime show.`;
console.log(kendrickLamar);

let longString = "abcdefghijklmnopqrstuvwxyz";
let longStringLength = longString.length; // the length function outputs a string's length.
console.log(`My long string is ${longStringLength} characters long.`); 

console.log(longString.charAt(17)); // the charAt function outputs the character at the position specified.
console.log(longString.charCodeAt(17)); // charCodeAt returns that character as a utf-16 code. 
console.log(longString.at(9));
console.log(longString[9]);
// Both of the above perform a similar function to charAt, but at() or [ ] allow for negative indices.

console.log(longString.slice(7, 13)); // slice obtains substrings, where index begins at 0.
console.log(longString.slice(8)); // an omitted second argument defaults to the end of the string. 
console.log(longString.slice(-2)); // negative arguments count from the end of the string and continue left-to-right.
console.log(longString.slice(-6, -2));
console.log(longString.slice(-6, 2)); // This seems to output an empty string. 

console.log(longString.substring(7, 13)); // substring converts negative arguments to 0.

// console.log(longString.substr(7, 6)); // substr takes arguments of startingPoint, length.
// This function is now deprecated. Use slice instead. 

console.log(longString.toUpperCase());
console.log(longString.toLowerCase());

const myName = "Zac";
console.log(myName.concat(" Ricker"));
console.log("Zac " + "Ricker"); // the concat function serves as another way to concatenate strings. 

const whitespaced = "         Zac Ricker     ";
console.log(whitespaced.trim()); // the trim function removes all non-essential whitespace. 
// There is also .trimStart() and .trimEnd() which remove whitespace from only one side of a string. 


