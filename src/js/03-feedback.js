import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form')
const emailInput = form.querySelector('input')
const messageInput = form.querySelector('textarea')

form.addEventListener('input', throttle(formDataSave, 500))
form.addEventListener('submit', formSubmit)
fillForm()
function formDataSave(e) {
    
    const formData = {
        email: emailInput.value,
        message: messageInput.value
    }
        localStorage.setItem('feedback-form-state', JSON.stringify(formData))
     
}

function fillForm() {
    const storedDataForm = JSON.parse(localStorage.getItem('feedback-form-state'))
    if (storedDataForm)   {

    emailInput.value = storedDataForm.email
    messageInput.value = storedDataForm.message
 
    }
}
   
function formSubmit(e) {
    const storedDataForm = JSON.parse(localStorage.getItem('feedback-form-state'))
    e.preventDefault()

    console.log(storedDataForm)
    form.reset()
    localStorage.removeItem('feedback-form-state')
   
}

