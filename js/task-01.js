const categoriesEl = document.querySelector('.js-categories')
const itemsEl = document.querySelectorAll('.js-item')

const amountItems = itemsEl.length
console.log(`В списке ${amountItems} категории.`)

itemsEl.forEach(item => {
    const title = item.querySelector('h2').textContent;
    const amountElements = item.querySelectorAll('li').length;
    console.log(`Категория: ${title}`);
    console.log(`Количество элементов: ${amountElements}`)
});
