"use strict";
const questions = [
  "JavaScript",
  "document",
  "window",
  "getElementById",
  "getElementsByClassName",
  "addEventListener",
  "aiueoaiueo",
];
const remained_num = document.getElementById("remained_num");
const entered = document.getElementById("entered");
const remained = document.getElementById("remained");
const inputText = document.getElementById("inputText");
const game = document.getElementById("game");
const message = document.getElementById("message");
const replayBtn = document.getElementById("replayBtn");

let remainedTextwords = remained.textContent.split("");
let enteredTextwords = [];
let currentKey;
let currentText;

const setQuestion = () => {
  currentKey = Math.floor(Math.random() * questions.length);
  currentText = questions[currentKey];
  questions.splice(currentKey, 1);
  entered.textContent = "";
  remained.textContent = currentText;
  inputText.value = "";

  enteredTextwords = [];
  remainedTextwords = currentText.split("");
  remained_num.textContent = "残り" + (questions.length + 1) + "問！";
};

setQuestion();
document.addEventListener("input", (e) => {
  if (remainedTextwords[0] === e.data) {
    enteredTextwords.push(remainedTextwords[0]);
    remainedTextwords.shift();
    entered.textContent = enteredTextwords.join("");
    remained.textContent = remainedTextwords.join("");
    if (remainedTextwords.length <= 0) {
      if (questions.length <= 0) {
        game.classList.add("hidden");
        message.classList.remove("hidden");
      } else {
        setQuestion();
      }
    }
  }
});
replayBtn.addEventListener("click", () => {
  window.location.reload();
});