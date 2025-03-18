/**
 * @param {Array} numbers - An array of numbers (floats or integers)
 * @param {string} order - The order to sort the array in (asc or desc)
 * @returns {Array} - A new array sorted in ascending order
 */
function sortArray(numbers, order) {
  if (order === null || typeof order !== "string") {
    throw new Error("Invalid order");
  }
  // Create deep copy of original array
  const newArray = [...numbers];
  // I just like ternary operators ok?
  return newArray.sort((a, b) =>
    order === "asc" ? a - b : order === "desc" ? b - a : 0
  );
}

const outOfOrder = [75, 1, 13, 7, 99, 100, 8, 22, 0, 44];
const anotherOutOfOrder = [9787, 453, 7568, -5, -3, 342, -65, 23, 5];
const sortedAsc = sortArray(outOfOrder, "asc");
const sortedDesc = sortArray(outOfOrder, "desc");
const anotherSortedAsc = sortArray(anotherOutOfOrder, "asc");
const anotherSortedDesc = sortArray(anotherOutOfOrder, "desc");

console.log(`Original 1: [${outOfOrder.join(" | ")}]`);
console.log(`Original 2: [${anotherOutOfOrder.join(" | ")}]`);
console.log(`Sorted 1 (asc): [${sortedAsc.join(" | ")}]`);
console.log(`Sorted 1 (desc): [${sortedDesc.join(" | ")}]`);
console.log(`Sorted 2 (asc): [${anotherSortedAsc.join(" | ")}]`);
console.log(`Sorted 2 (desc): [${anotherSortedDesc.join(" | ")}]`);
