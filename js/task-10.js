function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const ref = {
  boxe: document.querySelector('#boxes'),
  input: document.querySelector('input'),
  create: document.querySelector('[data-create]'),
  destroy: document.querySelector('[data-destroy]'),
}


ref.create.addEventListener("click", createBoxes)
ref.destroy.addEventListener("click", destroyBoxes)


function createBoxes() {
  const arry = [];

for (let i = 1; i <= Number(ref.input.value); i += 1){
    arry.push(`<div style="background-color: ${getRandomHexColor()}; width: ${20 + i * 10}px; height: ${20 + i * 10}px" ></div>`) 
}
 
 ref.boxe.insertAdjacentHTML("afterbegin", arry.join(""))

}

function destroyBoxes() {
  ref.boxe.innerHTML = ''
  // console.log(inpValue);
  // console.log(ref.input.value);
  // console.log(Number(ref.input.value));
}


// const inputValue = () => {
//   return Number(ref.input.value)
// };

// let inpValue = inputValue()
