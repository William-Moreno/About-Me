'use strict';
window.onload = function() {
  var totalScore = 0;

  var userName = prompt('Hello! What is your name?');
  alert('It is nice to meet you, ' + userName + '. My name is Bill. Welcome to the site. Shall we start the game?');
  // console.log('It is nice to meet you, ' + userName + '. My name is Bill. Welcome to the site. Shall we start the game?');
  alert('Determine if the following statements are correct. Please answer the questions with "yes" or "no".');

  // first question
  var firstAnswer = prompt('Bill studied forensic science at the University of Washington.');

  if (firstAnswer.toLowerCase() === 'yes') {
    alert('Sorry. That is incorrect. Bill studied forensic science at Green River College.');
    // console.log('Sorry. That is incorrect. Bill studied forensic science at Green River College.');
  }
  else if (firstAnswer.toUpperCase() === 'NO') {
    alert('Correct! Bill studied engineering at the University of Washington.');
    // console.log('Correct! Bill studied engineering at the University of Washington.');
    totalScore++;
  }
  else {
    alert('You did not answer "yes" or "no", so I am afraid you do not get credit. Please answer subsequent questions either "yes" or "no".');
    // console.log('You did not answer "yes" or "no", so I am afraid you do not get credit. Please answer subsequent questions either "yes" or "no".');
  }

  // second question
  var secondAnswer = prompt("One of Bill's main goals is to become a software developer.");

  if (secondAnswer.toLowerCase() === 'no') {
    alert('Sorry. That is incorrect. Bill does indeed aspire to becoming a successful software developer.');
    // console.log('Sorry. That is incorrect. Bill does indeed aspire to becoming a successful software developer.');
  }
  else if (secondAnswer.toUpperCase() === 'YES') {
    alert('Right! Bill is currently working toward that very goal. (...at breakneck speed)');
    // console.log('Right! Bill is currently working toward that very goal. (...at breakneck speed)');
    totalScore++;
  }
  else {
    alert('You did not answer "yes" or "no", so I am afraid you do not get credit. Please answer subsequent questions either "yes" or "no".');
    // console.log('You did not answer "yes" or "no", so I am afraid you do not get credit. Please answer subsequent questions either "yes" or "no".');
  }

  // third question
  var thirdAnswer = prompt("Bill's son, Riley, is his eldest child.");

  if (thirdAnswer.toLowerCase() === 'no') {
    alert('Unfortunately, that is incorrect. His son, Riley, is 14 while his daughter, Alexis, is only 12.');
    // console.log('Unfortunately, that is incorrect. His son, Riley, is 14 while his daughter, Alexis, is only 12.');
  }
  else if (thirdAnswer.toUpperCase() === 'YES') {
    alert('That is correct! Riley is actually only older than his sister by 17 months.');
    // console.log('That is correct! Riley is actually only older than his sister by 17 months.');
    totalScore++;
  }
  else {
    alert('You did not answer "yes" or "no", so I am afraid you do not get credit. Please answer subsequent questions either "yes" or "no".');
    // console.log('You did not answer "yes" or "no", so I am afraid you do not get credit. Please answer subsequent questions either "yes" or "no".');
  }

  // fourth question
  var fourthAnswer = prompt('Bill spent 15 years working in the aerospace manufacturing industry.');

  if (fourthAnswer.toLowerCase() === 'yes') {
    alert('Sorry. That is incorrect. Bill spent 15 years working in the trucking manufacturing industry.');
    // console.log('Sorry. That is incorrect. Bill spent 15 years working in the trucking manufacturing industry.');
  }
  else if (fourthAnswer.toUpperCase() === 'NO') {
    alert('Yes! Bill only worked in aerospace for 5 years.');
    // console.log('Yes! Bill only worked in aerospace for 5 years.');
    totalScore++;
  }
  else {
    alert('You did not answer "yes" or "no", so I am afraid you do not get credit. Please answer subsequent questions either "yes" or "no".');
    // console.log('You did not answer "yes" or "no", so I am afraid you do not get credit. Please answer subsequent questions either "yes" or "no".');
  }

  // fifth question
  var fifthAnswer = prompt('So far, Bill has lived in Tacoma a total of 4 times.');

  if (fifthAnswer.toLowerCase() === 'yes') {
    alert('Fooled you! Bill technically only lived in Tacoma 3 times. Lakewood, a suburb of Tacoma, actually officially became a city in 1996. Tricksy!');
    // console.log('Fooled you! Bill technically only lived in Tacoma 3 times. Lakewood, a suburb of Tacoma, actually officially became a city in 1996. Tricksy!');
  }
  else if (fifthAnswer.toUpperCase() === 'NO') {
    alert('Very good! Bill technically only lived in Tacoma 3 times. Lakewood, a suburb of Tacoma, actually officially became a city in 1996. Tricksy!');
    // console.log('Very good! Bill technically only lived in Tacoma 3 times. Lakewood, a suburb of Tacoma, actually officially became a city in 1996. Tricksy!');
    totalScore++;
  }
  else {
    alert('You did not answer "yes" or "no", so I am afraid you do not get credit. Please answer subsequent questions either "yes" or "no".');
    // console.log('You did not answer "yes" or "no", so I am afraid you do not get credit. Please answer subsequent questions either "yes" or "no".');
  }

  // console.log(totalScore);

  if (totalScore === 5) {
    alert('Congratulations ' + userName + '!! You scored 100%. Well done!!');
    // console.log('Congratulations ' + userName + '!! You scored 100%. Well done!!');
  }
  else if (totalScore === 4) {
    alert('Good Job ' + userName + '! You scored 80%. Not bad! (...but not quite good enough to pass Code 201 either)');
    // console.log('Good Job ' + userName + '! You scored 80%. Not bad! (...but not quite good enough to pass Code 201 either)');
  }
  else if (totalScore === 3) {
    alert('Passable, ' + userName + '. You scored 60%. Room for improvement to be sure.');
    // console.log('Passable, ' + userName + '. You scored 60%. Room for improvement to be sure.');
  }
  else if (totalScore === 2) {
    alert('At least you made an effort ' + userName + '. You scored 40%. I would definitely go back to the source material.');
    // console.log('At least you made an effort ' + userName + '. You scored 40%. I would definitely go back to the source material.');
  }
  else if (totalScore === 1) {
    alert('Were you just randomly guessing, ' + userName + '? You scored 20%. Oh my!');
    // console.log('Were you just randomly guessing, ' + userName + '? You scored 20%. Oh my!');
  }
  else {
    alert("Couldn't pick him out of a lineup, could you " + userName + ". That's alright. Try try again.");
    // console.log("Couldn't pick him out of a lineup, could you " + userName + ". That's alright. Try try again.");
  }
}