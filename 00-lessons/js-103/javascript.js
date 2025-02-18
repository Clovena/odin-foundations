function favoriteAnimal(animal) {
  return `${animal} is my favorite animal!`;
}
console.log(favoriteAnimal("turtle"));

function calcSum(num1, num2) {
    return num1 + num2;
}
console.log(calcSum(1, 8));

function add7(num) {
    return num + 7;
}
console.log(add7(8));

function calcProduct(num1, num2) {
    return num1 * num2;
}
console.log(calcProduct(4, 18));

function properString(str) {
    const firstLetter = str.slice(0, 1);
    const restOfWord = str.slice(1);
    return firstLetter.toUpperCase() +
      restOfWord.toLowerCase();
}
console.log(properString('zAc rICkeR'));

function lastLetter(str) {
    return str.slice(-1);
}
console.log(lastLetter('abcd'));

let answer = parseInt(prompt("Please enter a number to FizzBuzz: "));
for (let i = 1; i <= answer; i++) {
    let fizzBuzzRem = i % 15;
    if (fizzBuzzRem === 0) {
        console.log("FizzBuzz");
    } else {
        let buzzRem = i % 5, fizzRem = i % 3;
        if (buzzRem === 0) {
            console.log("Buzz");
        } else if (fizzRem === 0) {
            console.log("Fizz");
        } else {
            console.log(i);
        }
    }
}
