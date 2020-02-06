// orderOfPlay.js

/*** TESTING PURPOSES: **/

// const inputName = window.prompt("You will be Player One. What is your name?");
let playerOne = new Player("Steven", 5000000);;
let playerTwo = new Player("Computer", 5000000);
// playerOne.tileCoordinate = 35;
// playerTwo.tileCoordinate = 35;

/*** END OF TESTING PURPOSES AREA **/


let activePlayer = playerOne;
document.getElementById("playerOneCash").textContent = "$ " +
  parseCashValue(playerOne.cash);
document.getElementById("playerTwoCash").textContent = "$ " +
  parseCashValue(playerTwo.cash);
updateControlPanel();

playerOne.highlightedClassName = "playerOnePropertiesStyles";
playerTwo.highlightedClassName = "playerTwoPropertiesStyles";

playerOne.playerClassName = "playerOneProperties";
playerTwo.playerClassName = "playerTwoProperties";


/*
const button = document.getElementById("rollButton");
button.addEventListener('click', initiateTurn());
*/


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

// send message from human player via text input:
function sendChatMessage() {
  let message = document.getElementById("sendChatInput");
  if (message.value === "") return;
  appendChatMessage(message.value, activePlayer);
  message.value = "";
}

// send message in the chat log:
function appendChatMessage(message, speaker) {

  let d = new Date();
  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();
  if (h < 10) {
    h = "0" + h.toString();
  }
  if (m < 10) {
    m = "0" + m.toString();
  }
  if (s < 10) {
    s = "0" + s.toString();
  }
  let timeStamp = "(" + h + ":" + m + ":" + s + ")";
  if (arguments.length == 1) {
    speaker = "";
  } else {
    // this line must ultimately change:
    speaker = "&nbsp;<span style='color:white;background-color:red;padding:0 3px;'>" +
      activePlayer.name + "</span>";
  }
  let output = document.getElementById("chatBox");
  output.innerHTML += "<strong>" + timeStamp + "</strong>" + speaker +
   ": " +  message + "<br>";

  scrollToBottom();
}

// scroll to bottom of chatBox:
function scrollToBottom() {
  let scrollBox = document.getElementById("chatBox");
  scrollBox.scrollTop = scrollBox.offsetHeight;
}

// at end of turn, the next player's turn begins:
function switchPlayer() {
  if (activePlayer === playerOne) {
    activePlayer = playerTwo;
  } else { activePlayer = playerOne }
}

// hide the dice before they are rolled by the next player:
function hideDice() {
  document.getElementById("dice_alpha").style.display = "none";
  document.getElementById("dice_beta").style.display = "none";
}

/**         Animation Functions         **/

// animation of rolling dice that settles on the actual rolled number:
function animateDice(multiplier, dieAlphaNumber, dieBetaNumber) {
  let numAlpha1 = document.getElementById("pip_alpha_one");
  let numAlpha2 = document.getElementById("pip_alpha_two");
  let numAlpha3 = document.getElementById("pip_alpha_three");
  let numAlpha4 = document.getElementById("pip_alpha_four");
  let numAlpha5 = document.getElementById("pip_alpha_five");
  let numAlpha6 = document.getElementById("pip_alpha_six");
  let numBeta1 = document.getElementById("pip_beta_one");
  let numBeta2 = document.getElementById("pip_beta_two");
  let numBeta3 = document.getElementById("pip_beta_three");
  let numBeta4 = document.getElementById("pip_beta_four");
  let numBeta5 = document.getElementById("pip_beta_five");
  let numBeta6 = document.getElementById("pip_beta_six");

  function showAlphaSideOne() {
    numAlpha1.style.transform = "translate(20px, 20px)";
    numAlpha2.style.display = "none";
    numAlpha3.style.display = "none";
    numAlpha4.style.display = "none";
    numAlpha5.style.display = "none";
    numAlpha6.style.display = "none";
  }
  function showAlphaSideTwo() {
    numAlpha1.style.transform = "translate(8px, 8px)";
    numAlpha2.style.display = "block";
    numAlpha2.style.transform = "translate(34px, 34px);";
    numAlpha3.style.display = "none";
    numAlpha4.style.display = "none";
    numAlpha5.style.display = "none";
    numAlpha6.style.display = "none";
  }
  function showAlphaSideThree() {
    numAlpha1.style.display = "block";
    numAlpha1.style.transform = "translate(8px, 8px)";
    numAlpha2.style.display = "block";
    numAlpha2.style.transform = "translate(34px, 34px)";
    numAlpha3.style.display = "block";
    numAlpha3.style.transform = "translate(21px, 21px)";
    numAlpha4.style.display = "none";
    numAlpha5.style.display = "none";
    numAlpha6.style.display = "none";
  }
  function showAlphaSideFour() {
    numAlpha1.style.display = "block";
    numAlpha1.style.transform = "translate(8px, 8px)";
    numAlpha2.style.display = "block";
    numAlpha2.style.transform = "translate(34px, 34px)";
    numAlpha3.style.display = "block";
    numAlpha3.style.transform = "translate(34px, 8px)";
    numAlpha4.style.display = "block";
    numAlpha4.style.transform = "translate(8px, 34px)";
    numAlpha5.style.display = "none";
    numAlpha6.style.display = "none";
  }
  function showAlphaSideFive() {
    numAlpha1.style.display = "block";
    numAlpha1.style.transform = "translate(8px, 8px)";
    numAlpha2.style.display = "block";
    numAlpha2.style.transform = "translate(34px, 34px)";
    numAlpha3.style.display = "block";
    numAlpha3.style.transform = "translate(34px, 8px)";
    numAlpha4.style.display = "block";
    numAlpha4.style.transform = "translate(8px, 34px)";
    numAlpha5.style.display = "block";
    numAlpha5.style.transform = "translate(21px, 21px)";
    numAlpha6.style.display = "none";

  }
  function showAlphaSideSix() {
    numAlpha1.style.display = "block";
    numAlpha1.style.transform = "translate(8px, 8px)";
    numAlpha2.style.display = "block";
    numAlpha2.style.transform = "translate(34px, 34px)";
    numAlpha3.style.display = "block";
    numAlpha3.style.transform = "translate(34px, 8px)";
    numAlpha4.style.display = "block";
    numAlpha4.style.transform = "translate(8px, 34px)";
    numAlpha5.style.display = "block";
    numAlpha5.style.transform = "translate(8px, 21px)";
    numAlpha6.style.display = "block";
    numAlpha6.style.transform = "translate(34px, 21px)";
  }

  function showBetaSideOne() {
    numBeta1.style.transform = "translate(20px, 20px)";
    numBeta2.style.display = "none";
    numBeta3.style.display = "none";
    numBeta4.style.display = "none";
    numBeta5.style.display = "none";
    numBeta6.style.display = "none";
  }
  function showBetaSideTwo() {
    numBeta1.style.transform = "translate(8px, 8px)";
    numBeta2.style.display = "block";
    numBeta2.style.transform = "translate(34px, 34px);";
    numBeta3.style.display = "none";
    numBeta4.style.display = "none";
    numBeta5.style.display = "none";
    numBeta6.style.display = "none";
  }
  function showBetaSideThree() {
    numBeta1.style.display = "block";
    numBeta1.style.transform = "translate(8px, 8px)";
    numBeta2.style.display = "block";
    numBeta2.style.transform = "translate(34px, 34px)";
    numBeta3.style.display = "block";
    numBeta3.style.transform = "translate(21px, 21px)";
    numBeta4.style.display = "none";
    numBeta5.style.display = "none";
    numBeta6.style.display = "none";
  }
  function showBetaSideFour() {
    numBeta1.style.display = "block";
    numBeta1.style.transform = "translate(8px, 8px)";
    numBeta2.style.display = "block";
    numBeta2.style.transform = "translate(34px, 34px)";
    numBeta3.style.display = "block";
    numBeta3.style.transform = "translate(34px, 8px)";
    numBeta4.style.display = "block";
    numBeta4.style.transform = "translate(8px, 34px)";
    numBeta5.style.display = "none";
    numBeta6.style.display = "none";
  }
  function showBetaSideFive() {
    numBeta1.style.display = "block";
    numBeta1.style.transform = "translate(8px, 8px)";
    numBeta2.style.display = "block";
    numBeta2.style.transform = "translate(34px, 34px)";
    numBeta3.style.display = "block";
    numBeta3.style.transform = "translate(34px, 8px)";
    numBeta4.style.display = "block";
    numBeta4.style.transform = "translate(8px, 34px)";
    numBeta5.style.display = "block";
    numBeta5.style.transform = "translate(21px, 21px)";
    numBeta6.style.display = "none";

  }
  function showBetaSideSix() {
    numBeta1.style.display = "block";
    numBeta1.style.transform = "translate(8px, 8px)";
    numBeta2.style.display = "block";
    numBeta2.style.transform = "translate(34px, 34px)";
    numBeta3.style.display = "block";
    numBeta3.style.transform = "translate(34px, 8px)";
    numBeta4.style.display = "block";
    numBeta4.style.transform = "translate(8px, 34px)";
    numBeta5.style.display = "block";
    numBeta5.style.transform = "translate(8px, 21px)";
    numBeta6.style.display = "block";
    numBeta6.style.transform = "translate(34px, 21px)";
  }

  let alphaRollList = [showAlphaSideOne, showAlphaSideTwo, showAlphaSideThree, showAlphaSideFour,
    showAlphaSideFive, showAlphaSideSix];
  let betaRollList = [showBetaSideOne, showBetaSideTwo, showBetaSideThree, showBetaSideFour,
    showBetaSideFive, showBetaSideSix];

  let die1 = document.getElementById("dice_alpha");
  let die2 = document.getElementById("dice_beta");

  function blinkYellow() {
    function setYellow() {
      die1.style.border = "2px solid yellow";
      die2.style.border = "2px solid yellow";

    }
    function setBlack() {
      die1.style.border = "2px solid black";
      die2.style.border = "2px solid black";
    }
    setTimeout(setYellow, 200);
    setTimeout(setBlack, 400);
    setTimeout(setYellow, 600);
    setTimeout(setBlack, 800);
    setTimeout(setYellow, 1000);
    setTimeout(setBlack, 1200);
    setTimeout(setYellow, 1400);
    setTimeout(setBlack, 1600);
    setTimeout(setYellow, 1800);
    setTimeout(setBlack, 2000);
  }
  die1.style.display = "inline-block";
  die2.style.display = "inline-block";

  setTimeout(showAlphaSideOne, multiplier * 500);
  setTimeout(showBetaSideThree, multiplier * 500);
  setTimeout(showAlphaSideFive, multiplier * 1000);
  setTimeout(showBetaSideFour, multiplier * 1000);
  setTimeout(showAlphaSideThree, multiplier * 1500);
  setTimeout(showBetaSideTwo, multiplier * 1500);
  setTimeout(showAlphaSideFour, multiplier * 2000);
  setTimeout(showBetaSideSix, multiplier * 2000);
  setTimeout(showAlphaSideFive, multiplier * 2500);
  setTimeout(showBetaSideOne, multiplier * 2500);
  setTimeout(showAlphaSideSix, multiplier * 3000);
  setTimeout(showBetaSideTwo, multiplier * 3000);
  setTimeout(showAlphaSideTwo, multiplier * 3500);
  setTimeout(showBetaSideFour, multiplier * 3500);
  setTimeout(showAlphaSideFour, multiplier * 4000);
  setTimeout(showBetaSideOne, multiplier * 4000);
  setTimeout(showAlphaSideFive, multiplier * 4500);
  setTimeout(showBetaSideSix, multiplier * 4500);
  setTimeout(showAlphaSideSix, multiplier * 5000);
  setTimeout(showBetaSideThree, multiplier * 5000);
  setTimeout(showAlphaSideOne, multiplier * 5500);
  setTimeout(showBetaSideTwo, multiplier * 5500);
  setTimeout(showAlphaSideFour, multiplier * 6000);
  setTimeout(showBetaSideFive, multiplier * 6000);
  setTimeout(showAlphaSideThree, multiplier * 6500);
  setTimeout(showBetaSideFour, multiplier * 6500);
  setTimeout(showAlphaSideOne, multiplier * 7000);
  setTimeout(showBetaSideThree, multiplier * 7000);
  setTimeout(showAlphaSideTwo, multiplier * 8000);
  setTimeout(showBetaSideSix, multiplier * 8000);
  setTimeout(showAlphaSideFour, multiplier * 9000);
  setTimeout(showBetaSideTwo, multiplier * 9000);
  setTimeout(showAlphaSideFive, multiplier * 11000);
  setTimeout(showBetaSideSix, multiplier * 11000);
  setTimeout(showAlphaSideSix, multiplier * 13000);
  setTimeout(showBetaSideFour, multiplier * 13000);
  setTimeout(showAlphaSideOne, multiplier * 16000);
  setTimeout(showBetaSideFive, multiplier * 16000);
  setTimeout(showAlphaSideFour, multiplier * 20000);
  setTimeout(showBetaSideThree, multiplier * 20000);

  setTimeout(alphaRollList[dieAlphaNumber], multiplier * 24000);
  setTimeout(betaRollList[dieBetaNumber], multiplier * 24000);


   // AT THIS POINT: the actual rolled numbers appear
   // and let the borders blink yellow, say three times
   setTimeout(blinkYellow, multiplier * 28000);
}

// animate the movement of a player from one space to another;
// startingSpace and endingSpace are integer arguments:
function animateMovingSpaces(startingCoordinate, endingCoordinate) {

  // conditional statement to see if player passes GO:
  if (endingCoordinate >= 40) {

    let distanceFromGo = 40 - startingCoordinate;

    for (let i = startingCoordinate; i < 40; i++) {
      let space = document.getElementById(board[i].spaceID);
      setTimeout(() => {
        space.classList.add(activePlayer.highlightedClassName);
      }, 0 + (i + .5 - startingCoordinate) * 500);
      setTimeout(() => {
        space.classList.remove(activePlayer.highlightedClassName);
      }, 500 + (i + .5 - startingCoordinate) * 500);
    }
    for (let i = 0; i <= (endingCoordinate - 40); i++) {
      let space = document.getElementById(board[i].spaceID);
      setTimeout(() => {
        space.classList.add(activePlayer.highlightedClassName);
      }, (0 + (i + .5 + distanceFromGo) * 500));
      setTimeout(() => {
        space.classList.remove(activePlayer.highlightedClassName);
      }, (500 + (i + .5 + distanceFromGo) * 500));
    }
  } else {
    for (let i = startingCoordinate; i <= endingCoordinate; i++) {
      let space = document.getElementById(board[i].spaceID);
      setTimeout(() => {
        space.classList.add(activePlayer.highlightedClassName);
      }, 0 + (i + .5 - startingCoordinate) * 500);
      setTimeout(() => {
        space.classList.remove(activePlayer.highlightedClassName);
      }, 500 + (i + .5 - startingCoordinate) * 500);
    }
  }
}

// add house to board (on the "color" class of the space):
// (houseNumber is the number of houses purchase this turn)
function setHousesToBoard(spaceID, houseNumber) {

  // this is the narrow color strip where houses are placed once bought:
  let boardAreaTarget = document.querySelector("#" + spaceID + " .color");

  // create div, append it, for as many houses are being set:
  for (let i = 1; i <= houseNumber; i++) {
    let house = document.createElement("div");
    house.id = "house" + i.toString();
    house.style.width = "0";
    house.style.height = "0";
    house.style.borderTop = "16px solid darkgray"
    house.style.borderLeft = "8px solid transparent";
    house.style.borderRight = "8px solid transparent";

    house.style.display = "inline";

    house.style.float = "left";

    boardAreaTarget.appendChild(house);
  }

}
