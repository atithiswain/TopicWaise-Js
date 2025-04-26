var tog=document.querySelector("#toggle");
var img=document.querySelector(".img1");
//img
var Unibody=document.querySelector("body");
  var h1=document.querySelector("h1");  




tog.addEventListener("change",function(){
    if(tog.checked){
         Unibody.style.backgroundColor="black"
         Unibody.style.color="white"
        h1.textContent="Thank You for this!!";
        img.setAttribute("src","https://i.pinimg.com/736x/6c/59/ed/6c59edac9fb48596c1302254f0336c5e.jpg");
    }
    else{
        Unibody.style.backgroundColor="white"
         Unibody.style.color="black"
        h1.textContent="please Turn Off the Light!!";
        img.setAttribute("src","https://i.pinimg.com/736x/b5/ae/52/b5ae522203ae642a276a5db3e112c069.jpg");
       
    }
})