const lightbox =document.createElement("div")
lightbox.id = "lightbox"
document.body.appendChild(lightbox)

const container = document.querySelector("div.grid") //selects container div of our images in the gallery
const images = container.querySelectorAll("img") //selects all images within the <div class="grid"> container element
images.forEach(image=> { //loop through all of our images
    image.addEventListener("click", e =>{// set up click event listener
        lightbox.classList.add("active")//add active class to make lightbox active when we click image
        const img = document.createElement("img")//create an image to show in the lightbox 
        img.src = image.src //by creating an image that is the same as our current image 
        while(lightbox.firstChild) { // when the lightbox has a child, remove that child
            lightbox.removeChild(lightbox.firstChild) // then pass it our new image
        }
        lightbox.appendChild(img) // now adding that newly created image to our lightbox
    })
})


lightbox.addEventListener("click", e =>{ //add an event listener for "click" and run the event(e) function
    if(e.target !== e.currentTarget) return //if e.target ( what we click on)is not the black area (for example the image)then just return (do nothing)
                                            // we do not want to exit the light box unless we click in the black area of lightbox)
    lightbox.classList.remove("active") //removes the active class which will hide our lightbox again
})

// Modal number Two SetUp //
//Open Modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
}

//Close the Modal
function closeModal() {
    document.getElementById("myModal").style.display ="none"
}

var slideIndex=1;
showSlides(slideIndex);

//Next/previous controls
function plusSlide(n) {
    showSlides(slideIndex += 1)
}

// Thumbnail Image Controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length){ slideIndex = i }
    if (n < 1) { slideIndex = slides.length}
    for (i = 0; 1< slides.length; i++) {
        slides[i].styles.display="hidden";
    }
    for (i=0;i<dots.length;i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
    }

