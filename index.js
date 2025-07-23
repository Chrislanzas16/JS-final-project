
const movieResult = document.querySelector(".movieResults")
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton")

searchInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        movieLookup(searchInput.value)
    }
})

searchInput.addEventListener("input", function (){
    if (searchInput.value.trim() === "") {
        movieResult.innerHTML = ""
    }
})

searchButton.addEventListener("click", function (){
    const searchTerm = searchInput.value.trim ();
    if (searchTerm) {
        movieLookup(searchTerm)
    }
})



async function movieLookup(search) {
    
    const movieTitle = await fetch (`http://www.omdbapi.com/?apikey=9c546bc8&s=${search}`);
   const movieData =  await movieTitle.json();
   if (movieData.Response === "True") {
    const movies = movieData.Search;
    movieResult.innerHTML = movies.slice(0, 6).map((movie) => `
  <div>
 <img  src= "${movie.Poster}"width=200px<br>

<br><b>Title:</b>
 ${movie.Title}
<br><strong>Year:</strong>
${movie.Year}<br> </div>`)
.join(""); 




    
}};







async function main () {
   const movieTitle = await fetch (`http://www.omdbapi.com/?apikey=9c546bc8&s=fast`);
   const movieData =  await movieTitle.json();
   const movies = movieData.Search;
    console.log(movies)
}
main();

