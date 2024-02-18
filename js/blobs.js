const blobs = document.querySelectorAll('.blob');

blobs.forEach(function(blob) {
  let x = Math.random() * (window.innerWidth - blob.offsetWidth);
  let y = Math.random() * (window.innerHeight - blob.offsetHeight);
  let dx = 0.8;
  let dy = 0.8;

  // Функция для движения элемента
  function moveElement() {
    blob.style.left = x + 'px';
    blob.style.top = y + 'px';

    x += dx;
    y += dy;

    // Проверяем, достиг ли элемент границы экрана
    if (x + blob.offsetWidth > window.innerWidth || x < 0) {
      dx = -dx;
    }
    if (y + blob.offsetHeight > window.innerHeight || y < 0) {
      dy = -dy;
    }

    requestAnimationFrame(moveElement); // Рекурсивно вызываем функцию для плавного движения
  }

  // Запускаем движение элемента
  moveElement();
});






