var randomNumber = Math.floor(Math.random() * 101);
var numberOfTries = 0;
var arrayOfGuesses = [];
var person = {};
var returningUser = false;
person.firstName = 'joe';
var attempts = 0;
var myName = 'default user';



welcome(); // FUNCTION PLAYS ON PAGE LOAD

function welcome () {
    myName = prompt('What is your name?');

    if(person.firstName === myName) {
        alert('Welcome back ' + person.firstName + "!");
        returningUser = true;
        play();
    } else {
        person.firstName = myName;
        attempts = 0;
        returningUser = false;
        play();
    }
}

function play(){

      let myGuess = prompt('Guess a number between 1 and 100');

      if(myGuess === null) {
          return;
      }

      myGuess = parseInt(myGuess);


      if(isNaN(myGuess) || myGuess.length <= 0) {
          alert("Please enter a valid number between 1-100");
      }
   
      // USER GETS THE NUMBER CORRECT
      if(myGuess === randomNumber) {

        if(returningUser === true) {
            alert("Congrats! " + myName + " you guessed " + randomNumber + '! It took you ' + numberOfTries + ' tries.' + '\n' +
            'Your previous guesses were ' + arrayOfGuesses);
            alert(myName + " your previous attempt took you " + attempts + " tries to guess the random number.");


            // HOW THE USER FAIRED
            if(numberOfTries < attempts) {
                alert('Good Job we beat your last score by ' + (attempts - numberOfTries) + " tries!")
            } else {
                alert('Bad News. You it took you ' + (numberOfTries - attempts) + ' more tries to find the random number.');
            }








            attempts = numberOfTries;
            numberOfTries = 0;
            arrayOfGuesses = [];
            randomNumber = Math.floor(Math.random() * 101);

        } else {
            alert("Congrats! " + myName + " you guessed " + randomNumber + '! It took you ' + numberOfTries + ' tries.' + '\n' +
            'Your previous guesses were ' + arrayOfGuesses);
             numberOfTries = 0;
            arrayOfGuesses = [];
            randomNumber = Math.floor(Math.random() * 101);
        }
       

   
       // ASK USER IF THEY'D LIKE TO PLAY AGAIN
       let playOnceMore = prompt('Would you like to play again? Type yes or no');

       if(playOnceMore != 'yes' || playOnceMore === null) {
           alert('OK THE GAME IS OVER');
           return;
       } else {
           randomNumber = Math.floor(Math.random() * 101);
           welcome();
       }

       // GUESS IS LESS THAN RANDOM NUMBER
      } else if(myGuess < randomNumber) {
           if(returningUser === true) {
                numberOfTries++;
                arrayOfGuesses.push(myGuess);
                alert('Please select a higher value ' + myName + '.');
                play();
           } else {
                numberOfTries++;
                attempts++;
                arrayOfGuesses.push(myGuess);
                alert('Please select a higher value ' + myName + '.');
                play();
           }
        
        // GUESS IS GREATER THAN RANDOM NUMBER
       } else if(myGuess > randomNumber) {
           if(returningUser === true) {
                numberOfTries++;
                arrayOfGuesses.push(myGuess);
                alert('Please select a lower value ' + myName + '.');
                play();  
           } else {
                numberOfTries++;
                attempts++;
                arrayOfGuesses.push(myGuess);
                alert('Please select a lower value ' + myName + '.');
                play();
           }
           
       } else {
           play();
       }
}

