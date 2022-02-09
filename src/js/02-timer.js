import flatpickr from "flatpickr";
import 'flatpickr/dist/flatpickr.min.css';

const inputRef = document.querySelector("#datetime-picker");
const buttonRef = document.querySelector("[data-start]");
console.log(buttonRef);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

flatpickr(inputRef, options);

inputRef.addEventListener("click", onClose);

function onClose() { };

const chooseTime = inputRef.value;
console.log(chooseTime);