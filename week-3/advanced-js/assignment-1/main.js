import {fetchData} from "./lib/utils.js";
import {baseUrl} from "./lib/variables.js";
import {restaurantRow, restaurantModal} from "./components/components.js";

const restaurants = [];

const sortRestaurantsAlphabetically = () => {
  restaurants.sort((a, b) => a.name.localeCompare(b.name));
};

let selectedRestaurant = "";
const dialog = document.querySelector("#restaurant-info");

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

const closeDialog = (e) => {
  if (e && e.target.id !== "restaurant-info") return;
  deselect();
  dialog.close();
};

getRestaurants();
