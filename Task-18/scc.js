function newSDetails(Query) {
  let ApiKeyValue = "7a7f0235f0b14aaaaf1ee4d679c53c3f";

  fetch(
    `https://newsapi.org/v2/everything?q=${Query}&apiKey=${ApiKeyValue}`
  )
    .then((data) => data.json())
    .then((data) => {
       createNewsCard(data.articles);
      console.log(data);
    });
}
newSDetails("india");
function createNewsCard(data) {
  let cla = "";
  data.forEach(function (article) {
    cla += `<div data-url="${article.url}" class="card">
  <div class="card-image">
    <img src="${article.urlToImage}" class="card-img" />
  </div>
  <div class="card-content">
    <h1 class="card-title">${article.title}</h1>
    <p class="card-meta">${article.source.name} · 5/10/2023, 1:00:00 PM</p>
    <p class="card-description">${article.description}</p>
  </div>
</div>`;

  });
  document.querySelector(".main").innerHTML=cla;
}
let bar=document.querySelector("#bar");
let Icon=document.querySelector("#icon");
Icon.addEventListener("click",function(){
  newSDetails(bar.value);
                  

})
