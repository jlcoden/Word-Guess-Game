
    //Counter for guesses alloted
    var allottedGuesses = 10; 
    //Counter for Wins
    var winsCounter = 0; 
    // Array for storing missed guesses
    var wrongGuesses = [];
    //Array for storing the underscore and correct guesses of word
    var answerArray = []; 
    //Array for storing hangman words to guess
    var wordArray = [ "aladdin","pocahontas","hercules","the lion king", "mulan", "the little mermaid", "the jungle book", "frozen", "snow white", "pinocchio", "moana"];
    
    //Global Variables//
      word = wordArray[Math.floor(Math.random() * wordArray.length)];
      wrongGuesses = [];
      answerArray = []; 
      allottedGuesses = 10; 
    
    //Function to reset the game and variables back to 0
     function resetGame() {
        word = wordArray[Math.floor(Math.random() * wordArray.length)];
        answerArray = []; 
        allottedGuesses = 10; 
        startGame(); 
     }


    //Function to start game 
       function startGame () {
        wrongGuesses = [];
        //for loop to go through word length and place underscores for length of word
        for (i = 0; i < word.length; i++) {
        answerArray[i] = '_';
        }
        // display underscores to the answerArray div
        document.getElementById("currentWord").innerHTML = answerArray.join(" ");
        checkLetter();
    }
        
      //function to take letter input by player and verify if it is a correct or wrong guess
      function checkLetter() {
          //Detect user keyboard input 
          document.onkeyup = function(event) {
          letter = event.key.toLowerCase();
          
      
        //verify if the letter was an incorrect guess  
      if  (word.indexOf(letter) === -1) {
          wrongGuesses.push(letter); 
          lettersWronglyGuessed.innerHTML = wrongGuesses.join(' ');
          document.getElementById('guessesRemaining').innerHTML = allottedGuesses--
    } else {
      //if not incorrect check to see if it is a correct letter 
      for (i = 0; i <word.length; i++) {
            if (word[i] === letter) {
             answerArray[i] = letter; 
            }
      //if correct join the word to the CurrentWord div and display the letter
      document.getElementById("currentWord").innerHTML = answerArray.join(' ');
             }  

          }
        checkIfWon(); 
    }
  }
  //   //check to see there are any unscores left in the array, if no more alert the player has won
       function checkIfWon() {
       if (answerArray.indexOf('_') === -1) {
       alert('You Won!');
        winsCounter++; 
        document.getElementById('victories').innerHTML = winsCounter; 
        resetGame(); 
  
     //if player runs out of guesse attempts alert that they have lost 
     } else if (allottedGuesses === -1) {
        alert('You Lost!');
        resetGame(); 
 
    } 
      };
      
resetGame();