
//Global Variables//
    //movie variable 
    var movie='';
    //Counter for guesses alloted
    var allottedGuesses = 12; 
    //Counter for Wins
    var winsCounter = 0; 
    // Array for storing missed guesses
    var wrongGuesses = [];
    //Array for storing the underscore and correct guesses of movie
    var answerArray = []; 
    //Array for storing disney movies to guess
    var movieArray = [ "aladdin","pocahontas","hercules","the lion king", "mulan", "the little mermaid", "frozen", "snow white", "pinocchio", "moana"];
    //variable for keyboard input
    var letter='';
    
 
    //Function to start game 
      function startGame () {
    //array to store letters for wrong guesses 
        wrongGuesses = [];
        movie = movieArray[Math.floor(Math.random() * movieArray.length)];
        //for loop to go through movie length and place underscores for length of movie
        for (i = 0; i < movie.length; i++) {
        answerArray[i] = '_';
        }
        // display underscores to the answerArray div
        document.getElementById("currentmovie").innerHTML = answerArray.join(" ");
        //checkLetter();
    }
    
//Function to reset the game, shuffle through words, and set answerArray back to zero. 
function resetGame() {
  //random shuffle through movieArray 
  movie = movieArray[Math.floor(Math.random() * movieArray.length)];
  //set answerArray back to 0
  answerArray = []; 
  
  //set allottedGuesses back to 12
  allottedGuesses = 12; 
  //call startGame method
  startGame(); 
  }


  //function to take letter input by player and verify if it is a correct or wrong guess
      function checkLetter()
      {  
    //verify if the letter was an incorrect guess  
  if  (movie.indexOf(letter) === -1) {
    letter = event.key.toUpperCase();
      wrongGuesses.push(letter); 
      //if incorrect guess join letter to wrongGuesses array 
      document.getElementById('lettersWronglyGuessed').innerHTML = wrongGuesses.join(' ');
      //display number of guesses remaining and decrement allottedGuesses counter
      document.getElementById('guessesRemaining').innerHTML = allottedGuesses--
    } else {
  //if not incorrect check to see if it is a correct letter 
    for (i = 0; i <movie.length; i++) {
          if (movie[i] === letter) {
            answerArray[i] = letter; 
        }
      //if correct join the movie to the Currentmovie div and display the letter
        document.getElementById("currentmovie").innerHTML = answerArray.join(' ');
        }  

      }
      //go to checkIfWon function to check if the player has won 
    checkIfWon(); 
}

    //check to see there are any unscores left in the array, if no more, alert the player has won
       function checkIfWon() {
         if (answerArray.indexOf('_') === -1) {
         alert('You Won!');
        //increase wins counter
         winsCounter++; 
        //show wins counter number in victories html element 
        document.getElementById('victories').innerHTML = winsCounter; 
        resetGame();
         
  
     //if player runs out of guess attempts alert that they have lost 
     } 
     else if (allottedGuesses === -1) {
        alert('Sorry, you lost!');
        winsCounter = 0; 
        document.getElementById('victories').innerHTML = winsCounter; 
        //reset game to play again 
        resetGame(); 
 
      } 
  }
//Reset game
resetGame();
document.onkeyup = function(event) {
letter = event.key;
if(letter.match(/[a-zA-Z\s]/i)) {
      {
        checkLetter();
      }
  }
}