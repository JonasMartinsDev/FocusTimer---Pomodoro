import {
  buttonPlay,
  buttonStop,
  buttonIncrease,
  buttonDecrease,
  cardFloresta,
  cardCafeteira,
  cardChuva,
  cardLareira,
} from './element.js'

export default function({sound, controls, timer}) {

  buttonPlay.addEventListener('click', function() {
    timer.countdown()
    buttonPlay.disabled = true
  })
  
  buttonStop.addEventListener('click', function() {
    timer.reset()
    buttonPlay.disabled = false
  })
  
  buttonIncrease.addEventListener('click', function() {
    timer.addTimer()
  })
  
  buttonDecrease.addEventListener('click', function() {
    timer.removeTimer()
  })
  
  cardFloresta.addEventListener('click', function() {
    controls.removeClass(cardFloresta)
  
    sound.buttonFloresta.play()
    sound.buttonChuva.pause()
    sound.buttonLareira.pause()
    sound.buttonCafeteria.pause()
  
  })
  
  cardChuva.addEventListener('click', function() {
    controls.removeClass(cardChuva)
    
    sound.buttonChuva.play()
    sound.buttonFloresta.pause()
    sound.buttonLareira.pause()
    sound.buttonCafeteria.pause()
  
  })

  cardLareira.addEventListener('click', function() {
    controls.removeClass(cardLareira)
  
    sound.buttonLareira.play()
    sound.buttonFloresta.pause()
    sound.buttonChuva.pause()
    sound.buttonCafeteria.pause()  
  })

  cardCafeteira.addEventListener('click', function() {
    controls.removeClass(cardCafeteira)
  
    sound.buttonCafeteria.play()
    sound.buttonFloresta.pause()
    sound.buttonChuva.pause()
    sound.buttonLareira.pause()
  
  })
}