let changeCarouselBtn = document.querySelector(".change-carousel-button-best-seller")
let container1ofBestSeller = document.querySelector(".container1")
let container2ofBestSeller = document.querySelector(".container2")
changeCarouselBtn.addEventListener("click", () => {
    container2ofBestSeller.classList.toggle("visible")
    container1ofBestSeller.classList.toggle("visible")
})