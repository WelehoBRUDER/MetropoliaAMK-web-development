// Define some constants
const app = document.querySelector("#app");
const numbers = [];
const evenNumbers = [];
const displayText = (text) => {
  const p = document.createElement("p");
  p.textContent = text;
  app.append(p);
};

// Get user input
let input = "";
do {
  input = prompt("Enter a number or 'done' to finish:");
  if (input === "done") {
    break;
  }
  const num = parseFloat(input);
  if (isNaN(num) || num === null) {
    console.error("Invalid number");
    continue;
  }
  numbers.push(num);
} while (true);

// Extract even numbers
for (const num of numbers) {
  if (num % 2 === 0) {
    evenNumbers.push(num);
  }
}

// Display the extracted even numbers
displayText(
  `Even numbers: ${
    evenNumbers.length > 0 ? `[${evenNumbers.join(" | ")}]` : "None"
  }`
);
