const startBtn = document.querySelector('button[data-start]');
const stoptBtn = document.querySelector('button[data-stop]');
let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function handleBtnStartClick() {
  stoptBtn.disabled = false;
  startBtn.disabled = true;
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function handleBtnStoptClick() {
 startBtn.disabled = false;
 stoptBtn.disabled = true;
  clearInterval(timerId);
}

startBtn.addEventListener('click', handleBtnStartClick);
stoptBtn.addEventListener('click', handleBtnStoptClick);
