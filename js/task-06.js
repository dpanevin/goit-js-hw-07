const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', () => {
    if (event.target.value.length >= 6) {
        event.target.classList.remove('invalid')
        event.target.classList.add('valid')
    } else {
        event.target.classList.remove('valid')
        event.target.classList.add('invalid')
    }
});