// dropDownPanes.js

/**       Functions for Drop Down Panes      **/

//// Button Functions ////

function dropDownTradePane() {
  let pane = document.getElementById("dropDownPane");
  let innerPane = document.getElementById("dropDownPaneContent");

  // clear whatever
  innerPane.innerHTML = "";

  let content = "<div id='paneHeader'></div>";
  content += "<div id='paneContent'></div>";

  // add buttons
  content += "<div id='paneButtons'>";
    content += "<button";
    content += " onclick=";
    content += "'sendPaneOutOfView();'>Offer Trade</button>";
    content += "&nbsp;&nbsp;";
    content += "<button onclick='sendPaneOutOfView();'>Cancel</button>";
  content += "</div>";

  // add in content specific to making trades:
  innerPane.innerHTML = content;

  document.getElementById("paneButtons").style.minWidth = "10%";
  document.getElementById("paneButtons").style.margin = "auto";

  disableBodyAndButtons();

  pane.classList.add("dropDown");
  pane.classList.remove("goUp");
}


function dropDownMortgagePane() {
  let pane = document.getElementById("dropDownPane");
  let innerPane = document.getElementById("dropDownPaneContent");
  let content = "<div id='header'></div>";
  content += "<div id='content'></div>";

  // clear whatever
  innerPane.innerHTML = "";

  // add buttons
  content += "<div id='paneButtons'>";
    content += "<button";
    content += " onclick=";
    content += "'sendPaneOutOfView();'>Mortgage</button>";
    content += "&nbsp;&nbsp;";
    content += "<button onclick='sendPaneOutOfView();'>Cancel</button>";
  content += "</div>";

  // add in content specific to mortgage:
  innerPane.innerHTML = content;

  document.getElementById("paneButtons").style.minWidth = "10%";
  document.getElementById("paneButtons").style.margin = "auto";

  disableBodyAndButtons();

  pane.classList.add("dropDown");
  pane.classList.remove("goUp");
}


function dropDownBuyHousesPane() {
  let pane = document.getElementById("dropDownPane");
  let innerPane = document.getElementById("dropDownPaneContent");
  let content = "<div id='paneHeader'></div>";
  content += "<div id='paneContent'></div>";

  // clear whatever
  innerPane.innerHTML = "";

  // add buttons
  content += "<div id='paneButtons'>";
    content += "<button";
    content += " onclick=";
    content += "'sendPaneOutOfView();'>Buy</button>";
    content += "&nbsp;&nbsp;";
    content += "<button onclick='sendPaneOutOfView();'>Cancel</button>";
  content += "</div>";

  // add in content specific to buying houses:
  innerPane.innerHTML = content;

  document.getElementById("paneButtons").style.minWidth = "10%";
  document.getElementById("paneButtons").style.margin = "auto";

  disableBodyAndButtons();

  pane.classList.add("dropDown");
  pane.classList.remove("goUp");
}


// no button for this; giving player a chance to buy a
// property they have landed on:
function dropDownBuyPropertyPane(player) {
  let pane = document.getElementById("dropDownPane");

  let playerSpace = board[player.tileCoordinate];

  document.getElementById("dropDownPaneContent").innerHTML = "";

  // Get space object properties of player's new propety location

  let content = "<div id='paneHeader'>";
    content += `<h4>Do you want to buy ${playerSpace.nameForTextUse}?</h4>`;
  content += "</div>";

  content += "<div id='paneContent'></div>";

  content += "<div id='paneButtons'>";
    content += "<button onclick='activePlayer.buyProperty(board[activePlayer.tileCoordinate]);";
    content += "sendPaneOutOfView();'>Buy!</button>&nbsp;&nbsp;";
    content += "<button onclick='sendPaneOutOfView();'>Pass</button>";
  content +="</div>";
  //  .... HTML content to go here (buttons, property img, etc.)

  document.getElementById("dropDownPaneContent").innerHTML = content;

  document.getElementById("paneButtons").style.minWidth = "10%";
  document.getElementById("paneButtons").style.margin = "auto";

  disableBodyAndButtons();

  pane.classList.add("dropDown");
  pane.classList.remove("goUp");
}


// pane to begin the game, give player option for hot seat or
// ... against 1-3 computer players
function dropDownGameIntro() {
  let pane = document.getElementById("dropDownPane");
  let innerPane = document.getElementById("dropDownPaneContent");

  // clear whatever:
  innerPane.innerHTML = "";

  // add header for top grid area;
  let content = "<div id='paneHeader'> MONOPOLY!</div>";

  // add in main content for game intro:
  content += "<div id='paneContent'></div>";

  // add buttons
  content += "<div id='paneButtons'>";
    content += "<button";
    content += " onclick=";
    content += "'sendPaneOutOfView();'>Let's Go!</button>";
  content += "</div>";

  // add in content specific to making trades:
  innerPane.innerHTML = content;

  let header = document.getElementById("paneHeader").style;
  header.backgroundColor = "#85bb65";
  header.color = "white";
  header.padding = "12px";
  header.fontWeight = "bold";
  header.fontSize = "8em";
  header.minWidth = "15%";
  header.margin = "auto";
  header.fontFamily = "MONOPOLY_INLINE";



  document.getElementById("paneButtons").style.minWidth = "10%";
  document.getElementById("paneButtons").style.margin = "auto";

  disableBodyAndButtons();

  pane.classList.add("dropDown");
  pane.classList.remove("goUp");
}


// send pane back up, out of visibility
function sendPaneOutOfView() {
  let pane = document.getElementById("dropDownPane");
  pane.classList.remove("dropDown");
  pane.classList.add("goUp");

  enableBodyAndButtons()
}
