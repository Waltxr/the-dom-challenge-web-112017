const counter = document.getElementById('counter')
const add = document.getElementById('+')
const subtract = document.getElementById('-')
const like = document.getElementById('<3')
let store = []
setInterval(setTime, 1000)

let seconds = 0

// class Second {
//   constructor() {
//     this.seconds = seconds
//     this.likes = 0
//   }
// }


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
