'use strict';
// const a = (document.querySelector('.guess').value = 20);
// console.log(document.querySelector('.guess').value);

// random number er jonne mane e secret number ti :
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function (e) {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //   jodi input field(mane e guess e) kono input nah diye try kore:

  if (!guess) {
    document.querySelector('.message').textContent =
      '❌ভাই একটা নাম্বার ইনপুট দিয়ে আবার ট্রাই করুন দয়া করে❌';
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'অনেক বড় নাম্বার!↗↗';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'আপনি হেরে গেছেন !🤦‍♂️';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'অনেক ছোটো নাম্বার!↙↙';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'আপনি হেরে গেছেন !🤦‍♂️';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess === secretNumber) {
    // secret number ti show korbe tokhon ei jokhon guess number er sathe secretNumber ti match kore:
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('.message').textContent = 'সঠিক নাম্বার!🍕🍕';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').style.backgroundColor = '#333';
    document.querySelector('.number').style.color = '#fff';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  // notun kore jate secret number dey again button e click korle:
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
