const Products = [
  {
    ImageSrc: "./Image/1.png",
    title: "LDO1 Lounge Chair",
    price: 200,
    Id: 1,
  },
  {
    ImageSrc: "./Image/2.png",
    title: "LDO2 Lounge Chair",
    price: 200,
    Id: 2,
  },
  {
    ImageSrc: "./Image/3.png",
    title: "LDO3 Lounge Chair",
    price: 500,
    Id: 3,
  },

  {
    ImageSrc: "./Image/4.png",
    title: "LDO4 Lounge Chair",
    price: 500,
    Id: 4,
  },
  {
    ImageSrc: "./Image/5.png",
    title: "LDO5 Lounge Chair",
    price: 300,
    Id: 5,
  },
  {
    ImageSrc: "./Image/6.png",
    title: "LDO6 Lounge Chair",
    price: 900,
    Id: 6,
  },
  {
    ImageSrc: "./Image/7.png",
    title: "LDO7 Lounge Chair",
    price: 280,
    Id: 7,
  },
  {
    ImageSrc: "./Image/8.png",
    title: "LDO8 Lounge Chair",
    price: 780,
    Id: 8,
  },
];
var   CodeDisplay = document.querySelector(".main");
Products.map(function (Product) {
  let Hello = document.createElement("div");
  Hello.classList.add("product-card");
  Hello.innerHTML = `  <div class="product-image">
          <img src="${Product.ImageSrc}" alt="chair" />
        </div>
        <h1 class="product-title">${Product.title}</h1>
        <p class="product-price"><span>$</span>${Product.price}</p>
        <button class="add-to-cart-btn Btn" data-id="${Product.Id}">Add to Cart</button>`;
  CodeDisplay.appendChild(Hello);
});

var Btn = document.querySelectorAll(".Btn");
let CartPro = [];
Btn.forEach(function (elem) {
  elem.addEventListener("click", function () {
    let DataId = elem.getAttribute("data-id");
    let Product = Products.find(function(ele){
      return ele.Id == DataId;
    });

    //This Is use for Adding Quentity
    let New = CartPro.find(function (ele) {
      return ele.Id == DataId;
    });
    if (New) {
      New.quantity += 1;
      New.totalprice = New.quantity * New.price;
    } else {
      let Extra = {
        ...Product,
        quantity: 1,
        totalprice: Product.price,
      };

      CartPro.push(Extra);
    }
    showEli(CartPro);
  });
});

let Icon = document.querySelector(".cart");
let BtnClose = document.querySelector("#close");
let Page = document.querySelector(".page");
Icon.addEventListener("click", function () {
  Page.style.transform = "translateX(0%)";
});
BtnClose.addEventListener("click", function () {
  Page.style.transform = "translateX(100%)";
});

// FOR showing Product in Cart so

function showEli(pro) {
  let goblin = "";
     let BodyCart=document.querySelector('.card-body')
  pro.forEach(function (PRL) {
                                                   
    goblin += `<div class="cart-item">
  <div class="cart-item-image">
    <img src="${PRL.ImageSrc}" alt="Product" />
  </div>
  <div class="cart-item-info">
    <h1><span class="label">Name:</span> ${PRL.title}</h1>
    <h3><span class="label">Price:</span> $${PRL.totalprice}</h3>
    <h2><span class="label">Quantity:</span> ${PRL.quantity}</h2>
  </div>
</div>`;

  });
  BodyCart.innerHTML=goblin;
}
