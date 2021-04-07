let counterValue = 0;
const valueEl = document.querySelector('#value');
const incrementBtn = document.querySelector('.js-increment');
const decrementBtn = document.querySelector('.js-decrement');

function onIncrementClick() {
    counterValue += 1;
    valueEl.textContent = counterValue;
};

function onDecrementClick() {
    counterValue -= 1;
    valueEl.textContent = counterValue;
};

incrementBtn.addEventListener('click', onIncrementClick);

decrementBtn.addEventListener('click', onDecrementClick);