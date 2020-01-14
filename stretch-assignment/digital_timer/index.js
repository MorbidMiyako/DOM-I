function Timer() {

  let time = 10000
  let timer = {
    all: document.querySelectorAll(".digit"),
    secondTens: document.getElementById("secondTens"),
    secondOnes: document.getElementById("secondOnes"),
    colon: document.getElementById("colon"),
    msHundreds: document.getElementById("msHundreds"),
    msTens: document.getElementById("msTens"),
    timer: setInterval(counter, 10),
  }
  let timeArray = []

  function counter() {
    if (time < 11000) {
      time += 1
      timeArray = time.toString().split("")
      timer.msTens.textContent = timeArray[4]
      timer.msHundreds.textContent = timeArray[3]
      timer.secondOnes.textContent = timeArray[2]
      timer.secondTens.textContent = timeArray[1]
    }
    else {
      for (let i = 0; i < 5; i++) {
        timer.all[i].style.color = "red"

        clearInterval(timer.timer)
      }
    }
  }
}


Timer()
