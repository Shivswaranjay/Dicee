var Player1 = window.prompt("Enter first player name: ");

var Player2 = window.prompt("Enter second player name: ");


document.querySelectorAll("p")[0].innerHTML = Player1;
document.querySelectorAll("p")[1].innerHTML = Player2;

// Dice 1

var randomNumber1 = Math.floor(Math.random() * 6) + 1; // Random Number between 1 to 6

var randomDice1 = "dice" + randomNumber1 + ".png"; // Dice1.png to Dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDice1);

// Dice 2

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImageSource2 = "dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomDiceImageSource2);

// Winner

if (randomNumber1 > randomNumber2) {
  document.querySelector("h2").innerHTML = "🚩 " + Player1 + "  Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h2").innerHTML = Player2 + "  Wins! 🚩";
} else {
  document.querySelector("h2").innerHTML = "🚩 It's Draw 🚩";
}
