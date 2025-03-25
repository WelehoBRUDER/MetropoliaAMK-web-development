const restaurants = [];
const api = "https://media2.edu.metropolia.fi/restaurant/api/v1";

function sortRestaurantsAlphabetically() {
  restaurants.sort((a, b) => a.name.localeCompare(b.name));
}

let selectedRestaurant = "";
const dialog = document.querySelector("#restaurant-info");

async function fetchData(url, options) {
  try {
    const res = await fetch(url, options);
    if (res.ok) {
      try {
        const data = await res.json();
        return data;
      } catch (error) {
        console.error("Failed to get response data: " + error);
      }
    } else {
      throw new Error(res.status);
    }
  } catch (error) {
    console.error("Connection failed: " + error);
  }
}

async function getRestaurants() {
  const data = await fetchData(`${api}/restaurants`);
  if (data) {
    restaurants.push(...data);
    sortRestaurantsAlphabetically();
    createRestaurantsDisplay();
  }
}

function selectRestaurant(restaurant) {
  selectedRestaurant = restaurant;
  deselect();
  const next = document.querySelector(`#_${selectedRestaurant}`);
  if (next) {
    next.classList.add("highlight");
  }
  showSelectedRestaurant();
}

function deselect() {
  const current = document.querySelector(".highlight");
  if (current) {
    current.classList.remove("highlight");
  }
}

function createRestaurantsDisplay() {
  const restaurantsList = document.querySelector(".restaurants");

  restaurants.forEach((restaurant) => {
    const tr = document.createElement("tr");
    tr.id = "_" + restaurant._id;
    tr.innerHTML = `
      <td>${restaurant.name}</td>
      <td>${restaurant.address}</td>
    `;

    tr.addEventListener("click", () => {
      selectRestaurant(restaurant._id);
    });
    restaurantsList.append(tr);
  });
}
// __v: 0,
function showSelectedRestaurant() {
  dialog.innerHTML = "";
  const toDisplay = [
    ["address", "Address"],
    ["postalCode", "Postal Code"],
    ["city", "City"],
    ["phone", "Phone"],
    ["company", "Company"],
  ];
  const title = document.createElement("h2");
  const restaurant = restaurants.find((r) => r._id === selectedRestaurant);
  if (restaurant) {
    title.textContent = restaurant.name;
    for (const keys of toDisplay) {
      const key = keys[0];
      const name = keys[1];
      const p = document.createElement("p");
      p.textContent = `${name}: ${restaurant[key]}`;
      dialog.append(p);
    }
    displayDailyMenu(selectedRestaurant);
  } else {
    title.textContent = "No restaurant found";
  }
  dialog.prepend(title);
  dialog.showModal();
}

async function displayDailyMenu(id) {
  const data = await fetchData(`${api}/restaurants/daily/${id}/fi`);
  if (data) {
    const title = document.createElement("h3");
    title.textContent = "Daily Menu";
    dialog.append(title);
    // If there are no courses, display a message
    if (data?.courses?.length === 0) {
      const message = document.createElement("p");
      message.textContent = "Nothing to show";
      dialog.append(message);
      return;
    }
    console.log(data);
    data.courses.forEach((item) => {
      const wrapper = document.createElement("div");
      const name = document.createElement("p");
      const diet = document.createElement("p");
      const price = document.createElement("p");
      wrapper.classList.add("menu-item");
      name.textContent = item.name.length === 0 ? "Unknown" : item.name;
      diet.textContent = item.diets;
      price.textContent = item.price;
      diet.classList.add("bold");
      price.classList.add("italic");
      wrapper.append(name, diet, price);
      dialog.append(wrapper);
    });
  } else {
    // If there is no daily menu, display a message
    const message = document.createElement("p");
    message.textContent = "No daily menu available";
    dialog.append(message);
  }
}

function closeDialog(e) {
  if (e && e.target.id !== "restaurant-info") {
    return;
  }
  deselect();
  dialog.close();
}

getRestaurants();
