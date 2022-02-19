
const refInput = document.querySelector('#name-input');
const refSpan = document.querySelector('#name-output');

refInput.addEventListener('input', write)
// refInput.addEventListener('blur', empty)

function write(event) {

    refSpan.textContent = event.currentTarget.value 
    if (refSpan.textContent === '') {
         refSpan.textContent= 'Anonymous'
    }
}
   

// function empty() {
//     if (refSpan.textContent === '') {
//          refSpan.textContent= 'Anonymous'
//     }
// }

