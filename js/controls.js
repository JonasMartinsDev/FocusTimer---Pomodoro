export default function Controls() {
  
  function backColor(button) {
    let element = document.querySelector('.active');
    if(element === null) {
      button.classList.add('active')
    } else {
      element.classList.remove('active')
      button.classList.add('active')
    }
  }

  return {
    backColor
  }
}