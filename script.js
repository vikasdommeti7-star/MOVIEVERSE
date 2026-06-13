function openMovie(title, desc, rating, image) {

document.getElementById("modalTitle").innerText = title;
document.getElementById("modalDesc").innerText = desc;
document.getElementById("modalRating").innerText = rating;
document.getElementById("modalPoster").src = image;

let trailerLink = "";

if(title === "Baahubali 2"){
trailerLink = "https://www.youtube.com/embed/G62HrubdD6o";
}
else if(title === "RRR"){
trailerLink = "https://www.youtube.com/embed/NgBoMJy386M";
}
else if(title === "Spider-Man"){
trailerLink = "https://www.youtube.com/embed/JfVOs4VSpmA";
}
else if(title === "The Avengers"){
trailerLink = "https://www.youtube.com/embed/eOrNdBpGMv8";
}
else if(title === "Fast & Furious"){
trailerLink = "https://www.youtube.com/embed/uisBaTkQAEs";
}
else if(title === "Rockstar"){
trailerLink = "https://www.youtube.com/embed/bD5FShPZdpw";
}

const frame = document.getElementById("trailerFrame");

if(frame){
frame.src = trailerLink;
}

document.getElementById("movieModal").style.display = "flex";
}

document.addEventListener("DOMContentLoaded", function(){

const closeBtn = document.querySelector(".close");

if(closeBtn){

closeBtn.onclick = function(){

document.getElementById("movieModal").style.display = "none";

const frame = document.getElementById("trailerFrame");

if(frame){
frame.src = "";
}

};

}

const searchBox = document.querySelector(".search-box");

if(searchBox){

searchBox.addEventListener("keyup", function(){

let searchValue = searchBox.value.toLowerCase();

let movies = document.querySelectorAll(".movie-card");

movies.forEach(function(movie){

let movieName =
movie.querySelector("h3").textContent.toLowerCase();

if(movieName.includes(searchValue)){
movie.style.display = "";
}
else{
movie.style.display = "none";
}

});

});

}

});
