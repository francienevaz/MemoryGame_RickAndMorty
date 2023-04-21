const input = document.querySelector('.login__input');
const btn = document.querySelector('.login__btn');
const form = document.querySelector('.login-form');

const validateInput = ({target}) => {
    if(target.value.length > 2) {
        btn.removeAttribute('disabled');
        return;
    } 

    btn.setAttribute('disabled', '');
}

const handleSubmit = (event) => {
    event.preventDefault();

    localStorage.setItem('player', input.value);
    window.location = "pages/game.html";
}

input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);