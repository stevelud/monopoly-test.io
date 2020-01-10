// player.js

function Player(name, cash) {

  /*    Properties    */
  this.name = name;
  this.cash = cash;   // cash a player has on hand to spend
  this.valueFromOwnedProperties = 0;
  this.tileLocation = "Go";   // name of tile player is on
  this.tileCoordinate = 0;   // integer number of tile player is on (e.g. Go is 0)
  this.propertiesOwned = [];  // array of property names player owns

  this.highlightedClassName = "";  // for styling the current tile location

  /*    Methods     */
  this.movePiece = function() {   // roll dice, land on new space

    const diceRoll = rollDice();
    document.getElementById("buttonText").textContent = "END";
    document.getElementById("rollButton").setAttribute("onclick", "endTurn()");

    // TODO: add/remove class that styles the space of the active player


    // EVENT: you just passed GO:
    if (this.tileCoordinate + diceRoll[0] + diceRoll[1] > 40) {
      console.log("You passed GO! Collect 2 Million!");
      alert("You passed GO! Collect 2 Million!");
      this.receiveMoney(2000000);
    }
    this.setPlayerTileCoordinate(diceRoll[0] + diceRoll[1]);
    this.setPlayerTileLocation(this.tileCoordinate);


    // when player lands on space, cycle through all arrivalEvents functions
    // specific to that space:
    let events = board[activePlayer.getPlayerTileCoordinate()].arrivalEvents;
    for (let event of events) {
      event();
    }

    // for testing purposes:
    console.log(this.name + ", you are now at " + this.tileLocation + ".");
    console.log("You have " + parseCashValue(this.cash) + " to spend.");    
  }

  this.buyProperty = function(propertyID) {
    this.propertiesOwned.push(propertyID);
  }

  this.sendMoney = function(dollarAmount) {   // make payment, lose cash
    this.cash = this.cash - dollarAmount;
  }

  this.receiveMoney = function(dollarAmount) {  // receive payment, get cash
    this.cash = this.cash + dollarAmount;
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



/**   Utility (not in the Monopoly sense) Functions   **/
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
