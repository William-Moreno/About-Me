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

// third question
var thirdAnswer = prompt("Bill's son, Riley, is his eldest child.");

if (thirdAnswer.toLowerCase() === 'no') {
  console.log('Unfortunately, that is incorrect. His son, Riley, is 14 while his daughter, Alexis, is only 12.');
}
else if (thirdAnswer.toUpperCase() === 'YES') {
  console.log('That is correct! Riley is actually only older than his sister by 17 months.');
  totalScore++;
}
else {
  console.log('You did not answer "yes" or "no", so I am afraid you do not get credit. Please answer subsequent questions either "yes" or "no".');
}

// fourth question
var fourthAnswer = prompt('Bill spent 15 years working in the aerospace manufacturing industry.');

if (fourthAnswer.toLowerCase() === 'yes') {
  console.log('Sorry. That is incorrect. Bill spent 15 years working in the trucking manufacturing industry.');
}
else if (fourthAnswer.toUpperCase() === 'NO') {
  console.log('Yes! Bill only worked in aerospace for Hexcel for 5 years.');
  totalScore++;
}
else {
  console.log('You did not answer "yes" or "no", so I am afraid you do not get credit. Please answer subsequent questions either "yes" or "no".');
}

// fifth question
var fifthAnswer = prompt('So far, Bill has lived in Tacoma a total of 4 times.');

if (fifthAnswer.toLowerCase() === 'yes') {
  console.log('Fooled you! Bill technically only lived in Tacoma 3 times. Lakewood, a suburb of Tacoma, actually officially became a city in 1996. Tricksy!');
}
else if (fifthAnswer.toUpperCase() === 'NO') {
  console.log('Very good! Bill technically only lived in Tacoma 3 times. Lakewood, a suburb of Tacoma, actually officially became a city in 1996. Tricksy!');
  totalScore++;
}
else {
  console.log('You did not answer "yes" or "no", so I am afraid you do not get credit. Please answer subsequent questions either "yes" or "no".');
}


console.log(totalScore);