// player.js

function Player(name, cash) {

  /*    Properties    */
  this.name = name;
  this.cash = cash;   // cash a player has on hand to spend
  this.valueFromOwnedProperties = 0;
  this.tileLocation = "Go";   // name of tile player is on
  this.tileCoordinate = 0;   // integer number of tile player is on (e.g. Go is 0)
  this.propertiesOwned = [];  // array of property names player owns
  this.doublesRolled = 0;
  this.jailStatusTurn = 0;   // 1-3 means you can't roll to move; 0 means OK to roll
  this.railRoadsOwned = 0;
  this.highlightedClassName = "";  // for styling the current tile location

  /*    Methods     */
  this.movePiece = function() {   // roll dice, land on new space
    const diceRoll = rollDice();
    document.getElementById("buttonText").textContent = "END";
    document.getElementById("rollButton").setAttribute("onclick", "endTurn()");

    document.getElementById("dice_alpha").style.display = "inline-block";
    document.getElementById("dice_beta").style.display = "inline-block";

    function beginTurn() {
      animateDice(0.2, diceRoll[0] - 1, diceRoll[1] - 1);
      return new Promise(resolve => {
        setTimeout(() => {
          resolve("Dice animation done.");
        }, 6000);
      });
    }
    async function continueTurn() {
      let completeStatus = await beginTurn();
      console.log(completeStatus);
      // activePlayer goes to jail because of three straight double rolls:
      if (diceRoll[0] === diceRoll[1]) {
        activePlayer.doublesRolled++;
        if (activePlayer.doublesRolled === 3) {
          alert("Oh no! Three doubles in a row! That's speeding. Off to jail with you!");
          activePlayer.tileCoordinate = 10;
          activePlayer.jailStatusTurn = 3;
        }
      } else activePlayer.doublesRolled = 0;

      // TODO: add class that styles the location space of the active player

      // EVENT: you just passed GO:
      if (activePlayer.tileCoordinate + diceRoll[0] + diceRoll[1] > 40) {
        console.log("You passed GO! Collect 2 Million!");
        alert("You passed GO! Collect 2 Million!");
        this.receiveMoney(2000000);
      }
      activePlayer.setPlayerTileCoordinate(diceRoll[0] + diceRoll[1]);
      activePlayer.setPlayerTileLocation(activePlayer.tileCoordinate);

      // for testing purposes:
      console.log(activePlayer.name + ", you are now at " + activePlayer.tileLocation + ".");
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
    document.getElementById(property.spaceID).classList.add(this.highlightedClassName);
    console.log(this.name + ", you just bought " + property.spaceID + " for " + property.propertyValue);
    updateControlPanel();
    this.propertiesOwned.push(property);
    if (property.propertyGroup === "railroad") {
      this.railRoadsOwned++;
    }
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
    this.cash = this.cash + dollarAmount;
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


/**  COMMANDS  **/

function rollDice() {
  let diceRoll = [Math.ceil(Math.random() * 6), Math.ceil(Math.random() * 6)]

  // TODO: create animation that simulates dice roll on board,
  // e.g. two spinning die images

  return diceRoll;
}



/*******   Utility (not in the Monopoly sense) Functions   *******/

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
}
