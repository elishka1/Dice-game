

 let score

 function roll () {
  score= Math.floor(Math.random() * (6 - 1 + 1) + 1);
  document.getElementById("dicescore").innerHTML = score
 }
 
if (dicescore==1) {
    document.getElementById("dice").src="./img/dice1.png";
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


