var heading = document.querySelector("h1");

var player1Die = document.querySelector(".img1");
var player2Die = document.querySelector(".img2");

function rollDie() {
  return 1 + Math.floor(Math.random() * 6);
}

function displayDie(player, dieResult) {
  player.setAttribute("src", "./images/dice" + dieResult + ".png");
}

var dieOne = rollDie();
var dieTwo = rollDie();

if (dieOne > dieTwo) {
  heading.innerHTML = "Player 1 Wins";
} else if (dieOne < dieTwo) {
  heading.innerHTML = "Player 2 Wins";
} else {
  heading.innerHTML = "Draw";
}

displayDie(player1Die, dieOne);
displayDie(player2Die, dieTwo);
