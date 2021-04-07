const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputEl.value = 16;

inputEl.addEventListener('input', () => {
    textEl.style.fontSize = `${event.target.value}px`;
})