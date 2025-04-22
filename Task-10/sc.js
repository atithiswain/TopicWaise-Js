let TextAre=document.querySelector("#EnterText");
let WordC=document.querySelector(".WordCounter");
let CharE=document.querySelector(".charCON");

TextAre.addEventListener("input",function(){
        let Val=TextAre.value;
        CharE.innerHTML=Val.split("").length;
        WordC.innerHTML=Val.split(" ").length;
});