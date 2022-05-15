
export default function Timer({minutesDisplay, secondsDisplay}) {

  let timerTimeOut

  let minutes = Number(minutesDisplay.textContent)
  let seconds = Number(secondsDisplay.textContent)
  
  function updateDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, '0') 
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
  }

  function addTimer() {
    minutes = minutes + 5;
    updateDisplay((minutes), seconds)
  }
  
  function removeTimer() {
    minutes = minutes - 5;
  
    if(minutes <= 0) {
      minutes = 0;
    }
    updateDisplay((minutes), 0)
  }
  
  function reset() {
    clearTimeout(timerTimeOut)
    updateDisplay(minutes, seconds)
  }

  function countdown() {
   timerTimeOut = setTimeout(() => {
       
    let minutes = Number(minutesDisplay.textContent)
    let seconds = Number(secondsDisplay.textContent)
       
      if(minutes <= 0 && seconds <= 0) {
        return
      }
  
      if(seconds <= 0) {
        seconds = 60
        --minutes
      }
  
      updateDisplay(minutes, String(seconds - 1))     
      countdown()
    }, 1000);
  }

  return {
    updateDisplay,
    countdown,
    addTimer,
    removeTimer,
    reset
    }
}