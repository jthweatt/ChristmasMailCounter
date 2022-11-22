const counterHeading = document.querySelector('.counter');
const resetBtn = document.querySelector('.reset-btn');
const stopBtn = document.querySelector('.stop-btn');
const startBtn = document.querySelector('.start-btn');

let counter = 1000000000;
let interval = null;
counterHeading.textContent = FormatNumber(counter);

console.log('app loaded.');

resetBtn.addEventListener('click', () => {
  // console.log('reset working.');
  counter = 1234567890;
  counterHeading.textContent = FormatNumber(counter);
});

stopBtn.addEventListener('click', () => {
  clearInterval(interval);
});

startBtn.addEventListener('click', () => {
  interval = window.setInterval(() => {
    counter += GetRandom(100, 199999999);
    counterHeading.textContent = FormatNumber(counter);
  }, 1000);
});

startBtn;

function GetRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function FormatNumber(rawNumber) {
  nfObject = new Intl.NumberFormat('en-US');
  let formattedNumber = nfObject.format(rawNumber);
  return formattedNumber;
}
