// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");
const delayInput = document.querySelector('input[name="delay"]');
const radioInput = document.querySelector('input[name="state"]');


form.addEventListener("submit", (event) => {
    event.preventDefault()
})