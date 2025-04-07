var Start=document.getElementById("sg");
var Submit=document.getElementById("sub");
var InputDis=document.getElementById("input-box");
var Hero=document.getElementById("Hero-text");

   var own=0;
Start.addEventListener('click',function(){
    var ran=Math.floor(Math.random()*101);
      Hero.textContent=ran;
      own+=Math.floor(Math.floor()*ran);
    
})
