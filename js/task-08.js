const inputEl = document.querySelector('.js-input');
const renderEl = document.querySelector('.js-render');
const destroyEl = document.querySelector('.js-destroy');
const boxesEl = document.querySelector('#boxes');

function getRandomColor() {
  return Math.floor(Math.random() * 256);
}

const createBoxes = function () {
    let divs = '';
    let size = 30;
    for (let i = 1; i <= inputEl.value; i += 1) {
        divs += `<div class="div${i}"></div>`;
    }

    boxesEl.insertAdjacentHTML('afterbegin', divs)

    for (let i = 1; i <= inputEl.value; i += 1) {
        const currentDiv = document.querySelector(`.div${i}`);
        currentDiv.style.width = `${size}px`;
        currentDiv.style.height = `${size}px`;
        currentDiv.style.backgroundColor = `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`;
        size += 10;
    }

};

const destroyBoxes = function () {
    boxesEl.innerHTML = '';
}

renderEl.addEventListener('click', createBoxes);
destroyEl.addEventListener('click', destroyBoxes);