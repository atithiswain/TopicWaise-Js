let ProGB = document.querySelector(".progres");
let Btn = document.querySelector("button");
let Inp = document.querySelector("input");
let Mass=document.querySelector(".no2")

Inp.addEventListener("input", function (ele) {
  let PassWord = Inp.value;
  let HaveNum = /[1-9]/.test(PassWord);
  let SmallLetter = /[a-z]/.test(PassWord);
  let BigLetter = /[A-Z]/.test(PassWord);
  let Symbol = /[!@#$%&]/.test(PassWord);


  Btn.addEventListener("click",function(){
   
                     if(PassWord.length<6){
                           
                           Mass.textContent="please Make Sure You Enter More Then 5 carecter"
                     }
                     else if((PassWord.length>=12&&SmallLetter)&&(BigLetter&&Symbol)){
                        ProGB.style.width="100%";
                        ProGB.style.backgroundColor="Green"
                        Mass.textContent="Hard-Level😎";
                     }
                     else if((PassWord.length>=10&&SmallLetter)&&HaveNum){
                        ProGB.style.width="60%";
                        ProGB.style.backgroundColor="pink"
                        Mass.textContent="Medium Level😉";
                     }
                     
                     else if(PassWord.length>=6&&HaveNum){
                        ProGB.style.width="30%";
                        Mass.textContent="Easy😒";

                     }

                     
                    
  });
});
