var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}
let myIndex = 0;
carousel();

function carousel() {
  
  const x = document.getElementsByClassName("mySlides");
  for (let i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1
}    
  x[myIndex-1].style.display = "block"; 

  setTimeout(carousel, 10000); 
}

const header_input = document.querySelector(".header-input")
const display_input = document.querySelector(".search_popup")
const search_input=document.querySelector(".search_popup-input")
const search_close = document.querySelector(".search_pop-close")

header_input.addEventListener("click",()=>{
display_input.classList.add("search_popup-display")
header_input.classList.add("header-input-display")
search_input.focus()

})
search_close.addEventListener("click",()=>{
    display_input.classList.remove("search_popup-display")
    header_input.classList.remove("header-input-display") 
})

const nav_shop=document.querySelector(".nav_shop")
const shop_show = document.querySelector(".shop_show")

 
nav_shop.addEventListener("mouseover",()=>{
shop_show.classList.add("shop_show1")
})

function shopremove(){
    shop_show.classList.remove("shop_show1")
}

const nav_more= document.querySelector(".nav_more")
const more_dropdown= document.querySelector(".more_dropdown")
nav_more.addEventListener("mouseover",()=>{
    console.log('hai');
    
    more_dropdown.classList.add("more_dropdown1")
    })

    function moreremove(){
        more_dropdown.classList.remove("more_dropdown1")
    }