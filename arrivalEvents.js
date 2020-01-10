// arrivalEvents.js


// EVENT: landing on GO:
board[0].arrivalEvents.push(
  function() {
    console.log(activePlayer.name + ", you've landed on Go! Congratulations!"
                + " Here is 2 million plus an extra 3 million!");
    alert("You landed on GO! Collect 2 Million!");
    activePlayer.receiveMoney(5000000);
  }
);


// EVENTS: give player a chance to buy property if unowned:
for (let tile of board) {
  if (tile.isProperty) {
    tile.arrivalEvents.push(
      function() {
        let tileCoordinate = activePlayer.getPlayerTileCoordinate();
        let tile = board[tileCoordinate];
        if (tile.owner === null) {
          let answer = prompt("Do you want to buy this property? It costs $" +
            parseCashValue(tile.propertyValue) + ".");
          if (answer === "") {
            activePlayer.sendMoney(tile.propertyValue);
            activePlayer.buyProperty(tile.spaceID);
            tile.owner = activePlayer;
            document.getElementById(tile.spaceID).classList.add(activePlayer.highlightedClassName);
          }
        }
      }
    );
    
    /*
    tile.arrivalEvents.push(
      null
      // check if you have to pay rent;
    ) */
  }

}


// EVENT: landing on "Go To Jail" space
