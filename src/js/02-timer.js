import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  startBtn: document.querySelector('[data-start]'),
  resetBtn: document.querySelector('[data-reset]'),
  fieldDay: document.querySelector('[data-days]'),
  fieldHour: document.querySelector('[data-hours]'),
  fieldMin: document.querySelector('[data-minutes]'),
  fieldSec: document.querySelector('[data-seconds]'),
  inputRef: document.querySelector('#datetime-picker'),
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  // minDate: Date.now(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (Date.parse(selectedDates) > Date.now()) {
      refs.startBtn.disabled = false;
      refs.startBtn.addEventListener('click', startCountdown);
      Notiflix.Notify.success("Let's start");
    } else {
      Notiflix.Notify.failure('Please choose a date in the future');
    }
  },
};

flatpickr(refs.inputRef, options);
refs.startBtn.disabled = true;
refs.resetBtn.disabled = true;

const countdown = {
  intervalId: null,
  // isActive: false,
  start() {
    // if (this.isActive) {
    //   return;
    // }
    // this.isActive = true;
    const finishTime = new Date(refs.inputRef.value);

    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = finishTime - currentTime;
      const resultTime = convertMs(deltaTime);
      updateInterfaceClock(resultTime);
    }, 1000);
  },
  stop() {
    // this.isActive = false;
    clearInterval(this.intervalId);
  },
};

function updateInterfaceClock({ days, hours, minutes, seconds }) {
  refs.fieldDay.textContent = days;
  refs.fieldHour.textContent = hours;
  refs.fieldMin.textContent = minutes;
  refs.fieldSec.textContent = seconds;
  if (seconds === '00' && minutes === '00' && hours === '00' && days === '00') {
    countdown.stop();
    disableButtons();
    Notiflix.Notify.info('COUNTDOWN IS OVER. Thank you for cooperation!...');
  } else if (seconds < 0) {
    resetCountdown();
    Notiflix.Notify.warning("Something's wrong! Please choose date again");
  }
}

function resetInterfaceClock() {
  refs.fieldDay.textContent = '00';
  refs.fieldHour.textContent = '00';
  refs.fieldMin.textContent = '00';
  refs.fieldSec.textContent = '00';
}

function startCountdown() {
  countdown.start();
  refs.startBtn.disabled = true;
  refs.startBtn.removeEventListener('click', startCountdown);
  refs.resetBtn.disabled = false;
  refs.resetBtn.addEventListener('click', resetCountdown);
  // updateInterfaceClock(resultTime);
}

function resetCountdown() {
  countdown.stop();
  disableButtons();
  resetInterfaceClock();
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function disableButtons() {
  refs.startBtn.disabled = true;
  refs.startBtn.removeEventListener('click', startCountdown);
  refs.resetBtn.disabled = true;
  refs.resetBtn.removeEventListener('click', resetCountdown);
}
