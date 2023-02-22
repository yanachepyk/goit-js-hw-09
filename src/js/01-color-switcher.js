const startBtn = document.querySelector('button[data-start]');
const stoptBtn = document.querySelector('button[data-stop]');
let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function handleBtnStartClick() {
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function handleBtnStoptClick() {
  clearInterval(timerId);
}

startBtn.addEventListener('click', handleBtnStartClick);
stoptBtn.addEventListener('click', handleBtnStoptClick);
