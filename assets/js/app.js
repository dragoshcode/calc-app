// const body = document.querySelector('body');
// const themeSwitcher = document.querySelector('.switcher');
// const themeNumOne = document.querySelector('.theme__toggle-nums-one');
// const themeNumTwo = document.querySelector('.theme__toggle-nums-two');
// const themeNumThree = document.querySelector('.theme__toggle-nums-three');

// themeNumOne.addEventListener('click', (e) => {
//   themeSwitcher.classList.add('translate-to-one');
// });

// themeNumTwo.addEventListener('click', () => {
//   themeSwitcher.classList.add('translate-to-two');
// });

// themeNumThree.addEventListener('click', () => {
//   themeSwitcher.classList.add('translate-to-three');
// });

const input = document.querySelector('.input-field');
const buttons = Array.from(document.querySelectorAll('.numbers button'));
let multiplyButton = document.querySelector('.multiply');

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
