function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeColor() {
  const body = document.querySelector('body');
  const colorSpan = document.querySelector('.color');
  
  const randomColor = getRandomHexColor();
  
  body.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
}

const button = document.querySelector('.change-color');
button.addEventListener('click', changeColor);