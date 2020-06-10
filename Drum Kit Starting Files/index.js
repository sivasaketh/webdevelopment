

var buttonElements = document.querySelectorAll("button")
for (var i=0;i<buttonElements.length;i++){
    buttonElements[i].addEventListener("click", handleClick);
}

function handleClick() {
    alert("Clicked!")
};