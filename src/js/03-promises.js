
const formRef = document.querySelector('.form');
const delayRef = document.querySelector('input[name="delay"]');
const stepRef = document.querySelector('input[name="step"]');
const amountRef = document.querySelector('input[name="amount"]');
const btn = document.querySelector('button[type="submit"]');
formRef.addEventListener('submit', onFormSubmit);

// console.log(formRef)
// console.log(btn)
// console.log(delayRef)
// console.log(amountRef)
// console.log(delayRef)

 

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay })
      } else {
        reject({ position, delay })
      }
    }, delay)
  
  });
}

function onFormSubmit(evt) {
  evt.preventDefault();
  let delay = Number(delayRef.value);
  let step = stepRef.value;
  let amoun = amountRef.value;

  console.log(delay)
  console.log(step)
   console.log(amoun)

}