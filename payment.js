const paybtn = document.querySelector(".payment_Checkout_bottom_btn")
const paymid1 =document.querySelector(".payment_Checkout_middle1")
const paymid2 =document.querySelector(".payment_Checkout_middle2")
const payment_Checkout_top2_1 = document.querySelector(".payment_Checkout_top2_1 ")
const payment_Checkout_top2_2 = document.querySelector(".payment_Checkout_top2_2")


paybtn.addEventListener("click",()=>{
    if(paymid1.style.display="block"){
        paymid1.style.display="none"
            paymid2.style.display="block"
    }
    if(payment_Checkout_top2_1.style.display="flex"){
        payment_Checkout_top2_1.style.display="none";
        payment_Checkout_top2_2.style.display="flex"
    }
 
})

const addressy=document.querySelector(".addressy")
const summaryy=document.querySelector(".summaryy")
const closyy = document.querySelector(".closyy")
const payment_Checkout=document.querySelector(".payment_Checkout")
addressy.addEventListener("click",()=>{
    if(paymid1.style.display="block"){
        paymid1.style.display="none"
            paymid2.style.display="block"
    }
    if(payment_Checkout_top2_1.style.display="flex"){
        payment_Checkout_top2_1.style.display="none";
        payment_Checkout_top2_2.style.display="flex"
    }
})
summaryy.addEventListener("click",()=>{
    if(paymid1.style.display="none"){
        paymid1.style.display="block"
            paymid2.style.display="none"
    }
    if(payment_Checkout_top2_1.style.display="none"){
        payment_Checkout_top2_1.style.display="flex";
        payment_Checkout_top2_2.style.display="none"
    }
})

closyy.addEventListener("click",()=>{
    payment_Checkout.style.display="none"
})

const payout = document.querySelector(".payment_Checkout")
const checkyy = document.querySelector(".checkyy")

checkyy.addEventListener("click",()=>{
    payout.style.display="block"
})

let transferdata = JSON.parse(sessionStorage.getItem("cartData"))
console.log(transferdata,"kkkkkkkkkkk");

const cart_items=document.querySelector(".cart_items")
 
for(let i=0;i<transferdata.length;i++){
    const data = { _id : `${transferdata[i].id._id}` };
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
                    <div class="cartWraping" >
              <img src="${datas[0].productImages[0]}" alt="" width="50%" height="50%">
              <div class="cart-right">
              <h5>${datas[0].productName}</h5>
              <div class="price-cart">
              <h4>₹${datas[0].price} </h4>
              <span>${transferdata[i].item}</span>
              </div>
              </div>
              
              </div>`;

              cart_items.innerHTML+=html
        })

        
}