document.querySelector("html").onclick = function () 
    {
        alert("Ouch! Stop poking me!");
    };

let myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

let myImage = document.querySelector("img");

myImage.onclick = function () 
{
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/my-icon.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
};


  
  
    