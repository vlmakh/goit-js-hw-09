import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const refs = {
  inputDelay: form.querySelector('[name="delay"]'),
  inputStep: form.querySelector('[name="step"]'),
  inputAmount: form.querySelector('[name="amount"]'),
};
let i = 1;

Notiflix.Notify.init({
  position: 'right-top', // 'right-top' - 'right-bottom' - 'left-top' - 'left-bottom' - 'center-top' - 'center-bottom' - 'center-center'
  cssAnimationStyle: 'from-right', // 'fade' - 'zoom' - 'from-right' - 'from-top' - 'from-bottom' - 'from-left'
});

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  let delay = Number(refs.inputDelay.value);
  const step = Number(refs.inputStep.value);

  for (let i = 1; i <= refs.inputAmount.value; i += 1) {
    if (i <= refs.inputAmount.value) {
      createPromise(i, delay)
        .then(({ position, delay }) => {
          Notiflix.Notify.success(
            `✅ Fulfilled promise ${position} in ${delay}ms`
          );
          // console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          Notiflix.Notify.failure(
            `❌ Rejected promise ${position} in ${delay}ms`
          );
          // console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        });

      delay += step;
    } else {
      return;
    }
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
