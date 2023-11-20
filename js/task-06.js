function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes() {
  const amount = Number(input.value);
  
  if (amount < 1 || amount > 100) {
    alert('Please enter a number between 1 and 100.');
    return;
  }
  
  let boxDimensions = 30;
  let boxesHTML = '';
  
  for (let i = 0; i < amount; i++) {
    const color = getRandomHexColor();
    
    boxesHTML += `<div style="background-color: ${color}; width: ${boxDimensions}px; height: ${boxDimensions}px;"></div>`;
    boxDimensions += 10;
  }
  
  boxesContainer.innerHTML = boxesHTML;
  input.value = '';
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}