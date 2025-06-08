// var Dele1=document.querySelector("#remove");
var Add1=document.querySelector("#add");
var sta=document.querySelector("h5");
 var flag=1;



Add1.addEventListener('click',function(){
       if(flag==1){
           Add1.innerHTML="Friends";
           Add1.style.color="black";
           Add1.style.backgroundColor="green";
           flag=2;
       }          
       else{
        Add1.innerHTML="Add Friend";
        Add1.style.color="red";
        Add1.style.backgroundColor="white";
        flag=1;
       }   
})