const input = document.querySelector('.input-field');
const buttons = Array.from(document.querySelectorAll('.numbers button'));
let multiplyButton = document.querySelector('.multiply');
const body = document.querySelector('body');
const themeSwitcher = document.querySelector('.theme__toggle-field');
const themeNumOne = document.querySelector('.theme__toggle-nums-one');
const themeNumTwo = document.querySelector('.theme__toggle-nums-two');
const themeNumThree = document.querySelector('.theme__toggle-nums-three');

buttons.map((button) => {
  button.addEventListener('click', (e) => {
    switch (e.target.innerText) {
      case 'RESET':
        input.value = '';
        break;
      case 'DEL':
        input.value = input.value.slice(0, -1);
        break;
      case '=':
        try {
          input.value = eval(input.value);
        } catch {
          input.value = '!Error';
        }
        break;
      case 'x':
        multiplyButton = multiplyButton.innerText == 'x';
        input.value += '*';
        break;
      default:
        input.value += e.target.innerText;
    }
  });
});

themeNumOne.addEventListener('click', () => {
  body.classList.remove('white-theme', 'purple-theme');
  themeSwitcher.style.justifyContent = 'start';
});

themeNumTwo.addEventListener('click', () => {
  body.classList.remove('purple-theme');
  body.classList.add('white-theme');
  themeSwitcher.style.justifyContent = 'center';
});

themeNumThree.addEventListener('click', () => {
  body.classList.remove('white-theme');
  body.classList.add('purple-theme');
  themeSwitcher.style.justifyContent = 'end';
});
