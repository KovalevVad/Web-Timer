// const blobs = document.querySelectorAll('.blob')
// const windowInnerWidth = window.innerWidth
// const windowInnerHeight = window.innerHeight

// function getRandom(min, max) {
//   return Math.random() * (max - min) + min
// }

// let vx = 0
// let vy = 0
// let speed = 3 // Установите желаемую скорость движения

// function update(blob) {
//   x = getRandom(0, 1)
//   y = getRandom(0, 1)

//   vx += x * speed
//   vy += y * speed

//   if (vy > windowInnerHeight - 400 || vy < 0) {
//     vy -= y * speed
//   }

//   if (vx > windowInnerWidth - 400 || vx < 0) {
//     vx -= x * speed
//   }

//   blob.style.transform = `translate(${vx}px, ${vy}px)`
// }

// setInterval(function() {
//   blobs.forEach((blob) => {
//     update(blob)
//   })
// }, 20)


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




