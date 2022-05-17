export default function({ 
  sliderForest,
  sliderRain,
  sliderCoffeeShop,
  sliderFire,
}) {
  const buttonForest = new Audio("../music/Floresta.wav")
  const buttonRain = new Audio("../music/Chuva.wav")
  const buttonCoffeeShop = new Audio("../music/Cafeteria.wav")
  const buttonFire = new Audio("../music/Lareira.wav")


  function stopSound(nowSound, stopOne, stopTwo, stopThree) { 
    nowSound.play()
    stopOne.pause()
    stopTwo.pause()
    stopThree.pause()
  }

  function backVolume(value1, value2, value3) { 
    value1.value = 50
    value2.value = 50
    value3.value = 50
  }


  function pressForest() {
    buttonForest.loop = true
    stopSound(buttonForest, buttonRain, buttonCoffeeShop, buttonFire)
    backVolume(sliderFire, sliderCoffeeShop, sliderRain)
    buttonForest.volume = sliderForest.value / 100
  }
   
  function pressRain() {
    buttonRain.loop = true
    stopSound(buttonRain, buttonForest, buttonCoffeeShop, buttonFire)
    backVolume(sliderFire, sliderCoffeeShop, sliderForest)
    buttonRain.volume = sliderRain.value / 100
  } 
  function pressCoffeeShop() {
    buttonCoffeeShop.loop = true
    stopSound(buttonCoffeeShop, buttonForest, buttonRain, buttonFire)
    backVolume(sliderFire, sliderForest, sliderRain)
    buttonCoffeeShop.volume = sliderCoffeeShop.value / 100
  } 

  function pressFire() {
    buttonFire.loop = true
    stopSound(buttonFire, buttonForest, buttonRain, buttonCoffeeShop)
    backVolume(sliderForest, sliderCoffeeShop, sliderRain)
    buttonFire.volume = sliderFire.value / 100
  }

  return {
    stopSound,
    pressCoffeeShop,
    pressRain,
    pressFire,
    pressForest
  }
}