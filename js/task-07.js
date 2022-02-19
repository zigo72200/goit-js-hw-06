
const refRenge = document.querySelector('#font-size-control');
const refText = document.querySelector('#text');

refRenge.addEventListener('change', size)

function size() {
    refText.style.fontSize = `${refRenge.value}px`;
}

