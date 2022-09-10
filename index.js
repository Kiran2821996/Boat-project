const best_sellers = document.querySelector(".best_sellers");
const daily_deals = document.querySelector(".daily_deals");
const biggest_launch = document.querySelector(".biggest_launch");
const smart_watches = document.querySelector(".smart_watches");
const trending_wireless = document.querySelector(".trending_wireless");
const top_earbuds = document.querySelector(".top_earbuds");
const trending_wired = document.querySelector(".trending_wired");
const trending_anc = document.querySelector(".trending_anc");
const dc = document.querySelector(".dc");
const marvel = document.querySelector(".marvel");
const home_audio = document.querySelector(".home_audio");
const videoContainer = document.querySelector(".video-container");
const marvelHeading = document.querySelector(".marvel-div");
const dcHeading = document.querySelector(".dc-div");

const main = document.querySelector(".mainSection");

const itemsOfTimer = document.querySelectorAll(".flash-sale-end-format h4");

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

const futureDate = new Date(tempYear, tempMonth, tempDay + 1, 12, 00, 00);
const date = futureDate.getDate();
const futureTime = futureDate.getTime();
function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  let days = t / oneDay;
  days = Math.floor(days);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);
  let milisecond = Math.floor((t % 100) / 10);

  // putting values in the array to pass inside the timer

  const timerValue = [
    hours + "hr",
    minutes + "mins",
    seconds + " s",
    milisecond,
  ];
  function format(item) {
    return item;
  }
  //For each selects each item  to attach on the count down timer
  itemsOfTimer.forEach(function (item, i) {
    item.innerHTML = format(timerValue[i]);
  });
}
let countdown = setInterval(getRemainingTime, 70);
getRemainingTime();

const carosel_left1 = document.querySelector(".carosel_left1");
const carosel_right1 = document.querySelector(".carosel_right1");

const carosel_left2 = document.querySelector(".carosel_left2");
const carosel_right2 = document.querySelector(".carosel_right2");

const carosel_left3 = document.querySelector(".carosel_left3");
const carosel_right3 = document.querySelector(".carosel_right3");

const carosel_left4 = document.querySelector(".carosel_left4");
const carosel_right4 = document.querySelector(".carosel_right4");

const carosel_left5 = document.querySelector(".carosel_left5");
const carosel_right5 = document.querySelector(".carosel_right5");

const carosel_left6 = document.querySelector(".carosel_left6");
const carosel_right6 = document.querySelector(".carosel_right6");

const carosel_left7 = document.querySelector(".carosel_left7");
const carosel_right7 = document.querySelector(".carosel_right7");

const carosel_left8 = document.querySelector(".carosel_left8");
const carosel_right8 = document.querySelector(".carosel_right8");

const carosel_left9 = document.querySelector(".carosel_left9");
const carosel_right9 = document.querySelector(".carosel_right9");

const carosel_left10 = document.querySelector(".carosel_left10");
const carosel_right10 = document.querySelector(".carosel_right10");

const carosel_left11 = document.querySelector(".carosel_left11");
const carosel_right11 = document.querySelector(".carosel_right11");

let basket = [];

function generate() {
  const data1 = { description: "best_sellers" };
  fetch("http://localhost:3333/boat/Products", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data1),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);

      carosel_left1.style.visibility = "hidden";
      carosel_right1.style.visibility = "visible";
      for (let i = 0; i < result.length - 4; i++) {
        if (result[i].tag.length > 5) {
          html = ` <div class="main">
           <div class="best-seller-div">
            <div class="wrapper-of-best-seller-images">
            <div class="flash red">${result[i].tag}</div>
           <img class="best-seller-image-front" src="${
             result[i].productImages[0]
           }  alt="">
           <img class="best-seller-image-back" src="${
             result[i].productImages[1]
           }   alt="">
      </div><div class="inside-best-seller">  <a href="./show.html"><h3 class="productname" id="${
        result[i]._id
      }">${result[i].productName}</h3></a> 
          <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
            result[i].rating
          } ${result[i].noOfReviews} reviews</p>
          <hr>
          <div class="price-and-discount">
              <h5 class = "current-price">${result[i].price} </h5>
              <p class="earlier-price">₹${result[i].originalPrice}</p>
          </div>
          <p class="save-money">You Save: ₹ ${
            result[i].originalPrice - result[i].price
          } (${result[i].offer}%)</p>
          <button class="button-flash-sale red-button" id="${
            result[i].productName
          }">ADD TO CART</button>
      </div></div>  `;
          best_sellers.innerHTML += html;
          main.addEventListener("click", (e) => {
            console.log("");
            if (e.target.id == result[i]._id) {
              let datasTrans = result[i]._id;
              console.log(datasTrans);
              // console.log(datas);
              sessionStorage.setItem(
                "transferdata",
                JSON.stringify(datasTrans)
              );
            }
          });
        } else {
          html = ` <div class="main">
           <div class="best-seller-div">
            <div class="wrapper-of-best-seller-images">
            <div class="flash">🗲${result[i].tag}</div>
           <img class="best-seller-image-front" src="${
             result[i].productImages[0]
           }  alt="">
           <img class="best-seller-image-back" src="${
             result[i].productImages[1]
           }   alt="">
      </div><div class="inside-best-seller"> <a href="./show.html"><h3 class="productname" id="${
        result[i]._id
      }">${result[i].productName}</h3></a> 
          <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
            result[i].rating
          } -${result[i].noOfReviews} reviews</p>
          <hr>
          <div class="price-and-discount">
              <h5 class = "current-price">${result[i].price} </h5>
              <p class="earlier-price">₹${result[i].originalPrice}</p>
          </div>
          <p class="save-money">You Save: ₹ ${
            result[i].originalPrice - result[i].price
          } (${result[i].offer}%)</p>
          <button class="button-flash-sale" id="${
            result[i].productName
          }">ADD TO CART</button>
      </div></div>  `;
          best_sellers.innerHTML += html;
          main.addEventListener("click", (e) => {
            console.log("");
            if (e.target.id == result[i]._id) {
              let datasTrans = result[i]._id;
              console.log(datasTrans);
              // console.log(datas);
              sessionStorage.setItem(
                "transferdata",
                JSON.stringify(datasTrans)
              );
            }
          });
        }
      }

      carosel_left1.addEventListener("click", () => {
        carosel_left1.style.visibility = "hidden";
        carosel_right1.style.visibility = "visible";
        best_sellers.innerHTML = null;

        for (let i = 0; i < result.length - 4; i++) {
          if (result[i].tag.length > 5) {
            html = ` <div class="main">
           <div class="best-seller-div">
            <div class="wrapper-of-best-seller-images">
            <div class="flash red">${result[i].tag}</div>
           <img class="best-seller-image-front" src="${
             result[i].productImages[0]
           }  alt="">
           <img class="best-seller-image-back" src="${
             result[i].productImages[1]
           }   alt="">
      </div><div class="inside-best-seller">  <a href="./show.html"><h3 class="productname" id="${
        result[i]._id
      }">${result[i].productName}</h3></a> 
          <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
            result[i].rating
          } ${result[i].noOfReviews} reviews</p>
          <hr>
          <div class="price-and-discount">
              <h5 class = "current-price">${result[i].price} </h5>
              <p class="earlier-price">₹${result[i].originalPrice}</p>
          </div>
          <p class="save-money">You Save: ₹ ${
            result[i].originalPrice - result[i].price
          } (${result[i].offer}%)</p>
          <button class="button-flash-sale red-button" id="${
            result[i].productName
          }">ADD TO CART</button>
      </div></div>  `;
            best_sellers.innerHTML += html;
            main.addEventListener("click", (e) => {
              console.log("");
              if (e.target.id == result[i]._id) {
                let datasTrans = result[i]._id;
                console.log(datasTrans);
                // console.log(datas);
                sessionStorage.setItem(
                  "transferdata",
                  JSON.stringify(datasTrans)
                );
              }
            });
          } else {
            html = ` <div class="main">
           <div class="best-seller-div">
            <div class="wrapper-of-best-seller-images">
            <div class="flash">🗲${result[i].tag}</div>
           <img class="best-seller-image-front" src="${
             result[i].productImages[0]
           }  alt="">
           <img class="best-seller-image-back" src="${
             result[i].productImages[1]
           }   alt="">
      </div><div class="inside-best-seller"> <a href="./show.html"><h3 class="productname" id="${
        result[i]._id
      }">${result[i].productName}</h3></a> 
          <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
            result[i].rating
          } -${result[i].noOfReviews} reviews</p>
          <hr>
          <div class="price-and-discount">
              <h5 class = "current-price">${result[i].price} </h5>
              <p class="earlier-price">₹${result[i].originalPrice}</p>
          </div>
          <p class="save-money">You Save: ₹ ${
            result[i].originalPrice - result[i].price
          } (${result[i].offer}%)</p>
          <button class="button-flash-sale" id="${
            result[i].productName
          }">ADD TO CART</button>
      </div></div>  `;
            best_sellers.innerHTML += html;
            main.addEventListener("click", (e) => {
              console.log("");
              if (e.target.id == result[i]._id) {
                let datasTrans = result[i]._id;
                console.log(datasTrans);
                // console.log(datas);
                sessionStorage.setItem(
                  "transferdata",
                  JSON.stringify(datasTrans)
                );
              }
            });
          }
        }
      });
      carosel_right1.addEventListener("click", () => {
        carosel_left1.style.visibility = "visible";
        carosel_right1.style.visibility = "hidden";
        best_sellers.innerHTML = null;
        for (let i = result.length - 4; i < result.length; i++) {
          if (result[i].tag.length > 5) {
            html = ` <div class="main">
           <div class="best-seller-div">
            <div class="wrapper-of-best-seller-images">
            <div class="flash red">${result[i].tag}</div>
           <img class="best-seller-image-front" src="${
             result[i].productImages[0]
           }  alt="">
           <img class="best-seller-image-back" src="${
             result[i].productImages[1]
           }   alt="">
      </div><div class="inside-best-seller">  <a href="./show.html"><h3 class="productname" id="${
        result[i]._id
      }">${result[i].productName}</h3></a> 
          <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
            result[i].rating
          } ${result[i].noOfReviews} reviews</p>
          <hr>
          <div class="price-and-discount">
              <h5 class = "current-price">${result[i].price} </h5>
              <p class="earlier-price">₹${result[i].originalPrice}</p>
          </div>
          <p class="save-money">You Save: ₹ ${
            result[i].originalPrice - result[i].price
          } (${result[i].offer}%)</p>
          <button class="button-flash-sale red-button" id="${
            result[i].productName
          }">ADD TO CART</button>
      </div></div>  `;
            best_sellers.innerHTML += html;
            main.addEventListener("click", (e) => {
              console.log("");
              if (e.target.id == result[i]._id) {
                let datasTrans = result[i]._id;
                console.log(datasTrans);
                // console.log(datas);
                sessionStorage.setItem(
                  "transferdata",
                  JSON.stringify(datasTrans)
                );
              }
            });
          } else {
            html = ` <div class="main">
           <div class="best-seller-div">
            <div class="wrapper-of-best-seller-images">
            <div class="flash">🗲${result[i].tag}</div>
           <img class="best-seller-image-front" src="${
             result[i].productImages[0]
           }  alt="">
           <img class="best-seller-image-back" src="${
             result[i].productImages[1]
           }   alt="">
      </div><div class="inside-best-seller"> <a href="./show.html"><h3 class="productname" id="${
        result[i]._id
      }">${result[i].productName}</h3></a> 
          <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
            result[i].rating
          } -${result[i].noOfReviews} reviews</p>
          <hr>
          <div class="price-and-discount">
              <h5 class = "current-price">${result[i].price} </h5>
              <p class="earlier-price">₹${result[i].originalPrice}</p>
          </div>
          <p class="save-money">You Save: ₹ ${
            result[i].originalPrice - result[i].price
          } (${result[i].offer}%)</p>
          <button class="button-flash-sale" id="${
            result[i].productName
          }">ADD TO CART</button>
      </div></div>  `;
            best_sellers.innerHTML += html;
            main.addEventListener("click", (e) => {
              console.log("");
              if (e.target.id == result[i]._id) {
                let datasTrans = result[i]._id;
                console.log(datasTrans);
                // console.log(datas);
                sessionStorage.setItem(
                  "transferdata",
                  JSON.stringify(datasTrans)
                );
              }
            });
          }
        }
      });
    });

  const data2 = { description: "daily_deals" };
  fetch("http://localhost:3333/boat/Products", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data2),
  })
    .then((response) => response.json())
    .then((result) => {
      // console.log(result);
      //
      carosel_left2.style.visibility = "hidden";
      carosel_right2.style.visibility = "visible";
      for (let i = 0; i < result.length - 4; i++) {
        if (result[i].tag.length > 5) {
          html = ` <div class="main">
          <div class="best-seller-div">
           <div class="wrapper-of-best-seller-images">
           <div class="flash red">${result[i].tag}</div>
          <img class="best-seller-image-front" src="${
            result[i].productImages[0]
          }  alt="">
          <img class="best-seller-image-back" src="${
            result[i].productImages[1]
          }   alt="">
     </div><div class="inside-best-seller"> <a href="./show.html"><h3 class="productname" id="${
       result[i]._id
     }">${result[i].productName}</h3></a> 
         <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
           result[i].rating
         } -${result[i].noOfReviews} reviews</p>
         <hr>
         <div class="price-and-discount">
             <h5 class = "current-price">${result[i].price} </h5>
             <p class="earlier-price">₹${result[i].originalPrice}</p>
         </div>
         <p class="save-money">You Save: ₹ ${
           result[i].originalPrice - result[i].price
         } (${result[i].offer}%)</p>
         <button class="button-flash-sale red-button" id="${
           result[i].productName
         }">ADD TO CART</button>
     </div></div>  `;
          daily_deals.innerHTML += html;
          main.addEventListener("click", (e) => {
            console.log("");
            if (e.target.id == result[i]._id) {
              let datasTrans = result[i]._id;
              console.log(datasTrans);
              // console.log(datas);
              sessionStorage.setItem(
                "transferdata",
                JSON.stringify(datasTrans)
              );
            }
          });
        } else {
          html = ` <div class="main">
          <div class="best-seller-div">
           <div class="wrapper-of-best-seller-images">
           <div class="flash">🗲${result[i].tag}</div>
          <img class="best-seller-image-front" src="${
            result[i].productImages[0]
          }  alt="">
          <img class="best-seller-image-back" src="${
            result[i].productImages[1]
          }   alt="">
     </div><div class="inside-best-seller"> <a href="./show.html"><h3 class="productname" id="${
       result[i]._id
     }">${result[i].productName}</h3></a> 
         <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
           result[i].rating
         } -${result[i].noOfReviews} reviews</p>
         <hr>
         <div class="price-and-discount">
             <h5 class = "current-price">${result[i].price} </h5>
             <p class="earlier-price">₹${result[i].originalPrice}</p>
         </div>
         <p class="save-money">You Save: ₹ ${
           result[i].originalPrice - result[i].price
         } (${result[i].offer}%)</p>
         <button class="button-flash-sale" id="${
           result[i].productName
         }">ADD TO CART</button>
     </div></div>  `;
          daily_deals.innerHTML += html;
          main.addEventListener("click", (e) => {
            console.log("");
            if (e.target.id == result[i]._id) {
              let datasTrans = result[i]._id;
              console.log(datasTrans);
              // console.log(datas);
              sessionStorage.setItem(
                "transferdata",
                JSON.stringify(datasTrans)
              );
            }
          });
        }
      }
      carosel_left2.addEventListener("click", () => {
        carosel_left2.style.visibility = "hidden";
        carosel_right2.style.visibility = "visible";
        daily_deals.innerHTML = null;
        for (let i = 0; i < result.length - 4; i++) {
          if (result[i].tag.length > 5) {
            html = ` <div class="main">
            <div class="best-seller-div">
             <div class="wrapper-of-best-seller-images">
             <div class="flash red">${result[i].tag}</div>
            <img class="best-seller-image-front" src="${
              result[i].productImages[0]
            }  alt="">
            <img class="best-seller-image-back" src="${
              result[i].productImages[1]
            }   alt="">
       </div><div class="inside-best-seller"> <a href="./show.html"><h3 class="productname" id="${
         result[i]._id
       }">${result[i].productName}</h3></a> 
           <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
             result[i].rating
           } -${result[i].noOfReviews} reviews</p>
           <hr>
           <div class="price-and-discount">
               <h5 class = "current-price">${result[i].price} </h5>
               <p class="earlier-price">₹${result[i].originalPrice}</p>
           </div>
           <p class="save-money">You Save: ₹ ${
             result[i].originalPrice - result[i].price
           } (${result[i].offer}%)</p>
           <button class="button-flash-sale red-button" id="${
             result[i].productName
           }">ADD TO CART</button>
       </div></div>  `;
            daily_deals.innerHTML += html;
            main.addEventListener("click", (e) => {
              console.log("");
              if (e.target.id == result[i]._id) {
                let datasTrans = result[i]._id;
                console.log(datasTrans);
                // console.log(datas);
                sessionStorage.setItem(
                  "transferdata",
                  JSON.stringify(datasTrans)
                );
              }
            });
          } else {
            html = ` <div class="main">
            <div class="best-seller-div">
             <div class="wrapper-of-best-seller-images">
             <div class="flash">🗲${result[i].tag}</div>
            <img class="best-seller-image-front" src="${
              result[i].productImages[0]
            }  alt="">
            <img class="best-seller-image-back" src="${
              result[i].productImages[1]
            }   alt="">
       </div><div class="inside-best-seller"> <a href="./show.html"><h3 class="productname" id="${
         result[i]._id
       }">${result[i].productName}</h3></a> 
           <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
             result[i].rating
           } -${result[i].noOfReviews} reviews</p>
           <hr>
           <div class="price-and-discount">
               <h5 class = "current-price">${result[i].price} </h5>
               <p class="earlier-price">₹${result[i].originalPrice}</p>
           </div>
           <p class="save-money">You Save: ₹ ${
             result[i].originalPrice - result[i].price
           } (${result[i].offer}%)</p>
           <button class="button-flash-sale" id="${
             result[i].productName
           }">ADD TO CART</button>
       </div></div>  `;
            daily_deals.innerHTML += html;
            main.addEventListener("click", (e) => {
              console.log("");
              if (e.target.id == result[i]._id) {
                let datasTrans = result[i]._id;
                console.log(datasTrans);
                // console.log(datas);
                sessionStorage.setItem(
                  "transferdata",
                  JSON.stringify(datasTrans)
                );
              }
            });
          }
        }
      });
      carosel_right2.addEventListener("click", () => {
        carosel_left2.style.visibility = "visible";
        carosel_right2.style.visibility = "hidden";
        daily_deals.innerHTML = null;
        for (let i = result.length - 4; i < result.length; i++) {
          if (result[i].tag.length > 5) {
            html = ` <div class="main">
            <div class="best-seller-div">
             <div class="wrapper-of-best-seller-images">
             <div class="flash red">${result[i].tag}</div>
            <img class="best-seller-image-front" src="${
              result[i].productImages[0]
            }  alt="">
            <img class="best-seller-image-back" src="${
              result[i].productImages[1]
            }   alt="">
       </div><div class="inside-best-seller"> <a href="./show.html"><h3 class="productname" id="${
         result[i]._id
       }">${result[i].productName}</h3></a> 
           <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
             result[i].rating
           } -${result[i].noOfReviews} reviews</p>
           <hr>
           <div class="price-and-discount">
               <h5 class = "current-price">${result[i].price} </h5>
               <p class="earlier-price">₹${result[i].originalPrice}</p>
           </div>
           <p class="save-money">You Save: ₹ ${
             result[i].originalPrice - result[i].price
           } (${result[i].offer}%)</p>
           <button class="button-flash-sale red-button" id="${
             result[i].productName
           }">ADD TO CART</button>
       </div></div>  `;
            daily_deals.innerHTML += html;
            main.addEventListener("click", (e) => {
              console.log("");
              if (e.target.id == result[i]._id) {
                let datasTrans = result[i]._id;
                console.log(datasTrans);
                // console.log(datas);
                sessionStorage.setItem(
                  "transferdata",
                  JSON.stringify(datasTrans)
                );
              }
            });
          } else {
            html = ` <div class="main">
            <div class="best-seller-div">
             <div class="wrapper-of-best-seller-images">
             <div class="flash">🗲${result[i].tag}</div>
            <img class="best-seller-image-front" src="${
              result[i].productImages[0]
            }  alt="">
            <img class="best-seller-image-back" src="${
              result[i].productImages[1]
            }   alt="">
       </div><div class="inside-best-seller"> <a href="./show.html"><h3 class="productname" id="${
         result[i]._id
       }">${result[i].productName}</h3></a> 
           <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
             result[i].rating
           } -${result[i].noOfReviews} reviews</p>
           <hr>
           <div class="price-and-discount">
               <h5 class = "current-price">${result[i].price} </h5>
               <p class="earlier-price">₹${result[i].originalPrice}</p>
           </div>
           <p class="save-money">You Save: ₹ ${
             result[i].originalPrice - result[i].price
           } (${result[i].offer}%)</p>
           <button class="button-flash-sale" id="${
             result[i].productName
           }">ADD TO CART</button>
       </div></div>  `;
            daily_deals.innerHTML += html;
            main.addEventListener("click", (e) => {
              console.log("");
              if (e.target.id == result[i]._id) {
                let datasTrans = result[i]._id;
                console.log(datasTrans);
                // console.log(datas);
                sessionStorage.setItem(
                  "transferdata",
                  JSON.stringify(datasTrans)
                );
              }
            });
          }
        }
      });
    });

  const data3 = { description: "Biggest_Launches" };
  fetch("http://localhost:3333/boat/Products", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data3),
  })
    .then((response) => response.json())
    .then((result) => {
      // console.log(result);
      // container.innerHTML = null;
      carosel_left3.style.visibility = "hidden";
      carosel_right3.style.visibility = "visible";
      for (let i = 0; i < result.length - 4; i++) {
        if (result[i].tag.length > 5) {
          html = ` <div class="main">
          <div class="best-seller-div">
           <div class="wrapper-of-best-seller-images">
           <div class="flash red">${result[i].tag}</div>
          <img class="best-seller-image-front" src="${
            result[i].productImages[0]
          }  alt="">
          <img class="best-seller-image-back" src="${
            result[i].productImages[1]
          }   alt="">
     </div><div class="inside-best-seller"> <a href="./show.html"><h3 class="productname" id="${
       result[i]._id
     }">${result[i].productName}</h3></a> 
         <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
           result[i].rating
         } -${result[i].noOfReviews} reviews</p>
         <hr>
         <div class="price-and-discount">
             <h5 class = "current-price">${result[i].price} </h5>
             <p class="earlier-price">₹${result[i].originalPrice}</p>
         </div>
         <p class="save-money">You Save: ₹ ${
           result[i].originalPrice - result[i].price
         } (${result[i].offer}%)</p>
         <button class="button-flash-sale red-button" id="${
           result[i].productName
         }">ADD TO CART</button>
     </div></div>  `;
          biggest_launch.innerHTML += html;
          main.addEventListener("click", (e) => {
            console.log("");
            if (e.target.id == result[i]._id) {
              let datasTrans = result[i]._id;
              console.log(datasTrans);
              // console.log(datas);
              sessionStorage.setItem(
                "transferdata",
                JSON.stringify(datasTrans)
              );
            }
          });
        } else {
          html = ` <div class="main">
          <div class="best-seller-div">
           <div class="wrapper-of-best-seller-images">
           <div class="flash">🗲${result[i].tag}</div>
          <img class="best-seller-image-front" src="${
            result[i].productImages[0]
          }  alt="">
          <img class="best-seller-image-back" src="${
            result[i].productImages[1]
          }   alt="">
     </div><div class="inside-best-seller"> <a href="./show.html"><h3 class="productname" id="${
       result[i]._id
     }">${result[i].productName}</h3></a> 
         <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
           result[i].rating
         } -${result[i].noOfReviews} reviews</p>
         <hr>
         <div class="price-and-discount">
             <h5 class = "current-price">${result[i].price} </h5>
             <p class="earlier-price">₹${result[i].originalPrice}</p>
         </div>
         <p class="save-money">You Save: ₹ ${
           result[i].originalPrice - result[i].price
         } (${result[i].offer}%)</p>
         <button class="button-flash-sale" id="${
           result[i].productName
         }">ADD TO CART</button>
     </div></div>  `;
          biggest_launch.innerHTML += html;
          main.addEventListener("click", (e) => {
            console.log("");
            if (e.target.id == result[i]._id) {
              let datasTrans = result[i]._id;
              console.log(datasTrans);
              // console.log(datas);
              sessionStorage.setItem(
                "transferdata",
                JSON.stringify(datasTrans)
              );
            }
          });
        }
      }
      carosel_left3.addEventListener("click", () => {
        carosel_left3.style.visibility = "hidden";
        carosel_right3.style.visibility = "visible";
        biggest_launch.innerHTML = null;
        for (let i = 0; i < result.length - 4; i++) {
          if (result[i].tag.length > 5) {
            html = ` <div class="main">
            <div class="best-seller-div">
             <div class="wrapper-of-best-seller-images">
             <div class="flash red">${result[i].tag}</div>
            <img class="best-seller-image-front" src="${
              result[i].productImages[0]
            }  alt="">
            <img class="best-seller-image-back" src="${
              result[i].productImages[1]
            }   alt="">
       </div><div class="inside-best-seller"> <a href="./show.html"><h3 class="productname" id="${
         result[i]._id
       }">${result[i].productName}</h3></a> 
           <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
             result[i].rating
           } -${result[i].noOfReviews} reviews</p>
           <hr>
           <div class="price-and-discount">
               <h5 class = "current-price">${result[i].price} </h5>
               <p class="earlier-price">₹${result[i].originalPrice}</p>
           </div>
           <p class="save-money">You Save: ₹ ${
             result[i].originalPrice - result[i].price
           } (${result[i].offer}%)</p>
           <button class="button-flash-sale red-button" id="${
             result[i].productName
           }">ADD TO CART</button>
       </div></div>  `;
            biggest_launch.innerHTML += html;
            main.addEventListener("click", (e) => {
              console.log("");
              if (e.target.id == result[i]._id) {
                let datasTrans = result[i]._id;
                console.log(datasTrans);
                // console.log(datas);
                sessionStorage.setItem(
                  "transferdata",
                  JSON.stringify(datasTrans)
                );
              }
            });
          } else {
            html = ` <div class="main">
            <div class="best-seller-div">
             <div class="wrapper-of-best-seller-images">
             <div class="flash">🗲${result[i].tag}</div>
            <img class="best-seller-image-front" src="${
              result[i].productImages[0]
            }  alt="">
            <img class="best-seller-image-back" src="${
              result[i].productImages[1]
            }   alt="">
       </div><div class="inside-best-seller"> <a href="./show.html"><h3 class="productname" id="${
         result[i]._id
       }">${result[i].productName}</h3></a> 
           <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
             result[i].rating
           } -${result[i].noOfReviews} reviews</p>
           <hr>
           <div class="price-and-discount">
               <h5 class = "current-price">${result[i].price} </h5>
               <p class="earlier-price">₹${result[i].originalPrice}</p>
           </div>
           <p class="save-money">You Save: ₹ ${
             result[i].originalPrice - result[i].price
           } (${result[i].offer}%)</p>
           <button class="button-flash-sale" id="${
             result[i].productName
           }">ADD TO CART</button>
       </div></div>  `;
            biggest_launch.innerHTML += html;
            main.addEventListener("click", (e) => {
              console.log("");
              if (e.target.id == result[i]._id) {
                let datasTrans = result[i]._id;
                console.log(datasTrans);
                // console.log(datas);
                sessionStorage.setItem(
                  "transferdata",
                  JSON.stringify(datasTrans)
                );
              }
            });
          }
        }
      });
      carosel_right3.addEventListener("click", () => {
        carosel_left3.style.visibility = "visible";
        carosel_right3.style.visibility = "hidden";
        biggest_launch.innerHTML = null;
        for (let i = result.length - 4; i < result.length; i++) {
          if (result[i].tag.length > 5) {
            html = ` <div class="main">
            <div class="best-seller-div">
             <div class="wrapper-of-best-seller-images">
             <div class="flash red">${result[i].tag}</div>
            <img class="best-seller-image-front" src="${
              result[i].productImages[0]
            }  alt="">
            <img class="best-seller-image-back" src="${
              result[i].productImages[1]
            }   alt="">
       </div><div class="inside-best-seller"> <a href="./show.html"><h3 class="productname" id="${
         result[i]._id
       }">${result[i].productName}</h3></a> 
           <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
             result[i].rating
           } -${result[i].noOfReviews} reviews</p>
           <hr>
           <div class="price-and-discount">
               <h5 class = "current-price">${result[i].price} </h5>
               <p class="earlier-price">₹${result[i].originalPrice}</p>
           </div>
           <p class="save-money">You Save: ₹ ${
             result[i].originalPrice - result[i].price
           } (${result[i].offer}%)</p>
           <button class="button-flash-sale red-button" id="${
             result[i].productName
           }">ADD TO CART</button>
       </div></div>  `;
            biggest_launch.innerHTML += html;
            main.addEventListener("click", (e) => {
              console.log("");
              if (e.target.id == result[i]._id) {
                let datasTrans = result[i]._id;
                console.log(datasTrans);
                // console.log(datas);
                sessionStorage.setItem(
                  "transferdata",
                  JSON.stringify(datasTrans)
                );
              }
            });
          } else {
            html = ` <div class="main">
            <div class="best-seller-div">
             <div class="wrapper-of-best-seller-images">
             <div class="flash">🗲${result[i].tag}</div>
            <img class="best-seller-image-front" src="${
              result[i].productImages[0]
            }  alt="">
            <img class="best-seller-image-back" src="${
              result[i].productImages[1]
            }   alt="">
       </div><div class="inside-best-seller"> <a href="./show.html"><h3 class="productname" id="${
         result[i]._id
       }">${result[i].productName}</h3></a> 
           <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
             result[i].rating
           } -${result[i].noOfReviews} reviews</p>
           <hr>
           <div class="price-and-discount">
               <h5 class = "current-price">${result[i].price} </h5>
               <p class="earlier-price">₹${result[i].originalPrice}</p>
           </div>
           <p class="save-money">You Save: ₹ ${
             result[i].originalPrice - result[i].price
           } (${result[i].offer}%)</p>
           <button class="button-flash-sale" id="${
             result[i].productName
           }">ADD TO CART</button>
       </div></div>  `;
            biggest_launch.innerHTML += html;
            main.addEventListener("click", (e) => {
              console.log("");
              if (e.target.id == result[i]._id) {
                let datasTrans = result[i]._id;
                console.log(datasTrans);
                // console.log(datas);
                sessionStorage.setItem(
                  "transferdata",
                  JSON.stringify(datasTrans)
                );
              }
            });
          }
        }
      });
    });
  const data4 = { description: "Smart watches" };
  fetch("http://localhost:3333/boat/Products", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data4),
  })
    .then((response) => response.json())
    .then((result) => {
      carosel_left4.style.visibility = "hidden";
      carosel_right4.style.visibility = "visible";
      for (let i = 0; i < result.length - 4; i++) {
        if (result[i].tag.length > 5) {
          html = ` <div class="main">
          <div class="best-seller-div">
           <div class="wrapper-of-best-seller-images">
           <div class="flash red">${result[i].tag}</div>
          <img class="best-seller-image-front" src="${
            result[i].productImages[0]
          }  alt="">
          <img class="best-seller-image-back" src="${
            result[i].productImages[1]
          }   alt="">
     </div><div class="inside-best-seller"> <a href="./show.html"><h3 class="productname" id="${
       result[i]._id
     }">${result[i].productName}</h3></a> 
         <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
           result[i].rating
         } -${result[i].noOfReviews} reviews</p>
         <hr>
         <div class="price-and-discount">
             <h5 class = "current-price">${result[i].price} </h5>
             <p class="earlier-price">₹${result[i].originalPrice}</p>
         </div>
         <p class="save-money">You Save: ₹ ${
           result[i].originalPrice - result[i].price
         } (${result[i].offer}%)</p>
         <button class="button-flash-sale red-button" id="${
           result[i].productName
         }">ADD TO CART</button>
     </div></div>  `;
          smart_watches.innerHTML += html;
          main.addEventListener("click", (e) => {
            console.log("");
            if (e.target.id == result[i]._id) {
              let datasTrans = result[i]._id;
              console.log(datasTrans);
              // console.log(datas);
              sessionStorage.setItem(
                "transferdata",
                JSON.stringify(datasTrans)
              );
            }
          });
        } else {
          html = ` <div class="main">
          <div class="best-seller-div">
           <div class="wrapper-of-best-seller-images">
           <div class="flash">🗲${result[i].tag}</div>
          <img class="best-seller-image-front" src="${
            result[i].productImages[0]
          }  alt="">
          <img class="best-seller-image-back" src="${
            result[i].productImages[1]
          }   alt="">
     </div><div class="inside-best-seller"> <a href="./show.html"><h3 class="productname" id="${
       result[i]._id
     }">${result[i].productName}</h3></a> 
         <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
           result[i].rating
         } -${result[i].noOfReviews} reviews</p>
         <hr>
         <div class="price-and-discount">
             <h5 class = "current-price">${result[i].price} </h5>
             <p class="earlier-price">₹${result[i].originalPrice}</p>
         </div>
         <p class="save-money">You Save: ₹ ${
           result[i].originalPrice - result[i].price
         } (${result[i].offer}%)</p>
         <button class="button-flash-sale" id="${
           result[i].productName
         }">ADD TO CART</button>
     </div></div>  `;
          smart_watches.innerHTML += html;
          main.addEventListener("click", (e) => {
            console.log("");
            if (e.target.id == result[i]._id) {
              let datasTrans = result[i]._id;
              console.log(datasTrans);
              // console.log(datas);
              sessionStorage.setItem(
                "transferdata",
                JSON.stringify(datasTrans)
              );
            }
          });
        }
      }
      carosel_left4.addEventListener("click", () => {
        carosel_left4.style.visibility = "hidden";
        carosel_right4.style.visibility = "visible";
        smart_watches.innerHTML = null;
        for (let i = 0; i < result.length - 4; i++) {
          if (result[i].tag.length > 5) {
            html = ` <div class="main">
            <div class="best-seller-div">
             <div class="wrapper-of-best-seller-images">
             <div class="flash red">${result[i].tag}</div>
            <img class="best-seller-image-front" src="${
              result[i].productImages[0]
            }  alt="">
            <img class="best-seller-image-back" src="${
              result[i].productImages[1]
            }   alt="">
       </div><div class="inside-best-seller"> <a href="./show.html"><h3 class="productname" id="${
         result[i]._id
       }">${result[i].productName}</h3></a> 
           <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
             result[i].rating
           } -${result[i].noOfReviews} reviews</p>
           <hr>
           <div class="price-and-discount">
               <h5 class = "current-price">${result[i].price} </h5>
               <p class="earlier-price">₹${result[i].originalPrice}</p>
           </div>
           <p class="save-money">You Save: ₹ ${
             result[i].originalPrice - result[i].price
           } (${result[i].offer}%)</p>
           <button class="button-flash-sale red-button" id="${
             result[i].productName
           }">ADD TO CART</button>
       </div></div>  `;
            smart_watches.innerHTML += html;
            main.addEventListener("click", (e) => {
              console.log("");
              if (e.target.id == result[i]._id) {
                let datasTrans = result[i]._id;
                console.log(datasTrans);
                // console.log(datas);
                sessionStorage.setItem(
                  "transferdata",
                  JSON.stringify(datasTrans)
                );
              }
            });
          } else {
            html = ` <div class="main">
            <div class="best-seller-div">
             <div class="wrapper-of-best-seller-images">
             <div class="flash">🗲${result[i].tag}</div>
            <img class="best-seller-image-front" src="${
              result[i].productImages[0]
            }  alt="">
            <img class="best-seller-image-back" src="${
              result[i].productImages[1]
            }   alt="">
       </div><div class="inside-best-seller"> <a href="./show.html"><h3 class="productname" id="${
         result[i]._id
       }">${result[i].productName}</h3></a> 
           <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
             result[i].rating
           } -${result[i].noOfReviews} reviews</p>
           <hr>
           <div class="price-and-discount">
               <h5 class = "current-price">${result[i].price} </h5>
               <p class="earlier-price">₹${result[i].originalPrice}</p>
           </div>
           <p class="save-money">You Save: ₹ ${
             result[i].originalPrice - result[i].price
           } (${result[i].offer}%)</p>
           <button class="button-flash-sale" id="${
             result[i].productName
           }">ADD TO CART</button>
       </div></div>  `;
            smart_watches.innerHTML += html;
            main.addEventListener("click", (e) => {
              console.log("");
              if (e.target.id == result[i]._id) {
                let datasTrans = result[i]._id;
                console.log(datasTrans);
                // console.log(datas);
                sessionStorage.setItem(
                  "transferdata",
                  JSON.stringify(datasTrans)
                );
              }
            });
          }
        }
      });
      carosel_right4.addEventListener("click", () => {
        carosel_left4.style.visibility = "visible";
        carosel_right4.style.visibility = "hidden";
        smart_watches.innerHTML = null;
        for (let i = result.length - 4; i < result.length; i++) {
          if (result[i].tag.length > 5) {
            html = ` <div class="main">
            <div class="best-seller-div">
             <div class="wrapper-of-best-seller-images">
             <div class="flash red">${result[i].tag}</div>
            <img class="best-seller-image-front" src="${
              result[i].productImages[0]
            }  alt="">
            <img class="best-seller-image-back" src="${
              result[i].productImages[1]
            }   alt="">
       </div><div class="inside-best-seller"> <a href="./show.html"><h3 class="productname" id="${
         result[i]._id
       }">${result[i].productName}</h3></a> 
           <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
             result[i].rating
           } -${result[i].noOfReviews} reviews</p>
           <hr>
           <div class="price-and-discount">
               <h5 class = "current-price">${result[i].price} </h5>
               <p class="earlier-price">₹${result[i].originalPrice}</p>
           </div>
           <p class="save-money">You Save: ₹ ${
             result[i].originalPrice - result[i].price
           } (${result[i].offer}%)</p>
           <button class="button-flash-sale red-button" id="${
             result[i].productName
           }">ADD TO CART</button>
       </div></div>  `;
            smart_watches.innerHTML += html;
            main.addEventListener("click", (e) => {
              console.log("");
              if (e.target.id == result[i]._id) {
                let datasTrans = result[i]._id;
                console.log(datasTrans);
                // console.log(datas);
                sessionStorage.setItem(
                  "transferdata",
                  JSON.stringify(datasTrans)
                );
              }
            });
          } else {
            html = ` <div class="main">
            <div class="best-seller-div">
             <div class="wrapper-of-best-seller-images">
             <div class="flash">🗲${result[i].tag}</div>
            <img class="best-seller-image-front" src="${
              result[i].productImages[0]
            }  alt="">
            <img class="best-seller-image-back" src="${
              result[i].productImages[1]
            }   alt="">
       </div><div class="inside-best-seller"> <a href="./show.html"><h3 class="productname" id="${
         result[i]._id
       }">${result[i].productName}</h3></a> 
           <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
             result[i].rating
           } -${result[i].noOfReviews} reviews</p>
           <hr>
           <div class="price-and-discount">
               <h5 class = "current-price">${result[i].price} </h5>
               <p class="earlier-price">₹${result[i].originalPrice}</p>
           </div>
           <p class="save-money">You Save: ₹ ${
             result[i].originalPrice - result[i].price
           } (${result[i].offer}%)</p>
           <button class="button-flash-sale" id="${
             result[i].productName
           }">ADD TO CART</button>
       </div></div>  `;
            smart_watches.innerHTML += html;
            main.addEventListener("click", (e) => {
              console.log("");
              if (e.target.id == result[i]._id) {
                let datasTrans = result[i]._id;
                console.log(datasTrans);
                // console.log(datas);
                sessionStorage.setItem(
                  "transferdata",
                  JSON.stringify(datasTrans)
                );
              }
            });
          }
        }
      });
    });
  const data5 = { description: "Trending_Wireless" };
  fetch("http://localhost:3333/boat/Products", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data5),
  })
    .then((response) => response.json())
    .then((result) => {
      // console.log(result);
      // container.innerHTML = null;
      carosel_left5.style.visibility = "hidden";
      carosel_right5.style.visibility = "visible";
      for (let i = 0; i < result.length - 4; i++) {
        if (result[i].tag.length > 5) {
          html = ` <div class="main">
          <div class="best-seller-div">
           <div class="wrapper-of-best-seller-images">
           <div class="flash red">${result[i].tag}</div>
          <img class="best-seller-image-front" src="${
            result[i].productImages[0]
          }  alt="">
          <img class="best-seller-image-back" src="${
            result[i].productImages[1]
          }   alt="">
     </div><div class="inside-best-seller"> <a href="./show.html"><h3 class="productname" id="${
       result[i]._id
     }">${result[i].productName}</h3></a> 
         <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
           result[i].rating
         } -${result[i].noOfReviews} reviews</p>
         <hr>
         <div class="price-and-discount">
             <h5 class = "current-price">${result[i].price} </h5>
             <p class="earlier-price">₹${result[i].originalPrice}</p>
         </div>
         <p class="save-money">You Save: ₹ ${
           result[i].originalPrice - result[i].price
         } (${result[i].offer}%)</p>
         <button class="button-flash-sale red-button" id="${
           result[i].productName
         }">ADD TO CART</button>
     </div></div>  `;
          trending_wireless.innerHTML += html;
          main.addEventListener("click", (e) => {
            console.log("");
            if (e.target.id == result[i]._id) {
              let datasTrans = result[i]._id;
              console.log(datasTrans);
              // console.log(datas);
              sessionStorage.setItem(
                "transferdata",
                JSON.stringify(datasTrans)
              );
            }
          });
        } else {
          html = ` <div class="main">
          <div class="best-seller-div">
           <div class="wrapper-of-best-seller-images">
           <div class="flash">🗲${result[i].tag}</div>
          <img class="best-seller-image-front" src="${
            result[i].productImages[0]
          }  alt="">
          <img class="best-seller-image-back" src="${
            result[i].productImages[1]
          }   alt="">
     </div><div class="inside-best-seller"> <a href="./show.html"><h3 class="productname" id="${
       result[i]._id
     }">${result[i].productName}</h3></a> 
         <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
           result[i].rating
         } -${result[i].noOfReviews} reviews</p>
         <hr>
         <div class="price-and-discount">
             <h5 class = "current-price">${result[i].price} </h5>
             <p class="earlier-price">₹${result[i].originalPrice}</p>
         </div>
         <p class="save-money">You Save: ₹ ${
           result[i].originalPrice - result[i].price
         } (${result[i].offer}%)</p>
         <button class="button-flash-sale" id="${
           result[i].productName
         }">ADD TO CART</button>
     </div></div>  `;
          trending_wireless.innerHTML += html;
          main.addEventListener("click", (e) => {
            console.log("");
            if (e.target.id == result[i]._id) {
              let datasTrans = result[i]._id;
              console.log(datasTrans);
              // console.log(datas);
              sessionStorage.setItem(
                "transferdata",
                JSON.stringify(datasTrans)
              );
            }
          });
        }
      }
      carosel_left5.addEventListener("click", () => {
        carosel_left5.style.visibility = "hidden";
        carosel_right5.style.visibility = "visible";
        trending_wireless.innerHTML = null;
        for (let i = 0; i < result.length - 4; i++) {
          if (result[i].tag.length > 5) {
            html = ` <div class="main">
            <div class="best-seller-div">
             <div class="wrapper-of-best-seller-images">
             <div class="flash red">${result[i].tag}</div>
            <img class="best-seller-image-front" src="${
              result[i].productImages[0]
            }  alt="">
            <img class="best-seller-image-back" src="${
              result[i].productImages[1]
            }   alt="">
       </div><div class="inside-best-seller"> <a href="./show.html"><h3 class="productname" id="${
         result[i]._id
       }">${result[i].productName}</h3></a> 
           <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
             result[i].rating
           } -${result[i].noOfReviews} reviews</p>
           <hr>
           <div class="price-and-discount">
               <h5 class = "current-price">${result[i].price} </h5>
               <p class="earlier-price">₹${result[i].originalPrice}</p>
           </div>
           <p class="save-money">You Save: ₹ ${
             result[i].originalPrice - result[i].price
           } (${result[i].offer}%)</p>
           <button class="button-flash-sale red-button" id="${
             result[i].productName
           }">ADD TO CART</button>
       </div></div>  `;
            trending_wireless.innerHTML += html;
            main.addEventListener("click", (e) => {
              console.log("");
              if (e.target.id == result[i]._id) {
                let datasTrans = result[i]._id;
                console.log(datasTrans);
                // console.log(datas);
                sessionStorage.setItem(
                  "transferdata",
                  JSON.stringify(datasTrans)
                );
              }
            });
          } else {
            html = ` <div class="main">
            <div class="best-seller-div">
             <div class="wrapper-of-best-seller-images">
             <div class="flash">🗲${result[i].tag}</div>
            <img class="best-seller-image-front" src="${
              result[i].productImages[0]
            }  alt="">
            <img class="best-seller-image-back" src="${
              result[i].productImages[1]
            }   alt="">
       </div><div class="inside-best-seller"> <a href="./show.html"><h3 class="productname" id="${
         result[i]._id
       }">${result[i].productName}</h3></a> 
           <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
             result[i].rating
           } -${result[i].noOfReviews} reviews</p>
           <hr>
           <div class="price-and-discount">
               <h5 class = "current-price">${result[i].price} </h5>
               <p class="earlier-price">₹${result[i].originalPrice}</p>
           </div>
           <p class="save-money">You Save: ₹ ${
             result[i].originalPrice - result[i].price
           } (${result[i].offer}%)</p>
           <button class="button-flash-sale" id="${
             result[i].productName
           }">ADD TO CART</button>
       </div></div>  `;
            trending_wireless.innerHTML += html;
            main.addEventListener("click", (e) => {
              console.log("");
              if (e.target.id == result[i]._id) {
                let datasTrans = result[i]._id;
                console.log(datasTrans);
                // console.log(datas);
                sessionStorage.setItem(
                  "transferdata",
                  JSON.stringify(datasTrans)
                );
              }
            });
          }
        }
      });
      carosel_right5.addEventListener("click", () => {
        carosel_left5.style.visibility = "visible";
        carosel_right5.style.visibility = "hidden";
        trending_wireless.innerHTML = null;
        for (let i = result.length - 4; i < result.length; i++) {
          if (result[i].tag.length > 5) {
            html = ` <div class="main">
            <div class="best-seller-div">
             <div class="wrapper-of-best-seller-images">
             <div class="flash red">${result[i].tag}</div>
            <img class="best-seller-image-front" src="${
              result[i].productImages[0]
            }  alt="">
            <img class="best-seller-image-back" src="${
              result[i].productImages[1]
            }   alt="">
       </div><div class="inside-best-seller"> <a href="./show.html"><h3 class="productname" id="${
         result[i]._id
       }">${result[i].productName}</h3></a> 
           <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
             result[i].rating
           } -${result[i].noOfReviews} reviews</p>
           <hr>
           <div class="price-and-discount">
               <h5 class = "current-price">${result[i].price} </h5>
               <p class="earlier-price">₹${result[i].originalPrice}</p>
           </div>
           <p class="save-money">You Save: ₹ ${
             result[i].originalPrice - result[i].price
           } (${result[i].offer}%)</p>
           <button class="button-flash-sale red-button" id="${
             result[i].productName
           }">ADD TO CART</button>
       </div></div>  `;
            trending_wireless.innerHTML += html;
            main.addEventListener("click", (e) => {
              console.log("");
              if (e.target.id == result[i]._id) {
                let datasTrans = result[i]._id;
                console.log(datasTrans);
                // console.log(datas);
                sessionStorage.setItem(
                  "transferdata",
                  JSON.stringify(datasTrans)
                );
              }
            });
          } else {
            html = ` <div class="main">
            <div class="best-seller-div">
             <div class="wrapper-of-best-seller-images">
             <div class="flash">🗲${result[i].tag}</div>
            <img class="best-seller-image-front" src="${
              result[i].productImages[0]
            }  alt="">
            <img class="best-seller-image-back" src="${
              result[i].productImages[1]
            }   alt="">
       </div><div class="inside-best-seller"> <a href="./show.html"><h3 class="productname" id="${
         result[i]._id
       }">${result[i].productName}</h3></a> 
           <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
             result[i].rating
           } -${result[i].noOfReviews} reviews</p>
           <hr>
           <div class="price-and-discount">
               <h5 class = "current-price">${result[i].price} </h5>
               <p class="earlier-price">₹${result[i].originalPrice}</p>
           </div>
           <p class="save-money">You Save: ₹ ${
             result[i].originalPrice - result[i].price
           } (${result[i].offer}%)</p>
           <button class="button-flash-sale" id="${
             result[i].productName
           }">ADD TO CART</button>
       </div></div>  `;
            trending_wireless.innerHTML += html;
            main.addEventListener("click", (e) => {
              console.log("");
              if (e.target.id == result[i]._id) {
                let datasTrans = result[i]._id;
                console.log(datasTrans);
                // console.log(datas);
                sessionStorage.setItem(
                  "transferdata",
                  JSON.stringify(datasTrans)
                );
              }
            });
          }
        }
      });
    });
  const data6 = { description: "Top Earbuds" };
  fetch("http://localhost:3333/boat/Products", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data6),
  })
    .then((response) => response.json())
    .then((result) => {
      // console.log(result);
      // container.innerHTML = null;
      carosel_left6.style.visibility = "hidden";
      carosel_right6.style.visibility = "visible";
      for (let i = 0; i < result.length - 4; i++) {
        if (result[i].tag.length > 5) {
          html = ` <div class="main">
          <div class="best-seller-div">
           <div class="wrapper-of-best-seller-images">
           <div class="flash red">${result[i].tag}</div>
          <img class="best-seller-image-front" src="${
            result[i].productImages[0]
          }  alt="">
          <img class="best-seller-image-back" src="${
            result[i].productImages[1]
          }   alt="">
     </div><div class="inside-best-seller"> <a href="./show.html"><h3 class="productname" id="${
       result[i]._id
     }">${result[i].productName}</h3></a> 
         <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
           result[i].rating
         } -${result[i].noOfReviews} reviews</p>
         <hr>
         <div class="price-and-discount">
             <h5 class = "current-price">${result[i].price} </h5>
             <p class="earlier-price">₹${result[i].originalPrice}</p>
         </div>
         <p class="save-money">You Save: ₹ ${
           result[i].originalPrice - result[i].price
         } (${result[i].offer}%)</p>
         <button class="button-flash-sale red-button" id="${
           result[i].productName
         }">ADD TO CART</button>
     </div></div>  `;
          top_earbuds.innerHTML += html;
          main.addEventListener("click", (e) => {
            console.log("");
            if (e.target.id == result[i]._id) {
              let datasTrans = result[i]._id;
              console.log(datasTrans);
              // console.log(datas);
              sessionStorage.setItem(
                "transferdata",
                JSON.stringify(datasTrans)
              );
            }
          });
        } else {
          html = ` <div class="main">
          <div class="best-seller-div">
           <div class="wrapper-of-best-seller-images">
           <div class="flash">🗲${result[i].tag}</div>
          <img class="best-seller-image-front" src="${
            result[i].productImages[0]
          }  alt="">
          <img class="best-seller-image-back" src="${
            result[i].productImages[1]
          }   alt="">
     </div><div class="inside-best-seller"> <a href="./show.html"><h3 class="productname" id="${
       result[i]._id
     }">${result[i].productName}</h3></a> 
         <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
           result[i].rating
         } -${result[i].noOfReviews} reviews</p>
         <hr>
         <div class="price-and-discount">
             <h5 class = "current-price">${result[i].price} </h5>
             <p class="earlier-price">₹${result[i].originalPrice}</p>
         </div>
         <p class="save-money">You Save: ₹ ${
           result[i].originalPrice - result[i].price
         } (${result[i].offer}%)</p>
         <button class="button-flash-sale" id="${
           result[i].productName
         }">ADD TO CART</button>
     </div></div>  `;
          top_earbuds.innerHTML += html;
          main.addEventListener("click", (e) => {
            console.log("");
            if (e.target.id == result[i]._id) {
              let datasTrans = result[i]._id;
              console.log(datasTrans);
              // console.log(datas);
              sessionStorage.setItem(
                "transferdata",
                JSON.stringify(datasTrans)
              );
            }
          });
        }
      }
      carosel_left6.addEventListener("click", () => {
        carosel_left6.style.visibility = "hidden";
        carosel_right6.style.visibility = "visible";
        top_earbuds.innerHTML = null;
        for (let i = 0; i < result.length - 4; i++) {
          if (result[i].tag.length > 5) {
            html = ` <div class="main">
            <div class="best-seller-div">
             <div class="wrapper-of-best-seller-images">
             <div class="flash red">${result[i].tag}</div>
            <img class="best-seller-image-front" src="${
              result[i].productImages[0]
            }  alt="">
            <img class="best-seller-image-back" src="${
              result[i].productImages[1]
            }   alt="">
       </div><div class="inside-best-seller"> <a href="./show.html"><h3 class="productname" id="${
         result[i]._id
       }">${result[i].productName}</h3></a> 
           <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
             result[i].rating
           } -${result[i].noOfReviews} reviews</p>
           <hr>
           <div class="price-and-discount">
               <h5 class = "current-price">${result[i].price} </h5>
               <p class="earlier-price">₹${result[i].originalPrice}</p>
           </div>
           <p class="save-money">You Save: ₹ ${
             result[i].originalPrice - result[i].price
           } (${result[i].offer}%)</p>
           <button class="button-flash-sale red-button" id="${
             result[i].productName
           }">ADD TO CART</button>
       </div></div>  `;
            top_earbuds.innerHTML += html;
            main.addEventListener("click", (e) => {
              console.log("");
              if (e.target.id == result[i]._id) {
                let datasTrans = result[i]._id;
                console.log(datasTrans);
                // console.log(datas);
                sessionStorage.setItem(
                  "transferdata",
                  JSON.stringify(datasTrans)
                );
              }
            });
          } else {
            html = ` <div class="main">
            <div class="best-seller-div">
             <div class="wrapper-of-best-seller-images">
             <div class="flash">🗲${result[i].tag}</div>
            <img class="best-seller-image-front" src="${
              result[i].productImages[0]
            }  alt="">
            <img class="best-seller-image-back" src="${
              result[i].productImages[1]
            }   alt="">
       </div><div class="inside-best-seller"> <a href="./show.html"><h3 class="productname" id="${
         result[i]._id
       }">${result[i].productName}</h3></a> 
           <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
             result[i].rating
           } -${result[i].noOfReviews} reviews</p>
           <hr>
           <div class="price-and-discount">
               <h5 class = "current-price">${result[i].price} </h5>
               <p class="earlier-price">₹${result[i].originalPrice}</p>
           </div>
           <p class="save-money">You Save: ₹ ${
             result[i].originalPrice - result[i].price
           } (${result[i].offer}%)</p>
           <button class="button-flash-sale" id="${
             result[i].productName
           }">ADD TO CART</button>
       </div></div>  `;
            top_earbuds.innerHTML += html;
            main.addEventListener("click", (e) => {
              console.log("");
              if (e.target.id == result[i]._id) {
                let datasTrans = result[i]._id;
                console.log(datasTrans);
                // console.log(datas);
                sessionStorage.setItem(
                  "transferdata",
                  JSON.stringify(datasTrans)
                );
              }
            });
          }
        }
      });
      carosel_right6.addEventListener("click", () => {
        carosel_left6.style.visibility = "visible";
        carosel_right6.style.visibility = "hidden";
        top_earbuds.innerHTML = null;
        for (let i = result.length - 4; i < result.length; i++) {
          if (result[i].tag.length > 5) {
            html = ` <div class="main">
            <div class="best-seller-div">
             <div class="wrapper-of-best-seller-images">
             <div class="flash red">${result[i].tag}</div>
            <img class="best-seller-image-front" src="${
              result[i].productImages[0]
            }  alt="">
            <img class="best-seller-image-back" src="${
              result[i].productImages[1]
            }   alt="">
       </div><div class="inside-best-seller"> <a href="./show.html"><h3 class="productname" id="${
         result[i]._id
       }">${result[i].productName}</h3></a> 
           <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
             result[i].rating
           } -${result[i].noOfReviews} reviews</p>
           <hr>
           <div class="price-and-discount">
               <h5 class = "current-price">${result[i].price} </h5>
               <p class="earlier-price">₹${result[i].originalPrice}</p>
           </div>
           <p class="save-money">You Save: ₹ ${
             result[i].originalPrice - result[i].price
           } (${result[i].offer}%)</p>
           <button class="button-flash-sale red-button" id="${
             result[i].productName
           }">ADD TO CART</button>
       </div></div>  `;
            top_earbuds.innerHTML += html;
            main.addEventListener("click", (e) => {
              console.log("");
              if (e.target.id == result[i]._id) {
                let datasTrans = result[i]._id;
                console.log(datasTrans);
                // console.log(datas);
                sessionStorage.setItem(
                  "transferdata",
                  JSON.stringify(datasTrans)
                );
              }
            });
          } else {
            html = ` <div class="main">
            <div class="best-seller-div">
             <div class="wrapper-of-best-seller-images">
             <div class="flash">🗲${result[i].tag}</div>
            <img class="best-seller-image-front" src="${
              result[i].productImages[0]
            }  alt="">
            <img class="best-seller-image-back" src="${
              result[i].productImages[1]
            }   alt="">
       </div><div class="inside-best-seller"> <a href="./show.html"><h3 class="productname" id="${
         result[i]._id
       }">${result[i].productName}</h3></a> 
           <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
             result[i].rating
           } -${result[i].noOfReviews} reviews</p>
           <hr>
           <div class="price-and-discount">
               <h5 class = "current-price">${result[i].price} </h5>
               <p class="earlier-price">₹${result[i].originalPrice}</p>
           </div>
           <p class="save-money">You Save: ₹ ${
             result[i].originalPrice - result[i].price
           } (${result[i].offer}%)</p>
           <button class="button-flash-sale" id="${
             result[i].productName
           }">ADD TO CART</button>
       </div></div>  `;
            top_earbuds.innerHTML += html;
            main.addEventListener("click", (e) => {
              console.log("");
              if (e.target.id == result[i]._id) {
                let datasTrans = result[i]._id;
                console.log(datasTrans);
                // console.log(datas);
                sessionStorage.setItem(
                  "transferdata",
                  JSON.stringify(datasTrans)
                );
              }
            });
          }
        }
      });
    });
  const data7 = { description: "trending_wired" };
  fetch("http://localhost:3333/boat/Products", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data7),
  })
    .then((response) => response.json())
    .then((result) => {
      // console.log(result);
      // container.innerHTML = null;
      carosel_left7.style.visibility = "hidden";
      carosel_right7.style.visibility = "visible";
      for (let i = 0; i < result.length - 5; i++) {
        if (result[i].tag.length > 5) {
          html = ` <div class="main">
          <div class="best-seller-div">
           <div class="wrapper-of-best-seller-images">
           <div class="flash red">${result[i].tag}</div>
          <img class="best-seller-image-front" src="${
            result[i].productImages[0]
          }  alt="">
          <img class="best-seller-image-back" src="${
            result[i].productImages[1]
          }   alt="">
     </div><div class="inside-best-seller"> <a href="./show.html"><h3 class="productname" id="${
       result[i]._id
     }">${result[i].productName}</h3></a> 
         <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
           result[i].rating
         } -${result[i].noOfReviews} reviews</p>
         <hr>
         <div class="price-and-discount">
             <h5 class = "current-price">${result[i].price} </h5>
             <p class="earlier-price">₹${result[i].originalPrice}</p>
         </div>
         <p class="save-money">You Save: ₹ ${
           result[i].originalPrice - result[i].price
         } (${result[i].offer}%)</p>
         <button class="button-flash-sale red-button" id="${
           result[i].productName
         }">ADD TO CART</button>
     </div></div>  `;
          trending_wired.innerHTML += html;
          main.addEventListener("click", (e) => {
            console.log("");
            if (e.target.id == result[i]._id) {
              let datasTrans = result[i]._id;
              console.log(datasTrans);
              // console.log(datas);
              sessionStorage.setItem(
                "transferdata",
                JSON.stringify(datasTrans)
              );
            }
          });
        } else {
          html = ` <div class="main">
          <div class="best-seller-div">
           <div class="wrapper-of-best-seller-images">
           <div class="flash">🗲${result[i].tag}</div>
          <img class="best-seller-image-front" src="${
            result[i].productImages[0]
          }  alt="">
          <img class="best-seller-image-back" src="${
            result[i].productImages[1]
          }   alt="">
     </div><div class="inside-best-seller"> <a href="./show.html"><h3 class="productname" id="${
       result[i]._id
     }">${result[i].productName}</h3></a> 
         <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
           result[i].rating
         } -${result[i].noOfReviews} reviews</p>
         <hr>
         <div class="price-and-discount">
             <h5 class = "current-price">${result[i].price} </h5>
             <p class="earlier-price">₹${result[i].originalPrice}</p>
         </div>
         <p class="save-money">You Save: ₹ ${
           result[i].originalPrice - result[i].price
         } (${result[i].offer}%)</p>
         <button class="button-flash-sale" id="${
           result[i].productName
         }">ADD TO CART</button>
     </div></div>  `;
          trending_wired.innerHTML += html;
          main.addEventListener("click", (e) => {
            console.log("");
            if (e.target.id == result[i]._id) {
              let datasTrans = result[i]._id;
              console.log(datasTrans);
              // console.log(datas);
              sessionStorage.setItem(
                "transferdata",
                JSON.stringify(datasTrans)
              );
            }
          });
        }
      }
      carosel_left7.addEventListener("click", () => {
        carosel_left7.style.visibility = "hidden";
        carosel_right7.style.visibility = "visible";
        trending_wired.innerHTML = null;
        for (let i = 0; i < result.length - 5; i++) {
          if (result[i].tag.length > 5) {
            html = ` <div class="main">
            <div class="best-seller-div">
             <div class="wrapper-of-best-seller-images">
             <div class="flash red">${result[i].tag}</div>
            <img class="best-seller-image-front" src="${
              result[i].productImages[0]
            }  alt="">
            <img class="best-seller-image-back" src="${
              result[i].productImages[1]
            }   alt="">
       </div><div class="inside-best-seller"> <a href="./show.html"><h3 class="productname" id="${
         result[i]._id
       }">${result[i].productName}</h3></a> 
           <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
             result[i].rating
           } -${result[i].noOfReviews} reviews</p>
           <hr>
           <div class="price-and-discount">
               <h5 class = "current-price">${result[i].price} </h5>
               <p class="earlier-price">₹${result[i].originalPrice}</p>
           </div>
           <p class="save-money">You Save: ₹ ${
             result[i].originalPrice - result[i].price
           } (${result[i].offer}%)</p>
           <button class="button-flash-sale red-button" id="${
             result[i].productName
           }">ADD TO CART</button>
       </div></div>  `;
            trending_wired.innerHTML += html;
            main.addEventListener("click", (e) => {
              console.log("");
              if (e.target.id == result[i]._id) {
                let datasTrans = result[i]._id;
                console.log(datasTrans);
                // console.log(datas);
                sessionStorage.setItem(
                  "transferdata",
                  JSON.stringify(datasTrans)
                );
              }
            });
          } else {
            html = ` <div class="main">
            <div class="best-seller-div">
             <div class="wrapper-of-best-seller-images">
             <div class="flash">🗲${result[i].tag}</div>
            <img class="best-seller-image-front" src="${
              result[i].productImages[0]
            }  alt="">
            <img class="best-seller-image-back" src="${
              result[i].productImages[1]
            }   alt="">
       </div><div class="inside-best-seller"> <a href="./show.html"><h3 class="productname" id="${
         result[i]._id
       }">${result[i].productName}</h3></a> 
           <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
             result[i].rating
           } -${result[i].noOfReviews} reviews</p>
           <hr>
           <div class="price-and-discount">
               <h5 class = "current-price">${result[i].price} </h5>
               <p class="earlier-price">₹${result[i].originalPrice}</p>
           </div>
           <p class="save-money">You Save: ₹ ${
             result[i].originalPrice - result[i].price
           } (${result[i].offer}%)</p>
           <button class="button-flash-sale" id="${
             result[i].productName
           }">ADD TO CART</button>
       </div></div>  `;
            trending_wired.innerHTML += html;
            main.addEventListener("click", (e) => {
              console.log("");
              if (e.target.id == result[i]._id) {
                let datasTrans = result[i]._id;
                console.log(datasTrans);
                // console.log(datas);
                sessionStorage.setItem(
                  "transferdata",
                  JSON.stringify(datasTrans)
                );
              }
            });
          }
        }
      });
      carosel_right7.addEventListener("click", () => {
        carosel_left7.style.visibility = "visible";
        carosel_right7.style.visibility = "hidden";
        trending_wired.innerHTML = null;
        for (let i = result.length - 5; i < result.length - 1; i++) {
          if (result[i].tag.length > 5) {
            html = ` <div class="main">
            <div class="best-seller-div">
             <div class="wrapper-of-best-seller-images">
             <div class="flash red">${result[i].tag}</div>
            <img class="best-seller-image-front" src="${
              result[i].productImages[0]
            }  alt="">
            <img class="best-seller-image-back" src="${
              result[i].productImages[1]
            }   alt="">
       </div><div class="inside-best-seller"> <a href="./show.html"><h3 class="productname" id="${
         result[i]._id
       }">${result[i].productName}</h3></a> 
           <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
             result[i].rating
           } -${result[i].noOfReviews} reviews</p>
           <hr>
           <div class="price-and-discount">
               <h5 class = "current-price">${result[i].price} </h5>
               <p class="earlier-price">₹${result[i].originalPrice}</p>
           </div>
           <p class="save-money">You Save: ₹ ${
             result[i].originalPrice - result[i].price
           } (${result[i].offer}%)</p>
           <button class="button-flash-sale red-button" id="${
             result[i].productName
           }">ADD TO CART</button>
       </div></div>  `;
            trending_wired.innerHTML += html;
            main.addEventListener("click", (e) => {
              console.log("");
              if (e.target.id == result[i]._id) {
                let datasTrans = result[i]._id;
                console.log(datasTrans);
                // console.log(datas);
                sessionStorage.setItem(
                  "transferdata",
                  JSON.stringify(datasTrans)
                );
              }
            });
          } else {
            html = ` <div class="main">
            <div class="best-seller-div">
             <div class="wrapper-of-best-seller-images">
             <div class="flash">🗲${result[i].tag}</div>
            <img class="best-seller-image-front" src="${
              result[i].productImages[0]
            }  alt="">
            <img class="best-seller-image-back" src="${
              result[i].productImages[1]
            }   alt="">
       </div><div class="inside-best-seller"> <a href="./show.html"><h3 class="productname" id="${
         result[i]._id
       }">${result[i].productName}</h3></a> 
           <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
             result[i].rating
           } -${result[i].noOfReviews} reviews</p>
           <hr>
           <div class="price-and-discount">
               <h5 class = "current-price">${result[i].price} </h5>
               <p class="earlier-price">₹${result[i].originalPrice}</p>
           </div>
           <p class="save-money">You Save: ₹ ${
             result[i].originalPrice - result[i].price
           } (${result[i].offer}%)</p>
           <button class="button-flash-sale" id="${
             result[i].productName
           }">ADD TO CART</button>
       </div></div>  `;
            trending_wired.innerHTML += html;
            main.addEventListener("click", (e) => {
              console.log("");
              if (e.target.id == result[i]._id) {
                let datasTrans = result[i]._id;
                console.log(datasTrans);
                // console.log(datas);
                sessionStorage.setItem(
                  "transferdata",
                  JSON.stringify(datasTrans)
                );
              }
            });
          }
        }
      });
    });
  const data8 = { description: "trending_ANC" };
  fetch("http://localhost:3333/boat/Products", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data8),
  })
    .then((response) => response.json())
    .then((result) => {
      // console.log(result);
      // container.innerHTML = null;
      carosel_left8.style.visibility = "hidden";
      carosel_right8.style.visibility = "visible";
      for (let i = 0; i < result.length - 2; i++) {
        if (result[i].tag.length > 5) {
          html = ` <div class="main">
          <div class="best-seller-div">
           <div class="wrapper-of-best-seller-images">
           <div class="flash red">${result[i].tag}</div>
          <img class="best-seller-image-front" src="${
            result[i].productImages[0]
          }  alt="">
          <img class="best-seller-image-back" src="${
            result[i].productImages[1]
          }   alt="">
     </div><div class="inside-best-seller"> <a href="./show.html"><h3 class="productname" id="${
       result[i]._id
     }">${result[i].productName}</h3></a> 
         <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
           result[i].rating
         } -${result[i].noOfReviews} reviews</p>
         <hr>
         <div class="price-and-discount">
             <h5 class = "current-price">${result[i].price} </h5>
             <p class="earlier-price">₹${result[i].originalPrice}</p>
         </div>
         <p class="save-money">You Save: ₹ ${
           result[i].originalPrice - result[i].price
         } (${result[i].offer}%)</p>
         <button class="button-flash-sale red-button" id="${
           result[i].productName
         }">ADD TO CART</button>
     </div></div>  `;
          trending_anc.innerHTML += html;
          main.addEventListener("click", (e) => {
            console.log("");
            if (e.target.id == result[i]._id) {
              let datasTrans = result[i]._id;
              console.log(datasTrans);
              // console.log(datas);
              sessionStorage.setItem(
                "transferdata",
                JSON.stringify(datasTrans)
              );
            }
          });
        } else {
          html = ` <div class="main">
          <div class="best-seller-div">
           <div class="wrapper-of-best-seller-images">
           <div class="flash">🗲${result[i].tag}</div>
          <img class="best-seller-image-front" src="${
            result[i].productImages[0]
          }  alt="">
          <img class="best-seller-image-back" src="${
            result[i].productImages[1]
          }   alt="">
     </div><div class="inside-best-seller"> <a href="./show.html"><h3 class="productname" id="${
       result[i]._id
     }">${result[i].productName}</h3></a> 
         <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
           result[i].rating
         } -${result[i].noOfReviews} reviews</p>
         <hr>
         <div class="price-and-discount">
             <h5 class = "current-price">${result[i].price} </h5>
             <p class="earlier-price">₹${result[i].originalPrice}</p>
         </div>
         <p class="save-money">You Save: ₹ ${
           result[i].originalPrice - result[i].price
         } (${result[i].offer}%)</p>
         <button class="button-flash-sale" id="${
           result[i].productName
         }">ADD TO CART</button>
     </div></div>  `;
          trending_anc.innerHTML += html;
          main.addEventListener("click", (e) => {
            console.log("");
            if (e.target.id == result[i]._id) {
              let datasTrans = result[i]._id;
              console.log(datasTrans);
              // console.log(datas);
              sessionStorage.setItem(
                "transferdata",
                JSON.stringify(datasTrans)
              );
            }
          });
        }
      }
      carosel_left8.addEventListener("click", () => {
        carosel_left8.style.visibility = "hidden";
        carosel_right8.style.visibility = "visible";
        trending_anc.innerHTML = null;
        for (let i = 0; i < result.length - 2; i++) {
          if (result[i].tag.length > 5) {
            html = ` <div class="main">
            <div class="best-seller-div">
             <div class="wrapper-of-best-seller-images">
             <div class="flash red">${result[i].tag}</div>
            <img class="best-seller-image-front" src="${
              result[i].productImages[0]
            }  alt="">
            <img class="best-seller-image-back" src="${
              result[i].productImages[1]
            }   alt="">
       </div><div class="inside-best-seller"> <a href="./show.html"><h3 class="productname" id="${
         result[i]._id
       }">${result[i].productName}</h3></a> 
           <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
             result[i].rating
           } -${result[i].noOfReviews} reviews</p>
           <hr>
           <div class="price-and-discount">
               <h5 class = "current-price">${result[i].price} </h5>
               <p class="earlier-price">₹${result[i].originalPrice}</p>
           </div>
           <p class="save-money">You Save: ₹ ${
             result[i].originalPrice - result[i].price
           } (${result[i].offer}%)</p>
           <button class="button-flash-sale red-button" id="${
             result[i].productName
           }">ADD TO CART</button>
       </div></div>  `;
            trending_anc.innerHTML += html;
            main.addEventListener("click", (e) => {
              console.log("");
              if (e.target.id == result[i]._id) {
                let datasTrans = result[i]._id;
                console.log(datasTrans);
                // console.log(datas);
                sessionStorage.setItem(
                  "transferdata",
                  JSON.stringify(datasTrans)
                );
              }
            });
          } else {
            html = ` <div class="main">
            <div class="best-seller-div">
             <div class="wrapper-of-best-seller-images">
             <div class="flash">🗲${result[i].tag}</div>
            <img class="best-seller-image-front" src="${
              result[i].productImages[0]
            }  alt="">
            <img class="best-seller-image-back" src="${
              result[i].productImages[1]
            }   alt="">
       </div><div class="inside-best-seller"> <a href="./show.html"><h3 class="productname" id="${
         result[i]._id
       }">${result[i].productName}</h3></a> 
           <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
             result[i].rating
           } -${result[i].noOfReviews} reviews</p>
           <hr>
           <div class="price-and-discount">
               <h5 class = "current-price">${result[i].price} </h5>
               <p class="earlier-price">₹${result[i].originalPrice}</p>
           </div>
           <p class="save-money">You Save: ₹ ${
             result[i].originalPrice - result[i].price
           } (${result[i].offer}%)</p>
           <button class="button-flash-sale" id="${
             result[i].productName
           }">ADD TO CART</button>
       </div></div>  `;
            trending_anc.innerHTML += html;
            main.addEventListener("click", (e) => {
              console.log("");
              if (e.target.id == result[i]._id) {
                let datasTrans = result[i]._id;
                console.log(datasTrans);
                // console.log(datas);
                sessionStorage.setItem(
                  "transferdata",
                  JSON.stringify(datasTrans)
                );
              }
            });
          }
        }
      });
      carosel_right8.addEventListener("click", () => {
        carosel_left8.style.visibility = "visible";
        carosel_right8.style.visibility = "hidden";
        trending_anc.innerHTML = null;
        for (let i = result.length - 4; i < result.length; i++) {
          if (result[i].tag.length > 5) {
            html = ` <div class="main">
            <div class="best-seller-div">
             <div class="wrapper-of-best-seller-images">
             <div class="flash red">${result[i].tag}</div>
            <img class="best-seller-image-front" src="${
              result[i].productImages[0]
            }  alt="">
            <img class="best-seller-image-back" src="${
              result[i].productImages[1]
            }   alt="">
       </div><div class="inside-best-seller"> <a href="./show.html"><h3 class="productname" id="${
         result[i]._id
       }">${result[i].productName}</h3></a> 
           <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
             result[i].rating
           } -${result[i].noOfReviews} reviews</p>
           <hr>
           <div class="price-and-discount">
               <h5 class = "current-price">${result[i].price} </h5>
               <p class="earlier-price">₹${result[i].originalPrice}</p>
           </div>
           <p class="save-money">You Save: ₹ ${
             result[i].originalPrice - result[i].price
           } (${result[i].offer}%)</p>
           <button class="button-flash-sale red-button" id="${
             result[i].productName
           }">ADD TO CART</button>
       </div></div>  `;
            trending_anc.innerHTML += html;
            main.addEventListener("click", (e) => {
              console.log("");
              if (e.target.id == result[i]._id) {
                let datasTrans = result[i]._id;
                console.log(datasTrans);
                // console.log(datas);
                sessionStorage.setItem(
                  "transferdata",
                  JSON.stringify(datasTrans)
                );
              }
            });
          } else {
            html = ` <div class="main">
            <div class="best-seller-div">
             <div class="wrapper-of-best-seller-images">
             <div class="flash">🗲${result[i].tag}</div>
            <img class="best-seller-image-front" src="${
              result[i].productImages[0]
            }  alt="">
            <img class="best-seller-image-back" src="${
              result[i].productImages[1]
            }   alt="">
       </div><div class="inside-best-seller"> <a href="./show.html"><h3 class="productname" id="${
         result[i]._id
       }">${result[i].productName}</h3></a> 
           <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
             result[i].rating
           } -${result[i].noOfReviews} reviews</p>
           <hr>
           <div class="price-and-discount">
               <h5 class = "current-price">${result[i].price} </h5>
               <p class="earlier-price">₹${result[i].originalPrice}</p>
           </div>
           <p class="save-money">You Save: ₹ ${
             result[i].originalPrice - result[i].price
           } (${result[i].offer}%)</p>
           <button class="button-flash-sale" id="${
             result[i].productName
           }">ADD TO CART</button>
       </div></div>  `;
            trending_anc.innerHTML += html;
            main.addEventListener("click", (e) => {
              console.log("");
              if (e.target.id == result[i]._id) {
                let datasTrans = result[i]._id;
                console.log(datasTrans);
                // console.log(datas);
                sessionStorage.setItem(
                  "transferdata",
                  JSON.stringify(datasTrans)
                );
              }
            });
          }
        }
      });
    });
  const data9 = { description: "boAt | Superheroes" };
  fetch("http://localhost:3333/boat/Products", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data9),
  })
    .then((response) => response.json())
    .then((result) => {
      // console.log(result);
      // container.innerHTML = null;
      carosel_left9.style.visibility = "hidden";
      carosel_right9.style.visibility = "visible";
      for (let i = 0; i < result.length - 4; i++) {
        if (result[i].tag.length > 5) {
          html = ` <div class="main">
          <div class="best-seller-div">
           <div class="wrapper-of-best-seller-images">
           <div class="flash red">${result[i].tag}</div>
          <img class="best-seller-image-front" src="${
            result[i].productImages[0]
          }  alt="">
          <img class="best-seller-image-back" src="${
            result[i].productImages[1]
          }   alt="">
     </div><div class="inside-best-seller"> <a href="./show.html"><h3 class="productname" id="${
       result[i]._id
     }">${result[i].productName}</h3></a> 
         <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
           result[i].rating
         } -${result[i].noOfReviews} reviews</p>
         <hr>
         <div class="price-and-discount">
             <h5 class = "current-price">${result[i].price} </h5>
             <p class="earlier-price">₹${result[i].originalPrice}</p>
         </div>
         <p class="save-money">You Save: ₹ ${
           result[i].originalPrice - result[i].price
         } (${result[i].offer}%)</p>
         <button class="button-flash-sale red-button" id="${
           result[i].productName
         }">ADD TO CART</button>
     </div></div>  `;
          dc.innerHTML += html;
          main.addEventListener("click", (e) => {
            console.log("");
            if (e.target.id == result[i]._id) {
              let datasTrans = result[i]._id;
              console.log(datasTrans);
              // console.log(datas);
              sessionStorage.setItem(
                "transferdata",
                JSON.stringify(datasTrans)
              );
            }
          });
        } else {
          html = ` <div class="main">
          <div class="best-seller-div">
           <div class="wrapper-of-best-seller-images">
           <div class="flash">🗲${result[i].tag}</div>
          <img class="best-seller-image-front" src="${
            result[i].productImages[0]
          }  alt="">
          <img class="best-seller-image-back" src="${
            result[i].productImages[1]
          }   alt="">
     </div><div class="inside-best-seller"> <a href="./show.html"><h3 class="productname" id="${
       result[i]._id
     }">${result[i].productName}</h3></a> 
         <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
           result[i].rating
         } -${result[i].noOfReviews} reviews</p>
         <hr>
         <div class="price-and-discount">
             <h5 class = "current-price">${result[i].price} </h5>
             <p class="earlier-price">₹${result[i].originalPrice}</p>
         </div>
         <p class="save-money">You Save: ₹ ${
           result[i].originalPrice - result[i].price
         } (${result[i].offer}%)</p>
         <button class="button-flash-sale" id="${
           result[i].productName
         }">ADD TO CART</button>
     </div></div>  `;
          dc.innerHTML += html;
          main.addEventListener("click", (e) => {
            console.log("");
            if (e.target.id == result[i]._id) {
              let datasTrans = result[i]._id;
              console.log(datasTrans);
              // console.log(datas);
              sessionStorage.setItem(
                "transferdata",
                JSON.stringify(datasTrans)
              );
            }
          });
        }
      }
      carosel_left9.addEventListener("click", () => {
        carosel_left9.style.visibility = "hidden";
        carosel_right9.style.visibility = "visible";
        dc.innerHTML = null;
        for (let i = 0; i < result.length - 4; i++) {
          if (result[i].tag.length > 5) {
            html = ` <div class="main">
            <div class="best-seller-div">
             <div class="wrapper-of-best-seller-images">
             <div class="flash red">${result[i].tag}</div>
            <img class="best-seller-image-front" src="${
              result[i].productImages[0]
            }  alt="">
            <img class="best-seller-image-back" src="${
              result[i].productImages[1]
            }   alt="">
       </div><div class="inside-best-seller"> <a href="./show.html"><h3 class="productname" id="${
         result[i]._id
       }">${result[i].productName}</h3></a> 
           <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
             result[i].rating
           } -${result[i].noOfReviews} reviews</p>
           <hr>
           <div class="price-and-discount">
               <h5 class = "current-price">${result[i].price} </h5>
               <p class="earlier-price">₹${result[i].originalPrice}</p>
           </div>
           <p class="save-money">You Save: ₹ ${
             result[i].originalPrice - result[i].price
           } (${result[i].offer}%)</p>
           <button class="button-flash-sale red-button" id="${
             result[i].productName
           }">ADD TO CART</button>
       </div></div>  `;
            dc.innerHTML += html;
            main.addEventListener("click", (e) => {
              console.log("");
              if (e.target.id == result[i]._id) {
                let datasTrans = result[i]._id;
                console.log(datasTrans);
                // console.log(datas);
                sessionStorage.setItem(
                  "transferdata",
                  JSON.stringify(datasTrans)
                );
              }
            });
          } else {
            html = ` <div class="main">
            <div class="best-seller-div">
             <div class="wrapper-of-best-seller-images">
             <div class="flash">🗲${result[i].tag}</div>
            <img class="best-seller-image-front" src="${
              result[i].productImages[0]
            }  alt="">
            <img class="best-seller-image-back" src="${
              result[i].productImages[1]
            }   alt="">
       </div><div class="inside-best-seller"> <a href="./show.html"><h3 class="productname" id="${
         result[i]._id
       }">${result[i].productName}</h3></a> 
           <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
             result[i].rating
           } -${result[i].noOfReviews} reviews</p>
           <hr>
           <div class="price-and-discount">
               <h5 class = "current-price">${result[i].price} </h5>
               <p class="earlier-price">₹${result[i].originalPrice}</p>
           </div>
           <p class="save-money">You Save: ₹ ${
             result[i].originalPrice - result[i].price
           } (${result[i].offer}%)</p>
           <button class="button-flash-sale" id="${
             result[i].productName
           }">ADD TO CART</button>
       </div></div>  `;
            dc.innerHTML += html;
            main.addEventListener("click", (e) => {
              console.log("");
              if (e.target.id == result[i]._id) {
                let datasTrans = result[i]._id;
                console.log(datasTrans);
                // console.log(datas);
                sessionStorage.setItem(
                  "transferdata",
                  JSON.stringify(datasTrans)
                );
              }
            });
          }
        }
      });
      carosel_right9.addEventListener("click", () => {
        carosel_left9.style.visibility = "visible";
        carosel_right9.style.visibility = "hidden";
        dc.innerHTML = null;
        for (let i = result.length - 4; i < result.length; i++) {
          if (result[i].tag.length > 5) {
            html = ` <div class="main">
            <div class="best-seller-div">
             <div class="wrapper-of-best-seller-images">
             <div class="flash red">${result[i].tag}</div>
            <img class="best-seller-image-front" src="${
              result[i].productImages[0]
            }  alt="">
            <img class="best-seller-image-back" src="${
              result[i].productImages[1]
            }   alt="">
       </div><div class="inside-best-seller"> <a href="./show.html"><h3 class="productname" id="${
         result[i]._id
       }">${result[i].productName}</h3></a> 
           <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
             result[i].rating
           } -${result[i].noOfReviews} reviews</p>
           <hr>
           <div class="price-and-discount">
               <h5 class = "current-price">${result[i].price} </h5>
               <p class="earlier-price">₹${result[i].originalPrice}</p>
           </div>
           <p class="save-money">You Save: ₹ ${
             result[i].originalPrice - result[i].price
           } (${result[i].offer}%)</p>
           <button class="button-flash-sale red-button" id="${
             result[i].productName
           }">ADD TO CART</button>
       </div></div>  `;
            dc.innerHTML += html;
            main.addEventListener("click", (e) => {
              console.log("");
              if (e.target.id == result[i]._id) {
                let datasTrans = result[i]._id;
                console.log(datasTrans);
                // console.log(datas);
                sessionStorage.setItem(
                  "transferdata",
                  JSON.stringify(datasTrans)
                );
              }
            });
          } else {
            html = ` <div class="main">
            <div class="best-seller-div">
             <div class="wrapper-of-best-seller-images">
             <div class="flash">🗲${result[i].tag}</div>
            <img class="best-seller-image-front" src="${
              result[i].productImages[0]
            }  alt="">
            <img class="best-seller-image-back" src="${
              result[i].productImages[1]
            }   alt="">
       </div><div class="inside-best-seller"> <a href="./show.html"><h3 class="productname" id="${
         result[i]._id
       }">${result[i].productName}</h3></a> 
           <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
             result[i].rating
           } -${result[i].noOfReviews} reviews</p>
           <hr>
           <div class="price-and-discount">
               <h5 class = "current-price">${result[i].price} </h5>
               <p class="earlier-price">₹${result[i].originalPrice}</p>
           </div>
           <p class="save-money">You Save: ₹ ${
             result[i].originalPrice - result[i].price
           } (${result[i].offer}%)</p>
           <button class="button-flash-sale" id="${
             result[i].productName
           }">ADD TO CART</button>
       </div></div>  `;
            dc.innerHTML += html;
            main.addEventListener("click", (e) => {
              console.log("");
              if (e.target.id == result[i]._id) {
                let datasTrans = result[i]._id;
                console.log(datasTrans);
                // console.log(datas);
                sessionStorage.setItem(
                  "transferdata",
                  JSON.stringify(datasTrans)
                );
              }
            });
          }
        }
      });
    });
  const data10 = { description: "Marvel" };
  fetch("http://localhost:3333/boat/Products", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data10),
  })
    .then((response) => response.json())
    .then((result) => {
      // console.log(result);
      // container.innerHTML = null;
      carosel_left10.style.visibility = "hidden";
      carosel_right10.style.visibility = "visible";
      for (let i = 0; i < result.length; i++) {
        if (result[i].tag.length > 5) {
          html = `
          <div class="main">
          <div class="best-seller-div">
           <div class="wrapper-of-best-seller-images">
           <div class="flash red">${result[i].tag}</div>
          <img class="best-seller-image-front" src="${
            result[i].productImages[0]
          }  alt="">
          <img class="best-seller-image-back" src="${
            result[i].productImages[1]
          }   alt="">
     </div><div class="inside-best-seller"> <a href="./show.html"><h3 class="productname" id="${
       result[i]._id
     }">${result[i].productName}</h3></a> 
         <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
           result[i].rating
         } -${result[i].noOfReviews} reviews</p>
         <hr>
         <div class="price-and-discount">
             <h5 class = "current-price">${result[i].price} </h5>
             <p class="earlier-price">₹${result[i].originalPrice}</p>
         </div>
         <p class="save-money">You Save: ₹ ${
           result[i].originalPrice - result[i].price
         } (${result[i].offer}%)</p>
         <button class="button-flash-sale red-button" id="${
           result[i].productName
         }">ADD TO CART</button>
     </div></div>  `;
          marvel.innerHTML += html;
          main.addEventListener("click", (e) => {
            console.log("");
            if (e.target.id == result[i]._id) {
              let datasTrans = result[i]._id;
              console.log(datasTrans);
              // console.log(datas);
              sessionStorage.setItem(
                "transferdata",
                JSON.stringify(datasTrans)
              );
            }
          });
        } else {
          html = ` <div class="main">
          <div class="best-seller-div">
           <div class="wrapper-of-best-seller-images">
           <div class="flash">🗲${result[i].tag}</div>
          <img class="best-seller-image-front" src="${
            result[i].productImages[0]
          }  alt="">
          <img class="best-seller-image-back" src="${
            result[i].productImages[1]
          }   alt="">
     </div><div class="inside-best-seller"> <a href="./show.html"><h3 class="productname" id="${
       result[i]._id
     }">${result[i].productName}</h3></a> 
         <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
           result[i].rating
         } -${result[i].noOfReviews} reviews</p>
         <hr>
         <div class="price-and-discount">
             <h5 class = "current-price">${result[i].price} </h5>
             <p class="earlier-price">₹${result[i].originalPrice}</p>
         </div>
         <p class="save-money">You Save: ₹ ${
           result[i].originalPrice - result[i].price
         } (${result[i].offer}%)</p>
         <button class="button-flash-sale" id="${
           result[i].productName
         }">ADD TO CART</button>
     </div></div>  `;
          marvel.innerHTML += html;
          main.addEventListener("click", (e) => {
            console.log("");
            if (e.target.id == result[i]._id) {
              let datasTrans = result[i]._id;
              console.log(datasTrans);
              // console.log(datas);
              sessionStorage.setItem(
                "transferdata",
                JSON.stringify(datasTrans)
              );
            }
          });
        }
      }
      carosel_left10.addEventListener("click", () => {
        carosel_left10.style.visibility = "hidden";
        carosel_right10.style.visibility = "visible";
        marvel.innerHTML = null;
        for (let i = 0; i < result.length - 5; i++) {
          if (result[i].tag.length > 5) {
            html = `
            <div class="main">
            <div class="best-seller-div">
             <div class="wrapper-of-best-seller-images">
             <div class="flash red">${result[i].tag}</div>
            <img class="best-seller-image-front" src="${
              result[i].productImages[0]
            }  alt="">
            <img class="best-seller-image-back" src="${
              result[i].productImages[1]
            }   alt="">
       </div><div class="inside-best-seller"> <a href="./show.html"><h3 class="productname" id="${
         result[i]._id
       }">${result[i].productName}</h3></a> 
           <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
             result[i].rating
           } -${result[i].noOfReviews} reviews</p>
           <hr>
           <div class="price-and-discount">
               <h5 class = "current-price">${result[i].price} </h5>
               <p class="earlier-price">₹${result[i].originalPrice}</p>
           </div>
           <p class="save-money">You Save: ₹ ${
             result[i].originalPrice - result[i].price
           } (${result[i].offer}%)</p>
           <button class="button-flash-sale red-button" id="${
             result[i].productName
           }">ADD TO CART</button>
       </div></div>  `;
            marvel.innerHTML += html;
            main.addEventListener("click", (e) => {
              console.log("");
              if (e.target.id == result[i]._id) {
                let datasTrans = result[i]._id;
                console.log(datasTrans);
                // console.log(datas);
                sessionStorage.setItem(
                  "transferdata",
                  JSON.stringify(datasTrans)
                );
              }
            });
          } else {
            html = ` <div class="main">
            <div class="best-seller-div">
             <div class="wrapper-of-best-seller-images">
             <div class="flash">🗲${result[i].tag}</div>
            <img class="best-seller-image-front" src="${
              result[i].productImages[0]
            }  alt="">
            <img class="best-seller-image-back" src="${
              result[i].productImages[1]
            }   alt="">
       </div><div class="inside-best-seller"> <a href="./show.html"><h3 class="productname" id="${
         result[i]._id
       }">${result[i].productName}</h3></a> 
           <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
             result[i].rating
           } -${result[i].noOfReviews} reviews</p>
           <hr>
           <div class="price-and-discount">
               <h5 class = "current-price">${result[i].price} </h5>
               <p class="earlier-price">₹${result[i].originalPrice}</p>
           </div>
           <p class="save-money">You Save: ₹ ${
             result[i].originalPrice - result[i].price
           } (${result[i].offer}%)</p>
           <button class="button-flash-sale" id="${
             result[i].productName
           }">ADD TO CART</button>
       </div></div>  `;
            marvel.innerHTML += html;
            main.addEventListener("click", (e) => {
              console.log("");
              if (e.target.id == result[i]._id) {
                let datasTrans = result[i]._id;
                console.log(datasTrans);
                // console.log(datas);
                sessionStorage.setItem(
                  "transferdata",
                  JSON.stringify(datasTrans)
                );
              }
            });
          }
        }
      });
      carosel_right10.addEventListener("click", () => {
        carosel_left10.style.visibility = "visible";
        carosel_right10.style.visibility = "hidden";
        marvel.innerHTML = null;
        for (let i = result.length -4 ; i < result.length-2; i++) {
          if (result[i].tag.length > 5) {
            html = `
            <div class="main">
            <div class="best-seller-div">
             <div class="wrapper-of-best-seller-images">
             <div class="flash red">${result[i].tag}</div>
            <img class="best-seller-image-front" src="${
              result[i].productImages[0]
            }  alt="">
            <img class="best-seller-image-back" src="${
              result[i].productImages[1]
            }   alt="">
       </div><div class="inside-best-seller"> <a href="./show.html"><h3 class="productname" id="${
         result[i]._id
       }">${result[i].productName}</h3></a> 
           <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
             result[i].rating
           } -${result[i].noOfReviews} reviews</p>
           <hr>
           <div class="price-and-discount">
               <h5 class = "current-price">${result[i].price} </h5>
               <p class="earlier-price">₹${result[i].originalPrice}</p>
           </div>
           <p class="save-money">You Save: ₹ ${
             result[i].originalPrice - result[i].price
           } (${result[i].offer}%)</p>
           <button class="button-flash-sale red-button" id="${
             result[i].productName
           }">ADD TO CART</button>
       </div></div>  `;
            marvel.innerHTML += html;
            main.addEventListener("click", (e) => {
              console.log("");
              if (e.target.id == result[i]._id) {
                let datasTrans = result[i]._id;
                console.log(datasTrans);
                // console.log(datas);
                sessionStorage.setItem(
                  "transferdata",
                  JSON.stringify(datasTrans)
                );
              }
            });
          } else {
            html = ` <div class="main">
            <div class="best-seller-div">
             <div class="wrapper-of-best-seller-images">
             <div class="flash">🗲${result[i].tag}</div>
            <img class="best-seller-image-front" src="${
              result[i].productImages[0]
            }  alt="">
            <img class="best-seller-image-back" src="${
              result[i].productImages[1]
            }   alt="">
       </div><div class="inside-best-seller"> <a href="./show.html"><h3 class="productname" id="${
         result[i]._id
       }">${result[i].productName}</h3></a> 
           <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
             result[i].rating
           } -${result[i].noOfReviews} reviews</p>
           <hr>
           <div class="price-and-discount">
               <h5 class = "current-price">${result[i].price} </h5>
               <p class="earlier-price">₹${result[i].originalPrice}</p>
           </div>
           <p class="save-money">You Save: ₹ ${
             result[i].originalPrice - result[i].price
           } (${result[i].offer}%)</p>
           <button class="button-flash-sale" id="${
             result[i].productName
           }">ADD TO CART</button>
       </div></div>  `;
            marvel.innerHTML += html;
            main.addEventListener("click", (e) => {
              console.log("");
              if (e.target.id == result[i]._id) {
                let datasTrans = result[i]._id;
                console.log(datasTrans);
                // console.log(datas);
                sessionStorage.setItem(
                  "transferdata",
                  JSON.stringify(datasTrans)
                );
              }
            });
          }
        }
      });
    });
  // ------------------------------------------------------------------------
  const data12 = { description: "video-products" };
  fetch("http://localhost:3333/boat/Products", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data12),
  })
    .then((response) => response.json())
    .then((result) => {
      // console.log(result);
      // container.innerHTML = null;
      for (let i = 0; i < result.length; i++) {
        if (result[i].tag.length > 5) {
          html = ` <div class="main">
          <div class="best-seller-div">
          <img class="video-div-absolute-image" src="${
            result[i].productImages[1]
          }   alt="">
           <div class="wrapper-of-video">
           <video loop autoplay muted class="video-container-video" src="${
             result[i].productImages[0]
           }  alt="">
     </div><div class="inside-best-seller-video"> <h3 class="productname-video">${
       result[i].productName
     }</h3>
     <hr>
         <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
           result[i].rating
         } -${result[i].noOfReviews} reviews</p>
         <div class="red-tag-of-video">New Arrival</div>
         <div class="price-and-discount">
             <h5 class = "current-price-video">${result[i].price} </h5>
             <p class="earlier-price-video">₹${result[i].originalPrice}</p>
         </div>
         <p class="save-money-video">You Save: ₹ ${
           result[i].originalPrice - result[i].price
         } (${result[i].offer}%)</p>
     </div></div>  `;
          videoContainer.innerHTML += html;
        } else {
          html = ` <div class="main">
          <div class="best-seller-div">
           <div class="wrapper-of-best-seller-images">
           <div class="flash">⚡${result[i].tag}</div>
          <img class="best-seller-image-front" src="${
            result[i].productImages[0]
          }  alt="">
          <img class="best-seller-image-back" src="${
            result[i].productImages[1]
          }   alt="">
     </div><div class="inside-best-seller"> <h3 class="productname">${
       result[i].productName
     }</h3>
         <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
           result[i].rating
         } -${result[i].noOfReviews} reviews</p>
         <hr>
         <div class="price-and-discount">
             <h5 class = "current-price">${result[i].price} </h5>
             <p class="earlier-price">₹${result[i].originalPrice}</p>
         </div>
         <p class="save-money">You Save: ₹ ${
           result[i].originalPrice - result[i].price
         } (${result[i].offer}%)</p>
         <button class="button-flash-sale">ADD TO CART</button>
     </div></div>  `;
          marvel.innerHTML += html;
        }
      }
    });

  // -----------------------------------------------------------------------------
  const data11 = { description: "Home Audio" };
  fetch("http://localhost:3333/boat/Products", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data11),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      // container.innerHTML = null;
      carosel_left11.style.visibility = "hidden";
      carosel_right11.style.visibility = "visible";
      for (let i = 0; i < result.length - 4; i++) {
        if (result[i].tag == undefined) {
          html = ` <div class="main" >
        <div class="best-seller-div">
         <div class="wrapper-of-best-seller-images">
          <img class="best-seller-image-front"  src="${
            result[i].productImages[0]
          }  alt="">
       <img class="best-seller-image-back" src="${
         result[i].productImages[1]
       }   alt="">
   </div><div class="inside-best-seller" > <a href="./show.html"><h3 class="productname"  id="${
     result[i]._id
   }">${result[i].productName}</h3></a>
       <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
         result[i].rating
       } -${result[i].noOfReviews} reviews</p>
       <hr>
       <div class="price-and-discount">
           <h5 class = "current-price">${result[i].price} </h5>
           <p class="earlier-price">₹${result[i].originalPrice}</p>
       </div>
       <p class="save-money">You Save: ₹ ${
         result[i].originalPrice - result[i].price
       } (${result[i].offer}%)</p>
       <button class="button-flash-sale" id="${
         result[i].productName
       }"  >ADD TO CART</button>
   </div></div>  `;
          home_audio.innerHTML += html;
          main.addEventListener("click", (e) => {
            console.log("");
            if (e.target.id == result[i].productName) {
              let datasTrans = result[i].productName;
              console.log(datasTrans);
              // console.log(datas);
              sessionStorage.setItem(
                "transferdata",
                JSON.stringify(datasTrans)
              );
            }
          });
        } else {
          console.log(result[i].productImages[0]);
          html = ` <div class="main">
          <div class="best-seller-div">
           <div class="wrapper-of-best-seller-images">
           <div class="flash">🗲${result[i].tag}</div>
           <img class="best-seller-image-front" src="${
             result[i].productImages[0]
           }  alt="">
          <img class="best-seller-image-back"  src="${
            result[i].productImages[1]
          }   alt="">
     </div><div class="inside-best-seller"> <a href="./show.html"><h3 class="productname" id="${
       result[i]._id
     }">${result[i].productName}</h3></a> 
         <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
           result[i].rating
         } -${result[i].noOfReviews} reviews</p>
         <hr>
         <div class="price-and-discount">
             <h5 class = "current-price">${result[i].price} </h5>
             <p class="earlier-price">₹${result[i].originalPrice}</p>
         </div>
         <p class="save-money">You Save: ₹ ${
           result[i].originalPrice - result[i].price
         } (${result[i].offer}%)</p>
         <button class="button-flash-sale" id="${
           result[i].productName
         }" >ADD TO CART</button>
     </div></div>  `;
          home_audio.innerHTML += html;
          main.addEventListener("click", (e) => {
            if (e.target.id == result[i]._id) {
              let datasTrans = result[i]._id;
              console.log(datasTrans);
              // console.log(datas);
              sessionStorage.setItem(
                "transferdata",
                JSON.stringify(datasTrans)
              );
            }
          });
        }
      }
      carosel_left11.addEventListener("click", () => {
        carosel_left11.style.visibility = "hidden";
        carosel_right11.style.visibility = "visible";
        home_audio.innerHTML = null;
        for (let i = 0; i < result.length - 4; i++) {
          if (result[i].tag == undefined) {
            html = ` <div class="main" >
          <div class="best-seller-div">
           <div class="wrapper-of-best-seller-images">
            <img class="best-seller-image-front"  src="${
              result[i].productImages[0]
            }  alt="">
         <img class="best-seller-image-back" src="${
           result[i].productImages[1]
         }   alt="">
     </div><div class="inside-best-seller" > <a href="./show.html"><h3 class="productname"  id="${
       result[i]._id
     }">${result[i].productName}</h3></a>
         <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
           result[i].rating
         } -${result[i].noOfReviews} reviews</p>
         <hr>
         <div class="price-and-discount">
             <h5 class = "current-price">${result[i].price} </h5>
             <p class="earlier-price">₹${result[i].originalPrice}</p>
         </div>
         <p class="save-money">You Save: ₹ ${
           result[i].originalPrice - result[i].price
         } (${result[i].offer}%)</p>
         <button class="button-flash-sale" id="${
           result[i].productName
         }"  >ADD TO CART</button>
     </div></div>  `;
            home_audio.innerHTML += html;
            main.addEventListener("click", (e) => {
              console.log("");
              if (e.target.id == result[i].productName) {
                let datasTrans = result[i].productName;
                console.log(datasTrans);
                // console.log(datas);
                sessionStorage.setItem(
                  "transferdata",
                  JSON.stringify(datasTrans)
                );
              }
            });
          } else {
            console.log(result[i].productImages[0]);
            html = ` <div class="main">
            <div class="best-seller-div">
             <div class="wrapper-of-best-seller-images">
             <div class="flash">🗲${result[i].tag}</div>
             <img class="best-seller-image-front" src="${
               result[i].productImages[0]
             }  alt="">
            <img class="best-seller-image-back"  src="${
              result[i].productImages[1]
            }   alt="">
       </div><div class="inside-best-seller"> <a href="./show.html"><h3 class="productname" id="${
         result[i]._id
       }">${result[i].productName}</h3></a> 
           <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
             result[i].rating
           } -${result[i].noOfReviews} reviews</p>
           <hr>
           <div class="price-and-discount">
               <h5 class = "current-price">${result[i].price} </h5>
               <p class="earlier-price">₹${result[i].originalPrice}</p>
           </div>
           <p class="save-money">You Save: ₹ ${
             result[i].originalPrice - result[i].price
           } (${result[i].offer}%)</p>
           <button class="button-flash-sale" id="${
             result[i].productName
           }" >ADD TO CART</button>
       </div></div>  `;
            home_audio.innerHTML += html;
            main.addEventListener("click", (e) => {
              if (e.target.id == result[i]._id) {
                let datasTrans = result[i]._id;
                console.log(datasTrans);
                // console.log(datas);
                sessionStorage.setItem(
                  "transferdata",
                  JSON.stringify(datasTrans)
                );
              }
            });
          }
        }
      });
      carosel_right11.addEventListener("click", () => {
        carosel_left11.style.visibility = "visible";
        carosel_right11.style.visibility = "hidden";
        home_audio.innerHTML = null;
        for (let i = result.length - 4; i < result.length; i++) {
          if (result[i].tag == undefined) {
            html = ` <div class="main" >
          <div class="best-seller-div">
           <div class="wrapper-of-best-seller-images">
            <img class="best-seller-image-front"  src="${
              result[i].productImages[0]
            }  alt="">
         <img class="best-seller-image-back" src="${
           result[i].productImages[1]
         }   alt="">
     </div><div class="inside-best-seller" > <a href="./show.html"><h3 class="productname"  id="${
       result[i]._id
     }">${result[i].productName}</h3></a>
         <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
           result[i].rating
         } -${result[i].noOfReviews} reviews</p>
         <hr>
         <div class="price-and-discount">
             <h5 class = "current-price">${result[i].price} </h5>
             <p class="earlier-price">₹${result[i].originalPrice}</p>
         </div>
         <p class="save-money">You Save: ₹ ${
           result[i].originalPrice - result[i].price
         } (${result[i].offer}%)</p>
         <button class="button-flash-sale" id="${
           result[i].productName
         }"  >ADD TO CART</button>
     </div></div>  `;
            home_audio.innerHTML += html;
            main.addEventListener("click", (e) => {
              console.log("");
              if (e.target.id == result[i].productName) {
                let datasTrans = result[i].productName;
                console.log(datasTrans);
                // console.log(datas);
                sessionStorage.setItem(
                  "transferdata",
                  JSON.stringify(datasTrans)
                );
              }
            });
          } else {
            console.log(result[i].productImages[0]);
            html = ` <div class="main">
            <div class="best-seller-div">
             <div class="wrapper-of-best-seller-images">
             <div class="flash">🗲${result[i].tag}</div>
             <img class="best-seller-image-front" src="${
               result[i].productImages[0]
             }  alt="">
            <img class="best-seller-image-back"  src="${
              result[i].productImages[1]
            }   alt="">
       </div><div class="inside-best-seller"> <a href="./show.html"><h3 class="productname" id="${
         result[i]._id
       }">${result[i].productName}</h3></a> 
           <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${
             result[i].rating
           } -${result[i].noOfReviews} reviews</p>
           <hr>
           <div class="price-and-discount">
               <h5 class = "current-price">${result[i].price} </h5>
               <p class="earlier-price">₹${result[i].originalPrice}</p>
           </div>
           <p class="save-money">You Save: ₹ ${
             result[i].originalPrice - result[i].price
           } (${result[i].offer}%)</p>
           <button class="button-flash-sale" id="${
             result[i].productName
           }" >ADD TO CART</button>
       </div></div>  `;
            home_audio.innerHTML += html;
            main.addEventListener("click", (e) => {
              if (e.target.id == result[i]._id) {
                let datasTrans = result[i]._id;
                console.log(datasTrans);
                // console.log(datas);
                sessionStorage.setItem(
                  "transferdata",
                  JSON.stringify(datasTrans)
                );
              }
            });
          }
        }
      });
    });
}

let marvelDiv = document.querySelector(".marvel-div");
let dcDiv = document.querySelector(".dc-div");

marvelDiv.addEventListener("click", () => {
  console.log("Whuiuuuuuuuuuuuuhukykfuutfyti");
  dc.style.display = "none";
  marvel.style.display = "flex";
  marvelDiv.style.textDecoration = "underline red";
  dcDiv.style.textDecoration = "underline white";
  marvelDiv.style.transition = "1s";
});
dcDiv.addEventListener("click", () => {
  console.log("Whuiuuuuuuuuuuuuhukykfuutfyti");
  marvel.style.display = "none";
  dc.style.display = "flex";
  dcDiv.style.textDecoration = "underline red";
  marvelDiv.style.textDecoration = "underline white";
  dc.style.transition = "1s ease-in";
});

generate();

const cart_main = document.querySelector(".cart_main");
const shippingTotal=document.querySelector(".shippingTotal")
const empty = document.querySelector(".empty");
main.addEventListener("click", (e) => {
  if (cart_main.innerHTML == null) {
    empty.style.display = "block";
  }
  empty.style.display = "none";
  const cartData = { productName: `${e.target.id}` };

  fetch("http://localhost:3333/boat/Products", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cartData),
  })
    .then((response) => response.json())
    .then((data) => {
      let search = basket.find((y) => y.id.productName == e.target.id);
      if (search == undefined) {
        basket.push({
          id: data[0],
          item: 1,
        });
        console.log(basket, "pp");
      } else {
        alert("Item Alread Added! Check Cart!");
        basket.pull(data[0]);
      }
      localStorage.setItem("basketdata", JSON.stringify(basket));
      for (let i = 0; i < basket.length; i++) {
        html = ` 
          <div class="cartWrap">
<img src="${data[0].productImages[0]}" alt="" width="50%" height="50%">
<div class="cart-right">
  <h5>${data[0].productName}</h5>
  <div class="price-cart">
    <h4 id="updated_price">₹${data[0].price} </h4>
    <h4 class="strike strike_price">₹${data[0].originalPrice}</h4>
    <i class="fa-solid fa-trash" id="trash_${data[0]._id}" ></i>
  </div>
  <h3></h3>
<div class="cart-button">
  <i class="fa-solid fa-minus" id="minu_${data[0]._id}"></i>
  <span  id="quantity_${data[0]._id}">${basket[i].item}</span>
  <i class="fa-solid fa-plus" id="plus_${data[0]._id}" ></i>
  <h5>${data[0].color[0]}</h5>
</div>
</div>

</div>`;

        cart_main.addEventListener("click", (e) => {
          if (e.target.id == `plus_${data[0]._id}`) {
            basket[i].item += 1;
            basket[i].price = basket[i].price*basket[i].item;
            console.log(basket[i].item);
            let quantity = document.querySelector(`#quantity_${data[0]._id}`);
            let original_price = document.querySelector(".updated_price");
            let strike_price = document.querySelector(".strike_price");
            quantity.innerText = basket[i].item;
            original_price.innerText = data[0].price * basket[i].item;
            strike_price.innerText = data[0].originalPrice * basket[i].item;
            console.log(quantity);
          }
          if (e.target.id == `minu_${data[0]._id}`) {
            if (basket[i].item > 1) {
              basket[i].item -= 1;
              let quantity = document.querySelector(`#quantity_${data[0]._id}`);
              let original_price = document.querySelector(".updated_price");
              let strike_price = document.querySelector(".strike_price");
              quantity.innerText = basket[i].item;
              original_price.innerText = data[0].price * basket[i].item;
              strike_price.innerText = data[0].originalPrice * basket[i].item;
            }
          }
         if(e.target.id== `trash_${data[0]._id}`){
          let index=basket.indexOf(basket[i])
           basket.splice(index,1)
            
         }

        });
      }
      cart_main.innerHTML += html;
    
    });
});
