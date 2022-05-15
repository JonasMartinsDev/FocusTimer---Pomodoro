export default function Controls() {
  
  function removeClass(card) {
    let element = document.querySelector('.active');
    if(element === null) {
      card.classList.add('active')
    } else {
      element.classList.remove('active')
      card.classList.add('active')
    }
  }

  return {
    removeClass
  }
}