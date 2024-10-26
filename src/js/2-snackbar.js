import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (position === 'fulfilled') {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const { delay, state } = event.currentTarget.elements;

  createPromise(state.value, Number(delay.value))
    .then(({ delay }) => {
      iziToast.success({
        title: false,
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: 'topRight',
        timeout: 3000,
        displayMode: 2,
      });
    })
    .catch(({ delay }) => {
      iziToast.error({
        title: false,
        message: `❌ Rejected promise in ${delay}ms`,
        position: 'topRight',
        timeout: 3000,
        displayMode: 2,
      });
    });
});