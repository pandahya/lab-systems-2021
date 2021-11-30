const door = document.getElementById("door");
const backDoor = document.getElementById("backdoor");
const welcome = document.getElementById("welcome");

//https://codepen.io/am_eu/pen/EgZdaQ
door.addEventListener("mouseenter", function(){
    welcome.style.visibility = "visible";
    door.classList.toggle("doorOpen");
})
door.addEventListener("mouseleave", function(){
    welcome.style.visibility = "hidden";
})
