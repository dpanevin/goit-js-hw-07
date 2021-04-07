const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const itemsEl = ingredients.map(item => {
    const element = document.createElement('li');
    element.textContent = item;
    return element;
});

const ingredientsEL = document.querySelector('#ingredients');
ingredientsEL.append(...itemsEl);