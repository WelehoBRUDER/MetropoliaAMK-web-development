const restaurantTableHeader = () => {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>Name</td>
    <td>Address</td>
    <td>Company</td>
  `;
  return tr;
};

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
    content += `<ul class="menu">`;
    courses.forEach((course) => {
      const {name, diets, price} = course;
      console.log(course);
      content += `
        <li class="menu-item">
          <p>
            ${name ?? "Unknown"}
            <span class="bold">${diets}</span>
            <span class="italic">${price || ""}</span>
          </p>

        </li>
      `;
    });
    content += "</ul>";
  } else {
    content += "<p>No daily menu available</p>";
  }
  return content;
};

export {restaurantTableHeader, restaurantRow, restaurantModal};
