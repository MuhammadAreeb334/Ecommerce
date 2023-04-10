const bar = document.querySelector("#bar")
const navbar = document.querySelector("#navbar")
const close = document.querySelector("#close")

if(bar) {
    bar.addEventListener('click', function() {
        navbar.classList.add("active")
    })
}
if(close){

    close.addEventListener('click', function() {
        navbar.classList.remove("active")
    })
}

/* shop page*/

const pro = document.querySelectorAll(".pro")
    pro[0].addEventListener('click', function() {
        window.location.href = "sproduct.html"
    })


/* Shop products page */
const mainImage = document.querySelector("#main-image")
const smallImage = document.querySelectorAll(".small-img")

smallImage[0].addEventListener('click', function() {
    mainImage.src = smallImage[0].src
})

smallImage[1].addEventListener('click', function() {
    mainImage.src = smallImage[1].src
})

smallImage[2].addEventListener('click', function() {
    mainImage.src = smallImage[2].src
})

smallImage[3].addEventListener('click', function() {
    mainImage.src = smallImage[3].src
})