
    //Counter for guesses alloted
    var allottedGuesses = 10; 
    //Counter for Wins
    var winsCounter = 0; 
    // Array for storing missed guesses
    var wrongGuesses = [];
    //Array for storing the underscore and correct guesses of movie
    var answerArray = []; 
    //Array for storing disney movies to guess
    var movieArray = [ "aladdin","pocahontas","hercules","the lion king", "mulan", "the little mermaid", "the jungle book", "frozen", "snow white", "pinocchio", "moana"];
    
    //Global Variables//
      movie = movieArray[Math.floor(Math.random() * movieArray.length)];
      wrongGuesses = [];
      answerArray = []; 
      allottedGuesses = 10; 
    
    //Function to reset the game, shuffle through words, and set variables back to 0
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


    //Function to start game 
         function startGame () {
        //array to store letters for wrong guesses 
        wrongGuesses = [];
        //for loop to go through movie length and place underscores for length of movie
        for (i = 0; i < movie.length; i++) {
        answerArray[i] = '_';
        }
        // display underscores to the answerArray div
        document.getElementById("currentmovie").innerHTML = answerArray.join(" ");
        checkLetter();
        }
        
      //function to take letter input by player and verify if it is a correct or wrong guess
     function checkLetter() {
      alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " "];

          //Detect user keyboard input 
          document.onkeyup = function(event) {
            var letter = event.key;

            for (j = 0; j <alphabet.length; j++) {

              if (letter === alphabet[j]) {
            }
        }
           
        //verify if the letter was an incorrect guess  
      if  (movie.indexOf(letter) === -1) {
        letter = event.key.toUpperCase();

          wrongGuesses.push(letter); 
         //if incorrect guess join letter to wrongGuesses array 
          lettersWronglyGuessed.innerHTML = wrongGuesses.join(' ');
          //display number of guesses remaining and decrement allotedGuesses counter
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
        checkIfWon(); 
    }
  }

  //   //check to see there are any unscores left in the array, if no more alert the player has won
       function checkIfWon() {
       if (answerArray.indexOf('_') === -1) {
       alert('You Won!');
       //increase wins counter
        winsCounter++; 
        //show wins counter number in victories html element 
        document.getElementById('victories').innerHTML = winsCounter; 
        resetGame(); 
  
     //if player runs out of guesse attempts alert that they have lost 
     } else if (allottedGuesses === -1) {
        alert('You Lost!');
        //reset game to play again 
        resetGame(); 
 
      } 
  };
      
resetGame();