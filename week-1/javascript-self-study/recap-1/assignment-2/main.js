// Distance = √((x2 - x1)^2 + (y2 - y1)^2)
function calcDistance(a, b) {
  return Math.sqrt((b.x - a.x) ** 2 + (b.y - a.y) ** 2);
}

function numberInputValidation(text) {
  let input = parseFloat(prompt(text));
  while (isNaN(input)) {
    input = parseFloat(prompt("Invalid input. Please enter a number: "));
  }
  return input;
}

const pointA = {};
const pointB = {};
pointA.x = numberInputValidation("Enter x coordinate of point A: ");
pointA.y = numberInputValidation("Enter y coordinate of point A: ");
pointB.x = numberInputValidation("Enter x coordinate of point B: ");
pointB.y = numberInputValidation("Enter y coordinate of point B: ");
document.body.innerHTML += `<p>Distance between A(${pointA.x}, ${
  pointA.y
}) and B(${pointB.x}, ${pointB.y}) is ${calcDistance(pointA, pointB)}</p>`;
