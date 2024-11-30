// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");
const delayInput = document.querySelector('input[name="delay"]');
const radioInput = document.querySelectorAll('input[name="state"]');


form.addEventListener("submit", (event) => {
    event.preventDefault();

    const delay = parseInt(delayInput.value, 10);

    let selectedState = undefined;
    for (const radio of radioInput) {
        if (radio.checked) {
       selectedState = radio.value;
            break;
        }
    };
   


    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (selectedState === "fulfilled") {
                resolve(delay);
            } else {
                reject(delay);
            }
        }, delay)
   })
    
    promise 
        .then((value) => {
        iziToast.success({
        title: "✅ Success",
        message: `Fulfilled promise in ${value}ms`,
        position: "topRight",
      });
    })
        .catch((error) => {
            iziToast.error({
            title: "❌ Failure",
        message: `Rejected promise in ${error}ms`,
        position: "topRight",
        })
    })
    

})