const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

startBtn.addEventListener('click', startColorChange);

let timerId = null;
stopBtn.disabled = true;

function startColorChange() {
  startBtn.disabled = true;
  startBtn.removeEventListener('click', startColorChange);
  stopBtn.disabled = false;
  stopBtn.addEventListener('click', stopColorChange);

  drawBodyColor();

  timerId = setInterval(drawBodyColor, 1000);
}

function drawBodyColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}

function stopColorChange() {
  clearInterval(timerId);
  startBtn.disabled = false;
  startBtn.addEventListener('click', startColorChange);
  stopBtn.disabled = true;
  stopBtn.removeEventListener('click', stopColorChange);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
