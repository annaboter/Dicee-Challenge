// random number for img1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage1 = "dice" + randomNumber1 + ".png";
var randomImageSource1 = "./images/" + randomDiceImage1;
// random number for img2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "./images/" + randomDiceImage2;
// select both img tags
var image1 = document.getElementsByClassName("img1")[0];
var image2 = document.getElementsByClassName("img2")[0];
// set the src attribute of both img tags
image1.setAttribute("src", randomImageSource1);
image2.setAttribute("src", randomImageSource2);
// select the h1 tag
var h1 = document.querySelector("h1");
// change the text of the h1 tag depending on the outcome
if (randomNumber1 > randomNumber2) {
  h1.innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  h1.innerHTML = "Player 2 Wins! 🚩";
} else { // if it's a draw
  h1.innerHTML = "Draw!";
}
