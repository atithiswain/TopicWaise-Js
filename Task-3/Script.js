var Start = document.getElementById("sg");
var Submit = document.getElementById("sub");
var InputDis = document.getElementById("input-box");
var Hero = document.getElementById("Hero-text");
var winMessage = document.getElementById("mess");
var Hist =document.getElementById("Guess-Hist");


var ComputerValue = 0;
var UserInput;

Start.addEventListener("click", function () {
   
  var ran = Math.floor(Math.random() * 101);
  Hero.textContent = ran;
  ComputerValue = Math.floor(Math.random() * ran);

  Submit.addEventListener("click", function () {
    if (InputDis.value === "") {
      alert("Pls Enter Your Choice🙌");
    } 
    else {
      UserInput = Number(InputDis.value);

      InputDis.value = "";

      if (UserInput === ComputerValue) {
        winMessage.innerHTML = "Congratulation 🍾🥇🎊";
      } else if (UserInput > ComputerValue) {
        winMessage.innerHTML = "You are So heigh😒";
      } else if (UserInput < ComputerValue) {
        winMessage.innerHTML = "You are So Low!!😁";
      }

    }


  });


  


});
