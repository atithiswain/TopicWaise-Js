let inputBox = document.querySelector(".Input-box");
//user se current date aya gaa
let Day = document.querySelector("#Day-con");
let Hours = document.querySelector("#Hours-con");
let Min = document.querySelector("#min-con");
let Sec = document.querySelector("#secs-con");
let Btn = document.querySelector("button");

let init; //this Innit
Btn.addEventListener("click", function () {
  let userValue = new Date(inputBox.value); //use ko kaha ka forword la raha ha ya backWord

 
  // console.log(currentDate);
  if (userValue < new Date()) {
    alert("You Enter the past Date");
  } else {
    let Counter = 1;

    init = setInterval(function () {
       let currentDate = new Date();
      let different = userValue - currentDate;
      console.log(different);
      //65558063
      let Secondcon = Math.floor((different / 1000) % 60);
      let Minutecon = Math.floor((different / 1000 / 60) % 60);
      let Hourcon = Math.floor((different / 1000 / 60 / 60) % 24);
      let Daycon = Math.floor(different / 1000 / 60 / 60 / 24);
       
      
      Day.innerHTML=Daycon;
      Sec.innerHTML=Secondcon;
      Min.innerHTML=Minutecon;
      Hours.innerHTML=Hourcon;      
    }, 1000);
  }
});
