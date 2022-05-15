export default function() {
  const buttonFloresta = new Audio("../music/Floresta.wav")
  const buttonChuva = new Audio("../music/Chuva.wav")
  const buttonLareira = new Audio("../music/Lareira.wav")
  const buttonCafeteria = new Audio("../music/Cafeteria.wav")

  buttonFloresta.loop = true
  buttonChuva.loop = true
  buttonLareira.loop = true
  buttonCafeteria.loop = true

  return {
    buttonCafeteria,
    buttonFloresta,
    buttonChuva,
    buttonLareira
  }
}