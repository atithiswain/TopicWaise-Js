let input = document.querySelector("#inp");
let btn = document.querySelector("button");
let Search = document.querySelector("#search");
let crose = document.querySelector("#close");
let card = document.querySelector(".card");

//  Select
   
function DataCall(nam) {
  fetch(`https://api.github.com/users/${nam}`)
    .then((res) => res.json())
    .then((data) => {
      UpdateUI(nam, data);
      console.log(data);
    });
}

Search.addEventListener("click", function () {
  DataCall(input.value);
  //   card.innerHTML="";
});


function UpdateUI(userName, data) {

  card.innerHTML = "";
  let profile = document.createElement("div");
  let stats = document.createElement("div");
  stats.classList.add(
    "bg-zinc-950",
    "w-2/3",
    "p-3",
    "rounded-xl",
    "border-2",
    "border-zinc-600"
  );
  profile.classList.add(
    "bg-zinc-950",
    "w-72",
    "p-3",
    "rounded-xl",
    "border-2",
    "border-zinc-600"
  );
  profile.innerHTML = ` <div class="bg-zinc-950 w-72 p-3 rounded-xl border-2 border-zinc-600">
                    <div id="img_Container" class="h-60 bg-zinc-700 rounded-lg overflow-hidden">
                        <img class="h-full w-full object-center"
                            src="${data.avatar_url}" alt="">
                    </div>
                    <div
                        class="relative h-[36vh] w-full mt-2 text-left flex flex-col justify-between items-start gap-3">
                        <div class="py-1.5 w-full">
                            <h1 class="text-3xl tracking-tighter">${
                              data.login
                            }</h1>
                            <p class="mb-2 mt-2 leading-tight text-zinc-400 font-light">${
                              data.bio
                            }
                            </p>
                            <div>
                                <div class="flex items-start">
                                    <h1 class="text-sm text-zinc-400 pl-1"><span><i class="ri-group-line"></i></span>
                                        <span>${data.followers}</span> followers</h1> <span class="px-1 text-sm text-zinc-400"> ·
                                    </span>
                                    <h1 class="text-sm text-zinc-400"><span>${data.following}</span> following</h1>
                                </div>
                                <div>
                                    <h1 class="text-sm text-zinc-400 pl-1"><span><i
                                                class="ri-map-pin-2-line"></i></span> ${data.location  ||"-"}</h1>
                                    <h1 class="text-sm text-zinc-400 pl-1"><span><i class="ri-global-line"></i></span>
  ${data.blog ||"-"}</h1>
                                </div>
                            </div>
                        </div>

                        <button id="visitProfile"
                            class="w-full bg-zinc-800 border border-zinc-600 hover:bg-zinc-700 text-lg rounded-xl py-2 mt-4">Visit
                            Profile</button>
                    </div>
                </div>
                `;
  stats.innerHTML = `<div class="bg-zinc-950 w-2/3 p-3 rounded-xl border-2 border-zinc-600">
                    <div id="stats" class="w-full flex flex-col gap-3">
                        <img class="w-full rounded-lg"
                        src="https://github-readme-stats.vercel.app/api?username=${userName}&hide_border=true&theme=dark&show_icons=true"
                        alt="">
                        <img class="w-full rounded-lg"
                        src="https://streak-stats.demolab.com/?user=${userName}&theme=dark&hide_border=true&mode=weekly"
                        alt="">
                        <img class="w-full h-40 rounded-lg"
                            src="https://github-readme-stats.vercel.app/api/top-langs/?username=${userName}&hide_progress=true&theme=dark&hide_border=true"
                            alt="">
                    </div>
          </div> `;
  card.appendChild(profile);
  card.appendChild(stats);
  let visitProfile=document.querySelector("#visitProfile");
  visitProfile.addEventListener("click",function(){
       window.open(data.html_url);
  })
}
