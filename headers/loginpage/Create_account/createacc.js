const Login=document.querySelector(".back_to_login");

Login.addEventListener("click",function(e){
    e.preventDefault();
    window.location.assign("/headers/loginpage/login.html","_self")
})