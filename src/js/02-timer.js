import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const input = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const daysEl = document.querySelector('span[data-days]');
const hoursEl = document.querySelector('span[data-hours]');
const minutesEl = document.querySelector('span[data-minutes]');
const secondsEl = document.querySelector('span[data-seconds]');
let selectedDate;

function pad(value) {
  return String(value).padStart(2, '0');
}

function updateVisual({ days, hours, minutes, seconds }) {
  daysEl.textContent = pad(days);
  hoursEl.textContent = pad(hours);
  minutesEl.textContent = pad(minutes);
  secondsEl.textContent = pad(seconds);
}

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
}

function startTimer() {
    startBtn.disabled = true;
    const timerId = setInterval(() => {
      const remainingTime = selectedDate - Date.now();
  
      if (remainingTime <= 0) {
        clearInterval(timerId);
        return;
      }
  
      updateVisual(convertMs(remainingTime));
    }, 1000);
  }

flatpickr('#datetime-picker', {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      if (selectedDates[0] < Date.now()) {
        Notify.failure(`Please choose a date in the future`);
        return;
      }
  
      selectedDate = selectedDates[0];
      startBtn.disabled = false;
    },
  });
  
startBtn.addEventListener('click', startTimer);
