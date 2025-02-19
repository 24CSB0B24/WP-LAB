let movies = [];

const movieInput = document.getElementById("movieInput");
const addMovieBtn = document.getElementById("addMovieBtn");
const movieList = document.getElementById("movieList");
const clearListBtn = document.getElementById("clearListBtn");
const movieCount = document.getElementById("movieCount");

function updateMovieList() {
  movieList.innerHTML = '';
  movies.forEach((movie, index) => {
    const li = document.createElement("li");
    li.textContent = movie;
    li.addEventListener("click", () => removeMovie(index));
    movieList.appendChild(li);
  });
  movieCount.textContent = `Total Movies: ${movies.length}`;
}

function addMovie() {
  const movieName = movieInput.value.trim();
  if (movieName === '') {
    alert("Please enter a movie name.");
    return;
  }
  movies.push(movieName);
  updateMovieList();
  movieInput.value = '';
}

function removeMovie(index) {
  movies.splice(index, 1);
  updateMovieList();
}

function clearList() {
  movies = [];
  updateMovieList();
}

addMovieBtn.addEventListener("click", addMovie);
clearListBtn.addEventListener("click", clearList);
updateMovieList();
