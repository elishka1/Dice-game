

 let dicescore

 let score = 0

 let score2 = 0

 function roll () {
  dicescore= Math.floor(Math.random() * (6 - 1 + 1) + 1);
  document.getElementById("dicescore").innerHTML = dicescore;


  score += dicescore;
  document.getElementById("score").innerHTML = score;
    document.getElementById("p2win").innerHTML = '';
    document.getElementById("p1win").innerHTML = '';

if (score>=20) {
    document.getElementById("dicescore").innerHTML = "Player 1 Wins!"
    score=0
 }

if (dicescore==1) {
    document.getElementById("dice").src="./img/dice1.png";
    document.getElementById("dicescore").innerHTML = "Player 1 is Out!";
    document.getElementById("p2win").innerHTML = "You Win!"
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

 function roll2 () {
    dicescore= Math.floor(Math.random() * (6 - 1 + 1) + 1);
    document.getElementById("dicescore").innerHTML = dicescore
  

    score2 += dicescore;
      document.getElementById("score2").innerHTML = score2
      document.getElementById("p1win").innerHTML = '';
      document.getElementById("p2win").innerHTML = '';
    
    if (score2>=20) {
        document.getElementById("dicescore").innerHTML = "Player 2 Wins!"
        score2=0
     }

    else if (dicescore==1) {
        document.getElementById("dice").src="./img/dice1.png";
        document.getElementById("dicescore").innerHTML = "Player 2 is Out!"
        document.getElementById("p1win").innerHTML = "You Win!"
        score2=0

        
        
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
