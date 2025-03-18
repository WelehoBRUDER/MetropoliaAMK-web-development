function determineTriangleType(a, b, c) {
  if (a === b && b === c) {
    return "equilateral";
  } else if (a === b || b === c || a === c) {
    return "isosceles";
  } else {
    return "scalene";
  }
}

function numberInputValidation(text) {
  let input = parseFloat(prompt(text));
  while (isNaN(input)) {
    input = parseFloat(prompt("Invalid input. Please enter a number: "));
  }
  return input;
}

const sideA = numberInputValidation("Enter length of side A: ");
const sideB = numberInputValidation("Enter length of side B: ");
const sideC = numberInputValidation("Enter length of side C: ");
document.body.innerHTML += `<p>The triangle with sides of length ${sideA}, ${sideB}, and ${sideC} is ${determineTriangleType(
  sideA,
  sideB,
  sideC
)}.</p>`;
