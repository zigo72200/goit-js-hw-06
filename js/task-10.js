function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const ref = {
  boxe: document.querySelector('#boxes'),
  input: document.querySelector('input'),
  create: document.querySelector('[data-create]'),
  destroy: document.querySelector('[data-destroy]'),
}

let amount = 0;
function getInputValue() { 
return amount = Number(ref.input.value);
};

function eventCreate() {
  createBoxes(amount)
}

let width = 20;
let height = 20;



function createBoxes(amount) {
 
  const arry = [];

  
for (let i = 1; i <= amount; i += 1){
    arry.push(`<div style="background-color: ${getRandomHexColor()}; width: ${width = width + 10}px; height: ${ height = height + 10}px" ></div>`) 
}
 
 ref.boxe.insertAdjacentHTML("beforeend", arry.join(""))

}

function destroyBoxes() {
  ref.boxe.innerHTML = ''
  width = 20;
  height = 20;
}

ref.create.addEventListener("click", eventCreate)
ref.destroy.addEventListener("click", destroyBoxes)
ref.input.addEventListener("input", getInputValue)

