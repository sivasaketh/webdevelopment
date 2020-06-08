function randomDiceImg(image) {
    var randomNumber1 = Math.random();
    var output = Math.floor(randomNumber1*6)+1

    if (output===1){
        document.getElementsByClassName(image)[0].setAttribute("src","images/dice1.png")
    }
    else if(output===2){
        document.getElementsByClassName(image)[0].setAttribute("src","images/dice2.png")
    }
    else if(output===3){
        document.getElementsByClassName(image)[0].setAttribute("src","images/dice3.png")
    }
    else if(output===4){
        document.getElementsByClassName(image)[0].setAttribute("src","images/dice4.png")
    }
    else if(output===5){
        document.getElementsByClassName(image)[0].setAttribute("src","images/dice5.png")
    }
    else if(output===6){
        document.getElementsByClassName(image)[0].setAttribute("src","images/dice6.png")
    }

    return output;
};
var p1Dice = randomDiceImg("img1");
var p2Dice = randomDiceImg("img2");

if (p1Dice>p2Dice){
    document.querySelector(".container h1").innerHTML = "🎏Player 1 Wins!";
}
else if(p1Dice<p2Dice) {
    document.querySelector(".container h1").innerHTML = "Player 2 Wins!🎏";
}
else {
    document.querySelector(".container h1").innerHTML = "Draw";
}