// animations.js

/**         Animation Functions         **/

// animation of rolling dice that settles on the actual rolled number:
function animateDice(multiplier, dieAlphaNumber, dieBetaNumber) {
  let numAlpha1 = document.getElementById("pip_alpha_one");
  let numAlpha2 = document.getElementById("pip_alpha_two");
  let numAlpha3 = document.getElementById("pip_alpha_three");
  let numAlpha4 = document.getElementById("pip_alpha_four");
  let numAlpha5 = document.getElementById("pip_alpha_five");
  let numAlpha6 = document.getElementById("pip_alpha_six");
  let numBeta1 = document.getElementById("pip_beta_one");
  let numBeta2 = document.getElementById("pip_beta_two");
  let numBeta3 = document.getElementById("pip_beta_three");
  let numBeta4 = document.getElementById("pip_beta_four");
  let numBeta5 = document.getElementById("pip_beta_five");
  let numBeta6 = document.getElementById("pip_beta_six");

  function showAlphaSideOne() {
    numAlpha1.style.transform = "translate(20px, 20px)";
    numAlpha2.style.display = "none";
    numAlpha3.style.display = "none";
    numAlpha4.style.display = "none";
    numAlpha5.style.display = "none";
    numAlpha6.style.display = "none";
  }
  function showAlphaSideTwo() {
    numAlpha1.style.transform = "translate(8px, 8px)";
    numAlpha2.style.display = "block";
    numAlpha2.style.transform = "translate(34px, 34px);";
    numAlpha3.style.display = "none";
    numAlpha4.style.display = "none";
    numAlpha5.style.display = "none";
    numAlpha6.style.display = "none";
  }
  function showAlphaSideThree() {
    numAlpha1.style.display = "block";
    numAlpha1.style.transform = "translate(8px, 8px)";
    numAlpha2.style.display = "block";
    numAlpha2.style.transform = "translate(34px, 34px)";
    numAlpha3.style.display = "block";
    numAlpha3.style.transform = "translate(21px, 21px)";
    numAlpha4.style.display = "none";
    numAlpha5.style.display = "none";
    numAlpha6.style.display = "none";
  }
  function showAlphaSideFour() {
    numAlpha1.style.display = "block";
    numAlpha1.style.transform = "translate(8px, 8px)";
    numAlpha2.style.display = "block";
    numAlpha2.style.transform = "translate(34px, 34px)";
    numAlpha3.style.display = "block";
    numAlpha3.style.transform = "translate(34px, 8px)";
    numAlpha4.style.display = "block";
    numAlpha4.style.transform = "translate(8px, 34px)";
    numAlpha5.style.display = "none";
    numAlpha6.style.display = "none";
  }
  function showAlphaSideFive() {
    numAlpha1.style.display = "block";
    numAlpha1.style.transform = "translate(8px, 8px)";
    numAlpha2.style.display = "block";
    numAlpha2.style.transform = "translate(34px, 34px)";
    numAlpha3.style.display = "block";
    numAlpha3.style.transform = "translate(34px, 8px)";
    numAlpha4.style.display = "block";
    numAlpha4.style.transform = "translate(8px, 34px)";
    numAlpha5.style.display = "block";
    numAlpha5.style.transform = "translate(21px, 21px)";
    numAlpha6.style.display = "none";

  }
  function showAlphaSideSix() {
    numAlpha1.style.display = "block";
    numAlpha1.style.transform = "translate(8px, 8px)";
    numAlpha2.style.display = "block";
    numAlpha2.style.transform = "translate(34px, 34px)";
    numAlpha3.style.display = "block";
    numAlpha3.style.transform = "translate(34px, 8px)";
    numAlpha4.style.display = "block";
    numAlpha4.style.transform = "translate(8px, 34px)";
    numAlpha5.style.display = "block";
    numAlpha5.style.transform = "translate(8px, 21px)";
    numAlpha6.style.display = "block";
    numAlpha6.style.transform = "translate(34px, 21px)";
  }

  function showBetaSideOne() {
    numBeta1.style.transform = "translate(20px, 20px)";
    numBeta2.style.display = "none";
    numBeta3.style.display = "none";
    numBeta4.style.display = "none";
    numBeta5.style.display = "none";
    numBeta6.style.display = "none";
  }
  function showBetaSideTwo() {
    numBeta1.style.transform = "translate(8px, 8px)";
    numBeta2.style.display = "block";
    numBeta2.style.transform = "translate(34px, 34px);";
    numBeta3.style.display = "none";
    numBeta4.style.display = "none";
    numBeta5.style.display = "none";
    numBeta6.style.display = "none";
  }
  function showBetaSideThree() {
    numBeta1.style.display = "block";
    numBeta1.style.transform = "translate(8px, 8px)";
    numBeta2.style.display = "block";
    numBeta2.style.transform = "translate(34px, 34px)";
    numBeta3.style.display = "block";
    numBeta3.style.transform = "translate(21px, 21px)";
    numBeta4.style.display = "none";
    numBeta5.style.display = "none";
    numBeta6.style.display = "none";
  }
  function showBetaSideFour() {
    numBeta1.style.display = "block";
    numBeta1.style.transform = "translate(8px, 8px)";
    numBeta2.style.display = "block";
    numBeta2.style.transform = "translate(34px, 34px)";
    numBeta3.style.display = "block";
    numBeta3.style.transform = "translate(34px, 8px)";
    numBeta4.style.display = "block";
    numBeta4.style.transform = "translate(8px, 34px)";
    numBeta5.style.display = "none";
    numBeta6.style.display = "none";
  }
  function showBetaSideFive() {
    numBeta1.style.display = "block";
    numBeta1.style.transform = "translate(8px, 8px)";
    numBeta2.style.display = "block";
    numBeta2.style.transform = "translate(34px, 34px)";
    numBeta3.style.display = "block";
    numBeta3.style.transform = "translate(34px, 8px)";
    numBeta4.style.display = "block";
    numBeta4.style.transform = "translate(8px, 34px)";
    numBeta5.style.display = "block";
    numBeta5.style.transform = "translate(21px, 21px)";
    numBeta6.style.display = "none";

  }
  function showBetaSideSix() {
    numBeta1.style.display = "block";
    numBeta1.style.transform = "translate(8px, 8px)";
    numBeta2.style.display = "block";
    numBeta2.style.transform = "translate(34px, 34px)";
    numBeta3.style.display = "block";
    numBeta3.style.transform = "translate(34px, 8px)";
    numBeta4.style.display = "block";
    numBeta4.style.transform = "translate(8px, 34px)";
    numBeta5.style.display = "block";
    numBeta5.style.transform = "translate(8px, 21px)";
    numBeta6.style.display = "block";
    numBeta6.style.transform = "translate(34px, 21px)";
  }

  let alphaRollList = [showAlphaSideOne, showAlphaSideTwo, showAlphaSideThree, showAlphaSideFour,
    showAlphaSideFive, showAlphaSideSix];
  let betaRollList = [showBetaSideOne, showBetaSideTwo, showBetaSideThree, showBetaSideFour,
    showBetaSideFive, showBetaSideSix];

  let die1 = document.getElementById("dice_alpha");
  let die2 = document.getElementById("dice_beta");

  function blinkYellow() {
    function setYellow() {
      die1.style.border = "2px solid yellow";
      die2.style.border = "2px solid yellow";

    }
    function setBlack() {
      die1.style.border = "2px solid black";
      die2.style.border = "2px solid black";
    }
    setTimeout(setYellow, 200);
    setTimeout(setBlack, 400);
    setTimeout(setYellow, 600);
    setTimeout(setBlack, 800);
    setTimeout(setYellow, 1000);
    setTimeout(setBlack, 1200);
    setTimeout(setYellow, 1400);
    setTimeout(setBlack, 1600);
    setTimeout(setYellow, 1800);
    setTimeout(setBlack, 2000);
  }
  die1.style.display = "inline-block";
  die2.style.display = "inline-block";

  setTimeout(showAlphaSideOne, multiplier * 500);
  setTimeout(showBetaSideThree, multiplier * 500);
  setTimeout(showAlphaSideFive, multiplier * 1000);
  setTimeout(showBetaSideFour, multiplier * 1000);
  setTimeout(showAlphaSideThree, multiplier * 1500);
  setTimeout(showBetaSideTwo, multiplier * 1500);
  setTimeout(showAlphaSideFour, multiplier * 2000);
  setTimeout(showBetaSideSix, multiplier * 2000);
  setTimeout(showAlphaSideFive, multiplier * 2500);
  setTimeout(showBetaSideOne, multiplier * 2500);
  setTimeout(showAlphaSideSix, multiplier * 3000);
  setTimeout(showBetaSideTwo, multiplier * 3000);
  setTimeout(showAlphaSideTwo, multiplier * 3500);
  setTimeout(showBetaSideFour, multiplier * 3500);
  setTimeout(showAlphaSideFour, multiplier * 4000);
  setTimeout(showBetaSideOne, multiplier * 4000);
  setTimeout(showAlphaSideFive, multiplier * 4500);
  setTimeout(showBetaSideSix, multiplier * 4500);
  setTimeout(showAlphaSideSix, multiplier * 5000);
  setTimeout(showBetaSideThree, multiplier * 5000);
  setTimeout(showAlphaSideOne, multiplier * 5500);
  setTimeout(showBetaSideTwo, multiplier * 5500);
  setTimeout(showAlphaSideFour, multiplier * 6000);
  setTimeout(showBetaSideFive, multiplier * 6000);
  setTimeout(showAlphaSideThree, multiplier * 6500);
  setTimeout(showBetaSideFour, multiplier * 6500);
  setTimeout(showAlphaSideOne, multiplier * 7000);
  setTimeout(showBetaSideThree, multiplier * 7000);
  setTimeout(showAlphaSideTwo, multiplier * 8000);
  setTimeout(showBetaSideSix, multiplier * 8000);
  setTimeout(showAlphaSideFour, multiplier * 9000);
  setTimeout(showBetaSideTwo, multiplier * 9000);
  setTimeout(showAlphaSideFive, multiplier * 11000);
  setTimeout(showBetaSideSix, multiplier * 11000);
  setTimeout(showAlphaSideSix, multiplier * 13000);
  setTimeout(showBetaSideFour, multiplier * 13000);
  setTimeout(showAlphaSideOne, multiplier * 16000);
  setTimeout(showBetaSideFive, multiplier * 16000);
  setTimeout(showAlphaSideFour, multiplier * 20000);
  setTimeout(showBetaSideThree, multiplier * 20000);

  setTimeout(alphaRollList[dieAlphaNumber], multiplier * 24000);
  setTimeout(betaRollList[dieBetaNumber], multiplier * 24000);


   // AT THIS POINT: the actual rolled numbers appear
   // and let the borders blink yellow, say three times
   setTimeout(blinkYellow, multiplier * 28000);
}

// animate the movement of a player from one space to another;
// startingSpace and endingSpace are integer arguments:
function animateMovingSpaces(startingCoordinate, endingCoordinate) {

  // conditional statement to see if player passes GO:
  if (endingCoordinate >= 40) {

    let distanceFromGo = 40 - startingCoordinate;

    for (let i = startingCoordinate; i < 40; i++) {
      let space = document.getElementById(board[i].spaceID);
      setTimeout(() => {
        space.classList.add(activePlayer.highlightedClassName);
      }, 0 + (i + .5 - startingCoordinate) * 500);
      setTimeout(() => {
        space.classList.remove(activePlayer.highlightedClassName);
      }, 500 + (i + .5 - startingCoordinate) * 500);
    }
    for (let i = 0; i <= (endingCoordinate - 40); i++) {
      let space = document.getElementById(board[i].spaceID);
      setTimeout(() => {
        space.classList.add(activePlayer.highlightedClassName);
      }, (0 + (i + .5 + distanceFromGo) * 500));
      setTimeout(() => {
        space.classList.remove(activePlayer.highlightedClassName);
      }, (500 + (i + .5 + distanceFromGo) * 500));
    }
  } else {
    for (let i = startingCoordinate; i <= endingCoordinate; i++) {
      let space = document.getElementById(board[i].spaceID);
      setTimeout(() => {
        space.classList.add(activePlayer.highlightedClassName);
      }, 0 + (i + .5 - startingCoordinate) * 500);
      setTimeout(() => {
        space.classList.remove(activePlayer.highlightedClassName);
      }, 500 + (i + .5 - startingCoordinate) * 500);
    }
  }
}
