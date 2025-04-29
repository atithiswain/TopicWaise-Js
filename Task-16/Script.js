

let Clock = document.querySelector(".clock");

function UpdateTime() {
  let RecentTime = new Date();
  //Recnt time Se Sara chize nikal dia Hour Second AND mini;
  let Hour = RecentTime.getHours();
  let Minutes = RecentTime.getMinutes();
  let Second = RecentTime.getSeconds();
  
  let ampm = Hour >= 12 ? 'PM' : 'AM'; 
  let Hr = Hour < 10 ? "0" + Hour : Hour;
  let Min = Minutes < 10 ? "0" + Minutes : Minutes;
  let Sec = Second < 10 ? "0" + Second : Second;
  Clock.innerHTML = ` <h1><span id="hours">${Hr}</span>:<span id="minutes">${Min}</span>:<span id="second">${Sec}</span><span id="Time-zone">${ampm}</span></h1> `;
}
  
setInterval(UpdateTime,1000);