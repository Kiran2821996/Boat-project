// let cartArray=JSON.parse(sessionStorage.getItem("basketArray"))
// console.log(cartArray,"oputhdgf");
// const cart_main = document.querySelector(".cart_main");
// const empty = document.querySelector(".empty");

console.log('hjjjjjjjjjjjjj');
let cartArray=JSON.parse(sessionStorage.getItem("basketArray"))
let cartmain=document.querySelector(".cart_main");
let emptybasket = document.querySelector(".empty");
console.log(cartArray,"oputhdgf");

if (cartmain.innerHTML == null) {
  emptybasket.style.display = "block";
  }
  emptybasket.style.display = "none";




  for(let i=0;i<cartArray.length;i++){
    const data = { _id : `${cartArray[i].id._id}` };
    fetch("http://localhost:3333/boat/Products", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((datas)=>{
           console.log(datas,"lppp");
           html = ` 
           <div class="cartWrap" id="cartWrap_${datas[0]._id}" >
           <img src="${datas[0].productImages[0]}" alt="" width="50%" height="50%">
           <div class="cart-right">
           <h5>${datas[0].productName}</h5>
           <div class="price-cart">
           <h4 id="updated_${datas[0]._id}">₹${datas[0].price} </h4>
          <h4 class="strike" id="strike_${datas[0]._id}">₹${datas[0].originalPrice}</h4>
           <i class="fa-solid fa-trash" id="trash_${datas[0]._id}" ></i>
          
           </div>
           <div class="cart-button">
               <i class="fa-solid fa-minus" id="minu_${datas[0]._id}"></i>
               <span id="quantity_${datas[0]._id}">${cartArray[i].item}</span>
               <i class="fa-solid fa-plus" id="plus_${datas[0]._id}" ></i>
               <h5>${datas[0].color[0]}</h5>
           </div>
           
           </div>
           
           </div>
     `;

     cartmain.addEventListener("click", (e) => {
      console.log('nmnmn');
      
      const sum = cartArray.reduce(
        (previousValue, currentValue) => previousValue + currentValue.item,
        0
      );
      console.log(sum, "sum");
      const total = cartArray.reduce(
        (previousValue, currentValue) => previousValue + currentValue.total,
        0
      );
      console.log(total, "total");
      let checkoutsubtotal= document.querySelector(".checkout_subtotal")
      let subtotall = document.querySelector(".subtotal");
      let quantity = document.querySelector(`#quantity_${datas[0]._id}`);
      let updatecartt = document.querySelector(".updateCart");
      let originalprice = document.querySelector(
        `#updated_${datas[0]._id}`
      );
      let strikeprice = document.querySelector(`#strike_${datas[0]._id}`);
      let cartwrap = document.querySelector(`#cartWrap_${datas[0]._id}`);

      if (e.target.id == `minu_${datas[0]._id}`) {
        cartArray[i].item -= 1;
        quantity.innerText= cartArray[i].item;
        console.log(cartArray, "minus");
        updatecartt.innerText = sum;
        originalprice.innerText = `₹${datas[0].price * cartArray[i].item}`;
        strikeprice.innerText = `₹${
          datas[0].originalPrice * cartArray[i].item
        }`;
        cartArray[i].total = datas[0].price * cartArray[i].item;
        subtotall.innerText = `₹ ${total}`;
        checkoutsubtotal.innerText=`₹ ${total}`
        sessionStorage.setItem("cartData",JSON.stringify(cartArray))
      }
      
      if (e.target.id == `plus_${datas[0]._id}`) {
        cartArray[i].item += 1;
        quantity.innerText= cartArray[i].item;
        console.log(cartArray, "minus");
        updatecartt.innerText = sum;
        originalprice.innerText = `₹${datas[0].price * cartArray[i].item}`;
        strikeprice.innerText = `₹${
          datas[0].originalPrice * cartArray[i].item
        }`;
        cartArray[i].total = datas[0].price * cartArray[i].item;
        subtotall.innerText = `₹ ${total}`;
        checkoutsubtotal.innerText=`₹ ${total}`
        sessionStorage.setItem("cartData",JSON.stringify(cartArray))
      }
      if (e.target.id == `trash_${datas[0]._id}`) {
        cartArray.splice(i, 1);
        console.log(cartArray);
        cartwrap.style.display = "none";
        sessionStorage.setItem("cartData",JSON.stringify(cartArray))
      }
    });

     cartmain.innerHTML+=html
        
})

  }