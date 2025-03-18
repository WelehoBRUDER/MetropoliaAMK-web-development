function numberInputValidation(text) {
  let input = parseInt(prompt(text));
  while (isNaN(input) || input < 1) {
    input = parseInt(
      prompt("Invalid input. Please enter a positive integer: ")
    );
  }
  return input;
}

function generateMultiplicationTable(n) {
  const table = [];
  for (let y = 0; y < n; y++) {
    table.push([]);
    for (let x = 0; x < n; x++) {
      table[y].push((x + 1) * (y + 1));
    }
  }
  return table;
}

function displayMultiplicationTable(table) {
  const tableContainer = document.createElement("table");
  for (let i = 0; i < table.length; i++) {
    const row = tableContainer.insertRow();
    for (let j = 0; j < table[i].length; j++) {
      const cell = row.insertCell();
      cell.style.padding = "0.5rem";
      cell.textContent = table[i][j];
    }
  }
  return tableContainer.outerHTML;
}

const num = numberInputValidation("Enter a positive integer: ");
const table = generateMultiplicationTable(num);
document.body.innerHTML += `<pre style="font-size: 1.5rem">Multiplication Table</pre>`;
document.body.innerHTML += `<pre style="font-size: 1rem">${displayMultiplicationTable(
  table
)}</pre>`;
