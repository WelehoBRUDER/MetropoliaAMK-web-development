/**
 * @param {Array} numbers - An array of numbers (floats or integers)
 * @returns {Array} - A new array sorted in ascending order
 */
function sortArray(numbers) {
  // Create deep copy of original array
  const newArray = [...numbers];
  return newArray.sort((a, b) => a - b);
}

const outOfOrder = [75, 1, 13, 7, 99, 100, 8, 22, 0, 44];
const sorted = sortArray(outOfOrder);

console.log(`Original: [${outOfOrder.join(" | ")}]`);
console.log(`Sorted: [${sorted.join(" | ")}]`);
