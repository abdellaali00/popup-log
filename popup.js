document.getElementById("btnlog").addEventListener("click", function(){
    document.querySelector(".popup").style.display="flex";
}) 
document.getElementById("close").addEventListener("click", function(){
    document.querySelector(".popup").style.display ="none";
}) 
document.getElementById("btnlog2").addEventListener("click", function(){
    document.querySelector(".popup2").style.display="flex";
}) 
document.getElementById("close2").addEventListener("click", function(){
    document.querySelector(".popup2").style.display ="none";

}) 
document.getElementById("signuplink").addEventListener("click", function(){
    document.querySelector(".popup2").style.display ="flex";
    document.querySelector(".popup").style.display ="none";

}) 
document.getElementById("loginlink").addEventListener("click", function(){
    document.querySelector(".popup").style.display ="flex";
    document.querySelector(".popup2").style.display ="none";

}) 
let log = document.getElementById("btnlog");
let sign = document.getElementById("btnlog2");

 log.onclick= function(){
    

 }



let scrollme = document.getElementById("scroll");
onscroll = function(){
    if(scrollY >= 400 ){
        scrollme.style.display = "flex";
    }
    else{
        scrollme.style.display ="none"
    }   
}
scrollme.onclick = function(){
    scroll({
        top:0,
        left:0,
        behavior:"smooth",
    })       
}
