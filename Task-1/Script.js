 //Selecting The Input Display
var  Display =document.getElementById('input-box');
// Am selecting a button which help me to acces the button
var Buttons=document.querySelectorAll('button');
// *We are Selecting All The ButtoN from Your HTML .And Store It in Variable 
// Eqal Button
var Equ=document.getElementById('equal');
// *  Selecting A Equal operator spareatly using getElementBy id
//  console.log(Equ);

//?!If we Want to evaluate  String then How to Do it 
      let buttonArray=Array.from(Buttons);
      //   * We Are Selecting the Button and Store It in a Variable using Array.from() Method which is Help me  to  Separately Store Every thing  like String From
      
            var string = '';
      buttonArray.forEach(function(buttonArrayElements){
                              //!The Button Array Elements are the array Element 
                         // ForEach Loop is A Loop it is Take  some argument that pass in Callback Function that help You to Don Your Work
                        //  * BTN is the All value of the ButtonArray "Btn  Represent the All value Of THE bUTTON Array "

                        buttonArrayElements.addEventListener('click',(e)=>{
                        //     *  We are need to add  Event  Element of the Button 
                              
                            if(e.target.innerHTML=='DEL'){
                               string = string.substring(0,string.length-1);
                               Display.value=string; 
                            } 
                            else if(e.target.innerHTML=='Ac'){
                                string = '';
                                Display.value =string;

                            }   
                            else if(e.target.innerHTML == '=') {
                                       string=eval(string);
                                     Display.value = string;

                           }   
                            else{

                              string+=e.target.innerText;
                              Display.value=string;

                            }
                              


                              
                       });



      });
      

 