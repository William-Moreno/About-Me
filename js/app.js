'use strict';
window.onload = function() {
  var totalScore = 0;
  var numberOfQuestions = 7;
  var userName;

  function welcomeMessage(){
    userName = prompt('Hello! What is your name?');
    alert('It is nice to meet you, ' + userName + '. My name is Bill. Welcome to the site. Shall we start the game?');
    // console.log('It is nice to meet you, ' + userName + '. My name is Bill. Welcome to the site. Shall we start the game?');
    alert('Determine if the following statements are correct. Please answer the questions with "yes/y" or "no/n".');
  }

  function firstQuestion(){
    var firstAnswer = prompt('Bill studied forensic science at the University of Washington.').toLowerCase();

    if (firstAnswer === 'yes' || firstAnswer === 'y') {
      alert('Sorry. That is incorrect. Bill studied forensic science at Green River College.');
      // console.log('Sorry. That is incorrect. Bill studied forensic science at Green River College.');
    } else if (firstAnswer === 'no' || firstAnswer === 'n') {
      alert('Correct! Bill studied engineering at the University of Washington.');
      // console.log('Correct! Bill studied engineering at the University of Washington.');
      totalScore++;
    } else {
      alert('You did not answer "yes/y" or "no/n", so I am afraid you do not get credit. Please answer subsequent questions either "yes/y" or "no/n".');
      // console.log('You did not answer "yes/y" or "no/n", so I am afraid you do not get credit. Please answer subsequent questions either "yes/y" or "no/n".');
    }
  }
  function secondQuestion(){
    var secondAnswer = prompt('One of Bill\'s main goals is to become a software developer.').toLowerCase();

    if (secondAnswer === 'no' || secondAnswer === 'n') {
      alert('Sorry. That is incorrect. Bill does indeed aspire to becoming a successful software developer.');
      // console.log('Sorry. That is incorrect. Bill does indeed aspire to becoming a successful software developer.');
    } else if (secondAnswer === 'yes' || secondAnswer === 'y') {
      alert('Right! Bill is currently working toward that very goal. (...at breakneck speed)');
      // console.log('Right! Bill is currently working toward that very goal. (...at breakneck speed)');
      totalScore++;
    } else {
      alert('You did not answer "yes/y" or "no/n", so I am afraid you do not get credit. Please answer subsequent questions either "yes/y" or "no/n".');
      // console.log('You did not answer "yes/y" or "no/n", so I am afraid you do not get credit. Please answer subsequent questions either "yes/y" or "no/n".');
    }
  }
  function thirdQuestion(){
    var thirdAnswer = prompt('Bill\'s son, Riley, is his eldest child.').toLowerCase();

    if (thirdAnswer === 'no' || thirdAnswer === 'n') {
      alert('Unfortunately, that is incorrect. His son, Riley, is 14 while his daughter, Alexis, is only 12.');
      // console.log('Unfortunately, that is incorrect. His son, Riley, is 14 while his daughter, Alexis, is only 12.');
    } else if (thirdAnswer === 'yes' || thirdAnswer === 'y') {
      alert('That is correct! Riley is actually only older than his sister by 17 months.');
      // console.log('That is correct! Riley is actually only older than his sister by 17 months.');
      totalScore++;
    } else {
      alert('You did not answer "yes/y" or "no/n", so I am afraid you do not get credit. Please answer subsequent questions either "yes/y" or "no/n".');
      // console.log('You did not answer "yes/y" or "no/n", so I am afraid you do not get credit. Please answer subsequent questions either "yes/y" or "no/n".');
    }
  }
  function fourthQuestion(){
    var fourthAnswer = prompt('Bill spent 15 years working in the aerospace manufacturing industry.').toLowerCase();

    if (fourthAnswer === 'yes' || fourthAnswer === 'y') {
      alert('Sorry. That is incorrect. Bill spent 15 years working in the trucking manufacturing industry.');
      // console.log('Sorry. That is incorrect. Bill spent 15 years working in the trucking manufacturing industry.');
    } else if (fourthAnswer === 'no' || fourthAnswer === 'n') {
      alert('Yes! Bill only worked in aerospace for 5 years.');
      // console.log('Yes! Bill only worked in aerospace for 5 years.');
      totalScore++;
    } else {
      alert('You did not answer "yes/y" or "no/n", so I am afraid you do not get credit. Please answer subsequent questions either "yes/y" or "no/n".');
      // console.log('You did not answer "yes/y" or "no/n", so I am afraid you do not get credit. Please answer subsequent questions either "yes/y" or "no/n".');
    }
  }
  function fifthQuestion(){
    var fifthAnswer = prompt('So far, Bill has lived in Tacoma a total of 4 times.').toLowerCase();

    if (fifthAnswer === 'yes' || fifthAnswer === 'y') {
      alert('Fooled you! Bill technically only lived in Tacoma 3 times. Lakewood, a suburb of Tacoma, actually officially became a city in 1996. Tricksy!');
      // console.log('Fooled you! Bill technically only lived in Tacoma 3 times. Lakewood, a suburb of Tacoma, actually officially became a city in 1996. Tricksy!');
    } else if (fifthAnswer === 'no' || fifthAnswer === 'n') {
      alert('Very good! Bill technically only lived in Tacoma 3 times. Lakewood, a suburb of Tacoma, actually officially became a city in 1996. Tricksy!');
      // console.log('Very good! Bill technically only lived in Tacoma 3 times. Lakewood, a suburb of Tacoma, actually officially became a city in 1996. Tricksy!');
      totalScore++;
    } else {
      alert('You did not answer "yes/y" or "no/n", so I am afraid you do not get credit. Please answer subsequent questions either "yes/y" or "no/n".');
      // console.log('You did not answer "yes/y" or "no/n", so I am afraid you do not get credit. Please answer subsequent questions either "yes/y" or "no/n".');
    }
  }

  welcomeMessage();
  firstQuestion();
  secondQuestion();
  thirdQuestion();
  fourthQuestion();
  fifthQuestion();


  /* guessing game */

  var secretNumber = (Math.floor((Math.random()) * 25) + 1); // set random number between 1 and 25
  var numberOfGuesses = 0;
  var guess;
  alert('I am thinking of a number from 1 to 25. I\'ll give you 4 chances to guess it correctly. Are you ready ' + userName + '?');

  while(numberOfGuesses < 4) {
    guess = parseInt(prompt('Attempt #' + (numberOfGuesses+1) + ': What is your guess, ' + userName + '?'));

    while(guess < 1 || guess > 25){
      guess = prompt('Please enter a number from 1 to 25');
    }

    if(guess > secretNumber) {
      alert('Sorry ' + userName + '. That is too high. Try a lower number.');
      // console.log('Sorry ' + userName + '. That is too high. Try a lower number.');
      numberOfGuesses++;
      if(numberOfGuesses > 3) {
        alert('I\'m sorry ' + userName + '. You are out of guesses. The correct answer was: ' + secretNumber);
        // console.log('I\'m sorry ' + userName + '. You are out of guesses. The correct answer was: ' + secretNumber);
      }
    } else if (guess < secretNumber) {
      alert('Sorry ' + userName + '. That is too low. Try a higher number.');
      // console.log('Sorry ' + userName + '. That is too low. Try a higher number.');
      numberOfGuesses++;
      if(numberOfGuesses > 3) {
        alert('I\'m sorry ' + userName + '. You are out of guesses. The correct answer was: ' + secretNumber);
        // console.log('I\'m sorry ' + userName + '. You are out of guesses. The correct answer was: ' + secretNumber);
      }
    } else {
      alert('Well done, ' + userName + '! ' + secretNumber + ' is absolutely correct!! You guessed it in ' + (numberOfGuesses+1) + ' attempts.');
      // console.log('Well done, ' + userName + '! ' + secretNumber + ' is absolutely correct!! You guessed it in ' + (numberOfGuesses+1) + ' attempts.');
      numberOfGuesses=4;
      totalScore++;
    }
  }

  /* guess one of my favorite book series */

  var bookSeries = ['The Ender\'s Game Series','The Legend of Drizzt Series','Android: Identity Trilogy','The Thrawn Trilogy','Star of the Guardians Series','Kathy Reichs Books','Michael Crichton Books','The Harry Potter Series'];
  var seriesGuesses = 0;
  var bookGuess;
  var bookScore = 0;

  alert('I like reading and have read many series of books over the years. Try to guess one of my favorite book series. This one\'s pretty tough ' + userName +'. Sorry.');

  while(seriesGuesses < 6) {
    bookGuess = prompt('Please guess a series, trilogy or author\'s books. Examples could be: "John Doe Books", "The Triple Trilogy" or "The Parallel Series"... Good Luck!!').toLowerCase();

    for( var i = 0 ; i < bookSeries.length ; i++) {
      if( bookGuess === bookSeries[i].toLowerCase()) {
        alert('You Rock ' + userName + '!! That is one of them. Well done! My favorite book series are: ' + bookSeries[0] + ', ' + bookSeries[1] + ', ' + bookSeries[2] + ', ' + bookSeries[3] + ', ' + bookSeries[4] + ', ' + bookSeries[5] + ', ' + bookSeries[6] + ' and ' + bookSeries[7]);
        // console.log('You Rock ' + userName + '!! That is one of them. Well done! My favorite book series are: ' + bookSeries[0] + ', ' + bookSeries[1] + ', ' + bookSeries[2] + ', ' + bookSeries[3] + ', ' + bookSeries[4] + ', ' + bookSeries[5] + ', ' + bookSeries[6] + ' and ' + bookSeries[7]);
        seriesGuesses = 6;
        bookScore = 1;
        totalScore = totalScore + bookScore;
      }
    }

    if(seriesGuesses < 5) {
      alert('That\'s incorrect. Try again ' + userName + '. You have ' + (5-seriesGuesses) + ' guesses left.');
      // console.log('That\'s incorrect. Try again ' + userName + '. You have ' + (5-seriesGuesses) + ' left.');
      seriesGuesses++;
    } else if (seriesGuesses === 5){
      alert('Sorry, ' + userName + '. That was your last guess. My favorite book series are: ' + bookSeries[0] + ', ' + bookSeries[1] + ', ' + bookSeries[2] + ', ' + bookSeries[3] + ', ' + bookSeries[4] + ', ' + bookSeries[5] + ', ' + bookSeries[6] + ' and ' + bookSeries[7]);
      // console.log('Sorry, ' + userName + '. That was your last guess. My favorite book series are: ' + bookSeries[0] + ', ' + bookSeries[1] + ', ' + bookSeries[2] + ', ' + bookSeries[3] + ', ' + bookSeries[4] + ', ' + bookSeries[5] + ', ' + bookSeries[6] + ' and ' + bookSeries[7]);
      seriesGuesses++;
    }
  }

  var finalScore = Math.round((totalScore / numberOfQuestions) * 100);

  /* scoring */

  if (totalScore === 7) {
    alert('Congratulations ' + userName + '!! You scored ' + totalScore + ' out of ' + numberOfQuestions + '. That\'s ' + finalScore + '%. Well done!!');
    // console.log('Congratulations ' + userName + '!! You scored 100%. Well done!!');
  } else if (totalScore === 5 || totalScore === 6) {
    alert('Good Job ' + userName + '! You scored ' + totalScore + ' out of ' + numberOfQuestions + '. That\'s ' + finalScore + '%. Not bad! (...but not quite good enough to pass Code 201 either)');
    // console.log('Good Job ' + userName + '! You scored 80%. Not bad! (...but not quite good enough to pass Code 201 either)');
  } else if (totalScore === 3 || totalScore === 4) {
    alert('Passable, ' + userName + '. You scored ' + totalScore + ' out of ' + numberOfQuestions + '. That\'s ' + finalScore + '%. Room for improvement to be sure.');
    // console.log('Passable, ' + userName + '. You scored 60%. Room for improvement to be sure.');
  } else if (totalScore === 2) {
    alert('At least you made an effort ' + userName + '. You scored ' + totalScore + ' out of ' + numberOfQuestions + '. That\'s ' + finalScore + '%. I would definitely go back to the source material.');
    // console.log('At least you made an effort ' + userName + '. You scored 40%. I would definitely go back to the source material.');
  } else if (totalScore === 1) {
    alert('Were you just randomly guessing, ' + userName + '? You scored ' + totalScore + ' out of ' + numberOfQuestions + '. That\'s ' + finalScore + '%. Oh my!');
    // console.log('Were you just randomly guessing, ' + userName + '? You scored 20%. Oh my!');
  } else {
    alert('Couldn\'t pick Bill out of a lineup, could you ' + userName + '. That\'s alright. Try try again.');
    // console.log("Couldn't pick him out of a lineup, could you " + userName + ". That's alright. Try try again.");
  }
}