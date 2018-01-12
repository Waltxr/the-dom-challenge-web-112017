const counter = document.getElementById('counter')
const add = document.getElementById('+')
const subtract = document.getElementById('-')
const like = document.getElementById('<3')
let store = []
const buttons = document.querySelectorAll('.disable')
// setInterval(setTime, 1000)

let seconds = 0
let interval = setInterval(function() { setTime() }, 1000);



function stopTime() {
  clearInterval(interval);
}

function setTime() {
  ++seconds
  counter.innerHTML = seconds
}

add.addEventListener("click", function(e) {
    seconds += 1
    counter.innerHTML = seconds
})

subtract.addEventListener("click", function(e) {
    seconds -= 1
    counter.innerHTML = seconds
})

like.addEventListener('click', function(e) {
  if (store[seconds]) {
      store[seconds] += 1
  } else  {
    store[seconds] = 1
  }
  const likesUl = document.querySelector(".likes")
  let newLi = document.createElement("LI")
  newLi.innerText = `${seconds} was liked ${store[seconds]} times`
  console.log(newLi)
  likesUl.appendChild(newLi)
})

let playing = true
const pauseButton = document.getElementById('pause')

function pause() {
  pauseButton.innerHTML = "Resume"
  playing = false
  stopTime()
  buttons.forEach(function(b) {
    b.disabled = true
  })

}

function play() {
  let interval = setInterval(function() { setTime() }, 1000);
  pauseButton.innerHTML = "Pause"
  playing = true
  buttons.forEach(function(b) {
    b.disabled = false
  })
}

pauseButton.addEventListener('click', function(e) {
  if(playing) {
    pause()
  } else {
    play()
  }
})


const form = document.querySelector("#comment-form")
const input = document.querySelector("input[type=text]")

function handleFormSubmit(event) {
console.log(event)
    event.preventDefault()


  const value = input.value

  const newP = document.createElement("p")
  newP.innerText = `${value} `




  document.querySelector(".comments").append(newP)

  input.value = ''
}

form.addEventListener("submit", handleFormSubmit)
