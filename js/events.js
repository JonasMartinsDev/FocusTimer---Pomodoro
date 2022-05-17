import {
  buttonPlay,
  buttonStop,
  buttonIncrease,
  buttonDecrease,
  buttonForest,
  buttonRain,
  buttonCoffeeShop,
  buttonFire,
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
  
 buttonForest.addEventListener('click', function() {
   sound.pressForest()
   controls.backColor(buttonForest)
 }) 
 buttonRain.addEventListener('click', function() {
   sound.pressRain()
   controls.backColor(buttonRain)

 }) 
 buttonCoffeeShop.addEventListener('click', function() {
   sound.pressCoffeeShop()
   controls.backColor(buttonCoffeeShop)

 })
 buttonFire.addEventListener('click', function() {
   sound.pressFire()
   controls.backColor(buttonFire)
 }) 
}