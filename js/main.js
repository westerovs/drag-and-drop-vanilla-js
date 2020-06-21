const empty = document.querySelectorAll('.empty');
const drag = document.querySelector('.drag');

drag.addEventListener('dragstart', dragSart);
drag.addEventListener('dragend', dragEnd);

// requestAnimationFrame - подменяет стиль на прозрачный. работает с частотой 60fps
function dragSart(event) {
    console.log('start');
    this.style.backgroundColor = 'green';
    requestAnimationFrame(() => (this.style.backgroundColor = 'transparent'), 0);
}

function dragEnd() {
    console.log('end');
    this.style.backgroundColor = 'red';
}

// ---------------------- получаем empty блоки
for (const item of empty) {
    item.addEventListener('dragover', dragOver);
    item.addEventListener('dragenter', dragEnter);
    item.addEventListener('dragleave', dragLeave);
    item.addEventListener('drop', dragDrop);
}

// dragOver срабатывает всё время
// preventDefault - обязательно! Сбрасывает стандартные обработчики браузера
function dragOver() {
    event.preventDefault();
}

// dragEnter срабатывает над объектом один раз
function dragEnter() {
    this.style.backgroundColor = 'gray';
}

// dragLeave срабатывает после ухода
function dragLeave() {
    this.style.backgroundColor = 'black';
}

// drop срабатывает после того, как перетаск. объект опустится на блок
function dragDrop() {
    console.log('drop');
    this.append(drag);
}

