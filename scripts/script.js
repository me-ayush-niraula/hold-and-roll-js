"use strict";
let diceImage = [
  ["images/rolled1.png", 1],
  ["images/rolled2.png", 2],
  ["images/rolled3.png", 3],
  ["images/rolled4.png", 4],
  ["images/rolled5.png", 5],
  ["images/rolled6.png", 6],
];

const rollButton1 = document.querySelector(".rollButton1");
const rollButton2 = document.querySelector(".rollButton2");
const holdButton1 = document.querySelector(".holdButton1");
const holdButton2 = document.querySelector(".holdButton2");
const mainScore1 = document.querySelector(".mainScore1");
const mainScore2 = document.querySelector(".mainScore2");
const player1Content = document.querySelector(".player1Content");
const player2Content = document.querySelector(".player2Content");
let currentScore1 = document.querySelector(".currentScore1");
let currentScore2 = document.querySelector(".currentScore2");
let hint = document.querySelector(".hint");
function backgroundChange1() {
  player1Content.classList.remove("backgroundChange");
  player2Content.classList.add("backgroundChange");
}
function backgroundChange2() {
  player2Content.classList.remove("backgroundChange");
  player1Content.classList.add("backgroundChange");
}
// random generator
function diceGenerator1() {
  let secretNumber = Math.trunc(Math.random() * 6);
  let secretDice = diceImage[secretNumber][0];
  let diceValue = diceImage[secretNumber][1];

  var pic = secretDice;
  document.getElementById("changePic").src = pic.replace("90x90", "225x225");
  currentScore1.textContent = Number(currentScore1.textContent) + diceValue;
  if (diceValue === 1) {
    currentScore1.textContent = 0;
    mainScore1.textContent = 0;
    backgroundChange1();
    hint.textContent = "Player 2 Turn";
  }
  holdButton1.addEventListener("click", function () {
    mainScore1.textContent =
      Number(currentScore1.textContent) + Number(mainScore1.textContent);
    currentScore1.textContent = 0;

    if (Number(mainScore1.textContent) >= 20) {
      confetti.start();
      hint.textContent = "Player 1 Wins";
    } else {
      hint.textContent = "Player 2 Turn";
      backgroundChange1();
    }
  });
}

function diceGenerator2() {
  let secretNumber = Math.trunc(Math.random() * 6);
  let secretDice = diceImage[secretNumber][0];
  let diceValue = diceImage[secretNumber][1];

  var pic = secretDice;
  document.getElementById("changePic").src = pic.replace("90x90", "225x225");
  currentScore2.textContent = Number(currentScore2.textContent) + diceValue;
  if (diceValue === 1) {
    currentScore2.textContent = 0;
    mainScore2.textContent = 0;
    backgroundChange2();
    hint.textContent = "Player 1 Turn";
  }
  holdButton2.addEventListener("click", function () {
    mainScore2.textContent =
      Number(currentScore2.textContent) + Number(mainScore2.textContent);
    currentScore2.textContent = 0;

    if (Number(mainScore2.textContent) >= 20) {
      confetti.start();
      hint.textContent = "Player 2 Wins";
    } else {
      backgroundChange2();
      hint.textContent = "Player 1 Turn";
    }
  });
}

// player 1 buttons
rollButton1.addEventListener("click", function () {
  diceGenerator1();
});
rollButton2.addEventListener("click", function () {
  diceGenerator2();
});
function backgroundChange1() {
  player1Content.classList.remove("backgroundChange");
  player2Content.classList.add("backgroundChange");
}
function backgroundChange2() {
  player2Content.classList.remove("backgroundChange");
  player1Content.classList.add("backgroundChange");
}
