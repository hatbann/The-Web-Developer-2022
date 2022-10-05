let targetScoreNum = 0;

const targetScore = document.querySelector('#targetScore');
const player1Btn = document.querySelector('#player1');
const player2Btn = document.querySelector('#player2');
const resetBtn = document.querySelector('#reset');

targetScore.addEventListener('change', function () {
  targetScoreNum = targetScore.value;
  console.log(targetScoreNum);
});

player1Btn.addEventListener('click', function () {
  let score1 = document.querySelector('#score1');
  addNum(score1);
  if (parseInt(score1.innerText) == targetScoreNum) {
    setDisabled();
    score1.classList.add('winner');
    score2.classList.add('loser');
  }
});

player2Btn.addEventListener('click', function () {
  let score2 = document.querySelector('#score2');
  addNum(score2);
  if (parseInt(score2.innerText) == targetScoreNum) {
    setDisabled();
    score2.classList.add('winner');
    score1.classList.add('loser');
  }
});

resetBtn.addEventListener('click', function () {
  player1Btn.disabled = false;
  player2Btn.disabled = false;
  let score1 = document.querySelector('#score1');
  let score2 = document.querySelector('#score2');
  score1.innerHTML = 0;
  score2.innerHTML = 0;
  player1Btn.classList.remove('disabled');
  player2Btn.classList.remove('disabled');
  score1.classList.remove('winner', 'loser');
  score2.classList.remove('winner', 'loser');
});

const addNum = function (target) {
  let indexnum = parseInt(target.innerText);
  indexnum++;
  target.innerText = indexnum;
};

const setDisabled = function () {
  player1Btn.setAttribute('disabled', true);
  player2Btn.setAttribute('disabled', true);
  player1Btn.classList.add('disabled');
  player2Btn.classList.add('disabled');
};
