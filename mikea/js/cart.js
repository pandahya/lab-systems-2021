const cartNum = document.getElementById("cart_num");
let plantNum = sessionStorage.length;
cartNum.innerHTML = `cart (${sessionStorage.length})`;

const menuLogin = document.getElementById("menuLogin");
let loginState = localStorage.getItem("login");

if(loginState === "true"){
    menuLogin.innerHTML = "Hi, Tanvi";
}else if(loginState === "false"){
    menuLogin.innerHTML = "login";
}