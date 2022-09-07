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
      // console.log(result);
      for (let i = 0; i < result.length; i++) {
        if (result[i].tag.length > 5) {
          html = ` <div class="main">
         <div class="best-seller-div">
          <div class="wrapper-of-best-seller-images">
          <div class="flash red">${result[i].tag}</div>
         <img class="best-seller-image-front" src="${result[i].productImages[0]}  alt="">
         <img class="best-seller-image-back" src="${result[i].productImages[1]}   alt="">
    </div><div class="inside-best-seller"> <h3 class="productname">${result[i].productName}</h3>
        <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${result[i].rating} ${result[i].noOfReviews} reviews</p>
        <hr>
        <div class="price-and-discount">
            <h5 class = "current-price">${result[i].price} </h5>
            <p class="earlier-price">₹${result[i].originalPrice}</p>
        </div>
        <p class="save-money">You Save: ₹ ${result[i].originalPrice - result[i].price} (${result[i].offer}%)</p>
        <button class="button-flash-sale red-button">ADD TO CART</button>
    </div></div>  `;
          best_sellers.innerHTML += html;
        }

        else {
          html =
            ` <div class="main">
         <div class="best-seller-div">
          <div class="wrapper-of-best-seller-images">
          <div class="flash">⚡${result[i].tag}</div>
         <img class="best-seller-image-front" src="${result[i].productImages[0]}  alt="">
         <img class="best-seller-image-back" src="${result[i].productImages[1]}   alt="">
    </div><div class="inside-best-seller"> <h3 class="productname">${result[i].productName}</h3>
        <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${result[i].rating} -${result[i].noOfReviews} reviews</p>
        <hr>
        <div class="price-and-discount">
            <h5 class = "current-price">${result[i].price} </h5>
            <p class="earlier-price">₹${result[i].originalPrice}</p>
        </div>
        <p class="save-money">You Save: ₹ ${result[i].originalPrice - result[i].price} (${result[i].offer}%)</p>
        <button class="button-flash-sale">ADD TO CART</button>
    </div></div>  `;
          best_sellers.innerHTML += html;
        }
      }
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
      // container.innerHTML = null;
      for (let i = 0; i < result.length; i++) {
        if (result[i].tag.length > 5) {
          html = ` <div class="main">
          <div class="best-seller-div">
           <div class="wrapper-of-best-seller-images">
           <div class="flash red">${result[i].tag}</div>
          <img class="best-seller-image-front" src="${result[i].productImages[0]}  alt="">
          <img class="best-seller-image-back" src="${result[i].productImages[1]}   alt="">
     </div><div class="inside-best-seller"> <h3 class="productname">${result[i].productName}</h3>
         <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${result[i].rating} -${result[i].noOfReviews} reviews</p>
         <hr>
         <div class="price-and-discount">
             <h5 class = "current-price">${result[i].price} </h5>
             <p class="earlier-price">₹${result[i].originalPrice}</p>
         </div>
         <p class="save-money">You Save: ₹ ${result[i].originalPrice - result[i].price} (${result[i].offer}%)</p>
         <button class="button-flash-sale red-button">ADD TO CART</button>
     </div></div>  `;
          daily_deals.innerHTML += html;
        }

        else {
          html =
            ` <div class="main">
          <div class="best-seller-div">
           <div class="wrapper-of-best-seller-images">
           <div class="flash">⚡${result[i].tag}</div>
          <img class="best-seller-image-front" src="${result[i].productImages[0]}  alt="">
          <img class="best-seller-image-back" src="${result[i].productImages[1]}   alt="">
     </div><div class="inside-best-seller"> <h3 class="productname">${result[i].productName}</h3>
         <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${result[i].rating} -${result[i].noOfReviews} reviews</p>
         <hr>
         <div class="price-and-discount">
             <h5 class = "current-price">${result[i].price} </h5>
             <p class="earlier-price">₹${result[i].originalPrice}</p>
         </div>
         <p class="save-money">You Save: ₹ ${result[i].originalPrice - result[i].price} (${result[i].offer}%)</p>
         <button class="button-flash-sale">ADD TO CART</button>
     </div></div>  `;
          daily_deals.innerHTML += html;
        }
      }
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
      for (let i = 0; i < result.length; i++) {
        if (result[i].tag.length > 5) {
          html = ` <div class="main">
          <div class="best-seller-div">
           <div class="wrapper-of-best-seller-images">
           <div class="flash red">${result[i].tag}</div>
          <img class="best-seller-image-front" src="${result[i].productImages[0]}  alt="">
          <img class="best-seller-image-back" src="${result[i].productImages[1]}   alt="">
     </div><div class="inside-best-seller"> <h3 class="productname">${result[i].productName}</h3>
         <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${result[i].rating} -${result[i].noOfReviews} reviews</p>
         <hr>
         <div class="price-and-discount">
             <h5 class = "current-price">${result[i].price} </h5>
             <p class="earlier-price">₹${result[i].originalPrice}</p>
         </div>
         <p class="save-money">You Save: ₹ ${result[i].originalPrice - result[i].price} (${result[i].offer}%)</p>
         <button class="button-flash-sale red-button">ADD TO CART</button>
     </div></div>  `;
          biggest_launch.innerHTML += html;
        }

        else {
          html =
            ` <div class="main">
          <div class="best-seller-div">
           <div class="wrapper-of-best-seller-images">
           <div class="flash">⚡${result[i].tag}</div>
          <img class="best-seller-image-front" src="${result[i].productImages[0]}  alt="">
          <img class="best-seller-image-back" src="${result[i].productImages[1]}   alt="">
     </div><div class="inside-best-seller"> <h3 class="productname">${result[i].productName}</h3>
         <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${result[i].rating} -${result[i].noOfReviews} reviews</p>
         <hr>
         <div class="price-and-discount">
             <h5 class = "current-price">${result[i].price} </h5>
             <p class="earlier-price">₹${result[i].originalPrice}</p>
         </div>
         <p class="save-money">You Save: ₹ ${result[i].originalPrice - result[i].price} (${result[i].offer}%)</p>
         <button class="button-flash-sale">ADD TO CART</button>
     </div></div>  `;
          biggest_launch.innerHTML += html;
        }
      }
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
      // console.log(result);
      // container.innerHTML = null;
      for (let i = 0; i < result.length; i++) {
        if (result[i].tag.length > 5) {
          html = ` <div class="main">
          <div class="best-seller-div">
           <div class="wrapper-of-best-seller-images">
           <div class="flash red">${result[i].tag}</div>
          <img class="best-seller-image-front" src="${result[i].productImages[0]}  alt="">
          <img class="best-seller-image-back" src="${result[i].productImages[1]}   alt="">
     </div><div class="inside-best-seller"> <h3 class="productname">${result[i].productName}</h3>
         <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${result[i].rating} -${result[i].noOfReviews} reviews</p>
         <hr>
         <div class="price-and-discount">
             <h5 class = "current-price">${result[i].price} </h5>
             <p class="earlier-price">₹${result[i].originalPrice}</p>
         </div>
         <p class="save-money">You Save: ₹ ${result[i].originalPrice - result[i].price} (${result[i].offer}%)</p>
         <button class="button-flash-sale red-button">ADD TO CART</button>
     </div></div>  `;
          smart_watches.innerHTML += html;
        }

        else {
          html =
            ` <div class="main">
          <div class="best-seller-div">
           <div class="wrapper-of-best-seller-images">
           <div class="flash">⚡${result[i].tag}</div>
          <img class="best-seller-image-front" src="${result[i].productImages[0]}  alt="">
          <img class="best-seller-image-back" src="${result[i].productImages[1]}   alt="">
     </div><div class="inside-best-seller"> <h3 class="productname">${result[i].productName}</h3>
         <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${result[i].rating} -${result[i].noOfReviews} reviews</p>
         <hr>
         <div class="price-and-discount">
             <h5 class = "current-price">${result[i].price} </h5>
             <p class="earlier-price">₹${result[i].originalPrice}</p>
         </div>
         <p class="save-money">You Save: ₹ ${result[i].originalPrice - result[i].price} (${result[i].offer}%)</p>
         <button class="button-flash-sale">ADD TO CART</button>
     </div></div>  `;
          smart_watches.innerHTML += html;
        }
      }
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
      for (let i = 0; i < result.length; i++) {
        if (result[i].tag.length > 5) {
          html = ` <div class="main">
          <div class="best-seller-div">
           <div class="wrapper-of-best-seller-images">
           <div class="flash red">${result[i].tag}</div>
          <img class="best-seller-image-front" src="${result[i].productImages[0]}  alt="">
          <img class="best-seller-image-back" src="${result[i].productImages[1]}   alt="">
     </div><div class="inside-best-seller"> <h3 class="productname">${result[i].productName}</h3>
         <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${result[i].rating} -${result[i].noOfReviews} reviews</p>
         <hr>
         <div class="price-and-discount">
             <h5 class = "current-price">${result[i].price} </h5>
             <p class="earlier-price">₹${result[i].originalPrice}</p>
         </div>
         <p class="save-money">You Save: ₹ ${result[i].originalPrice - result[i].price} (${result[i].offer}%)</p>
         <button class="button-flash-sale red-button">ADD TO CART</button>
     </div></div>  `;
          trending_wireless.innerHTML += html;
        }

        else {
          html =
            ` <div class="main">
          <div class="best-seller-div">
           <div class="wrapper-of-best-seller-images">
           <div class="flash">⚡${result[i].tag}</div>
          <img class="best-seller-image-front" src="${result[i].productImages[0]}  alt="">
          <img class="best-seller-image-back" src="${result[i].productImages[1]}   alt="">
     </div><div class="inside-best-seller"> <h3 class="productname">${result[i].productName}</h3>
         <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${result[i].rating} -${result[i].noOfReviews} reviews</p>
         <hr>
         <div class="price-and-discount">
             <h5 class = "current-price">${result[i].price} </h5>
             <p class="earlier-price">₹${result[i].originalPrice}</p>
         </div>
         <p class="save-money">You Save: ₹ ${result[i].originalPrice - result[i].price} (${result[i].offer}%)</p>
         <button class="button-flash-sale">ADD TO CART</button>
     </div></div>  `;
          trending_wireless.innerHTML += html;
        }
      }
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
      for (let i = 0; i < result.length; i++) {
        if (result[i].tag.length > 5) {
          html = ` <div class="main">
          <div class="best-seller-div">
           <div class="wrapper-of-best-seller-images">
           <div class="flash red">${result[i].tag}</div>
          <img class="best-seller-image-front" src="${result[i].productImages[0]}  alt="">
          <img class="best-seller-image-back" src="${result[i].productImages[1]}   alt="">
     </div><div class="inside-best-seller"> <h3 class="productname">${result[i].productName}</h3>
         <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${result[i].rating} -${result[i].noOfReviews} reviews</p>
         <hr>
         <div class="price-and-discount">
             <h5 class = "current-price">${result[i].price} </h5>
             <p class="earlier-price">₹${result[i].originalPrice}</p>
         </div>
         <p class="save-money">You Save: ₹ ${result[i].originalPrice - result[i].price} (${result[i].offer}%)</p>
         <button class="button-flash-sale red-button">ADD TO CART</button>
     </div></div>  `;
          top_earbuds.innerHTML += html;
        }

        else {
          html =
            ` <div class="main">
          <div class="best-seller-div">
           <div class="wrapper-of-best-seller-images">
           <div class="flash">⚡${result[i].tag}</div>
          <img class="best-seller-image-front" src="${result[i].productImages[0]}  alt="">
          <img class="best-seller-image-back" src="${result[i].productImages[1]}   alt="">
     </div><div class="inside-best-seller"> <h3 class="productname">${result[i].productName}</h3>
         <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${result[i].rating} -${result[i].noOfReviews} reviews</p>
         <hr>
         <div class="price-and-discount">
             <h5 class = "current-price">${result[i].price} </h5>
             <p class="earlier-price">₹${result[i].originalPrice}</p>
         </div>
         <p class="save-money">You Save: ₹ ${result[i].originalPrice - result[i].price} (${result[i].offer}%)</p>
         <button class="button-flash-sale">ADD TO CART</button>
     </div></div>  `;
          top_earbuds.innerHTML += html;
        }
      }
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
      for (let i = 0; i < result.length - 1; i++) {
        if (result[i].tag.length > 5) {
          html = ` <div class="main">
          <div class="best-seller-div">
           <div class="wrapper-of-best-seller-images">
           <div class="flash red">${result[i].tag}</div>
          <img class="best-seller-image-front" src="${result[i].productImages[0]}  alt="">
          <img class="best-seller-image-back" src="${result[i].productImages[1]}   alt="">
     </div><div class="inside-best-seller"> <h3 class="productname">${result[i].productName}</h3>
         <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${result[i].rating} -${result[i].noOfReviews} reviews</p>
         <hr>
         <div class="price-and-discount">
             <h5 class = "current-price">${result[i].price} </h5>
             <p class="earlier-price">₹${result[i].originalPrice}</p>
         </div>
         <p class="save-money">You Save: ₹ ${result[i].originalPrice - result[i].price} (${result[i].offer}%)</p>
         <button class="button-flash-sale red-button">ADD TO CART</button>
     </div></div>  `;
          trending_wired.innerHTML += html;
        }

        else {
          html =
            ` <div class="main">
          <div class="best-seller-div">
           <div class="wrapper-of-best-seller-images">
           <div class="flash">⚡${result[i].tag}</div>
          <img class="best-seller-image-front" src="${result[i].productImages[0]}  alt="">
          <img class="best-seller-image-back" src="${result[i].productImages[1]}   alt="">
     </div><div class="inside-best-seller"> <h3 class="productname">${result[i].productName}</h3>
         <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${result[i].rating} -${result[i].noOfReviews} reviews</p>
         <hr>
         <div class="price-and-discount">
             <h5 class = "current-price">${result[i].price} </h5>
             <p class="earlier-price">₹${result[i].originalPrice}</p>
         </div>
         <p class="save-money">You Save: ₹ ${result[i].originalPrice - result[i].price} (${result[i].offer}%)</p>
         <button class="button-flash-sale">ADD TO CART</button>
     </div></div>  `;
          trending_wired.innerHTML += html;
        }
      }
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
      for (let i = 0; i < result.length; i++) {
        if (result[i].tag.length > 5) {
          html = ` <div class="main">
          <div class="best-seller-div">
           <div class="wrapper-of-best-seller-images">
           <div class="flash red">${result[i].tag}</div>
          <img class="best-seller-image-front" src="${result[i].productImages[0]}  alt="">
          <img class="best-seller-image-back" src="${result[i].productImages[1]}   alt="">
     </div><div class="inside-best-seller"> <h3 class="productname">${result[i].productName}</h3>
         <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${result[i].rating} -${result[i].noOfReviews} reviews</p>
         <hr>
         <div class="price-and-discount">
             <h5 class = "current-price">${result[i].price} </h5>
             <p class="earlier-price">₹${result[i].originalPrice}</p>
         </div>
         <p class="save-money">You Save: ₹ ${result[i].originalPrice - result[i].price} (${result[i].offer}%)</p>
         <button class="button-flash-sale red-button">ADD TO CART</button>
     </div></div>  `;
          trending_anc.innerHTML += html;
        }

        else {
          html =
            ` <div class="main">
          <div class="best-seller-div">
           <div class="wrapper-of-best-seller-images">
           <div class="flash">⚡${result[i].tag}</div>
          <img class="best-seller-image-front" src="${result[i].productImages[0]}  alt="">
          <img class="best-seller-image-back" src="${result[i].productImages[1]}   alt="">
     </div><div class="inside-best-seller"> <h3 class="productname">${result[i].productName}</h3>
         <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${result[i].rating} -${result[i].noOfReviews} reviews</p>
         <hr>
         <div class="price-and-discount">
             <h5 class = "current-price">${result[i].price} </h5>
             <p class="earlier-price">₹${result[i].originalPrice}</p>
         </div>
         <p class="save-money">You Save: ₹ ${result[i].originalPrice - result[i].price} (${result[i].offer}%)</p>
         <button class="button-flash-sale">ADD TO CART</button>
     </div></div>  `;
          trending_anc.innerHTML += html;
        }
      }
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
      for (let i = 0; i < result.length; i++) {
        if (result[i].tag.length > 5) {
          html = ` <div class="main">
          <div class="best-seller-div">
           <div class="wrapper-of-best-seller-images">
           <div class="flash red">${result[i].tag}</div>
          <img class="best-seller-image-front" src="${result[i].productImages[0]}  alt="">
          <img class="best-seller-image-back" src="${result[i].productImages[1]}   alt="">
     </div><div class="inside-best-seller"> <h3 class="productname">${result[i].productName}</h3>
         <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${result[i].rating} -${result[i].noOfReviews} reviews</p>
         <hr>
         <div class="price-and-discount">
             <h5 class = "current-price">${result[i].price} </h5>
             <p class="earlier-price">₹${result[i].originalPrice}</p>
         </div>
         <p class="save-money">You Save: ₹ ${result[i].originalPrice - result[i].price} (${result[i].offer}%)</p>
         <button class="button-flash-sale red-button">ADD TO CART</button>
     </div></div>  `;
          dc.innerHTML += html;
        }

        else {
          html =
            ` <div class="main">
          <div class="best-seller-div">
           <div class="wrapper-of-best-seller-images">
           <div class="flash">⚡${result[i].tag}</div>
          <img class="best-seller-image-front" src="${result[i].productImages[0]}  alt="">
          <img class="best-seller-image-back" src="${result[i].productImages[1]}   alt="">
     </div><div class="inside-best-seller"> <h3 class="productname">${result[i].productName}</h3>
         <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${result[i].rating} -${result[i].noOfReviews} reviews</p>
         <hr>
         <div class="price-and-discount">
             <h5 class = "current-price">${result[i].price} </h5>
             <p class="earlier-price">₹${result[i].originalPrice}</p>
         </div>
         <p class="save-money">You Save: ₹ ${result[i].originalPrice - result[i].price} (${result[i].offer}%)</p>
         <button class="button-flash-sale">ADD TO CART</button>
     </div></div>  `;
          dc.innerHTML += html;
        }
      }
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
      for (let i = 0; i < result.length; i++) {
        if (result[i].tag.length > 5) {
          html = ` <div class="main">
          <div class="best-seller-div">
           <div class="wrapper-of-best-seller-images">
           <div class="flash red">${result[i].tag}</div>
          <img class="best-seller-image-front" src="${result[i].productImages[0]}  alt="">
          <img class="best-seller-image-back" src="${result[i].productImages[1]}   alt="">
     </div><div class="inside-best-seller"> <h3 class="productname">${result[i].productName}</h3>
         <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${result[i].rating} -${result[i].noOfReviews} reviews</p>
         <hr>
         <div class="price-and-discount">
             <h5 class = "current-price">${result[i].price} </h5>
             <p class="earlier-price">₹${result[i].originalPrice}</p>
         </div>
         <p class="save-money">You Save: ₹ ${result[i].originalPrice - result[i].price} (${result[i].offer}%)</p>
         <button class="button-flash-sale red-button">ADD TO CART</button>
     </div></div>  `;
          marvel.innerHTML += html;
        }

        else {
          html =
            ` <div class="main">
          <div class="best-seller-div">
           <div class="wrapper-of-best-seller-images">
           <div class="flash">⚡${result[i].tag}</div>
          <img class="best-seller-image-front" src="${result[i].productImages[0]}  alt="">
          <img class="best-seller-image-back" src="${result[i].productImages[1]}   alt="">
     </div><div class="inside-best-seller"> <h3 class="productname">${result[i].productName}</h3>
         <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${result[i].rating} -${result[i].noOfReviews} reviews</p>
         <hr>
         <div class="price-and-discount">
             <h5 class = "current-price">${result[i].price} </h5>
             <p class="earlier-price">₹${result[i].originalPrice}</p>
         </div>
         <p class="save-money">You Save: ₹ ${result[i].originalPrice - result[i].price} (${result[i].offer}%)</p>
         <button class="button-flash-sale">ADD TO CART</button>
     </div></div>  `;
          marvel.innerHTML += html;
        }
      }
     
    });
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
      for (let i = 0; i < result.length; i++) {
        if(result[i].tag== undefined){
          html =
          ` <div class="main">
        <div class="best-seller-div">
         <div class="wrapper-of-best-seller-images">
        <img class="best-seller-image-front" src="${result[i].productImages[0]}  alt="">
        <img class="best-seller-image-back" src="${result[i].productImages[1]}   alt="">
   </div><div class="inside-best-seller"> <h3 class="productname">${result[i].productName}</h3>
       <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${result[i].rating} -${result[i].noOfReviews} reviews</p>
       <hr>
       <div class="price-and-discount">
           <h5 class = "current-price">${result[i].price} </h5>
           <p class="earlier-price">₹${result[i].originalPrice}</p>
       </div>
       <p class="save-money">You Save: ₹ ${result[i].originalPrice - result[i].price} (${result[i].offer}%)</p>
       <button class="button-flash-sale">ADD TO CART</button>
   </div></div>  `;
        home_audio.innerHTML += html;
        }

        else {
          console.log(result[i].productImages[0])
          html =
            ` <div class="main">
          <div class="best-seller-div">
           <div class="wrapper-of-best-seller-images">
           <div class="flash">⚡${result[i].tag}</div>
          <img class="best-seller-image-front" src="${result[i].productImages[0]}  alt="">
          <img class="best-seller-image-back" src="${result[i].productImages[1]}   alt="">
     </div><div class="inside-best-seller"> <h3 class="productname">${result[i].productName}</h3>
         <p class="icon-para"><i class="fa-solid fa-star" style="color:red;"></i>${result[i].rating} -${result[i].noOfReviews} reviews</p>
         <hr>
         <div class="price-and-discount">
             <h5 class = "current-price">${result[i].price} </h5>
             <p class="earlier-price">₹${result[i].originalPrice}</p>
         </div>
         <p class="save-money">You Save: ₹ ${result[i].originalPrice - result[i].price} (${result[i].offer}%)</p>
         <button class="button-flash-sale">ADD TO CART</button>
     </div></div>  `;
          home_audio.innerHTML += html;
        }

      }
    });
}

generate();