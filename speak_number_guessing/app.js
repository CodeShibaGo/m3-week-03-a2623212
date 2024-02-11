const startButton = document.querySelector("#guess-btn");
const msg = document.querySelector("#msg");
window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();
recognition.lang = "en-US";

let randomNum = getRandomNumber();
console.log(randomNum);

function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

// guess he number
let finish = false;
let answer;
function checkGuessNumber(answer) {
  // console.log("step3");

  const guess = Number(answer);
  console.log(`step5${guess}`);
  // if result !== number
  if (isNaN(guess)) {
    msg.innerHTML = "That is not a valid number";
    startButton.innerText = "Try Again";
    return;
  }

  // if nuber =0 or > 100
  if (guess === 0 || guess > 100) {
    msg.innerHTML = "Number is between 1-100 ";
    startButton.innerText = "Try Again";
    return;
  }
  // if it is number
  if (guess === randomNum) {
    console.log("You win!");
    msg.innerHTML = "Let's right!";
    startButton.innerText = "Play Again";
    finish = true;
  } else if (guess > randomNum) {
    console.log("Too high!");
    msg.innerHTML = "Go Lower";
    startButton.innerText = "Try Again";
  } else {
    console.log("Too low!");
    msg.innerHTML = "Go Higher!";
    startButton.innerText = "Try Again";
  }
}

function startAgain() {
  randomNum = getRandomNumber();
  console.log(randomNum);
  startButton.innerText = "Start Guess";
  msg.innerHTML = "";
  finish = false;
}

function onSpeak(e) {
  // console.log("step. 2 onSpeak!");
  const answer = e.results[0][0].transcript;
  console.log(answer);
  checkGuessNumber(answer);
}

// event listener
startButton.addEventListener("click", function () {
  if (finish) {
    startAgain();
    return;
  }
  // console.log("step. 1 start!");
  recognition.start();
  recognition.addEventListener("result", onSpeak);
});
