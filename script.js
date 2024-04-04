/* Новые элементы должны добавляться в список по нажатию на Enter */
const groceries = document.querySelector('.groceries');
const inputWrapper = document.querySelector('.input-wrapper i');
const items = document.querySelector('#items');
const input = document.querySelector('#input');

inputWrapper.addEventListener('click', function() {
    items.textContent = '';
})

input.addEventListener('keydown', function(event) {
    if (event.key == 'Enter') {}
})


const h2 = document.createElement('h2');
h2.textContent = input.value;

h2.addEventListener('click', function() {
    h2.classList.toggle('done');
})

input.value = '';


/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */