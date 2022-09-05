let changeCarouselBtn = document.querySelector(".change-carousel-button-best-seller-right")
let changeCarouselBtn2 = document.querySelector(".change-carousel-button-best-seller-left")
let changeCarouselBtn3 = document.querySelector(".change-carousel-button-best-seller-right1")
let changeCarouselBtn4 = document.querySelector(".change-carousel-button-best-seller-left1")
let container1ofBestSeller = document.querySelector(".container1")
let container2ofBestSeller = document.querySelector(".container2")
let container1ofBestSeller1 = document.querySelector(".container3")
let container1ofBestSeller2 = document.querySelector(".container4")

changeCarouselBtn.addEventListener("click", () => {
    container2ofBestSeller.classList.toggle("visible")
    container1ofBestSeller.classList.toggle("visible")
    changeCarouselBtn.style.display = "none"
    changeCarouselBtn2.style.display = "inline-block"

})
changeCarouselBtn2.addEventListener("click", () => {
    container2ofBestSeller.classList.toggle("visible")
    container1ofBestSeller.classList.toggle("visible")
    changeCarouselBtn.style.display = "inline-block"
    changeCarouselBtn2.style.display = "none"
})

changeCarouselBtn3.addEventListener("click", () => {
    container1ofBestSeller1.classList.toggle("visible")
    container1ofBestSeller2.classList.toggle("visible")
    changeCarouselBtn3.style.display = "none"
    changeCarouselBtn4.style.display = "inline-block"
})
changeCarouselBtn4.addEventListener("click", () => {
    container1ofBestSeller1.classList.toggle("visible")
    container1ofBestSeller2.classList.toggle("visible")
    changeCarouselBtn3.style.display = "inline-block"
    changeCarouselBtn4.style.display = "none"
})