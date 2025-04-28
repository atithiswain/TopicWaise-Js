var Question=document.querySelectorAll(".Qa");
Question.forEach(function(ele){
        let Flag=true;
        ele.addEventListener("click",function(){
          let Ans=ele.nextElementSibling;
           
            if(Flag){
                Ans.style.height="100%";
                Flag=false;
                
            }else{
                Ans.style.height="0";
                Flag=true;
                   
            }
        });
});