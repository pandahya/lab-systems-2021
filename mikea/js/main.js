const addPlant = document.getElementById("add_plant");
const addToCart = document.getElementsByClassName("add_to_cart");
const cartNum = document.getElementById("cart_num");

let cartItems = [];
let cartPrices = [];

//get number of plants in storage at start
let plantNum = sessionStorage.length - 1;

cartNum.innerHTML = `cart (${sessionStorage.length-1})`;

//for loop to add that number of plants into the array
for(let i=0; i<plantNum; i++){
    cartItems.push("plant");
    cartPrices.push("200");
}

addPlant.onclick = function(){
    cartItems.push("plant");
    cartPrices.push("200");
    sessionStorage.setItem("plant"+cartItems.length, "200");
    // sessionStorage.clear();

    cartNum.innerHTML = `cart (${sessionStorage.length-1})`;

}