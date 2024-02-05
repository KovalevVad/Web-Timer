let time = document.querySelector('.container__time');
let start = document.querySelector('#start');
let stop  = document.querySelector('#stop');
let remove = document.querySelector('#remove')
let newTimer = document.querySelector('#newTimer')
let speaker = document.querySelector('#speaker')
let blackTh = document.querySelector('#black')
let whiteTh = document.querySelector('#white')
let bodyBack = document.querySelector('body')
let blockTimer = document.querySelector('.blockTimer')
let blockTimer__button = document.querySelector('#blockTimer__button')

let timerId;
start.addEventListener('click', function() {
  start.style.display = 'none'
  stop.style.display = 'block'
  remove.style.display = 'block'
  newTimer.style.display = 'none'

  timerId = setInterval(function() {
    let str = time.textContent
    let seconds = (Number(str.slice(3)) + Number(str.slice(0, 2)) * 60) - 1
    let minSec = Math.floor(seconds / 60)
    let totalSeconds = seconds - minSec * 60
    time.innerHTML = (minSec < 10 ? '0' + minSec : minSec)  + ':' + (totalSeconds < 10 ? '0' + totalSeconds : totalSeconds)
    if (str === '00:00') {
      clearInterval(timerId);
      time.innerHTML = '00:00'
    }
  }, 1000);
})

stop.addEventListener('click', function() {
  start.style.display = 'block'
  stop.style.display = 'none'
  remove.style.display = 'none'
  newTimer.style.display = 'block'
	clearInterval(timerId);
});

remove.addEventListener('click', function() {
  start.style.display = 'block'
  stop.style.display = 'none'
  newTimer.style.display = 'block'
  remove.style.display = 'none'
  time.innerHTML = '25:00'
  clearInterval(timerId);
})

let speakerTest = 'off'
speaker.addEventListener('click', function() {
  if (speakerTest === 'off') {
    speaker.style.cssText = 'background-image: url(/image/speaker-high.svg);'
    speakerTest = 'on'
  } else {
    speaker.style.cssText = 'background-image: url(/image/speaker-none.svg);'
    speakerTest = 'off'
  }
})

blackTh.addEventListener('click', function() {
  bodyBack.style.cssText = 'background: #121214; transition: 1s'
  whiteTh.style.display = 'block'
  blackTh.style.display = 'none'
  time.style.cssText = 'color: #F8F8FC; transition: 1s'
})

whiteTh.addEventListener('click', function() {
  bodyBack.style.cssText = 'background: #F8F8FC; transition: 1s'
  whiteTh.style.display = 'none'
  blackTh.style.display = 'block'
  time.style.cssText = 'color: #121214; transition: 1s'
})

newTimer.addEventListener('click', function() {
  blockTimer.style.display = 'flex'

  blockTimer__button.addEventListener('click', function() {
    blockTimer.style.display = 'none'
    const minute = document.querySelector('#minute')
    const seconds = document.querySelector('#seconds')

    time.innerHTML = (minute.value < 10 ? '0' + minute.value : minute.value) + ':' + (seconds.value < 10 ? '0' + seconds.value : seconds.value)
  })
})


