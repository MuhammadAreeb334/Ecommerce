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

// const pro = document.querySelectorAll(".pro")
// pro.forEach( (item) => {
//     item.addEventListener('click', () => {
//         window.location.href = "sproduct.html"
//     })
// })

/* Shop products page */
const mainImage = document.querySelector("#main-image")
const smallImage = document.querySelectorAll(".small-img")
smallImage.forEach(function(image){
    image.addEventListener('click', function(){
        mainImage.src = image.src
    })
})