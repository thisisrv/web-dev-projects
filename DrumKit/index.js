for (var i = 0; i < document.querySelectorAll("button").length; i++)
    document.querySelectorAll("button")[i].addEventListener("click", function (){
        var buttonName = this.innerHTML;
        makeSound(buttonName);
        keyAnimation(buttonName);
    });


// keyboard key event listener 
document.addEventListener("keydown", function(event){
    // console.log(event.key);
    makeSound(event.key);
    keyAnimation(event.key);
});


//function to play sound for keyboardPress.
function makeSound(key){
    // alert("I got clicked!");
    // now play sound
    var keyName = key;  
    var audio;
    if(keyName === "w")
        audio = new Audio("./sounds/tom-1.mp3");

    else if(keyName === "a"){
        audio = new Audio("./sounds/tom-2.mp3");
    }
    else if(keyName === "s"){
        audio = new Audio("./sounds/tom-3.mp3");
    }
    else if(keyName === "d"){
        audio = new Audio("./sounds/tom-4.mp3");
    }
    else if(keyName === "j"){
        audio = new Audio("./sounds/snare.mp3");
    }
    else if(keyName === "k"){
        audio = new Audio("./sounds/crash.mp3");
    }
    else {
        if(keyName === "l")
            audio = new Audio("./sounds/kick-bass.mp3");
    }

    audio.play();
    
}

function keyAnimation(currentKey){
    var activeKey = document.querySelector("." + currentKey);
    activeKey.classList.add("pressed");

    setTimeout(function(){
        activeKey.classList.remove("pressed");
    }, 100);
    
}