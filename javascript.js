const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');
const passwordValidation = document.querySelector('#passwordValidation');

console.log(password.value);
let passwordwritten;
let passwordConfirmation;

password.addEventListener('input',()=>{
    passwordwritten = password.value;
    if(passwordwritten == passwordConfirmation){
        passwordValidation.textContent = '* passwords match';
        passwordValidation.style.color = 'red';
    }else{
        passwordValidation.textContent = ' * passwords do not match';
        passwordValidation.style.color = 'red';
    }
} );

cpassword.addEventListener('input', ()=>{
    passwordConfirmation = cpassword.value;
    if(passwordwritten == passwordConfirmation){
        passwordValidation.textContent = '* passwords match';
        passwordValidation.style.color = 'red';
    }else{
        passwordValidation.textContent = ' * passwords do not match';
        passwordValidation.style.color = 'red';
    }
});