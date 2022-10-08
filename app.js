// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

// const navToggle = document.querySelector(".nav-toggle");
// const links = document.querySelector(".links");

// navToggle.addEventListener("click", function() {
//    /* console.log(links.classList);
//     console.log(links.classList.contains("links"));
//     if(links.classList.contains("show-links"))
//         links.classList.remove('show-links');
//     else
//     links.classList.add("show-links");*/
//     //alternative method toggle
//     links.classList.toggle("show-links");
// });

let slideNumber = 1;
Slideshow(slideNumber);

function plusSlides(n){
    Slideshow(slideNumber+=n);
   
}
function Slideshow(item){
let slides = document.getElementsByClassName("slide");

if(item > slides.length){slideNumber = 1;}
if(item < 1 ) {slideNumber = slides.length;}
for(let i = 0 ; i < slides.length ; i++){
    slides[i].style.display ="none";
}
slides[slideNumber-1].style.display = "block";
};