const counterHeading = document.querySelector('.counter');
const resetBtn = document.querySelector('.reset-btn');
const stopBtn = document.querySelector('.stop-btn');
const startBtn = document.querySelector('.start-btn');
const configBtn = document.querySelector('.config-btn');

// Config vars
let startCount = 1000;
let timeInterval = 1000;
let rndMin = 0;
let rndMax = 0;

let counter = startCount;
let interval = null;
counterHeading.textContent = FormatNumber(counter);

console.log('app loaded.');

resetBtn.addEventListener('click', () => {
  // console.log('reset working.');
  counter = startCount;
  counterHeading.textContent = FormatNumber(counter);
});

stopBtn.addEventListener('click', () => {
  clearInterval(interval);
});

startBtn.addEventListener('click', () => {
  clearInterval(interval);
  interval = window.setInterval(() => {
    if (counter > 1400000000) {
      counter = startCount;
    }
    counter += GetRandom(100, 9999999);
    counterHeading.textContent = FormatNumber(counter);
  }, timeInterval);
});

configBtn.addEventListener('click', () => {
  alert('Configuration is disabled.');
});

function GetRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function FormatNumber(rawNumber) {
  nfObject = new Intl.NumberFormat('en-US');
  let formattedNumber = nfObject.format(rawNumber);
  return formattedNumber;
}
