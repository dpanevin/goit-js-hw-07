const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

function insertName() {
    if (inputEl.value) {
        outputEl.textContent = inputEl.value
    } else {
        outputEl.textContent = 'незнакомец'
    }
}

inputEl.addEventListener('input', insertName);