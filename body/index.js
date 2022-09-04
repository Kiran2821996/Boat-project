const exploreBlogBtn=document.querySelector(".explore_blog_btn");
const earPhoneImg=document.querySelector(".earphone_imgDiv");
const smartWatchImg=document.querySelector(".smartwatch_imgDiv");
const groomKitImg=document.querySelector(".groomkit_imgDiv");
const newTab=document.getElementById("new_tab").href


exploreBlogBtn.addEventListener("click",function(){
    // alert()
    
})

earPhoneImg.addEventListener("click",function(){
    window.location.assign("/Earphones_Buying_Guide/index1.html")
})

smartWatchImg.addEventListener("click",function(){
    // window.open("https://www.boat-lifestyle.com/blogs/blog/the-ultimate-smartwatch-guide-get-the-world-on-your-wrist","_self")
})

groomKitImg.addEventListener("click",function(){
    // window.open("https://www.boat-lifestyle.com/blogs/blog/introducing-misfit-t200-3-in-1-grooming-kit-best-trimmer-for-men","_self")
})


// -------------------------------------------------
const mainContainer=document.querySelectorAll(".main_container");
// console.log(mainContainer);
const rightBtn=document.querySelector(".arrow_right");
const leftBtn=document.querySelector(".arrow_left");

let counter=0;

mainContainer.forEach((item,index)=>{
    item.style.left=`${index*100}%`
})

rightBtn.addEventListener("click",function(){
    // alert()
    counter++;
    if(counter==4){
        counter=3;
    }
    slideMainContainer();
})

leftBtn.addEventListener("click",function(){
    // alert()
    counter--;
    if(counter<0){
        counter=0;
    }
    
    slideMainContainer();
})

const slideMainContainer=()=>{
    mainContainer.forEach((item)=>{
        item.style.transform=`translateX(-${counter*100}%)`
    })
}