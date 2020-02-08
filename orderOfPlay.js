// orderOfPlay.js

/*** TESTING PURPOSES: **/

//dropDownGameIntro();

let playerOne = new Player("Steven", 5000000);;
let playerTwo = new Player("Computer", 5000000);
playerOne.highlightedClassName = "playerOnePropertiesStyles";
playerTwo.highlightedClassName = "playerTwoPropertiesStyles";

playerOne.playerClassName = "playerOneProperties";
playerTwo.playerClassName = "playerTwoProperties";


/*** END OF TESTING PURPOSES AREA **/

let activePlayer = playerOne;
document.getElementById("playerOneCash").textContent = "$ " +
  parseCashValue(playerOne.cash);
document.getElementById("playerTwoCash").textContent = "$ " +
  parseCashValue(playerTwo.cash);
updateControlPanel();


/*
const button = document.getElementById("rollButton");
button.addEventListener('click', initiateTurn());
*/

updateControlPanel();

function initiateTurn() {

  // if player is in jail:
    // first, second turn in jail:
      // offer player chance (via drop down pane)...
      // ...to pay $100,000 to get out or roll doubles...
      // ...to get out without paying
    // third turn in jail:
      // player pays $100,000 to get out if doubles are never rolled

  activePlayer.movePiece();

}

function endTurn() {

  updateControlPanel();

  switchPlayer();

  hideDice();

  // update button text and attribute function:
  document.getElementById("buttonText").textContent = "ROLL";
  document.getElementById("rollButton").setAttribute("onclick", "initiateTurn()");

}

// at end of turn, the next player's turn begins:
function switchPlayer() {
  if (activePlayer === playerOne) {
    activePlayer = playerTwo;
  } else { activePlayer = playerOne }
}
