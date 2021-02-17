let newBtn = document.querySelector('#linkCreateAccount');
let alreadyBtn = document.querySelector('#linkLoginAccount');
let sgnUpBtn = document.querySelector('.form__container input[type=button]');
let container = document.querySelector('.container');
alreadyBtn.addEventListener('click', (e) => {
    container.classList.add('movie');
})

newBtn.addEventListener('click', (e) => {
    container.classList.remove('movie');
})
let formAcc = document.querySelector('.form__input-account');
let formPw = document.querySelector('.form__input-pw');
let req = document.querySelectorAll('.form__required');

function validator (formElement){
    if(formElement.querySelector('input').value.length<7){
            formElement.querySelector('.form__required').style.display="block";
       } else { 
           formElement.querySelector('.form__required').style.display="none";
       }
}

sgnUpBtn.addEventListener('click',(e)=>{
    validator(formAcc);
    validator(formPw);
})
