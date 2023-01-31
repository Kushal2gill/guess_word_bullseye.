const inputs = document.querySelector(".inputs"),
  resetBtn = document.querySelector(".reset-btn"),
  hint = document.querySelector(".hint span"),
  typingInput = document.querySelector(".typing-input");

function randomWord() {
  let ranObj = wordList[Math.floor(Math.random() * wordList.length)];
  let word = ranObj.word;
  console.log(word);
  hint.innerText = ranObj.hint;

  let html = "";
  for (let i = 0; i < word.length; i++) {
    html += '<input type= "text" disabled>';
  }
  inputs.innerHTML = html;
}
randomWord();

resetBtn.addEventListener("click", randomWord);
inputs.addEventListener("click", () => typingInput.focus());
document.addEventListener("keydown", () => typingInput.focus());
