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
