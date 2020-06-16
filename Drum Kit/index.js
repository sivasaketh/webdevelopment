

var buttonElements = document.querySelectorAll("button");
for (var i=0;i<buttonElements.length;i++)
{
    buttonElements[i].addEventListener("click", function(){
        var buttonLetter = this.innerHTML;
        makeSound(buttonLetter);

        document.querySelector("."+buttonLetter).classList.add("pressed");
        setTimeout(function(){
            document.querySelector("."+buttonLetter).classList.remove("pressed");
        }, 100);      
    })
}

document.addEventListener("keydown", function(event){
    makeSound(event.key);

    document.querySelector("."+event.key).classList.add("pressed");

    setTimeout(function(){
        document.querySelector("."+event.key).classList.remove("pressed");
    }, 100);

})

function makeSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        default:
            alert('Invalid!')
}
}