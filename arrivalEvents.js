// arrivalEvents.js

// event: landing on GO:
board[0].arrivalEvents.push(
  function() {
    console.log(activePlayer.name + ", you've landed on Go! Congratulations!"
                + " Here is $500,000 plus an EXTRA $500,000!");
    activePlayer.receiveMoney(4000000);
  }
);

// event: landing on income tax space:
board[4].arrivalEvents.push(
  function() {
    console.log(activePlayer.name + ", you must pay $500,000 in income tax!");
    activePlayer.sendMoney(500000);
  }
);

// events for landing on a property tile:
for (let tile of board) {
  if (tile.isProperty) {

    // give player option to buy unowned property:
    tile.arrivalEvents.push(
      function() {
        let tileCoordinate = activePlayer.getPlayerTileCoordinate();
        let tile = board[tileCoordinate];
        if (tile.owner === "no owner" && !tile.mortgaged) {
          dropDownBuyPropertyPane(activePlayer);
          }
        }
    );


    // pay rent on property if necessary:
    tile.arrivalEvents.push(
      function() {
        let otherPlayer = null;
        let cashAmount = 0;
        if (activePlayer === playerOne) {
          otherPlayer = playerTwo;
        } else {
          otherPlayer = playerOne;
        }
        if (tile.owner !== activePlayer && tile.owner !== "no owner" && !tile.mortgaged) {
          if (tile.propertyGroup === "railroad") {
            cashAmount = tile.rentValues[otherPlayer.railRoadsOwned - 1];
          } else {
            cashAmount = tile.rentValues[tile.structures];
          }
          activePlayer.sendMoney(cashAmount);
          otherPlayer.receiveMoney(cashAmount);
          console.log(activePlayer.name + " just paid $" + parseCashValue(cashAmount) + " to " + otherPlayer.name);
          appendChatMessage(activePlayer.name + " just paid $" + parseCashValue(cashAmount) + " to " + otherPlayer.name + ".");
        }
      }
    );


  }
}


// event: landing on "Free Parking"
board[21].arrivalEvents.push(
  function() {
    console.log("You landed on Free Parking. Collect half a million dollars!");
    appendChatMessage(activePlayer.name + " landed on Free Parking. " +
      activePlayer.name + " collects half a million dollars!");
    activePlayer.receiveMoney(500000);
  }
);




// event: landing on "Go To Jail" space
