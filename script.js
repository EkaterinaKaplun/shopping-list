/* Новые элементы должны добавляться в список по нажатию на Enter */
const items = document.querySelector('#items');
const input = document.querySelector('#input');

input.addEventListener('keydown', function(event) {
    if (event.key == 'Enter') {
        const inputText = input.value;

        const newItem = document.createElement('div');
        newItem.textContent = inputText;

        newItem.addEventListener('click', function() {
            newItem.classList.toggle('done');
        })

        if (inputText != '') {
            items.append(newItem);
        }

        input.value = '';
    }
})


/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */