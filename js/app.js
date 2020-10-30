'use strict';

var totalScore = 0;
var numberOfQuestions = 7;
var userName;

function welcomeMessage(){
  userName = prompt('Hello! What is your name?');
  alert('It is nice to meet you, ' + userName + '. My name is Bill. Welcome to the site. Shall we start the game?');
  alert('Determine if the following statements are correct. Please answer the questions with "yes/y" or "no/n".');
}

function firstQuestion(){
  var firstAnswer = prompt('Bill studied forensic science at the University of Washington.').toLowerCase();

  if (firstAnswer === 'yes' || firstAnswer === 'y') {
    alert('Sorry. That is incorrect. Bill studied forensic science at Green River College.');
  } else if (firstAnswer === 'no' || firstAnswer === 'n') {
    alert('Correct! Bill studied engineering at the University of Washington.');
    totalScore++;
  } else {
    alert('You did not answer "yes/y" or "no/n", so I am afraid you do not get credit. Please answer subsequent questions either "yes/y" or "no/n".');
  }
}

function secondQuestion(){
  var secondAnswer = prompt('One of Bill\'s main goals is to become a software developer.').toLowerCase();

  if (secondAnswer === 'no' || secondAnswer === 'n') {
    alert('Sorry. That is incorrect. Bill does indeed aspire to becoming a successful software developer.');
  } else if (secondAnswer === 'yes' || secondAnswer === 'y') {
    alert('Right! Bill is currently working toward that very goal. (...at breakneck speed)');
    totalScore++;
  } else {
    alert('You did not answer "yes/y" or "no/n", so I am afraid you do not get credit. Please answer subsequent questions either "yes/y" or "no/n".');
  }
}

function thirdQuestion(){
  var thirdAnswer = prompt('Bill\'s son, Riley, is his eldest child.').toLowerCase();

  if (thirdAnswer === 'no' || thirdAnswer === 'n') {
    alert('Unfortunately, that is incorrect. His son, Riley, is 14 while his daughter, Alexis, is only 12.');
  } else if (thirdAnswer === 'yes' || thirdAnswer === 'y') {
    alert('That is correct! Riley is actually only older than his sister by 17 months.');
    totalScore++;
  } else {
    alert('You did not answer "yes/y" or "no/n", so I am afraid you do not get credit. Please answer subsequent questions either "yes/y" or "no/n".');
  }
}

function fourthQuestion(){
  var fourthAnswer = prompt('Bill spent 15 years working in the aerospace manufacturing industry.').toLowerCase();

  if (fourthAnswer === 'yes' || fourthAnswer === 'y') {
    alert('Sorry. That is incorrect. Bill spent 15 years working in the trucking manufacturing industry.');
  } else if (fourthAnswer === 'no' || fourthAnswer === 'n') {
    alert('Yes! Bill only worked in aerospace for 5 years.');
    totalScore++;
  } else {
    alert('You did not answer "yes/y" or "no/n", so I am afraid you do not get credit. Please answer subsequent questions either "yes/y" or "no/n".');
  }
}

function fifthQuestion(){
  var fifthAnswer = prompt('So far, Bill has lived in Tacoma a total of 4 times.').toLowerCase();

  if (fifthAnswer === 'yes' || fifthAnswer === 'y') {
    alert('Fooled you! Bill technically only lived in Tacoma 3 times. Lakewood, a suburb of Tacoma, actually officially became a city in 1996. Tricksy!');
  } else if (fifthAnswer === 'no' || fifthAnswer === 'n') {
    alert('Very good! Bill technically only lived in Tacoma 3 times. Lakewood, a suburb of Tacoma, actually officially became a city in 1996. Tricksy!');
    totalScore++;
  } else {
    alert('You did not answer "yes/y" or "no/n", so I am afraid you do not get credit. Please answer subsequent questions either "yes/y" or "no/n".');
  }
}

/* guessing random number */

function numberGame() {
  alert('I am thinking of a number from 1 to 25. I\'ll give you 4 chances to guess it correctly. Are you ready ' + userName + '?');
  var secretNumber = (Math.floor((Math.random()) * 25) + 1);

  for( var i = 0 ; i < 4 ; i++ ){
    var guess = (prompt('Attempt #' + (i+1) + ': What is your guess, ' + userName + '?'));
    guess = Number(guess);

    while(guess < 1 || guess > 25){
      guess = prompt('Please enter a number from 1 to 25');
    }

    if( guess === secretNumber ) {
      alert('Well done, ' + userName + '! ' + secretNumber + ' is absolutely correct!! You guessed it in ' + (i+1) + ' attempts.');
      totalScore++;
      i = 4;
      break;
    }

    if ( i > 2 && i < 4 ){
      alert('I\'m sorry ' + userName + '. You are out of guesses. The correct answer was: ' + secretNumber);
      break;
    } else if( guess < secretNumber ) {
      alert('Sorry ' + userName + '. That is too low. Try a higher number.');
    } else {
      alert('Sorry ' + userName + '. That is too high. Try a lower number.');
    }
  }
}

/* guess one of my favorite fruits */

function fruitGame() {
  var fruitList = ['raspberries','pomegranates','lemons','pineapples','grapes','strawberries','apples'];

  for( var i = 0 ; i < 6 ; i++ ){
    var fruitGuess = prompt('Guess one of my favorite fruits (plural).').toLowerCase();

    for( var j = 0 ; j < fruitList.length ; j++ ) {
      if( fruitGuess === fruitList[j]) {
        alert(`Awesome!! ${fruitGuess} is one of the correct answers! I like ${fruitList[0]}, ${fruitList[1]}, ${fruitList[2]}, ${fruitList[3]}, ${fruitList[4]}, ${fruitList[5]} and Granny Smith ${fruitList[6]}`);
        totalScore++;
        i = 6;
        break;
      }
    }

    if ( i > 4 && i < 6 ){
      alert(`Sorry. I actually like ${fruitList[0]}, ${fruitList[1]}, ${fruitList[2]}, ${fruitList[3]}, ${fruitList[4]}, ${fruitList[5]} and Granny Smith ${fruitList[6]}.`);
      break;
    } else if ( i === 4 ) {
      alert('Nope. Sorry. You have one more chance.');
    } else if ( i < 4 ) {
      alert(`${fruitGuess} is not one them.`);
    }
  }
}

/* scoring */

function scoring(){
  var finalScore = Math.round((totalScore / numberOfQuestions) * 100);
  var resultMessageScore = 'You scored ' + totalScore + ' out of ' + numberOfQuestions + '. That\'s ' + finalScore + '%.';
  var resultMessage = ['Couldn\'t pick Bill out of a lineup, could you ' + userName + '. That\'s alright. Try try again.','Were you just randomly guessing, ' + userName + '? ' + resultMessageScore + ' Oh my!','At least you made an effort ' + userName + '. ' + resultMessageScore + ' I would definitely go back to the source material.','Passable, ' + userName + '. ' + resultMessageScore + ' Room for improvement to be sure.','Passable, ' + userName + '. ' + resultMessageScore + ' Room for improvement to be sure.','Good Job ' + userName + '! ' + resultMessageScore + ' Pretty Good!','Good Job ' + userName + '! ' + resultMessageScore + ' Not bad! (...but not quite good enough to pass Code 201 either)','Congratulations ' + userName + '!! ' + resultMessageScore + ' Well done!!']

  alert(resultMessage[totalScore]);

}

window.onload = function() {
  welcomeMessage();
  firstQuestion();
  secondQuestion();
  thirdQuestion();
  fourthQuestion();
  fifthQuestion();
  numberGame();
  fruitGame();
  scoring();

}