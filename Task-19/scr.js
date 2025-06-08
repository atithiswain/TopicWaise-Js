let username = document.querySelector("#name");
let useremail = document.querySelector("#email");
let userphone = document.querySelector("#phone");
let userpassword = document.querySelector("#password");
let userconfirmPassword = document.querySelector("#confirmPassword");
let Btn = document.querySelector("button");
let Form = document.querySelector("form");
let NameSection=document.querySelector("#NameSection");
let EmailSection=document.querySelector("#EmailSection");
let PhoneSection=document.querySelector("#PhoneSection");
let PasswordSection=document.querySelector("#PasswordSection");
let confirmPasswordSection=document.querySelector("#confirmPasswordSection");

Form.addEventListener("submit", function (eve) {
  eve.preventDefault();
  checkFormInputs();
});

function checkFormInputs() {
  let PhoneRegex = /^\d{10}$/;
  try {               
    if (
      username.value.trim() === "" ||
      useremail.value.trim() === "" ||
      userphone.value.trim() === "" ||
      userpassword.value.trim() === "" ||
      userconfirmPassword.value.trim() === ""
    ) {
      throw new Error("There are Some  fields are blank");
    }
    if (!userphone.value.match(PhoneRegex)) {
     throw new Error("Invalid Phone Number..");
    }
  } catch (Error) {
    console.log(Error.message);
  }
}
