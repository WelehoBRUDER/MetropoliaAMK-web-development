const target = document.querySelector("#target");

function displayBrowserData() {
  target.innerHTML = "";
  target.innerHTML += `<h3>Browser/OS information</h3>`;
  getBrands();
  target.innerHTML += `<p>Platform: ${navigator.userAgentData.platform}</p>`;
  target.innerHTML += `<p>Window size: ${window.innerWidth}x${window.innerHeight} px</p>`;
  target.innerHTML += `<p>Available size: ${window.outerWidth}x${window.outerHeight} px</p>`;
  target.innerHTML += `<p>Current date: ${new Date().toLocaleDateString(
    "fi-FI",
    {year: "numeric", month: "long", day: "numeric"}
  )}</p>`;
  target.innerHTML += `<p>Current time: ${new Date().toLocaleTimeString(
    "fi-FI",
    {hour: "numeric", minute: "numeric"}
  )}</p>`;
}

function getBrands() {
  navigator.userAgentData.brands.map((brand) => {
    if (brand.brand === "Not:A-Brand") return;
    target.innerHTML += `<p>${brand.brand} - ${brand.version}</p>`;
  });
}

displayBrowserData();
