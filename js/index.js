import {testTimer, aormatedTime} from './helper.js'
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
const blob = document.querySelectorAll('.blob')
const DEFAULT_TIME = '00:00'

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
    time.innerHTML =  aormatedTime(minSec)  + ':' + aormatedTime(totalSeconds)
    if (str === DEFAULT_TIME) {
      clearInterval(timerId);
      time.innerHTML = DEFAULT_TIME
      speakerMusic()
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

let speakerTest = false
speaker.addEventListener('click', function() {
  speaker.style.cssText = speakerTest ? 'background-image: url(/image/speaker-none.svg)' : 'background-image: url(/image/speaker-high.svg)'
  if (speakerTest) {
    speaker.innerHTML = ''
  }
  speakerTest = !speakerTest
})

function speakerMusic() {
  if (time.textContent === DEFAULT_TIME && speakerTest === true) {
    speaker.innerHTML = `<audio src="music/1.mp3" autoplay></audio>`
  }
}

blackTh.addEventListener('click', function() {
  bodyBack.style.cssText = 'background: #121214; transition: 1s'
  whiteTh.style.display = 'block'
  blackTh.style.display = 'none'
  time.style.cssText = 'color: #F8F8FC; transition: 1s'
  blob.forEach(el => el.style.cssText = 'background: rgb(111, 3, 111)')
})

whiteTh.addEventListener('click', function() {
  bodyBack.style.cssText = 'background: #F8F8FC; transition: 1s'
  whiteTh.style.display = 'none'
  blackTh.style.display = 'block'
  time.style.cssText = 'color: #121214; transition: 1s'
  blob.forEach(el => el.style.cssText = 'background: #4783c7')
})

newTimer.addEventListener('click', function() {
  blockTimer.style.display = 'flex'
  const minute = document.querySelector('#minute')
  const seconds = document.querySelector('#seconds')

  blockTimer__button.addEventListener('click', function() {
    blockTimer.style.display = 'none'
    let totalMinute = aormatedTime(minute.value)
    let totalSeconds = aormatedTime(seconds.value)
    if (!testTimer(totalMinute)) {
      totalMinute = '00'
    }

    if (!testTimer(totalSeconds)) {
      totalSeconds = '00'
    }

    time.innerHTML = totalMinute + ':' + totalSeconds
  })
})






