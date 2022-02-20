

const refForm = document.querySelector('.login-form')

refForm.addEventListener('submit', pushForm)



function pushForm(submit) {
    submit.preventDefault();

    const formData = new FormData(submit.currentTarget)

    const { email, password } = submit.currentTarget
    
    if (email.value === '' || password.value === '') {
        alert('Потрібно заповнити всі поля')
        return
    }
    
    const authorization = {}
    
     formData.forEach((value, name) => {
        
         aaa[name] = value

     })
    
    console.log(authorization)
    

        submit.currentTarget.elements.email.value = '';
        submit.currentTarget.elements.password.value = '';
    

}

