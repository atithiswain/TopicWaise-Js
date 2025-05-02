const apiKey = "e12384ccfd7da64e7e6c4f41c28f07a5";
let city = "Mumbai";
let tem=0;
// We are creaiting this Function for fetching the Data From the API
function ApiCalling() {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log("Weather Data:", data);
      document
        .querySelector("#wetherImg")
        .setAttribute(
          "src",
          `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`

        );
        document.querySelector("#SkyDetails").textContent=data.weather[0].description;
           tem=data.main.temp-273.15;
        document.querySelector("#Deg").textContent=tem.toFixed(1);

        document.querySelector("#Name").textContent=data.name;
        document.querySelector("#windspeed").textContent=data.wind.speed;
        document.querySelector("#humidity").textContent=data.main.humidity;

    })
    .catch(function (error) {
      console.log("Fetch error:", error.message);
    });
}
ApiCalling();

let Btn = document.querySelector("button");
let Input = document.querySelector("input");

Btn.addEventListener("click", function () {
  if (Input.value == "") {
    alert("Enter location");
  } else {
    city = Input.value;
    ApiCalling();
  }
});


