const forgotpswd=document.querySelector(".forgot_pswd");
const creatAcc=document.querySelector(".create_acc")

forgotpswd.addEventListener("click",function(e){
    e.preventDefault()
    console.log("recover")
    window.location.assign("/headers/loginpage/Recover_pswd/recoverpswd.html","_self");
})

creatAcc.addEventListener("click",function(e){
    e.preventDefault();
    window.location.assign("/headers/loginpage/Create_account/createacc.html","_self");
})