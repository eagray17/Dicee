
//function to randomly select image of dice faces 1-6
function rollDice() {
  //Make an array of the 6 image assets
  var diceFaces = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];

  //Make variables to store numbers
  var randomNumber1 = Math.floor(Math.random()*6);
  var randomNumber2 = Math.floor(Math.random()*6);

  //Use randomNumber to choose from the array, and use javascript to replace the src in the HTML file
  document.querySelector(".img1").setAttribute("src", diceFaces[randomNumber1]);
  document.querySelector(".img2").setAttribute("src", diceFaces[randomNumber2]);

  //Compare randomnumbers 1 and 2 to determine winner text
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = '<i class="fa-sharp fa-solid fa-crown"></i>' + ' Player One Wins!';
  }
  else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = 'Player Two Wins! ' + '<i class="fa-sharp fa-solid fa-crown"></i>';
  }
  else {
    document.querySelector("h1").innerHTML = "It's a Draw!";
  }

}

//Stop function from running before all elements are loaded in
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", rollDice);
} else {
  rollDice();
}
