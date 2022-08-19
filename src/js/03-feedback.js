import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form')
const emailInput = document.querySelector('input')
const messageInput = document.querySelector('textarea')

function formDataSave(e) {
    const formData = {
        email: emailInput.value,
        message: messageInput.value
    }
    localStorage.setItem('feedback-form-state', JSON.stringify(formData))
      
}
form.addEventListener('input', throttle(formDataSave,500))

const storedDataForm = JSON.parse(localStorage.getItem('feedback-form-state'))
if (storedDataForm)    {
    emailInput.value = storedDataForm.email
    messageInput.value = storedDataForm.message
    }

form.addEventListener('submit', formSubmit)
function formSubmit(e) {
    e.preventDefault()
    console.log(storedDataForm)
    form.reset()
    localStorage.removeItem('feedback-form-state')
}