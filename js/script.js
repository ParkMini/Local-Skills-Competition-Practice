const btnElem = document.querySelector("button");
const timerElem = document.querySelector("#leftTime");
const findCardCountElem = document.querySelector("#findCardCount");
let cardArr = [];

function setup() {
  btnElem.onclick = "";
  document.querySelector("#cards1").innerHTML = "";
  document.querySelector("#cards2").innerHTML = "";
  document.querySelector("#cards3").innerHTML = "";
  document.querySelector("#cards4").innerHTML = "";

  let answerArr = getRandomAnswerArr();
  cardArr = getCardArr(answerArr);

  let leftTime = 5;
  timerElem.innerText = `${leftTime}초`;
  timer = setInterval(() => {
    leftTime--;
    if (leftTime === 0) {
      clearInterval(timer);
      timerElem.innerText = `${leftTime}초`;
      startGame();
    } else {
      timerElem.innerText = `${leftTime}초`;
    }
  }, 1000);
}

function startGame() {
  hideCards();
  setupStartGameButton();
  startTimer();
}

function stopGame() {
  for (let i = 0; i < 16; i++) {
    clicked(document.querySelector(`#card${i}`));
  }
}

function restartGame() {
  clearInterval(timer);
  setup();
}

function clicked(obj) {
  const id = obj.id;
  obj = document.querySelector(`#${id}`);
  obj.className = `${obj.classList[0]} ${obj.classList[1]}`;
}

function getRandomAnswerArr() {
  let answerArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
  answerArr.sort(() => Math.random() - 0.5);
  answerArr = answerArr.slice(0, 8);

  for (let i = 0; i < 8; i++) {
    answerArr.push(answerArr[i]);
  }

  answerArr.sort(() => Math.random() - 0.5);
  return answerArr;
}

function getCardArr(answerArr) {
  let cardArr = [];
  let count = 0;

  for (let i = 1; i <= 4; i++) {
    for (let k = 1; k <= 4; k++) {
      cardArr.push("0");
      const cs = document.querySelector(`#cards${i}`);
      cs.innerHTML += `<div id="card${count}" class="card card${answerArr[count]}" onclick="clicked(this)"></div>`;
      count++;
    }
  }
  return cardArr;
}

function hideCards() {
  for (let i = 0; i < 16; i++) {
    document.querySelector(`#card${i}`).classList.add("notShow");
  }
}

function setupStartGameButton() {
  btnElem.innerText = "다시하기";
  btnElem.onclick = restartGame;
}

function startTimer() {
  let leftTime = 90;
  timerElem.innerText = `1분 ${leftTime - 60}초`;
  timer = setInterval(() => {
    leftTime--;
    if (leftTime > 59) {
      timerElem.innerText = `1분 ${leftTime - 60}초`;
    } else if (leftTime === 0) {
      timerElem.innerText = `0초`;
      clearInterval(timer);
      stopGame();
    } else {
      timerElem.innerText = `${leftTime}초`;
    }
  }, 1000);
}