function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const ref = {
  boxe: document.querySelector('#boxes'),
  input: document.querySelector('input'),
  create: document.querySelector('[data-create]'),
  destroy: document.querySelector('[data-destroy]'),
}

let test = 0;
function getInputValue() { 
return test = Number(ref.input.value);
};

function eventCreate() {
  createBoxes(test)
}

function createBoxes(amount) {
  console.log(test);
  const arry = [];

for (let i = 1; i <= amount; i += 1){
    arry.push(`<div style="background-color: ${getRandomHexColor()}; width: ${20 + i * 10}px; height: ${20 + i * 10}px" ></div>`) 
}
 
 ref.boxe.insertAdjacentHTML("afterbegin", arry.join(""))

}

function destroyBoxes() {
  ref.boxe.innerHTML = ''
}

ref.create.addEventListener("click", eventCreate)
ref.destroy.addEventListener("click", destroyBoxes)
ref.input.addEventListener("input", getInputValue)

