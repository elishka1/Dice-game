

 let dicescore

 let score = 0

 function roll () {
  dicescore= Math.floor(Math.random() * (6 - 1 + 1) + 1);
  document.getElementById("dicescore").innerHTML = dicescore

  score += dicescore;
  document.getElementById("score").innerHTML = score

if (score>=20) {
    document.getElementById("dicescore").innerHTML = "You Win!"
    score=0
 }

if (dicescore==1) {
    document.getElementById("dice").src="./img/dice1.png";
    document.getElementById("dicescore").innerHTML = "You're Out!"
    score=0
    
}

else if (dicescore==2) {
    document.getElementById("dice").src="./img/dice2.png";
}

else if (dicescore==3) {
    document.getElementById("dice").src="./img/dice3.png";
}

else if (dicescore==4) {
    document.getElementById("dice").src="./img/dice4.png";
}

else if (dicescore==5) {
    document.getElementById("dice").src="./img/dice5.png";
}
else {
    document.getElementById("dice").src="./img/dice6.png";
}

 }

