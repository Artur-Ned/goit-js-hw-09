function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector('body');
const btnStartRef = document.querySelector("[data-start]");
const btnStoptRef = document.querySelector("[data-stop]");
console.log(btnStoptRef);

btnStartRef.addEventListener('click', onBtnStartclick)
btnStoptRef.addEventListener('click', onBtnStopclick)

let timerId = null;

function onBtnStartclick(e) {
  timerId = setInterval(() => { bodyRef.style.backgroundColor = getRandomHexColor();}, 1000);
    btnStartRef.setAttribute("disabled", "disabled");
    
}

function onBtnStopclick(e) {
  
  btnStartRef.removeAttribute("disabled", "disabled");
  clearInterval(timerId);
}

