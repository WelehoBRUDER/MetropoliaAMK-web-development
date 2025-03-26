import {fetchData} from "./lib/utils.js";
import {baseUrl} from "./lib/variables.js";
import {restaurantRow, restaurantModal} from "./components/components.js";

const restaurants = [];

const sortRestaurantsAlphabetically = () => {
  restaurants.sort((a, b) => a.name.localeCompare(b.name));
};

const closeDialog = (e) => {
  if (e && e.target.id !== "restaurant-info") return;
  deselect();
  dialog.close();
};

let selectedRestaurant = "";
const dialog = document.querySelector("#restaurant-info");
dialog.addEventListener("click", closeDialog);

const getRestaurants = async () => {
  const data = await fetchData(`${baseUrl}/restaurants`);
  if (data) {
    restaurants.push(...data);
  }
};

const createRestaurantsDisplay = () => {
  const restaurantsList = document.querySelector(".restaurants");

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

const main = async () => {
  await getRestaurants();
  sortRestaurantsAlphabetically();
  createRestaurantsDisplay();
};

main();
