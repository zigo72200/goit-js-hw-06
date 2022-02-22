const input = document.querySelector('#validation-input');

input.addEventListener('blur', validation)

function validation(event) {
    
    if (event.currentTarget.value.length === Number(input.getAttribute('data-length')) ) {
        input.classList.add('valid')
        input.classList.replace('invalid', 'valid')
        return
    }
     input.classList.add('invalid')
}

