
const formRef = document.querySelector('.form');
const delayRef = document.querySelector('input[name="delay"]');
const stepRef = document.querySelector('input[name="step"]');
const amountRef = document.querySelector('input[name="amount"]');
const btn = document.querySelector('button[type="submit"]');
formRef.addEventListener('submit', onFormSubmit);



 

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
  let amount = amountRef.value;


createPromise(1, delay)
    .then(({ position, delay }) => {
      console.log(`✅ Fulfilled promise 1 in ${delay} ms`);
     
    })
    .catch(({ position, delay }) => {
     console.log(`❌ Rejected promise 1 in ${delay}ms`);
    });



for (let i = 2; i <= amount; i++) {
    let delay = Number(step * i);
    

    createPromise(i, delay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${i} in ${delay}ms`);
      
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${i} in ${delay}ms`);
       
      });
  }
  

}