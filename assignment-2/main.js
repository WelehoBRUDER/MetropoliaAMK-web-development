// Define constants
const app = document.querySelector("#app");
const numbers = [];
const nums = 5;
const displayText = (text) => {
  const p = document.createElement("p");
  p.textContent = text;
  app.append(p);
};

// Ask for numbers
for (let i = 0; i < nums; i++) {
  const num = parseFloat(prompt(`Enter a number (${i + 1} / ${nums}):`));
  if (isNaN(num) || num === null) {
    console.error("Invalid number");
    i--;
    continue;
  }
  numbers.push(num);
}

// Display content
displayText(`Contents: [${numbers.join(" | ")}]`);

// Ask for a number to search
const search = parseFloat(prompt("Enter a number to search:"));
if (isNaN(search) || search === null) {
  console.error("Invalid number");
} else {
  displayText(
    `\nNumber ${search} is ${
      numbers.includes(search) ? "" : "not"
    } in the array.`
  );
}

numbers.pop();
displayText(`\nContents (after pop): [${numbers.join(" ")}]`);

numbers.sort((a, b) => a - b);
displayText(`\nContents (after sort): [${numbers.join(" ")}]`);
