const input = document.querySelector('.login__input');
const btn = document.querySelector('.login__btn');

const validateInput = ({target}) => {
    if(target.value.length > 2) {
        btn.removeAttribute('disabled');
        return;
    } 

    btn.setAttribute('disabled', '');
}

input.addEventListener('input', validateInput)