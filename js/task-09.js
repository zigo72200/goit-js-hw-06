function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refButton = document.querySelector('.change-color');
const refSpan = document.querySelector('.color');
const refBody = document.querySelector('body')

refButton.addEventListener('click', changeColor);

function changeColor() {
  const color = getRandomHexColor()
  refBody.style.backgroundColor = color;
  refSpan.textContent = color;
}