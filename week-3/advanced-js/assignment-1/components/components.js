// const createRestaurantsDisplay = () => {
//   const restaurantsList = document.querySelector(".restaurants");

//   restaurants.forEach((restaurant) => {
//     const tr = document.createElement("tr");
//     tr.id = "_" + restaurant._id;

//     tr.addEventListener("click", () => {
//       selectRestaurant(restaurant._id);
//     });
//     restaurantsList.append(tr);
//   });
// };

const restaurantRow = (restaurant) => {
  const {name, address, company} = restaurant;
  const tr = document.createElement("tr");
  tr.id = "_" + restaurant._id;

  tr.innerHTML = `
    <td>${name}</td>
    <td>${address}</td>
    <td>${company ?? "Unknown"}</td>
  `;

  return tr;
};

const restaurantModal = (restaurant, menu) => {
  const {name, address, company, postalCode, city, phone} = restaurant;
  const courses = menu?.courses ?? [];
  let content = `
    <h2>${name}</h2>
    <p>Address: ${address}</p>
    <p>Postal Code: ${postalCode}</p>
    <p>City: ${city}</p>
    <p>Phone: ${phone}</p>
    <p>Company: ${company ?? "Unknown"}</p>
  `;
  if (courses.length > 0) {
    content += "<h3>Daily Menu</h3>";
    courses.forEach((course) => {
      const {name, diets, price} = course;
      content += `
        <div class="menu-item">
          <p>${name ?? "Unknown"}</p>
          <p class="bold">${diets}</p>
          <p class="italic">${price}</p>
        </div>
      `;
    });
  } else {
    content += "<p>No daily menu available</p>";
  }
  return content;
};

export {restaurantRow, restaurantModal};

// const showSelectedRestaurant = () => {
//   dialog.innerHTML = "";
//   const toDisplay = [
//     ["address", "Address"],
//     ["postalCode", "Postal Code"],
//     ["city", "City"],
//     ["phone", "Phone"],
//     ["company", "Company"],
//   ];
//   const title = document.createElement("h2");
//   const restaurant = restaurants.find((r) => r._id === selectedRestaurant);
//   if (restaurant) {
//     title.textContent = restaurant.name;
//     for (const keys of toDisplay) {
//       const key = keys[0];
//       const name = keys[1];
//       const p = document.createElement("p");
//       p.textContent = `${name}: ${restaurant[key]}`;
//       dialog.append(p);
//     }
//     displayDailyMenu(selectedRestaurant);
//   } else {
//     title.textContent = "No restaurant found";
//   }
//   dialog.prepend(title);
//   dialog.showModal();
// };

// const displayDailyMenu = async (id) => {
//   const data = await fetchData(`${api}/restaurants/daily/${id}/fi`);
//   if (data) {
//     const title = document.createElement("h3");
//     title.textContent = "Daily Menu";
//     dialog.append(title);
//     // If there are no courses, display a message
//     if (data?.courses?.length === 0) {
//       const message = document.createElement("p");
//       message.textContent = "Nothing to show";
//       dialog.append(message);
//       return;
//     }
//     data.courses.forEach((item) => {
//       const wrapper = document.createElement("div");
//       const nameP = document.createElement("p");
//       const dietP = document.createElement("p");
//       const priceP = document.createElement("p");
//       wrapper.classList.add("menu-item");
//       const {name, diets, price} = item;
//       nameP.textContent = name.length === 0 ? "Unknown" : name;
//       dietP.textContent = diets;
//       priceP.textContent = price;
//       dietP.classList.add("bold");
//       priceP.classList.add("italic");
//       wrapper.append(nameP, dietP, priceP);
//       dialog.append(wrapper);
//     });
//   } else {
//     // If there is no daily menu, display a message
//     const message = document.createElement("p");
//     message.textContent = "No daily menu available";
//     dialog.append(message);
//   }
// };
