let bool = true;
document.getElementById('applecat').addEventListener("click", function (){ 
    if(bool){
        console.log('hi');
        document.getElementById('apple').style.fill="#ffd500";
    }else{
        console.log('bye');
        document.getElementById('apple').style.fill="#ff3b00";
    }
    bool=!bool;
});
