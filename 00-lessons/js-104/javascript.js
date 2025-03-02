const cars = ["Honda", "Volvo", "BMW"];
let zacCar = cars[0];
console.log(zacCar);

cars[2] = "Subaru";
cars[3] = "Hyundai";
console.log(cars.toString());

const namedCars = {zac:"Honda", liv:"Volvo", izzi:"Subaru"};
console.log(namedCars.liv);

console.log(cars.join(" and "));


console.log("Here is a section on loops.");

for (const car of cars) {
  console.log(car);
}

function lengthFive(car) {
  return car.length === 5;
}
const filteredCars = cars.filter(lengthFive);
console.log(filteredCars);

// Here is the standard syntax on for-loops
// for (initializer; condition; final-expression) {
  // code to run
// }

for (let i = 1; i <= 10; i++) {
  const prod = i * i;
  console.log(`${i} x ${i} = ${prod}`);
}

// for (const car of cars) {
//   console.log(car);
// }
// Can be rewritten as:

for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}


let declaringCars = "Our cars are ";
for (let i = 0; i < cars.length; i++) {
  if (i === cars.length - 1) {
    // this is the end of the array.
    declaringCars += `and a ${cars[i]}.`;
  } else {
    declaringCars += `a ${cars[i]}, `;
  }
}
console.log(declaringCars);