var a = Math.floor(Math.random()*6)+1;

var randomP1 = "images/dice" + a + ".png"; //random dice for player 1



var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomP1);



var b = Math.floor(Math.random()*6)+1;

var randomP2 = "images/dice" + b + ".png"; //random dice for player 2

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomP2);


if(a>b){
    document.querySelector("h1").textContent = "Player 1 Wins!!!";
}
else if(b>a){
    document.querySelector("h1").textContent = "Player 2 Wins!!!";
}
