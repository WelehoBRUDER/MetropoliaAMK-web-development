const movies = [];
const bestMovie = document.querySelector("#best-movie");
const movieList = document.querySelector("#movie-list");
// const movie = {
//   title: "Movie Title",
//   rating: 5
// }

/**
 *
 * @param {string} title - the title of the movie
 * @param {number} rating - numerical rating of the movie (0-5)
 */
function addMovie(title, rating) {
  const movie = {
    title,
    rating,
  };
  movies.push(movie);
}

/**
 * @param {string} text - The text to display in the prompt
 * @param {string} type - whether the number is a float or an integer (float or int)
 * @param {boolean} retry - whether to keep prompting the user until they enter a valid number
 * @param {Array} limit - the minimum and maximum values for the number (keep null if no limit)
 */
function validateNumberPrompt(text, type, retry, limit) {
  let validationFailed = false;
  let number = prompt(text);
  number = type === "float" ? parseFloat(number) : parseInt(number);
  if (isNaN(number) || number === null) {
    console.error("Invalid number");
    validationFailed = true;
  }
  if (limit) {
    if (limit[0] && number < limit[0]) {
      console.error("Number too low");
      validationFailed = true;
    }
    if (limit[1] && number > limit[1]) {
      console.error("Number too high");
      validationFailed = true;
    }
  }
  if (validationFailed) {
    if (retry) {
      return validateNumberPrompt(text, type, retry, limit);
    } else {
      return null;
    }
  }
  return number;
}

/**
 *
 * @param {number} index - the index of the movie in the array
 */
function askToAddMovie(index) {
  const title = prompt(
    `Enter a movie title (${index + 1} / ${numberOfMovies}):`
  );
  const rating = validateNumberPrompt(
    "Enter a rating for the movie:",
    "float",
    true,
    [0, 5]
  );
  addMovie(title, rating);
}

function sortMoviesByRating(order) {
  if (order === null || typeof order !== "string") {
    throw new Error("Invalid order");
  }
  movies.sort((a, b) =>
    order === "asc"
      ? a.rating - b.rating
      : order === "desc"
      ? b.rating - a.rating
      : 0
  );
}

function displayBestMovie() {
  bestMovie.textContent = `Highest rated movie:  ${movies[0].title}, score: ${movies[0].rating}`;
}

function displayMovies() {
  movieList.innerHTML = "";
  for (const movie of movies) {
    const li = document.createElement("li");
    li.textContent = `${movie.title} - ${movie.rating}`;
    movieList.append(li);
  }
}

const numberOfMovies = validateNumberPrompt(
  "How many movies do you want to add?",
  "int",
  false
);

for (let i = 0; i < numberOfMovies; i++) {
  askToAddMovie(i);
}

sortMoviesByRating("desc");
console.log("Movies by rating (desc):");
for (const movie of movies) {
  console.log(`${movie.title} - ${movie.rating}`);
}

if (movies.length > 0) {
  displayBestMovie();
  displayMovies();
} else {
  bestMovie.textContent = "No movies to display";
}
