

var But=document.getElementById('con');

var inputBox=document.getElementById('in-1'); 

var option=document.getElementById('conversionType');

var Para=document.querySelector('p');








But.addEventListener('click',function(){

let Result=option.options[option.selectedIndex].value;

        

    if(Result=="Default"){

        //

        Def();
       

    }


    else if(Result=="cToF"){

       cToF(inputBox.value);

    }
    else if(Result=="fToC"){

        fToC(inputBox.value);


    }


    function Def(){

        Para.innerHTML="Hei bro, Enter SomeKindOf think ";
    }

    function cToF(c){

         let result= (c * 1.8) + 32;

         Para.innerHTML=result;
    }
    function fToC(f){

           let result = (f -32)/1.8;

           Para.innerHTML=result;
    }
    
})