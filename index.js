var randomNumber1=0;
var randomNumber2=0;
while ( randomNumber1 === 0){
    randomNumber1 = Math.round((Math.random())*6);
}
console.log(randomNumber1);

while ( randomNumber2 === 0){
    randomNumber2 = Math.round((Math.random())*6);
}
console.log(randomNumber2);

var randomDiceImage1 = "./images/dice"+randomNumber1+".png";
var randomDiceImage2 = "./images/dice"+randomNumber2+".png";


document.querySelector(".img1").setAttribute("src", randomDiceImage1);
document.querySelector(".img2").setAttribute("src", randomDiceImage2);

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins";
}
else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 wins";
}else{
    document.querySelector("h1").innerHTML = "Draw";
}