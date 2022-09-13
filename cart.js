// let cartArray=JSON.parse(sessionStorage.getItem("basketArray"))
// console.log(cartArray,"oputhdgf");
// const cart_main = document.querySelector(".cart_main");
// const empty = document.querySelector(".empty");

console.log('hjjjjjjjjjjjjj');
let cartArray=JSON.parse(sessionStorage.getItem("cartData"))
let cartmain=document.querySelector(".cart_main");
let emptybasket = document.querySelector(".empty");
console.log(cartArray,"oputhdgf");

if (cartmain.innerHTML == null) {
  emptybasket.style.display = "block";
  }
  emptybasket.style.display = "none";

  const paybtnn = document.querySelector(".payment_Checkout_bottom_btn")
  const paybtnn2 = document.querySelector(".payment_Checkout_bottom_paybtn")
  const paymidd1 =document.querySelector(".payment_Checkout_middle1")
  const paymidd2 =document.querySelector(".payment_Checkout_middle2")
  const paymentt_Checkout_top2_1 = document.querySelector(".payment_Checkout_top2_1 ")
  const paymentt_Checkout_top2_2 = document.querySelector(".payment_Checkout_top2_2")
  const clearStorage1 = document.querySelector(".clearStorage")
  clearStorage1.addEventListener("click",()=>{
    sessionStorage.clear();
  })
  paybtnn.addEventListener("click",()=>{
      if(paymidd1.style.display="block"){
          paymidd1.style.display="none"
              paymidd2.style.display="block"
      }
      if(paymentt_Checkout_top2_1.style.display="flex"){
          paymentt_Checkout_top2_1.style.display="none";
          paymentt_Checkout_top2_2.style.display="flex"
      }
     if(paybtnn.style.display="block"){
      paybtnn2.style.display="block";
      paybtnn.style.display="none";
     }
   
  })
  
  const address=document.querySelector(".addressy")
  const summary=document.querySelector(".summaryy")
  const closy = document.querySelector(".closyy")
  const paymentt_Checkout=document.querySelector(".payment_Checkout")
  address.addEventListener("click",()=>{
      if(paymidd1.style.display="block"){
          paymidd1.style.display="none"
              paymidd2.style.display="block"
      }
      if(paymentt_Checkout_top2_1.style.display="flex"){
          paymentt_Checkout_top2_1.style.display="none";
          paymentt_Checkout_top2_2.style.display="flex"
      }
      if(paybtnn.style.display="block"){
          paybtnn2.style.display="block";
          paybtnn.style.display="none";
         }
   
  })
  summary.addEventListener("click",()=>{
      if(paymidd1.style.display="none"){
          paymidd1.style.display="block"
              paymidd2.style.display="none"
      }
      if(paymentt_Checkout_top2_1.style.display="none"){
          paymentt_Checkout_top2_1.style.display="flex";
          paymentt_Checkout_top2_2.style.display="none"
      }
      if(paybtnn.style.display="none"){
          paybtnn2.style.display="none";
          paybtnn.style.display="block";
         }
      
  })
  
  closy.addEventListener("click",()=>{
      paymentt_Checkout.style.display="none"
  })
  
  const payoutt = document.querySelector(".payment_Checkout")
  const check = document.querySelector(".checkyy")
  
  check.addEventListener("click",()=>{
      payoutt.style.display="block"
      aside.style.filter="blur(8px)"
  })
  let total1=0;
  let sum1=0;

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
      
      // const sum = cartArray.reduce(
      //   (previousValue, currentValue) => previousValue + currentValue.item,
      //   0
      // );
      // console.log(sum, "sum");
      // const total = cartArray.reduce(
      //   (previousValue, currentValue) => previousValue + currentValue.total,
      //   0
      // );
      // console.log(total, "total");
     
      let subtotall = document.querySelector(".subtotal");
      let quantity = document.querySelector(`#quantity_${datas[0]._id}`);
      let updatecartt = document.querySelector(".updateCart");
      let originalprice = document.querySelector(
        `#updated_${datas[0]._id}`
      );
      let strikeprice = document.querySelector(`#strike_${datas[0]._id}`);
      let cartwrap = document.querySelector(`#cartWrap_${datas[0]._id}`);
      sum1=0;
      total1=0
      for(let i=0;i<cartArray.length;i++){
       let element=cartArray[i];
       console.log(element)
       total1+=element.total
       sum1+=element.item
       
      }
      if (e.target.id == `minu_${datas[0]._id}`) {
        cartArray[i].item -= 1;
        quantity.innerText= cartArray[i].item;
        sum1=0
        total1=0
        for(let i=0;i<cartArray.length;i++){
          let element=cartArray[i];
          console.log(element)
          total1+=element.total
          sum1+=element.item
          
         }
        console.log(cartArray, "minus");
        updatecartt.innerText = sum1;
        originalprice.innerText = `₹${datas[0].price * cartArray[i].item}`;
        strikeprice.innerText = `₹${
          datas[0].originalPrice * cartArray[i].item
        }`;
        cartArray[i].total = datas[0].price * cartArray[i].item;
        subtotall.innerText = `₹ ${total1}`;
        // checkoutsubtotal.innerText=`₹ ${total1}`
        sessionStorage.setItem("cartData",JSON.stringify(cartArray))
      }
      
      if (e.target.id == `plus_${datas[0]._id}`) {
        cartArray[i].item += 1;
        quantity.innerText= cartArray[i].item;
        console.log(cartArray, "minus");
        total1+=cartArray[i].total
              sum1+=1
        updatecartt.innerText = sum1;
        originalprice.innerText = `₹${datas[0].price * cartArray[i].item}`;
        strikeprice.innerText = `₹${
          datas[0].originalPrice * cartArray[i].item
        }`;
        
        cartArray[i].total = datas[0].price * cartArray[i].item;
        subtotall.innerText = `₹ ${total1}`;
        // checkoutsubtotal.innerText=`₹ ${total1}`
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
     const cart_items=document.querySelector(".cart_items")

html2 = ` 
<div class="cartWraping" >
<img src="${datas[0].productImages[0]}" alt="" width="50%" height="50%">
<div class="cart-right">
<h3>${datas[0].productName}</h3>
<div class="price-cart">
<h3>₹${datas[0].price*cartArray[i].item} </h3>
<h5>Quantity:  ${cartArray[i].item}</h5>
</div>
</div>

</div>`;

let checkoutsubtotal= document.querySelector(".checkout_subtotal")
const sumOfItem = cartArray.reduce(
        (previousValue, currentValue) => previousValue + currentValue.total,
        0,
      );
      
      console.log(sumOfItem)
      checkoutsubtotal.innerText= `₹${sumOfItem}`
cart_items.innerHTML+=html2
        
})


  }