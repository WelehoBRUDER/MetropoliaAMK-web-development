import {fetchData} from "./lib/utils.js";
import {baseUrl} from "./lib/variables.js";
import {
  restaurantTableHeader,
  restaurantRow,
  restaurantModal,
} from "./components/components.js";

let selectedRestaurant = "";
let selectedCompany = "";
let restaurants = [];
const restaurantsData = [];

const sortRestaurantsAlphabetically = () => {
  restaurants.sort((a, b) => a.name.localeCompare(b.name));
};

const closeDialog = (e) => {
  if (e && e.target.id !== "restaurant-info") return;
  deselect();
  dialog.close();
};

const dialog = document.querySelector("#restaurant-info");
dialog.addEventListener("click", closeDialog);

const getRestaurants = async () => {
  const data = await fetchData(`${baseUrl}/restaurants`);
  if (data) {
    restaurantsData.push(...data);
  }
};

const createRestaurantsDisplay = () => {
  const restaurantsList = document.querySelector(".restaurants");
  restaurantsList.innerHTML = "";

  restaurantsList.append(restaurantTableHeader());
  restaurants.forEach((restaurant) => {
    const tr = restaurantRow(restaurant);

    tr.addEventListener("click", () => {
      selectRestaurant(restaurant._id);
    });
    restaurantsList.append(tr);
  });
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

const showSelectedRestaurant = async () => {
  dialog.innerHTML = "";
  const menu = await fetchData(
    `${baseUrl}/restaurants/daily/${selectedRestaurant}/fi`
  );
  const restaurant = restaurants.find((r) => r._id === selectedRestaurant);
  dialog.innerHTML = restaurantModal(restaurant, menu);
  dialog.showModal();
};

const getCompanies = () => {
  const companies = restaurantsData.map((restaurant) => restaurant.company);
  return [...new Set(companies)];
};

const createOptions = () => {
  const select = document.querySelector("#company-select");
  const companies = getCompanies();
  companies.unshift("All");
  companies.forEach((company) => {
    const option = document.createElement("option");
    option.value = company;
    option.textContent = company;
    select.append(option);
  });

  select.addEventListener("change", (e) => {
    selectedCompany = e.target.value;
    if (selectedCompany === "All") {
      restaurants = structuredClone(restaurantsData);
    } else {
      filterRestaurants();
    }
    sortRestaurantsAlphabetically();
    createRestaurantsDisplay();
  });
};

const filterRestaurants = () => {
  const filtered = restaurantsData.filter((restaurant) => {
    return restaurant.company.toLowerCase() === selectedCompany.toLowerCase();
  });
  restaurants = filtered;
};

const main = async () => {
  await getRestaurants();
  restaurants = structuredClone(restaurantsData);
  sortRestaurantsAlphabetically();
  createRestaurantsDisplay();
  createOptions();
};

main();
