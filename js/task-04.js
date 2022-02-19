const refDecrement = document.querySelector('[data-action="decrement"]');
const refIncrement = document.querySelector('[data-action="increment"]');
const refNumber = document.querySelector("#value");

let counterValue = 0;

console.log(refNumber);

refDecrement.addEventListener("click", decrement)
refIncrement.addEventListener("click", increment)


function decrement() {
    counterValue -= 1
    refNumber.textContent = counterValue;
}

function increment() {
    counterValue += 1;
    refNumber.textContent = counterValue;
   
}


