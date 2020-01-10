// orderOfPlay.js


// const inputName = window.prompt("You will be Player One. What is your name?");
let playerOne = new Player("Steven", 15000000);;
let playerTwo = new Player("Computer", 15000000);
let activePlayer = playerOne;
document.getElementById("playerOneCash").textContent = "$ " +
  parseCashValue(playerOne.cash);
document.getElementById("playerTwoCash").textContent = "$ " +
  parseCashValue(playerTwo.cash);

playerOne.highlightedClassName = "playerOneProperties";
playerTwo.highlightedClassName = "playerTwoProperties";


/*
const button = document.getElementById("rollButton");
button.addEventListener('click', initiateTurn());
*/


function initiateTurn() {
  activePlayer.movePiece();
  if (activePlayer === playerOne) {
    activePlayer = playerTwo;
  } else { activePlayer = playerOne }
}

function endTurn() {
  // Update control panel for both players:
  document.getElementById("playerOneCash").textContent = "$ " +
    parseCashValue(playerOne.cash);
  document.getElementById("playerTwoCash").textContent = "$ " +
    parseCashValue(playerTwo.cash);

  let playerOneProperties = playerOne.propertiesOwned;
  let playerOnePropertyText = "";
  for (let property of playerOneProperties) {
    playerOnePropertyText += property + ", ";
  }
  document.getElementById("playerOneProperties").textContent = playerOnePropertyText;

  let playerTwoProperties = playerTwo.propertiesOwned;
  let playerTwoPropertyText = "";
  for (let property of playerTwoProperties) {
    playerTwoPropertyText += property + ", ";
  }

  // update button text and attribute function:
  document.getElementById("playerTwoProperties").textContent = playerTwoPropertyText;
  document.getElementById("buttonText").textContent = "ROLL";
  document.getElementById("rollButton").setAttribute("onclick", "initiateTurn()");


}
