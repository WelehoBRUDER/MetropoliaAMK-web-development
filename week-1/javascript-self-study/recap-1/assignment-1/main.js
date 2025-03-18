function celsiusToFahrenheit(celsius) {
  if (!validateNumber(celsius)) {
    return null;
  }
  return (celsius * 9) / 5 + 32;
}

function celsiusToKelvin(celsius) {
  if (!validateNumber(celsius)) {
    return null;
  }
  return celsius + 273.15;
}

function validateNumber(input) {
  return !isNaN(input);
}

let temp = parseFloat(prompt("Enter temperature in Celsius: "));
const fahrenheit = celsiusToFahrenheit(temp);
const kelvin = celsiusToKelvin(temp);
document.body.innerHTML += `<p>${temp}°C is equal to ${fahrenheit}°F and ${kelvin}K</p>`;
