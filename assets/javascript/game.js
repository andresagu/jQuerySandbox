$( document ).ready(function(){


//START GAME SETUP VARS UPON LOAD

//Here we can set this equal to some random number between the desired value
var targetNum;
var playerNum;

//Bool that will just keep track if the game has been started once:
//Starting the game using a modal that's dismissed onkeypress and setting this to true when that's done
var gameStarted = false;

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
function setupGame(){

  //Setup all the random values
  targetNum = getRandomIntInclusive(19,120);
  crystalNum1 = getRandomIntInclusive(1,12);
  crystalNum2 = getRandomIntInclusive(1,12);
  crystalNum3 = getRandomIntInclusive(1,12);
  crystalNum4 = getRandomIntInclusive(1,12);

  console.log(targetNum);
  console.log(crystalNum1);
  console.log(crystalNum2);
  console.log(crystalNum3);
  console.log(crystalNum4);

  $("#targetNumberDisplay").text(targetNum);

  //Reset playerNum
  playerNum = 0;

  //RESET the UI for targetNum and playerNum

  $("#targetNumberDisplay").text(targetNum);
  $("#winsDisplayNum").text(wins);
  $("#lossesDisplayNum").text(losses);



}

//Function that will start the game
$(document).keypress(function(event) {
  if(!gameStarted && event.key == " "){
    gameStarted = true;
    console.log(event.key);
    setupGame();

  }
});

//create on click methods for each crystal

$("#crystal1").on("click",crystalEvent1);
$("#crystal2").on("click",crystalEvent2);
$("#crystal3").on("click",crystalEvent3);
$("#crystal4").on("click",crystalEvent4);


function crystalEvent1() {
  console.log("1st crystal pressed");
  //Adds the crystal number to player number
  playerNum += crystalNum1;

  //Once the addition is done it should check if the game has been won or lost
  if (playerNum == targetNum){
    console.log("win");
    //Do winning logic here and then reset the Game
    win++;

    setupGame();
  }
  else if(playerNum>targetNum){
    console.log("lose");
    //Do losing logic here and reset the Game
    losses++;

    setupGame();
  }




}

function crystalEvent2() {
  console.log("2nd crystal pressed");
  playerNum += crystalNum2;

  //Once the addition is done it should check if the game has been won or lost
  if (playerNum == targetNum){
    console.log("win");
    //Do winning logic here and then reset the Game
    win++;

    setupGame();
  }
  else if(playerNum>targetNum){
    console.log("lose");
    //Do losing logic here and reset the Game
    losses++;

    setupGame();
  }

}

function crystalEvent3() {
  console.log("3rd crystal pressed");
  playerNum += crystalNum3;


  //Once the addition is done it should check if the game has been won or lost
  if (playerNum == targetNum){
    console.log("win");
    //Do winning logic here and then reset the Game
    win++;

    setupGame();
  }
  else if(playerNum>targetNum){
    console.log("lose");
    //Do losing logic here and reset the Game
    losses++;

    setupGame();
  }

}

function crystalEvent4() {
  console.log("4th crystal pressed");
  playerNum += crystalNum4;

  //Once the addition is done it should check if the game has been won or lost
  if (playerNum == targetNum){
    console.log("win");
    //Do winning logic here and then reset the Game
    win++;

    setupGame();
  }
  else if(playerNum>targetNum){
    console.log("lose");
    //Do losing logic here and reset the Game
    losses++;

    setupGame();
  }

}


});
