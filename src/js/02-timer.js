import flatpickr from "flatpickr";
import 'flatpickr/dist/flatpickr.min.css';

const inputRef = document.querySelector("#datetime-picker");
const buttonRef = document.querySelector("[data-start]");
const daysRef = document.querySelector("[data-days]");
const hoursRef = document.querySelector("[data-hours]");
const minutesRef = document.querySelector("[data-minutes]");
const secondsRef = document.querySelector("[data-seconds]");

let timerId = null;
let timeForTimer = new Date();


buttonRef.addEventListener('click', () => {
  timerId = setInterval(() => {
    
    upDateTimer();
  }, 1000);
});







const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < options.defaultDate) {
      buttonRef.setAttribute('disabled', true)
      window.alert("Please choose a date in the future"); 
    } else {  buttonRef.removeAttribute('disabled', true)
    console.log("едем дальше")}
    timeForTimer = selectedDates[0] - options.defaultDate;
    console.log(timeForTimer);
  },
};

flatpickr('#datetime-picker', options);


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
};

 function addLeadingZero(value) {
    return String(value).padStart(2, '0');
};

function upDateTimer () {
  
  // if (timeForTimer < 0) {
  //   clearInterval(timerId);
  //   return;
  // } else {
    let converTime = convertMs(timeForTimer);
    daysRef.textContent = addLeadingZero(converTime.days);
    hoursRef.textContent = addLeadingZero(converTime.hours);
    minutesRef.textContent = addLeadingZero(converTime.minutes);
    secondsRef.textContent = addLeadingZero(converTime.seconds);
    
  // }
};


// function updateTimer() {
//   if (timeTimer > 1) {
//     let formatedTime = convertMs(timeTimer);
//      // console.log(formatedTime);
//     refs.timerFieldDay.textContent = addLeadingZero(formatedTime.days);
//     refs.timerFieldHour.textContent = addLeadingZero(formatedTime.hours);
//     refs.timerFieldMin.textContent = addLeadingZero(formatedTime.minutes);
//     refs.timerFieldSec.textContent = addLeadingZero(formatedTime.seconds);
//   } else {
//     clearInterval(timerId);
//   }
//   timeTimer -= 1000;
// }