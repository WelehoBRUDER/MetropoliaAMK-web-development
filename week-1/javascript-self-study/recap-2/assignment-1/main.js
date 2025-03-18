const fruits = ["apple", "banana", "orange", " grape", "kiwi"];
console.log(`Contents: [${fruits.join(" ")}]`);
console.log(`Length: ${fruits.length}`);
console.log(`Index 2: ${fruits[2]}`);
console.log(`Last index: ${fruits[fruits.length - 1]}`);
const vegetables = [];
const numOfVeggies = 3;
for (let i = 0; i < numOfVeggies; i++) {
  const veggie = prompt("Enter a vegetable:");
  vegetables.push(veggie);
}
console.log(`Contents: [${vegetables.join(" ")}]`);
console.log(`Length: ${vegetables.length}`);
