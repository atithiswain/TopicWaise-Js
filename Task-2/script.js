//Selecting The Button
let Butt=document.getElementById('but');
let yourAge=document.getElementById('age');


let birtHDays=document.getElementById('Doo');
    //!this the Display value which  is show in  input Bar.Which You are Select  

 Butt.addEventListener('click',function(){
    

  
      if(birtHDays.value === ""){
        alert("hei, pls Enter Your Age pls!!");
      }


     else{
      //*first we Need A  to Creait A varible Which Sstore the Current Daate
         // *In this DAY we Are Extract the year . which is help us to Count the 
         //*  Your Year of the Birth OR Your Age

          var Current=new Date().getFullYear();
         
               // WE need  the input value print 
              //  console.log("input value",birtHDays.value); 
              //  We are store this value in number 
              // let Inputvalue=birtHDays.value;
                   
                //  console.log(YorBarthYear);


         //!We Need to Extract the Your Birth Year Which You Enter in Display bar
        //  !We are Using the  new Date() Method which is Help You define  the Year, time ,day
        // ! How this is working :::: simply we are write new Date(birtHDays.value)
              
            let YourBirthYear=new Date(birtHDays.value).getFullYear();     
            
            let curAge=Current-YourBirthYear;
            
            yourAge.innerHTML=curAge;
            

        
     }
 })   


 