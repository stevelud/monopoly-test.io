// jqueryFunctions.js

$(document).ready(function(){

  // when you hover over playerOnePanel:
  $("#playerOnePanel").mouseenter(function() {
    $(".playerOneProperties").addClass("playerOnePropertiesStyles");
  });
  $("#playerOnePanel").mouseleave(function() {
    $(".playerOneProperties").removeClass("playerOnePropertiesStyles");
  });
  // when you hover over playerTwoPanel:
  $("#playerTwoPanel").mouseenter(function() {
    $(".playerTwoProperties").addClass("playerTwoPropertiesStyles");
  });
  $("#playerTwoPanel").mouseleave(function() {
    $(".playerTwoProperties").removeClass("playerTwoPropertiesStyles");
  });

  /**
   *    Triggers for Card Display
   */
   let staticNodeListForProperties = [
      ...document.getElementsByClassName('northPropertyTile'),
      ...document.getElementsByClassName('eastPropertyTile'),
      ...document.getElementsByClassName('westPropertyTile'),
      ...document.getElementsByClassName('southPropertyTile')
    ];
   for (let property of staticNodeListForProperties) {
     let id = "#" + property.id;
     $(id).mouseenter(function() {
       let space = returnPropertyObjectFromIndex(property.id);
       let owner;
       let costOrRent;
       let amount;
       if (typeof space.owner === "string") {
         owner = "No Owner"
       } else { owner = space.owner.name; }
       if (owner == "No Owner") {
         costOrRent = "Cost:";
         amount = parseCashValue(space.propertyValue);
       } else {
         costOrRent = "Rent:";
         amount = space.rentValues[0];
       }
       $("#displayedCard").css("display", "grid");
       $("#displayedCard-color").css("background-color", space.propertyGroup);
       $("#displayedCard-empty").html(space.spaceIDAsHTML);
       $("#ownerStatusFromDisplayCard").css("display", "block");
       $("#ownerStatusFromDisplayCard").text("Owner: " + owner);
       $("#valueStatusFromDisplayCard").css("display", "block");
       $("#valueStatusFromDisplayCard").text(costOrRent + " $" + amount);
       // $("#displayedCard-empty").text(board[21].spaceID);  // <- OK: can insert obj props
     });
     $(id).mouseleave(function() {
       $("#displayedCard").css("display", "none");
       $("#displayedCard-empty").html("");
       $("#displayedCard-color").css("background-color", "");
       $("#ownerStatusFromDisplayCard").css("display", "none");
       $("#ownerStatusFromDisplayCard").text("");
       $("#valueStatusFromDisplayCard").css("display", "none");
       $("#valueStatusFromDisplayCard").text("");
     });
   }


   let railroadPropertyList = [
      document.getElementById("ReadingRailroad"),
      document.getElementById("BORailroad"),
      document.getElementById("ShortLineRailroad"),
      document.getElementById("PennsylvaniaRailroad")
   ];
   for (let property of railroadPropertyList) {
     let id = "#" + property.id;
     $(id).mouseenter(function() {
       let space = returnPropertyObjectFromIndex(property.id);
       let img = space.bgImage;
       let owner;
       if (typeof space.owner === "string") {
         owner = "No Owner"
       } else { owner = space.owner.name; }
       $("#displayedCard").css("display", "block");
       $("#displayedCard-color").css("border-bottom", "none");
       $("#displayedCard-image").attr("src", img);

       $("#displayedCard-color").html(space.spaceIDAsHTML);
       $("#displayedCard").css("font-size", ".8em");

       $("#ownerStatusFromDisplayCard").css("display", "block");
       $("#ownerStatusFromDisplayCard").text("Owner: " + owner);
       $("#valueStatusFromDisplayCard").css("display", "block");
       $("#valueStatusFromDisplayCard").text("Value: " + "$" + parseCashValue(space.propertyValue));
     });
     $(id).mouseleave(function() {
       $("#displayedCard").css("display", "none");
       $("#displayedCard-color").css("border-bottom", "1px solid black");
       $("#displayedCard-color").html("");
       $("#displayedCard-image").attr("src", "none");
       $("#displayedCard").css("font-size", "2.2em");

       $("#ownerStatusFromDisplayCard").css("display", "none");
       $("#ownerStatusFromDisplayCard").text("");
       $("#valueStatusFromDisplayCard").css("display", "none");
       $("#valueStatusFromDisplayCard").text("");

     });
   }
});
