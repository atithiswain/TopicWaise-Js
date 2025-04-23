let Dis = document.getElementById("Display");
let But = document.getElementById("Add-Btn");
let TaskCon = document.getElementById("task-Container");

let Arr = [];
But.addEventListener("click", function () {
  if (Dis.value == "") {
    alert("Pls Add any Task..");
  } else {
    Arr.push(Dis.value);
    TaskCon.innerHTML = "";
    Ret();
  }
  Dis.value = "";
});

function Ret() {
  for (let i = 0; i < Arr.length; i++) {
    
    TaskCon.innerHTML =

      TaskCon.innerHTML +

      `<div class="task-list">
        
            <div class="Hero">

                <input type="checkbox" class="checkDis" id="Task-in"  data-id="${Arr[i]}" />
    
                <h5>${Arr[i]}</h5>
                
            </div>
    
            <i class="ri-close-circle-line Del" data-id="${i}"></i>

          </div>`;
  }

  let taskBox = document.querySelectorAll("#Task-in");

  TaskCon.addEventListener("change", function (e) {
    if (e.target.classList.contains("checkDis")) {
      let prDev = e.target.closest(".Hero");

      console.log(prDev);

      let H5 = prDev.querySelector("h5");

      if (e.target.checked) {
        H5.style.textDecoration = "line-through";
      } else {
        H5.style.textDecoration = "none";
      }
    }
  });
}

TaskCon.addEventListener("click", function (e) {
  if (e.target.classList.contains("Del")) {
    //  Arr.splice(0,1);
    let Button = e.target;
    let DataIndex = Button.getAttribute("data-id");
    Arr.splice(DataIndex, 1);
    TaskCon.innerHTML = "";
    Ret();
  }
});
