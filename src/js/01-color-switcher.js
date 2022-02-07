function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector('body');
const btnStartRef = document.querySelector("[data-start]");
const btnStoptRef = document.querySelector("[data-stop]");
console.log(btnStoptRef);

btnStartRef.addEventListener('click', onBtnStartclick)
btnStoptRef.addEventListener('click', onBtnStopclick)

function onBtnStartclick(e) {
    bodyRef.style.backgroundColor = getRandomHexColor();
    btnStartRef.setAttribute("disabled", "disabled");
    
}

function onBtnStopclick(e) {
    // bodyRef.style.backgroundColor = getRandomHexColor();
    btnStartRef.removeAttribute("disabled", "disabled");
}

// removeAttribute()