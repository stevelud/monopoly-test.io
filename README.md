<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Monopoly</title>

  <link href="" rel="stylesheet">

  <!-- jQuery plugin -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>

  <script src="ui.js"></script>

  <script src="boardState.js"></script>

  <script>


    $(document).ready(function(){

      // when you hover over playerOnePanel:
      $("#playerOnePanel").mouseenter(function() {
        $(".playerOneProperties").addClass("playerOnePropertiesStyles");
      });
      $("#playerOnePanel").mouseleave(function() {
        $(".playerOneProperties").removeClass("playerOneProperties");
      });
      // when you hover over playerTwoPanel:
      $("#playerTwoPanel").mouseenter(

      );
      $("#playerTwoPanel").mouseleave(

      );


    });

  </script>

  <style>
    * { margin: 0; padding: 0; }

    /**   Header Styling   **/
    header {
      width:100%;
      background-color:#85bb65;
      color:white;
      height:100px;
      margin-bottom:45px;
      text-align:center;
      font-family:sans-serif;
      font-family:MONOPOLY_INLINE;
    }
    h1 {
      line-height:100px;
      font-size:3em;
    }

    /**   Content Styling  **/
    main {
      width:80%;
      max-width:975px;
      margin:auto;
      display:grid;
      grid-template-columns: auto auto;
      grid-template-rows: auto;
      grid-gap: 15px;
      */
    }

    @font-face {
      font-family: MONOPOLY_INLINE;
      src: url(MONOPOLY_INLINE.ttf);
    }



    /**   Board Styling    **/

    #boardWrapper {
      display:inline-block;
      max-width:575px;
    }

        #board {
          font-family:"MONOPOLY_INLINE";
          text-align:center;
          width:100%;
          display:grid;
          grid-template-columns: 75px 45px 45px 45px 45px 45px 45px 45px 45px 45px 75px;
          grid-template-rows: 75px 45px 45px 45px 45px 45px 45px 45px 45px 45px 75px;
          grid-gap:0px;
          grid-template-areas: "cornerTile tile tile tile tile tile tile tile tile tile cornerTile"
                                "tile nonTile nonTile nonTile nonTile nonTile nonTile nonTile nonTile nonTile nonTile tile"

                                "tile nonTile nonTile nonTile buttonTile buttonTile buttonTile nonTile nonTile nonTile nonTile tile"

                                "tile nonTile nonTile nonTile nonTile nonTile nonTile nonTile nonTile nonTile nonTile tile"

                                "tile nonTile nonTile displayTile displayTile displayTile displayTile displayTile nonTile nonTile nonTile tile"
                                "tile nonTile nonTile displayTile displayTile displayTile displayTile displayTile nonTile nonTile nonTile tile"
                                "tile nonTile nonTile displayTile displayTile displayTile displayTile displayTile nonTile nonTile nonTile tile"

                                "tile nonTile nonTile nonTile nonTile nonTile nonTile nonTile nonTile nonTile nonTile tile"
                                "tile nonTile nonTile nonTile nonTile nonTile nonTile nonTile nonTile nonTile nonTile tile"
                                "tile nonTile nonTile nonTile nonTile nonTile nonTile nonTile nonTile nonTile nonTile tile"
                               "cornerTile tile tile tile tile tile tile tile tile tile cornerTile";
        }

        .northPropertyTile {
          display:grid;
          grid-template-rows:75% 25%;
          grid-template-columns:100%;
          grid-template-areas:"empty" "color";
          border:1px solid black;
        }
        .eastPropertyTile {
          display:grid;
          grid-template-columns:25% 75%;
          grid-template-rows:100%;
          grid-template-areas:"color" "empty";
        }
        .southPropertyTile {
          display:grid;
          grid-template-rows:25% 75%;
          grid-template-columns:100%;
          grid-template-areas:"color" "empty";
        }
        .westPropertyTile {
          display:grid;
          grid-template-columns:75% 25%;
          grid-template-rows:100%;
          grid-template-areas:"empty" "color";
        }
        .cornerTile {
          border:1px solid black;
          text-align:center;
        }
        .nonTile {
          background-color:skyblue;
        }


        .northTile, .northPropertyTile {
          border:1px solid black;
          border-width:1px 1px 1px 0;
        }
        .eastTile, .eastPropertyTile {
          border:1px solid black;
          border-width:0 1px 1px 1px;
        }
        .southTile, .southPropertyTile {
          border:1px solid black;
          border-width:1px 0 1px 1px;
        }
        .westTile, .westPropertyTile {
          border:1px solid black;
          border-width:1px 1px 0 1px;
        }
        .tile:hover, .cornerTile:hover {
          border:2px solid yellow;
          cursor:pointer;
          transform:translate(4px, -4px);
          box-shadow:-5px 5px 0 0 dimgray;
        }


    /**   When the mouse hovers over player panels:  **/

        .playerOnePropertiesStyles {
          border:2px solid red;
          transform:translate(4px, -4px);
          box-shadow:-5px 5px 0 0 dimgray;
        }

        .playerTwoPropertiesStyles {
          border:2px solid blue;
          transform:translate(4px, -4px);
          box-shadow:-5px 5px 0 0 dimgray;
        }


    /**   Text transforms for property tiles   **/
        .southPropertyTile .empty {
          padding-top:0;
          font-size:.3em;
          text-transform:uppercase;
        }
        .eastPropertyTile .empty {
          transform: rotate(270deg);
          font-size:.3em;
          text-transform:uppercase;
        }
        .westPropertyTile .empty {
          transform: rotate(90deg);
          font-size:.3em;
          text-transform:uppercase;
        }
        .northPropertyTile .empty {
          transform: rotate(180deg);
          font-size:.3em;
          text-transform:uppercase;
        }


    /**   Control Panel Styling   **/


      #controlPanel {
        font-family:MONOPOLY_INLINE, sans-serif, monospace;
        max-width:400px;
        min-height:535px;
        height:100%;
        border:1px solid black;
        display:inline-block;
        display:grid;
        grid-template-columns: 400px;
        grid-template-rows:50% 50%;
        grid-template-areas: "playerPanel" "playerPanel";
      }

      .playerPanel {
        max-width:100%;
      }

      .playerPanel h2 {
        color:white;
        background-color:#85bb65;
        max-width:100%;
        padding:5px;
      }

      #playerOnePanel:hover {
        border:2px solid red;
      }

      #playerTwoPanel:hover {
        border:2px solid blue;
      }



    /**   Miscellaneous Styling   **/
      img {
        width:100%;
        height:100%;
      }

      button {
        border-radius:5px;
      }

      button:hover {
        cursor:pointer;
        background-color:lightgray;
      }

      #displayedCard {
        display:none;
        width:45px;
        height:75px;
        border:1px solid black;
        transform:translate(12px, 8px);
      }

      /*    Footer Styling    */
      footer {
        font-family:MONOPOLY_INLINE;
        width:100%;
        height:100px;
        background-color:#85bb65;
        color:white;
        text-align:center;
        line-height:100px;
        font-size:2em;
        margin-top:45px;
      }

  </style>

</head>
<body>

  <header><h1>MONOPOLY!</h1></header>

  <main>

    <div id="boardWrapper">

      <div id="board">

      <!-- Monopoly board starts -->

      <div class="cornerTile" style="border-bottom:0;"><img src="images/freeParking.jpeg" style="width:100%;height:100%;" alt="Free Parking"></div>
      <div class="tile northPropertyTile">
        <div class="empty">Kentucky<br>Avenue</div>
        <div class="color" style="background-color:red;border-top:1px solid black;"></div>
      </div>
      <div class="tile northTile"><img src="images/chance_north.jpg" alt="Chance"></div>
      <div class="tile northPropertyTile">
        <div class="empty">Indiana<br>Avenue</div>
        <div class="color" style="background-color:red;border-top:1px solid black;"></div>
      </div>
      <div class="tile northPropertyTile">
        <div class="empty">Illinois<br>Avenue</div>
        <div class="color" style="background-color:red;border-top:1px solid black;"></div>
      </div>
      <div class="tile northTile"><img src="images/railroad_north.jpeg" alt="Railroad"></div>
      <div class="tile northPropertyTile">
        <div class="empty">Atlantic<br>Avenue</div>
        <div class="color" style="background-color:yellow;border-top:1px solid black;"></div>
      </div>
      <div class="tile northPropertyTile">
        <div class="empty">Ventnor<br>Avenue</div>
        <div class="color" style="background-color:yellow;border-top:1px solid black;"></div>
      </div>
      <div class="tile northTile"><img src="images/water_utility.png" alt="Water Utility"></div>
      <div class="tile northPropertyTile">
        <div class="empty">Marvin<br>Gardens</div>
        <div class="color" style="background-color:yellow;border-top:1px solid black;"></div>
      </div>
      <div class="cornerTile" style="border-left:0;"><img src="images/goToJail.jpeg" style="width:100%;height:100%;" alt="Go To Jail"></div>

      <div class="tile westPropertyTile">
        <div class="empty">New York<br>Avenue</div>
        <div class="color" style="background-color:orange;border-left:1px solid black;"></div>
      </div>
      <div class="nonTile"></div>
      <div class="nonTile"></div>
      <div class="nonTile"></div>
      <div class="nonTile"></div>
      <div class="nonTile"></div>
      <div class="nonTile"></div>
      <div class="nonTile"></div>
      <div class="nonTile"></div>
      <div class="nonTile"></div>
      <div class="tile eastPropertyTile">
        <div class="color" style="background-color:green;"></div>
        <div class="empty">Pacific<br>Avenue</div>
      </div>

      <div class="tile westPropertyTile">
        <div class="empty">Tennessee<br>Avenue</div>
        <div class="color" style="background-color:orange;border-left:1px solid black;"></div>
      </div>
      <div class="nonTile"></div>
      <div class="nonTile"></div>
      <div class="nonTile"></div>
      <div class="buttonTile"></div>
      <div class="buttonTile">
        <button style="width:325%;height:110%;transform:translateX(-50px);font-size:2em;" onclick="rollDice();">ROLL</button>
      </div>
      <div class="buttonTile"></div>
      <div class="nonTile"></div>
      <div class="nonTile"></div>
      <div class="nonTile"></div>
      <div class="tile eastPropertyTile">
        <div class="color" style="background-color:green;"></div>
        <div class="empty">North<br>Carolina<br>Avenue</div>
      </div>

      <div class="tile westTile"><img src="images/community_chest_west.jpeg" alt="Community Chest"></div>
      <div class="nonTile"></div>
      <div class="nonTile"></div>
      <div class="nonTile"></div>
      <div class="nonTile"></div>
      <div class="nonTile"></div>
      <div class="nonTile"></div>
      <div class="nonTile"></div>
      <div class="nonTile"></div>
      <div class="nonTile"></div>
      <div class="tile eastTile"><img src="images/community_chest_east.jpeg" alt="Community Chest"></div>

      <div class="tile westPropertyTile">
        <div class="empty">St.James<br>Place</div>
        <div class="color" style="background-color:orange;border-left:1px solid black;"></div>
      </div>
      <div class="nonTile"></div>
      <div class="nonTile"></div>
      <div class="displayTile">
        <div id="displayedCard"></div>
      </div>
      <div class="displayTile"></div>
      <div class="displayTile"></div>
      <div class="displayTile"></div>
      <div class="displayTile"></div>
      <div class="nonTile"></div>
      <div class="nonTile"></div>
      <div class="tile eastPropertyTile">
        <div class="color" style="background-color:green;"></div>
        <div class="empty">Penns-<br>ylvania<br>Avenue</div>
      </div>

      <div class="tile westTile"><img src="images/railroad.jpeg" alt="Railroad"></div>
      <div class="nonTile"></div>
      <div class="nonTile"></div>
      <div class="displayTile"></div>
      <div class="displayTile"></div>
      <div class="displayTile"></div>
      <div class="displayTile"></div>
      <div class="displayTile"></div>
      <div class="nonTile"></div>
      <div class="nonTile"></div>
      <div class="tile eastTile"><img src="images/railroad.jpeg" alt="Railroad"></div>

      <div class="tile westPropertyTile">
        <div class="empty">Virgina<br> Avenue</div>
        <div class="color" style="background-color:purple;"></div>
      </div>
      <div class="nonTile"></div>
      <div class="nonTile"></div>
      <div class="displayTile"></div>
      <div class="displayTile"></div>
      <div class="displayTile"></div>
      <div class="displayTile"></div>
      <div class="displayTile"></div>
      <div class="nonTile"></div>
      <div class="nonTile"></div>
      <div class="tile eastTile"><img src="images/chance_east.jpg" alt="Chance"></div>

      <div class="tile westPropertyTile">
        <div class="empty">States<br>Avenue</div>
        <div class="color" style="background-color:purple;"></div>
      </div>
      <div class="nonTile"></div>
      <div class="nonTile"></div>
      <div class="nonTile"></div>
      <div class="nonTile"></div>
      <div class="nonTile"></div>
      <div class="nonTile"></div>
      <div class="nonTile"></div>
      <div class="nonTile"></div>
      <div class="nonTile"></div>
      <div class="tile eastPropertyTile">
        <div class="color" style="background-color:darkblue;"></div>
        <div class="empty">Park<br>Place</div>
      </div>

      <div class="tile westTile"><img src="images/electric_company.jpg" alt="Electric Company"></div>
      <div class="nonTile"></div>
      <div class="nonTile"></div>
      <div class="nonTile"></div>
      <div class="nonTile"></div>
      <div class="nonTile"></div>
      <div class="nonTile"></div>
      <div class="nonTile"></div>
      <div class="nonTile"></div>
      <div class="nonTile"></div>
      <div class="tile eastTile"><img src="images/luxury_tax.png" alt="Luxury Tax"></div>

      <div class="tile westPropertyTile">
        <div class="empty">St.Charles<br>Place</div>
        <div class="color" style="background-color:purple;"></div>
      </div>
      <div class="nonTile"></div>
      <div class="nonTile"></div>
      <div class="nonTile"></div>
      <div class="nonTile"></div>
      <div class="nonTile"></div>
      <div class="nonTile"></div>
      <div class="nonTile"></div>
      <div class="nonTile"></div>
      <div class="nonTile"></div>
      <div class="tile eastPropertyTile">
        <div class="color" style="background-color:darkblue;"></div>
        <div class="empty">Board-<br>walk</div>
      </div>

      <div class="cornerTile" style="border-right:0;"><img src="images/jail.jpg" style="width:100%;height:100%;" alt="Jail Space"></div>
      <div class="tile southPropertyTile">
        <div class="color" style="background-color:lightblue;border-bottom:1px solid black;"></div>
        <div class="empty">Conn-<br>ecticut<br>Avenue</div>
      </div>
      <div class="tile southPropertyTile">
        <div class="color" style="background-color:lightblue;border-bottom:1px solid black;"></div>
        <div class="empty">Vermont<br>Avenue</div>
      </div>
      <div class="tile southTile"><img src="images/chance.jpg" alt="Chance"></div>
      <div class="tile southPropertyTile">
        <div class="color" style="background-color:lightblue;border-bottom:1px solid black;"></div>
        <div class="empty">Oriental<br>Avenue</div>
      </div>
      <div class="tile southTile"><img src="images/railroad_south.jpeg" alt="Railroad"></div>
      <div class="tile southTile"><img src="images/income_tax.png" alt="Income Tax"></div>
      <div class="tile southPropertyTile">
        <div class="color" style="background-color:brown;border-bottom:1px solid black;"></div>
        <div class="empty">Baltic<br>Avenue</div>
      </div>
      <div class="tile southTile"><img src="images/community_chest.jpeg" alt="Community Chest"></div>
      <div class="tile southPropertyTile">
        <div class="color" style="background-color:brown;border-bottom:1px solid black;"></div>
        <div class="empty">Mediterr-<br>anean<br>Avenue</div>
      </div>
      <div class="cornerTile" style="border-top:0;"><img src="images/go2.jpeg" style="width:100%;height:100%;" alt="Go Tile"></div>

      </div>
      <!-- Monopoly board ends -->

    </div>



    <div id="controlPanel">
      <div class="playerPanel" id="playerOnePanel">
        <h2>Player One</h2>
      </div>

      <div class="playerPanel" id="playerTwoPanel">
        <h2>Player Two</h2>
      </div>
    </div>

  </main>

  <footer>&copy; 2019</footer>

</body>

</html>
