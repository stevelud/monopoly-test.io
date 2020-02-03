// player.js

function Player(name, cash) {

  /*    Properties    */
  this.name = name;
  this.cash = cash;   // cash a player has on hand to spend
  this.valueFromOwnedProperties = 0;
  this.tileLocation = "Go";   // name of tile player is on
  this.tileCoordinate = 0;   // integer number of tile player is on (e.g. Go is 0)
  this.propertiesOwned = [];  // array of property names (eventually objects) player owns
  this.doublesRolled = 0;
  this.jailStatusTurn = 0;   // 1-3 means you can't roll to move; 0 means OK to roll
  this.railRoadsOwned = 0;
  this.highlightedClassName = ""; // for animating player movement across the board
  this.playerClassName = "";  // for styling the current tile location

  /*    Methods     */
  this.movePiece = function() {   // roll dice, land on new space
    const diceRoll = rollDice();
    document.getElementById("buttonText").textContent = "END";
    document.getElementById("rollButton").setAttribute("onclick", "endTurn()");

    // disable buttons while animations occur:
    document.getElementById("rollButton").disabled = true;
    document.getElementById("tradeButton").disabled = true;
    document.getElementById("mortgageButton").disabled = true;
    document.getElementById("buyHousesButton").disabled = true;

    // set dice to be visible:
    document.getElementById("dice_alpha").style.display = "inline-block";
    document.getElementById("dice_beta").style.display = "inline-block";

    function beginTurn() {
      animateDice(0.2, diceRoll[0] - 1, diceRoll[1] - 1);
      return new Promise(resolve => {
        setTimeout(() => {
          resolve("Dice animation done.");
          appendChatMessage(activePlayer.name + ", you rolled " + (diceRoll[0] + diceRoll[1]) + ".");
        }, 7000);
      });
    }

    async function movingPiece() {
      let completeStatus = await beginTurn();

      // if third consecutive double is rolled:
        // no movement (or movement animation) is needed
        // player goes straight to jail
        // doubles counter is reset
        // exit this function immediately

      if (diceRoll[0] === diceRoll[1]) {
        activePlayer.doublesRolled++;
        if (activePlayer.doublesRolled === 3) {
          alert("Oh no! Three doubles in a row! That's speeding. Off to jail with you!");
          activePlayer.tileCoordinate = 10;
          activePlayer.jailStatusTurn = 3;
        }
      } else activePlayer.doublesRolled = 0;

      let movementAmount = diceRoll[0] + diceRoll[1];
      console.log(completeStatus);
      let start = activePlayer.getPlayerTileCoordinate();
      animateMovingSpaces(start, start + movementAmount);
      return new Promise(resolve => {
        setTimeout(() => {
          resolve("Movement animation done.");
        }, 500 + (movementAmount + .5) * 500);
      });
    }

    async function continueTurn() {
      let completeStatus = await movingPiece();
      console.log(completeStatus);
      // activePlayer goes to jail because of three straight double rolls:

      // TODO: add class that styles the location space of the active player

      // EVENT: you just passed GO:
      if (activePlayer.tileCoordinate + diceRoll[0] + diceRoll[1] > 40) {
        console.log("You passed GO! Collect $500,000!");
        appendChatMessage("You passed GO! Collect $500,000!");
        activePlayer.receiveMoney(500000);
      }
      activePlayer.setPlayerTileCoordinate(diceRoll[0] + diceRoll[1]);
      activePlayer.setPlayerTileLocation(activePlayer.tileCoordinate);

      // for testing purposes:
      console.log(activePlayer.name + ", you are now at " + activePlayer.tileLocation + ".");
      appendChatMessage(activePlayer.name + ", you are now at " + activePlayer.tileLocation + ".");
      console.log("You have " + parseCashValue(activePlayer.cash) + " to spend.");
      console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXX");

      // when player lands on space, cycle through all arrivalEvents functions
      // specific to that space:
      enactTileLocationEvents();
    }
    continueTurn();
  }

  this.buyProperty = function(property) {   // refers to property object
    this.sendMoney(property.propertyValue);
    this.valueFromOwnedProperties += property.propertyValue;
    property.owner = activePlayer;
    document.getElementById(property.spaceID).classList.add(this.playerClassName);
    console.log(this.name + ", you just bought " + property.spaceID + " for " + property.propertyValue);
    appendChatMessage(this.name + ", you just bought " + property.spaceID + " for $" + parseCashValue(property.propertyValue));
    this.propertiesOwned.push(property);
    if (property.propertyGroup === "railroad") {
      this.railRoadsOwned++;
    }
    updateControlPanel();
  }

  this.mortgageProperty = function(propertyID) {
    let space = returnPropertyIndex(propertyID);
    space.mortgaged = true;
    this.receiveMoney(space.mortgageValue);
    this.changePropertyValue(-space.propertyValue);
  }

  this.unmortgageProperty = function(propertyID) {
    let space = returnPropertyIndex(propertyID);
    space.mortgaged = false;
    this.sendMoney(space.propertyValue);
    this.changePropertyValue(space.propertyValue);
  }

  this.sendMoney = function(dollarAmount) {   // make payment, lose cash
    this.cash = this.cash - dollarAmount;
  }

  this.receiveMoney = function(dollarAmount) {  // receive payment, get cash
    this.cash += dollarAmount;
  }

  this.changePropertyValue = function(dollarAmount) { // enter pos/neg integer
    this.valueFromOwnedProperties += dollarAmount;
  }


  /*    Get and Set Methods   */
  this.setPlayerTileCoordinate = function(positiveInteger) {
    this.tileCoordinate = (this.tileCoordinate + positiveInteger) % 40;
  }

  this.getPlayerTileCoordinate = function() {
    return this.tileCoordinate;
  }

  this.setPlayerTileLocation = function(playerTileCoordinate) {
    this.tileLocation = board[playerTileCoordinate].spaceID;
  }

  this.getPlayerTileLocation = function() {
    return this.tileLocation;
  }

}


/*******   Utility (not in the Monopoly sense) Functions   *******/

// change digit value of cash to human-readable dollar amount:
function parseCashValue(cashAmount) {

  let cashToString = cashAmount.toString();
  if (cashAmount < 1000) return cashToString;
  if (cashAmount < 10000) {
    return cashToString[0] + "," + cashToString.slice(1);
  }
  if (cashAmount < 100000) {
    return cashToString[0] + cashToString[1] + "," + cashToString.slice(2);
  }
  if (cashAmount < 1000000) {
    return cashToString[0] + cashToString[1] + cashToString[2] + "," + cashToString.slice(3);
  }
  if (cashAmount < 10000000) {
    return cashToString[0] + "," + cashToString[1] + cashToString[2] + cashToString[3] +
    "," + cashToString[4] + cashToString[5] + cashToString[6];
  }
  if (cashAmount < 100000000) {
    return cashToString[0] + cashToString[1] + "," + cashToString[2] + cashToString[3] +
    cashToString[4] + "," + cashToString[5] + cashToString[6] + cashToString[7];
  }
  if (cashAmount < 1000000000) {
    return cashToString[0] + cashToString[1] + cashToString[2] + "," + cashToString[3] +
    cashToString[4] + cashToString[5] + "," + cashToString[6] + cashToString[7] +
    cashToString[8];
  }
  // turns cash amount into readable value
  // e.g. parseCashValue(15000000) returns $15,000,000

}

// given a propertyID, return the index in the 'board' array:
function returnPropertyObjectFromIndex(spaceID) {
  for (let space of board) {
    if (space.spaceID === spaceID) return space;
  }
}

// the events to be performed on the active player, as determined by the space
// they are on:
function enactTileLocationEvents() {
  let events = board[activePlayer.getPlayerTileCoordinate()].arrivalEvents;
  for (let event of events) {
    event();
  }
  document.getElementById("rollButton").disabled = false;
  document.getElementById("tradeButton").disabled = false;
  document.getElementById("mortgageButton").disabled = false;
  document.getElementById("buyHousesButton").disabled = false;
}

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

  let playerOneProperties = playerOne.propertiesOwned;
  let playerOnePropertyText = "";
  for (let property of playerOneProperties) {
    playerOnePropertyText += property.spaceID + ", ";
  }
  document.getElementById("playerOneProperties").textContent = playerOnePropertyText;

  let playerTwoProperties = playerTwo.propertiesOwned;
  let playerTwoPropertyText = "";
  for (let property of playerTwoProperties) {
    playerTwoPropertyText += property.spaceID + ", ";
  }
  document.getElementById("playerTwoProperties").textContent = playerTwoPropertyText;
}

// return a pair of random numbers:
function rollDice() {
  let diceRoll = [Math.ceil(Math.random() * 6), Math.ceil(Math.random() * 6)]

  // TODO: create animation that simulates dice roll on board,
  // e.g. two spinning die images

  return diceRoll;
}
