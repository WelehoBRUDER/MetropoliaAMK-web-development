function sumNaturalNumbers(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

function numberInputValidation(text) {
  let input = parseInt(prompt(text));
  while (isNaN(input) || input < 1) {
    input = parseInt(
      prompt("Invalid input. Please enter a positive integer: ")
    );
  }
  return input;
}

const n = numberInputValidation("Enter a positive integer: ");
document.body.innerHTML += `<p>The sum of natural numbers up to ${n} is ${sumNaturalNumbers(
  n
)}</p>`;
