function openMovie(title, desc, rating, image){

document.getElementById("modalTitle").innerText = title;
document.getElementById("modalDesc").innerText = desc;
document.getElementById("modalRating").innerText = rating;
document.getElementById("modalPoster").src = image;

document.getElementById("movieModal").style.display = "flex";
}

document.querySelector(".close").onclick = function(){

document.getElementById("movieModal").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function(){

const searchBox = document.querySelector(".search-box");

if(searchBox){

searchBox.addEventListener("keyup", function(){

let searchValue = searchBox.value.toLowerCase();

let movies = document.querySelectorAll(".movie-card");

movies.forEach(function(movie){

let movieName = movie.querySelector("h3").textContent.toLowerCase();

if(movieName.includes(searchValue)){
movie.style.display = "block";
}
else{
movie.style.display = "none";
}

});

});

}

});
