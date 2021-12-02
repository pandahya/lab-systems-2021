const frontDoor = document.getElementById("frontdoor");
const backDoor = document.getElementById("backdoor");
const welcome = document.getElementById("welcome");

//https://codepen.io/am_eu/pen/EgZdaQ
frontDoor.addEventListener("mouseenter", function(){
    welcome.style.opacity = 1;
    backDoor.classList.add("doorOpen");
})
frontDoor.addEventListener("mouseleave", function(){
    welcome.style.opacity = 0;
    backDoor.classList.remove("doorOpen");
})
