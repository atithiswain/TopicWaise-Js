
var Btn=document.getElementById('btn');


Btn.addEventListener('click',function(){

      for(let i=1;i<=101;i++){
        if(i%3==0&&i%5==0){
            console.log("Fizz"+"Buzz");

        }
        else if(i%3==0){
            console.log("Fizz");
        }
        else if(i%5==0){
            console.log("Buzz")
        }
        else{
            console.log("it`s Not Fizz  Buzz ",i);
        }

      }
})