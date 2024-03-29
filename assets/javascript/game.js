$(document).ready(function() {
  //START GAME SETUP VARS UPON LOAD

  //Here we can set this equal to some random number between the desired value
  var targetNum;
  var playerNum;

  //Bool that will just keep track if the game has been started once:
  //Starting the game using a modal that's dismissed onkeypress and setting this to true when that's done
  var gameStarted = false;

  //Show the modal in order to explain the rules and start the game
  if (!gameStarted) {
    $('#exampleModalCenter').modal('show');
  }


  //Instantiate all the variables for the crystalNums that will be used to add up to the targetNum
  var crystalNum1;
  var crystalNum2;
  var crystalNum3;
  var crystalNum4;

  //Instantiate vars for game progress tracking
  var wins = 0;
  var losses = 0;


  //Fucntion to get random integer inclusive of the boundry points

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
  }

  //Function to setup the game and reset upon win/loss
  function setupGame() {

    //Setup all the random values
    targetNum = getRandomIntInclusive(19, 120);
    crystalNum1 = getRandomIntInclusive(1, 12);
    crystalNum2 = getRandomIntInclusive(1, 12);
    crystalNum3 = getRandomIntInclusive(1, 12);
    crystalNum4 = getRandomIntInclusive(1, 12);

    //Display the target number
    $("#targetNumberDisplay").text(targetNum);

    //Reset playerNum
    playerNum = 0;

    //RESET the UI for targetNum and playerNum

    $("#targetNumberDisplay").text(targetNum);
    $("#playerNumberDisplay").text(playerNum);
    $("#winsDisplayNum").text(wins);
    $("#lossesDisplayNum").text(losses);



  }

  //Function that will start the game
  $(document).keypress(function(event) {
    if (!gameStarted && event.key == " ") {
      gameStarted = true;
      setupGame();
      $('#exampleModalCenter').modal('hide');

    }
  });

  //Function to reset the game
  function resetGame(){
    //Reset the wins and losses vars in order to restart the game
    wins = 0;
    losses = 0;

    //Set the game start trigger to false again
    gameStarted = false;

    //Runs through the general setup
    setupGame();

    //Show the rule modal again in order to start from scratch
    $('#exampleModalCenter').modal('show');
  }


  //create on click methods for each crystal
  $("#crystal1").on("click", crystalEvent1);
  $("#crystal2").on("click", crystalEvent2);
  $("#crystal3").on("click", crystalEvent3);
  $("#crystal4").on("click", crystalEvent4);

  //Create on click for reset button
  $("#resetButton").on("click", resetGame);


  function crystalEvent1() {
    //Adds the crystal number to player number
    playerNum += crystalNum1;
    $("#playerNumberDisplay").text(playerNum);

    //Once the addition is done it should check if the game has been won or lost
    if (playerNum == targetNum) {
      //Do winning logic here and then reset the Game
      wins++;

      setupGame();
    } else if (playerNum > targetNum) {
      //Do losing logic here and reset the Game
      losses++;

      setupGame();
    }




  }

  function crystalEvent2() {
    playerNum += crystalNum2;
    $("#playerNumberDisplay").text(playerNum);

    //Once the addition is done it should check if the game has been won or lost
    if (playerNum == targetNum) {
      //Do winning logic here and then reset the Game
      wins++;

      setupGame();
    } else if (playerNum > targetNum) {
      //Do losing logic here and reset the Game
      losses++;

      setupGame();
    }

  }

  function crystalEvent3() {
    playerNum += crystalNum3;
    $("#playerNumberDisplay").text(playerNum);


    //Once the addition is done it should check if the game has been won or lost
    if (playerNum == targetNum) {
      //Do winning logic here and then reset the Game
      wins++;

      setupGame();
    } else if (playerNum > targetNum) {
      //Do losing logic here and reset the Game
      losses++;

      setupGame();
    }

  }

  function crystalEvent4() {
    playerNum += crystalNum4;
    $("#playerNumberDisplay").text(playerNum);

    //Once the addition is done it should check if the game has been won or lost
    if (playerNum == targetNum) {
      //Do winning logic here and then reset the Game
      wins++;

      setupGame();
    } else if (playerNum > targetNum) {
      //Do losing logic here and reset the Game
      losses++;

      setupGame();
    }

  }


});
