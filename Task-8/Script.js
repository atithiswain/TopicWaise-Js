let Button = document.getElementById("addBtn");
let BabyNumber = document.getElementById("phoneInput");
let UserName = document.getElementById("nameInput");

//!we are creating a Array that Store the object  Of the User info
let NewArr = new Array();
//this Arr will store Eliment Dynamic

Button.addEventListener("click", () => {
  // We are the crediting this for check  if any one the user give correctly the value OR not
  if (BabyNumber.value == "" && UserName.value == "") {
    alert("Pls Bro file the blank of Fuck Up!");
  } else {
    let ContactUseObj = new Object();
    ContactUseObj.UserNm = UserName.value;
    ContactUseObj.PhoneNum = BabyNumber.value;
    NewArr.push(ContactUseObj);

    UserName.value = "";
    BabyNumber.value = "";
    sidebar();
  }
});

function sidebar() {
  let PhoneBook = "";
  NewArr.forEach(function (cont, idx) {
    PhoneBook += `      <div class="contact-card">
            <div class="avatar"><h1>${cont.UserNm.charAt(
              0
            ).toUpperCase()}</h1></div>
            <div class="info">
              <div class="details">
                <h1 class="name">${cont.UserNm}</h1>
                <p class="number">${cont.PhoneNum}</p>
              </div>
              <button class="delete-btn" data-id="${idx}">Delete Contact</button>
            </div>
          </div>
      `;
  });
  document.querySelector("#contactList").innerHTML = PhoneBook;
  Del();
}

function Del() {
  let DELEBtn = document.querySelectorAll(".delete-btn");

  DELEBtn.forEach(function (ele) {
    ele.addEventListener("click", function () {
      let BtnIndex = ele.getAttribute("data-id");
      NewArr.splice(BtnIndex, 1);
      console.log(BtnIndex);
      //Splice(0, eak Remove Hoga jesa hi button par click hoga )
      sidebar();
    });
  });
}
function SEARCHContact() {
  let NewCuter = "";
  let SearchBar = document.querySelector(".Search-box");

  SearchBar.addEventListener("input", function (ele) {
      NewCuter = "";
    let SechArr = NewArr.filter(function (ContactEle) {
      return ContactEle.UserNm.toLowerCase().startsWith(
        SearchBar.value.toLowerCase()
      );
    });
    SechArr.forEach(function (cont, idx) {

      NewCuter += `      <div class="contact-card">
                            <div class="avatar"><h1>${cont.UserNm.charAt(
                              0
                            ).toUpperCase()}</h1></div>
                            <div class="info">
                              <div class="details">
                                <h1 class="name">${cont.UserNm}</h1>
                                <p class="number">${cont.PhoneNum}</p>
                              </div>
                              <button class="delete-btn" data-id="${idx}">Delete Contact</button>
                            </div>
                          </div>
                      `;
    });
    document.querySelector("#contactList").innerHTML =NewCuter;

  });
 
}
SEARCHContact();
