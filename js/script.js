// HTML Element 불러오기
const btnElem = document.querySelector("button");
const timerElem = document.querySelector("#leftTime");
const findCardCountElem = document.querySelector("#findCardCount");

// 카드 상태
let cardArr = [];

// 게임 설정
function setup() {
  // 게임이 설정 중일때 재시작 하는 것을 방지
  btnElem.onclick = "";

  // 새&이전 게임의 카드 삭제
  document.querySelector("#cards1").innerHTML = "";
  document.querySelector("#cards2").innerHTML = "";
  document.querySelector("#cards3").innerHTML = "";
  document.querySelector("#cards4").innerHTML = "";

  // 랜덤으로 16개의 배열 생성
  let answerArr = getRandomAnswerArr();

  // 카드 배열 생성
  cardArr = getCardArr(answerArr);

  // 시작 5초 타이머
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

// 게임 시작 함수
function startGame() {
  // 모든 카드 숨기기
  hideCards();
  
  // 다시하기 버튼 설정
  setupStartGameButton();

  // 90초 타이머 시작
  startTimer();
}

// 게임 중단
function stopGame() {
  for (let i = 0; i < 16; i++) {
    clicked(document.querySelector(`#card${i}`));
  }
}

// 게임 다시하기
function restartGame() {
  clearInterval(timer);
  setup();
}

// 카드 클릭 했을 때
function clicked(obj) {
  const id = obj.id;
  obj = document.querySelector(`#${id}`);
  obj.className = `${obj.classList[0]} ${obj.classList[1]}`;
}

// 랜덤 숫자 배열 생성 함수
function getRandomAnswerArr() {
  let answerArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

  // 배열을 랜덤하게 섞기
  answerArr.sort(() => Math.random() - 0.5);

  // 앞 8개만 살리고 짝을 맞추기 위해 복사
  answerArr = answerArr.slice(0, 8);
  for (let i = 0; i < 8; i++) {
    answerArr.push(answerArr[i]);
  }

  // 배열을 랜덤하게 섞기
  answerArr.sort(() => Math.random() - 0.5);
  return answerArr;
}

// 카드 배열 만들기 함수
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

// 카드 숨기기 함수
function hideCards() {
  for (let i = 0; i < 16; i++) {
    document.querySelector(`#card${i}`).classList.add("notShow");
  }
}

// 다시하기 출력 함수
function setupStartGameButton() {
  btnElem.innerText = "다시하기";
  btnElem.onclick = restartGame;
}

// 90초 타이머 시작 함수
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
