const restaurants = [];
const api = "https://media2.edu.metropolia.fi/restaurant/api/v1";

const sortRestaurantsAlphabetically = () => {
  restaurants.sort((a, b) => a.name.localeCompare(b.name));
};

let selectedRestaurant = "";
const dialog = document.querySelector("#restaurant-info");

const fetchData = async (url, options) => {
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
};

const getRestaurants = async () => {
  const data = await fetchData(`${api}/restaurants`);
  if (data) {
    restaurants.push(...data);
    sortRestaurantsAlphabetically();
    createRestaurantsDisplay();
  }
};

const selectRestaurant = (restaurant) => {
  selectedRestaurant = restaurant;
  deselect();
  const next = document.querySelector(`#_${selectedRestaurant}`);
  if (next) {
    next.classList.add("highlight");
  }
  showSelectedRestaurant();
};

const deselect = () => {
  const current = document.querySelector(".highlight");
  if (current) {
    current.classList.remove("highlight");
  }
};

const createRestaurantsDisplay = () => {
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
};

const showSelectedRestaurant = () => {
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
};

const displayDailyMenu = async (id) => {
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
      const nameP = document.createElement("p");
      const dietP = document.createElement("p");
      const priceP = document.createElement("p");
      wrapper.classList.add("menu-item");
      const {name, diets, price} = item;
      nameP.textContent = name.length === 0 ? "Unknown" : name;
      dietP.textContent = diets;
      priceP.textContent = price;
      dietP.classList.add("bold");
      priceP.classList.add("italic");
      wrapper.append(nameP, dietP, priceP);
      dialog.append(wrapper);
    });
  } else {
    // If there is no daily menu, display a message
    const message = document.createElement("p");
    message.textContent = "No daily menu available";
    dialog.append(message);
  }
};

const closeDialog = (e) => {
  if (e && e.target.id !== "restaurant-info") return;
  deselect();
  dialog.close();
};

getRestaurants();
