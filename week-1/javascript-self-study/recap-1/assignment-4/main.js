// Scores between 0 and 39 receive a grade of 0.
// Scores between 40 and 51 receive a grade of 1.
// Scores between 52 and 63 receive a grade of 2.
// Scores between 64 and 75 receive a grade of 3.
// Scores between 76 and 87 receive a grade of 4.
// Scores between 88 and 100 receive a grade of 5.
function grade(score) {
  const limit = [39, 51, 63, 75, 87, 100];
  const grade = [0, 1, 2, 3, 4, 5];
  return grade[limit.findIndex((value) => score <= value)];
}

function numberInputValidation(text) {
  let input = parseFloat(prompt(text));
  while (isNaN(input)) {
    input = parseFloat(prompt("Invalid input. Please enter a number: "));
  }
  return input;
}

const score = numberInputValidation("Enter your course score: ");
document.body.innerHTML += `<p>Your grade is ${grade(score)}</p>`;
