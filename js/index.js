import Controls from "./controls.js"
import Timer  from "./timer.js"
import Events from './events.js'


import {
  minutesDisplay,
  secondsDisplay,
  buttonDark,
  buttonLight,
  sliderForest,
  sliderRain,
  sliderCoffeeShop,
  sliderFire
} from './element.js'

import Sound from "./sounds.js"

const sound = Sound({
  sliderForest,
  sliderRain,
  sliderCoffeeShop,
  sliderFire 
})

const controls = Controls()

const timer = Timer({ minutesDisplay, secondsDisplay})

Events({sound, controls, timer})

buttonLight.addEventListener('click', () => {
  buttonLight.classList.add('hide')
  buttonDark.classList.remove('hide')
  document.documentElement.setAttribute('data-theme', 'dark')

})


buttonDark.addEventListener('click', () => {
  buttonDark.classList.add('hide')
  buttonLight.classList.remove('hide')
  document.documentElement.setAttribute('data-theme', 'light')
})


