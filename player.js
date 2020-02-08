// player.js

function Player(name, cash) {

  /*    Properties    */
  this.name = name;
  this.cash = cash;   // cash a player has on hand to spend
  this.valueFromOwnedProperties = 0;
  this.tileLocation = "Go";   // name of tile player is on
  this.tileCoordinate = 0;   // integer number of tile player is on (e.g. Go is 0)
  this.propertiesOwned = {
    "brown": [0,2],
    "lightblue": [0,3],
    "purple": [0,3],
    "orange": [0,3],
    "red": [0,3],
    "yellow": [0,3],
    "green": [0,3],
    "darkblue": [0,2],
    "railroads": [0,4],
    "Utilities": [0,2]
  };  // array of property names (eventually objects) player owns
  this.propertiesOwnedNames = [];
  this.monopolies = [];   // array of propertyGroup names as strings
  this.doublesRolled = 0;
  this.jailStatusTurn = 0;   // 1-3 means you can't roll to move; 0 means OK to roll
  this.highlightedClassName = ""; // for animating player movement across the board
  this.playerClassName = "";  // for styling the current tile location

  /*    Methods     */
  this.movePiece = function() {   // roll dice, land on new space

    const diceRoll = rollDice();

    document.getElementById("buttonText").textContent = "END";
    document.getElementById("rollButton").setAttribute("onclick", "endTurn()");

    // disable buttons while animations occur:
    disableButtons();

    // set dice to be visible:
    document.getElementById("dice_alpha").style.display = "inline-block";
    document.getElementById("dice_beta").style.display = "inline-block";


    function beginTurn() {

      // if player is in jail:
        // drop down pane offers player chance to pay to get out
        // OR roll doubles
        // IF doubles fail
          // decrement activePlayer.jailStatusTurn
          // if activePlayer.jailStatusTurn is 0, then pay to get out and
          // continue turn (i.e. roll)

      animateDice(0.2, diceRoll[0] - 1, diceRoll[1] - 1);

      return new Promise(resolve => {
        setTimeout(() => {
          resolve("Dice animation done.");
          appendChatMessage(activePlayer.name + " rolled " + (diceRoll[0] + diceRoll[1]) + ".");
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
          alert("Oh no! Three doubles in a row! That's speeding. Off to jail for " + activePlayer.name + "!");
          appendChat("Oh no! Three doubles in a row! That's speeding. Off to jail for " + activePlayer.name + "!");

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
        }, 1000 + (movementAmount + .5) * 500);
      });
    }

    async function continueTurn() {
      let completeStatus = await movingPiece();
      console.log(completeStatus);
      // activePlayer goes to jail because of three straight double rolls:

      // TODO: add class that styles the location space of the active player

      // EVENT: you just passed GO:
      if (activePlayer.tileCoordinate + diceRoll[0] + diceRoll[1] > 40) {
        console.log(activePlayer.name + " passed GO and collects $500,000!");
        appendChatMessage(activePlayer.name + " passed GO and collects $500,000!");
        activePlayer.receiveMoney(500000);
      }
      activePlayer.setPlayerTileCoordinate(diceRoll[0] + diceRoll[1]);
      activePlayer.setPlayerTileLocation(activePlayer.tileCoordinate);

      // for testing purposes:
      console.log(activePlayer.name + " is now at " + activePlayer.tileLocation + ".");
      appendChatMessage(activePlayer.name + " is now at " + activePlayer.tileLocation + ".");
      console.log("You have " + parseCashValue(activePlayer.cash) + " to spend.");
      console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXX");

      // when player lands on space, cycle through all arrivalEvents functions
      // specific to that space:
      enactTileLocationEvents();
    }
    continueTurn();
  }

  this.buyProperty = function(property) {   // refers to property object

    // make payment, update net worth, property value:
    this.sendMoney(property.propertyValue);
    this.valueFromOwnedProperties += property.propertyValue;
    property.owner = activePlayer;
    document.getElementById(property.spaceID).classList.add(this.playerClassName);

    // send log-message/console.log() confirming purchase:
    console.log(this.name + " just bought " + property.nameForTextUse + " for " + property.propertyValue);
    appendChatMessage(this.name + " just bought " + property.nameForTextUse + " for $" + parseCashValue(property.propertyValue));

    // update player's property list:
    this.addPropertyToPropertiesOwned(property);

    // add to array of readable property names:
    this.propertiesOwnedNames.push(property.nameForTextUse);

    // update contol panel:
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

  // check to see (after every purchase, every trade, every mortgage)
  // ... if player has a monopoly they can build houses on:
  this.checkMonopolyStatuses = function() {
    let statuses = [];
    let props = this.propertiesOwned;
    for (let prop in props) {
      if (props[prop][0] === props[prop][1]) {
        statuses.push(prop);
      }
    }
  }

  this.addPropertyToPropertiesOwned = function(property) {
    let propertyGroup = property.propertyGroup;
    this.propertiesOwned[propertyGroup][0]++;
  }

  this.removePropertyFromPropertiesOwned = function(property) {
    let propertyGroup = property.propertyGroup;
    this.propertiesOwned[propertyGroup][0]--;
  }

  /*    Get and Set Methods   */
  this.setPlayerTileCoordinate = function(positiveInteger) {
    this.tileCoordinate = (this.tileCoordinate + positiveInteger) % 40;
  }

  this.getPlayerTileCoordinate = function() {
    return this.tileCoordinate;
  }

  this.setPlayerTileLocation = function(playerTileCoordinate) {
    this.tileLocation = board[playerTileCoordinate].nameForTextUse;
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
  enableButtons();
}

// return a pair of random numbers:
function rollDice() {
  let diceRoll = [Math.ceil(Math.random() * 6), Math.ceil(Math.random() * 6)]

  // TODO: create animation that simulates dice roll on board,
  // e.g. two spinning die images

  return diceRoll;
}
