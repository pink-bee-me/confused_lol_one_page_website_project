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