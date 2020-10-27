'use strict';
var totalScore = 0;

var userName = prompt('Hello! What is your name?');
console.log('It is nice to meet you, ' + userName + '. My name is Bill. Welcome to the site. Shall we start the game?');
alert('Determine if the following statements are correct. Please answer the questions with "yes" or "no".');

// first question
var firstAnswer = prompt('Bill studied forensic science at the University of Washington.');

if (firstAnswer.toLowerCase() === 'yes') {
  console.log('Sorry. That is incorrect. Bill studied forensic science at Green River College.');
}
else if (firstAnswer.toUpperCase() === 'NO') {
  console.log('Correct! Bill studied engineering at the University of Washington.');
  totalScore++;
}
else {
  console.log('You did not answer "yes" or "no", so I am afraid you do not get credit. Please answer subsequent questions either "yes" or "no".');
}

// second question
var secondAnswer = prompt("One of Bill's main goals is to become a software developer.");

if (secondAnswer.toLowerCase() === 'no') {
  console.log('Sorry. That is incorrect. Bill does indeed aspire to becoming a successful software developer.');
}
else if (secondAnswer.toUpperCase() === 'YES') {
  console.log('Right! Bill is currently working toward that goal. (...at breakneck speed)');
  totalScore++;
}
else {
  console.log('You did not answer "yes" or "no", so I am afraid you do not get credit. Please answer subsequent questions either "yes" or "no".');
}

console.log(totalScore);