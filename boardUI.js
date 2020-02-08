// boardUI.js

/** Board, Control Panel, and Message Log Interactions **/


//// Board UI

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

// dim the body of the page and kill the button functionality:
function disableBodyAndButtons() {
  document.getElementsByTagName("main")[0].style.opacity = .3;
  disableButtons();
}

// reset board opacity and enable button functionality:
function enableBodyAndButtons() {
  document.getElementsByTagName("main")[0].style.opacity = 1;
  enableButtons();
}

// enable all buttons:
function enableButtons() {
  document.getElementById("rollButton").disabled = false;
  document.getElementById("tradeButton").disabled = false;
  document.getElementById("mortgageButton").disabled = false;
  document.getElementById("buyHousesButton").disabled = false;
}

// disable all buttons:
function disableButtons() {
  document.getElementById("rollButton").disabled = true;
  document.getElementById("tradeButton").disabled = true;
  document.getElementById("mortgageButton").disabled = true;
  document.getElementById("buyHousesButton").disabled = true;
}

// hide the dice before they are rolled by the next player:
function hideDice() {
  document.getElementById("dice_alpha").style.display = "none";
  document.getElementById("dice_beta").style.display = "none";
}



////  Message Log UI
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



//// Control Panel UI
// update control panel for both players:
function updateControlPanel() {
  document.getElementById("playerOneCash").textContent = "$" +
    parseCashValue(playerOne.cash);
  document.getElementById("playerTwoCash").textContent = "$" +
    parseCashValue(playerTwo.cash);
  document.getElementById("playerOnePropertyValue").textContent = "$" +
    parseCashValue(playerOne.valueFromOwnedProperties);
  document.getElementById("playerTwoPropertyValue").textContent = "$" +
    parseCashValue(playerTwo.valueFromOwnedProperties);
  document.getElementById("playerOneNetWorth").textContent = "$" +
    parseCashValue(playerOne.valueFromOwnedProperties + playerOne.cash);
  document.getElementById("playerTwoNetWorth").textContent = "$" +
    parseCashValue(playerTwo.valueFromOwnedProperties + playerTwo.cash);

  let playerOnePropertyText = "";
  for (let property of playerOne.propertiesOwnedNames) {
    playerOnePropertyText += property + ", ";
  }
  document.getElementById("playerOneProperties").textContent = playerOnePropertyText;

  let playerTwoPropertyText = "";
  for (let property of playerTwo.propertiesOwnedNames) {
    playerTwoPropertyText += property + ", ";
  }
  document.getElementById("playerTwoProperties").textContent = playerTwoPropertyText;
}
