const form = document.getElementById('form');
const password1 = document.getElementById('pass');
const password2 = document.getElementById('confirm-pass');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');
let isValid = false;
let passwordsMatch = false

function validateForm() {
    //Using Constraint API
    isValid = form.checkValidity();
    if (!isValid) {
        message.textContent = 'Please Fill Out All the Fields';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        return;
    }
    // Checking if Passwords match
    if (password1.value === password2.value) {
        passwordsMatch = true;
        password1.style.borderColor = 'green';
        password2.style.borderColor = 'green';
    } else {
        passwordsMatch = false;
        message.textContent = 'Make sure passwords value match!'
        message.style.color = 'red'
        messageContainer.borderColor = 'red'
        password1.style.borderColor = 'red';
        password2.style.borderColor = 'red';
        return;
    }
if(passwordsMatch && isValid){
    message.textContent = 'Success!'
    messageContainer.borderColor = 'green';
    message.style.color = 'green';
}
    console.log(isValid);
    console.log(password1.value);
}
function storeFormData(){
    const user = {
        name : form.name.value,
        email : form.email.value,
        websiteUrl : form.website.value,
        phone : form.phone.value,
        password : form.password.value
    }
    //Do something with user data
    console.log(user);
}
function processFormData(e) {
    e.preventDefault();
    console.log(e);
    //Validating Form
    validateForm();
    if(isValid && passwordsMatch){
        storeFormData();
    }
}
// On Form Submit
form.addEventListener('submit', processFormData);