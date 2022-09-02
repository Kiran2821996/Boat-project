let para1 =  document.getElementsByClassName("first-para")[0]
let arr =[
    "Warburg invests $100 mn in boAt",
    "How India's boAt became the fifth largest wearable brand in the world",
    "The Airdopes 441 is sweat proof and packs in crisp audio. Great for fitness enthusiasts.",
    "IPL 2020: boAt becomes the official audio partner for six teams",
    "TWS Earbuds Shipments in India Up 723 Percent YoY in Q3, Boat Emerged as Leading Player: Counterpoint"
]
let btn = document.querySelectorAll(".logo-item")

for(let i=0;i<btn.length;i++){
   btn[i].addEventListener("mouseover",function(e){
        if(i==0)para1.innerHTML = arr[0]
        else if(i==1) para1.innerHTML = arr[1]
        else if(i==2) para1.innerHTML = arr[2]
        else if(i==3) para1.innerHTML = arr[3]
});
}