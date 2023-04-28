let btnclick=document.querySelector(".col button");
let box1h=document.querySelector(".col h1");
let box1p=document.querySelector(".col p");
let box1p2=document.querySelector(".col .p2");
let btn2=document.querySelector(".colo button");
let box2h=document.querySelector(".colo h1");
let move=document.querySelector(".container");
let box2p=document.querySelector(".colo p");
let box2h4=document.querySelector(".colo h4");
let box2input=document.querySelectorAll(".colo input")[0];
btnclick.addEventListener("click",()=>{
   let text=move.classList.toggle("add3");
   box2input.classList.toggle("add4");
   if(text==false){
    box1h.innerHTML="Welcome Back!";
    box1p.innerHTML="Lorem ipsum dolor sit amet consectetur ";
    box1p2.innerHTML="elit Nihil nemo Loremelit Nihil";
    btnclick.innerHTML="Sign In";
    btn2.innerHTML="SIGN UP";
    box2h.innerHTML="Create Account";
    box2p.innerHTML="or use your email for registration";
    box2h4.innerHTML="";
   }
   else{
    box1h.innerHTML="Hello, Friend!"
    box1p.innerHTML="Enter your personal details";
    box1p2.innerHTML="and start journey with us";
    btnclick.innerHTML="Sign Up";
    btn2.innerHTML="SIGN IN";
    box2h.innerHTML="Sign To Account";
    box2p.innerHTML="or use your email account";
    box2h4.innerHTML="Forgot Your Password?";
   }
});
