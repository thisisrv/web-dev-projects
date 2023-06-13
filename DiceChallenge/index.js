// create a random number for left image
var randomNumber1 = Math.floor((Math.random() * 6) + 1);

// Now changing the image src according to randomNumber1 in left image
var newImageNameLeft = "./images/dice" + randomNumber1 + ".png";
document.getElementsByClassName("img1")[0].src = newImageNameLeft;



// create a random number for right image
var randomNumber2 = Math.floor((Math.random() * 6) + 1);

// Now changing the image src according to randomNumber1 in left image
var newImageNameRight = "./images/dice" + randomNumber2 + ".png";
document.getElementsByClassName("img2")[0].src = newImageNameRight;



//changing heading 
if(randomNumber1 === randomNumber2)
    document.querySelector(".container h1").innerHTML = "Draw!";

else if(randomNumber1 > randomNumber2)
document.querySelector(".container h1").innerHTML = "Player 1 Wins!";

else 
document.querySelector(".container h1").innerHTML = "Player 2 Wins!";

