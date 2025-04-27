var Pre = document.querySelector("#pre");
var Next = document.querySelector("#Next");
//Am selecting the Image Container
var ImageContainer = document.querySelector(".imge-pre");

let imagesLink = [
  "https://images.unsplash.com/photo-1735757608938-7465bf115e7f?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1742787584125-d94d44334047?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fEpwZzZLaWRsLUhrfHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1741200024556-2383648aba85?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUwfEpwZzZLaWRsLUhrfHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1742646895349-93c71c08e693?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU0fEpwZzZLaWRsLUhrfHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1613219332203-8513309bd7a6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDc4fEpwZzZLaWRsLUhrfHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1503431128871-cd250803fa41?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDgzfEpwZzZLaWRsLUhrfHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDg5fEpwZzZLaWRsLUhrfHxlbnwwfHx8fHw%3D",
];
var currentIndex = 0;

// Create 2 function that for NextButton
// sliding For pre

//Create imge  tag for For Loding The Image

let newImg = document.createElement("img");

function ImgLo() {
  newImg.setAttribute("src", imagesLink[currentIndex]);
  //in this Varibel Image array index[0].value will be Store.
  ImageContainer.append(newImg);
}
   Next.addEventListener("click",function(){
       
        if(currentIndex==imagesLink.length-1){
             currentIndex=0;
        }
        else{
              currentIndex++;
        }
        ImgLo();
       
   });
   ImgLo();
   Pre.addEventListener("click",function(){
       
       if(currentIndex==0){
            currentIndex=0;
       }
       else{
             currentIndex--;
       }
       ImgLo();
      
  });