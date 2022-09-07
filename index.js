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
      console.log(result);
      for (let i = 0; i < result.length; i++) {
        if (result[i].tag.length > 5) {
          html = `<div class="main">
        <h3>${result[i].tag}</h3>
        <img src="${result[i].productImages[0]} width="100px" height="150px" >
    <h3 class="productname">${result[i].productName}</h3>
    <h3>☆${result[i].rating}    ${result[i].noOfReviews} reviews</h3>
    <h3>₹${result[i].price} ₹${result[i].originalPrice}</h3>
    <h3>You Save: ₹ ${result[i].originalPrice - result[i].price} (${
            result[i].offer
          }%)</h3>
    <button style="background-color:white">ADD TO CART</button>
     </div>`;
          best_sellers.innerHTML += html;
        } else {
          html = `<div class="main">
        <h3>⚡ ${result[i].tag}</h3>
        <img src="${result[i].productImages[0]} width="100px" height="150px" >
    <h3 class="productname">${result[i].productName}</h3>
    <h3>☆${result[i].rating}    ${result[i].noOfReviews} reviews</h3>
    <h3>₹${result[i].price} ₹${result[i].originalPrice}</h3>
    <h3>You Save: ₹ ${result[i].originalPrice - result[i].price} (${
            result[i].offer
          }%)</h3>
    <button style="background-color:white">ADD TO CART</button>
     </div>`;
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
      console.log(result);
      // container.innerHTML = null;
      for (let i = 0; i < result.length; i++) {
        if (result[i].tag.length > 5) {
          html = `<div class="main">
      <h3>${result[i].tag}</h3>
      <img src="${result[i].productImages[0]} width="100px" height="150px" >
  <h3 class="productname">${result[i].productName}</h3>
  <h3>☆${result[i].rating}    ${result[i].noOfReviews} reviews</h3>
  <h3>₹${result[i].price} ₹${result[i].originalPrice}</h3>
  <h3>You Save: ₹ ${result[i].originalPrice - result[i].price} (${
            result[i].offer
          }%)</h3>
  <button style="background-color:white">ADD TO CART</button>
   </div>`;
          daily_deals.innerHTML += html;
        } else {
          html = `<div class="main">
      <h3>⚡ ${result[i].tag}</h3>
      <img src="${result[i].productImages[1]} width="100px" height="150px" >
  <h3 class="productname">${result[i].productName}</h3>
  <h3>☆${result[i].rating}    ${result[i].noOfReviews} reviews</h3>
  <h3>₹${result[i].price} ₹${result[i].originalPrice}</h3>
  <h3>You Save: ₹ ${result[i].originalPrice - result[i].price} (${
            result[i].offer
          }%)</h3>
  <button style="background-color:white">ADD TO CART</button>
   </div>`;
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
      console.log(result);
      // container.innerHTML = null;
      for (let i = 0; i < result.length; i++) {
        if (result[i].tag.length > 5) {
          html = `<div class="main">
      <h3>${result[i].tag}</h3>
      <img src="${result[i].productImages[0]} width="100px" height="150px" >
  <h3 class="productname">${result[i].productName}</h3>
  <h3>☆${result[i].rating}    ${result[i].noOfReviews} reviews</h3>
  <h3>₹${result[i].price} ₹${result[i].originalPrice}</h3>
  <h3>You Save: ₹ ${result[i].originalPrice - result[i].price} (${
            result[i].offer
          }%)</h3>
  <button style="background-color:white">ADD TO CART</button>
   </div>`;
          biggest_launch.innerHTML += html;
        } else {
          html = `<div class="main">
      <h3>⚡ ${result[i].tag}</h3>
      <img src="${result[i].productImages[1]} width="100px" height="150px" >
  <h3 class="productname">${result[i].productName}</h3>
  <h3>☆${result[i].rating}    ${result[i].noOfReviews} reviews</h3>
  <h3>₹${result[i].price} ₹${result[i].originalPrice}</h3>
  <h3>You Save: ₹ ${result[i].originalPrice - result[i].price} (${
            result[i].offer
          }%)</h3>
  <button style="background-color:white">ADD TO CART</button>
   </div>`;
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
      console.log(result);
      // container.innerHTML = null;
      for (let i = 0; i < result.length; i++) {
        if (result[i].tag.length > 5) {
          html = `<div class="main">
      <h3>${result[i].tag}</h3>
      <img src="${result[i].productImages[0]} width="100px" height="150px" >
  <h3 class="productname">${result[i].productName}</h3>
  <h3>☆${result[i].rating}    ${result[i].noOfReviews} reviews</h3>
  <h3>₹${result[i].price} ₹${result[i].originalPrice}</h3>
  <h3>You Save: ₹ ${result[i].originalPrice - result[i].price} (${
            result[i].offer
          }%)</h3>
  <button style="background-color:white">ADD TO CART</button>
   </div>`;
          smart_watches.innerHTML += html;
        } else {
          html = `<div class="main">
      <h3>⚡ ${result[i].tag}</h3>
      <img src="${result[i].productImages[1]} width="100px" height="150px" >
  <h3 class="productname">${result[i].productName}</h3>
  <h3>☆${result[i].rating}    ${result[i].noOfReviews} reviews</h3>
  <h3>₹${result[i].price} ₹${result[i].originalPrice}</h3>
  <h3>You Save: ₹ ${result[i].originalPrice - result[i].price} (${
            result[i].offer
          }%)</h3>
  <button style="background-color:white">ADD TO CART</button>
   </div>`;
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
      console.log(result);
      // container.innerHTML = null;
      for (let i = 0; i < result.length; i++) {
        if (result[i].tag.length > 5) {
          html = `<div class="main">
      <h3>${result[i].tag}</h3>
      <img src="${result[i].productImages[0]} width="100px" height="150px" >
  <h3 class="productname">${result[i].productName}</h3>
  <h3>☆${result[i].rating}    ${result[i].noOfReviews} reviews</h3>
  <h3>₹${result[i].price} ₹${result[i].originalPrice}</h3>
  <h3>You Save: ₹ ${result[i].originalPrice - result[i].price} (${
            result[i].offer
          }%)</h3>
  <button style="background-color:white">ADD TO CART</button>
   </div>`;
          trending_wireless.innerHTML += html;
        } else {
          html = `<div class="main">
      <h3>⚡ ${result[i].tag}</h3>
      <img src="${result[i].productImages[1]} width="100px" height="150px" >
  <h3 class="productname">${result[i].productName}</h3>
  <h3>☆${result[i].rating}    ${result[i].noOfReviews} reviews</h3>
  <h3>₹${result[i].price} ₹${result[i].originalPrice}</h3>
  <h3>You Save: ₹ ${result[i].originalPrice - result[i].price} (${
            result[i].offer
          }%)</h3>
  <button style="background-color:white">ADD TO CART</button>
   </div>`;
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
      console.log(result);
      // container.innerHTML = null;
      for (let i = 0; i < result.length; i++) {
        if (result[i].tag.length > 5) {
          html = `<div class="main">
      <h3>${result[i].tag}</h3>
      <img src="${result[i].productImages[0]} width="100px" height="150px" >
  <h3 class="productname">${result[i].productName}</h3>
  <h3>☆${result[i].rating}    ${result[i].noOfReviews} reviews</h3>
  <h3>₹${result[i].price} ₹${result[i].originalPrice}</h3>
  <h3>You Save: ₹ ${result[i].originalPrice - result[i].price} (${
            result[i].offer
          }%)</h3>
  <button style="background-color:white">ADD TO CART</button>
   </div>`;
          top_earbuds.innerHTML += html;
        } else {
          html = `<div class="main">
      <h3>⚡ ${result[i].tag}</h3>
      <img src="${result[i].productImages[1]} width="100px" height="150px" >
  <h3 class="productname">${result[i].productName}</h3>
  <h3>☆${result[i].rating}    ${result[i].noOfReviews} reviews</h3>
  <h3>₹${result[i].price} ₹${result[i].originalPrice}</h3>
  <h3>You Save: ₹ ${result[i].originalPrice - result[i].price} (${
            result[i].offer
          }%)</h3>
  <button style="background-color:white">ADD TO CART</button>
   </div>`;
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
      console.log(result);
      // container.innerHTML = null;
      for (let i = 0; i < result.length - 1; i++) {
        if (result[i].tag.length > 5) {
          html = `<div class="main">
        <h3>${result[i].tag}</h3>
        <img src="${result[i].productImages[0]} width="100px" height="150px" >
    <h3 class="productname">${result[i].productName}</h3>
    <h3>☆${result[i].rating}    ${result[i].noOfReviews} reviews</h3>
    <h3>₹${result[i].price} ₹${result[i].originalPrice}</h3>
    <h3>You Save: ₹ ${result[i].originalPrice - result[i].price} (${
            result[i].offer
          }%)</h3>
    <button style="background-color:white">ADD TO CART</button>
     </div>`;
          trending_wired.innerHTML += html;
        } else {
          html = `<div class="main">
        <h3>⚡ ${result[i].tag}</h3>
        <img src="${result[i].productImages[1]} width="100px" height="150px" >
    <h3 class="productname">${result[i].productName}</h3>
    <h3>☆${result[i].rating}    ${result[i].noOfReviews} reviews</h3>
    <h3>₹${result[i].price} ₹${result[i].originalPrice}</h3>
    <h3>You Save: ₹ ${result[i].originalPrice - result[i].price} (${
            result[i].offer
          }%)</h3>
    <button style="background-color:white">ADD TO CART</button>
     </div>`;
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
      console.log(result);
      // container.innerHTML = null;
      for (let i = 0; i < result.length; i++) {
        if (result[i].tag.length > 5) {
          html = `<div class="main">
          <h3>${result[i].tag}</h3>
          <img src="${result[i].productImages[0]} width="100px" height="150px" >
      <h3 class="productname">${result[i].productName}</h3>
      <h3>☆${result[i].rating}    ${result[i].noOfReviews} reviews</h3>
      <h3>₹${result[i].price} ₹${result[i].originalPrice}</h3>
      <h3>You Save: ₹ ${result[i].originalPrice - result[i].price} (${
            result[i].offer
          }%)</h3>
      <button style="background-color:white">ADD TO CART</button>
       </div>`;
          trending_anc.innerHTML += html;
        } else {
          html = `<div class="main">
          <h3>⚡ ${result[i].tag}</h3>
          <img src="${result[i].productImages[1]} width="100px" height="150px" >
      <h3 class="productname">${result[i].productName}</h3>
      <h3>☆${result[i].rating}    ${result[i].noOfReviews} reviews</h3>
      <h3>₹${result[i].price} ₹${result[i].originalPrice}</h3>
      <h3>You Save: ₹ ${result[i].originalPrice - result[i].price} (${
            result[i].offer
          }%)</h3>
      <button style="background-color:white">ADD TO CART</button>
       </div>`;
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
      console.log(result);
      // container.innerHTML = null;
      for (let i = 0; i < result.length; i++) {
        if (result[i].tag.length > 5) {
          html = `<div class="main">
            <h3>${result[i].tag}</h3>
            <img src="${
              result[i].productImages[0]
            } width="100px" height="150px" >
        <h3 class="productname">${result[i].productName}</h3>
        <h3>☆${result[i].rating}    ${result[i].noOfReviews} reviews</h3>
        <h3>₹${result[i].price} ₹${result[i].originalPrice}</h3>
        <h3>You Save: ₹ ${result[i].originalPrice - result[i].price} (${
            result[i].offer
          }%)</h3>
        <button style="background-color:white">ADD TO CART</button>
         </div>`;
          dc.innerHTML += html;
        } else {
          html = `<div class="main">
            <h3>⚡ ${result[i].tag}</h3>
            <img src="${
              result[i].productImages[1]
            } width="100px" height="150px" >
        <h3 class="productname">${result[i].productName}</h3>
        <h3>☆${result[i].rating}    ${result[i].noOfReviews} reviews</h3>
        <h3>₹${result[i].price} ₹${result[i].originalPrice}</h3>
        <h3>You Save: ₹ ${result[i].originalPrice - result[i].price} (${
            result[i].offer
          }%)</h3>
        <button style="background-color:white">ADD TO CART</button>
         </div>`;
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
      console.log(result);
      // container.innerHTML = null;
      for (let i = 0; i < result.length; i++) {
        if (result[i].tag.length > 5) {
          html = `<div class="main">
            <h3>${result[i].tag}</h3>
            <img src="${
              result[i].productImages[0]
            } width="100px" height="150px" >
        <h3 class="productname">${result[i].productName}</h3>
        <h3>☆${result[i].rating}    ${result[i].noOfReviews} reviews</h3>
        <h3>₹${result[i].price} ₹${result[i].originalPrice}</h3>
        <h3>You Save: ₹ ${result[i].originalPrice - result[i].price} (${
            result[i].offer
          }%)</h3>
        <button style="background-color:white">ADD TO CART</button>
         </div>`;
          marvel.innerHTML += html;
        } else {
          html = `<div class="main">
            <h3>⚡ ${result[i].tag}</h3>
            <img src="${
              result[i].productImages[1]
            } width="100px" height="150px" >
        <h3 class="productname">${result[i].productName}</h3>
        <h3>☆${result[i].rating}    ${result[i].noOfReviews} reviews</h3>
        <h3>₹${result[i].price} ₹${result[i].originalPrice}</h3>
        <h3>You Save: ₹ ${result[i].originalPrice - result[i].price} (${
            result[i].offer
          }%)</h3>
        <button style="background-color:white">ADD TO CART</button>
         </div>`;
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
          html = `<div class="main">
          <img src="${result[i].productImages[0]} width="100px" height="150px" >
      <h3 class="productname">${result[i].productName}</h3>
      <h3>☆${result[i].rating}    ${result[i].noOfReviews} reviews</h3>
      <h3>₹${result[i].price} ₹${result[i].originalPrice}</h3>
      <h3>You Save: ₹ ${result[i].originalPrice - result[i].price} (${
          result[i].offer
        }%)</h3>
      <button style="background-color:white">ADD TO CART</button>
       </div>`;
        home_audio.innerHTML += html;
        }else{
          html = `<div class="main">
          <h3>${result[i].tag}</h3>
          <img src="${result[i].productImages[0]} width="100px" height="150px" >
      <h3 class="productname">${result[i].productName}</h3>
      <h3>☆${result[i].rating}    ${result[i].noOfReviews} reviews</h3>
      <h3>₹${result[i].price} ₹${result[i].originalPrice}</h3>
      <h3>You Save: ₹ ${result[i].originalPrice - result[i].price} (${
          result[i].offer
        }%)</h3>
      <button style="background-color:white">ADD TO CART</button>
       </div>`;
        home_audio.innerHTML += html;
        }
       
      }
    });
}

generate();
