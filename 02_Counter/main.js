

const textCounter = document.getElementById('textCounter');

const btnDecrease = document.getElementById('btnDecrease');
const btnReset = document.getElementById('btnReset');
const btnINcrease = document.getElementById('btnINcrease');

let number = 0;

btnINcrease.addEventListener('click', () => {
    number += 1;

    textCounter.textContent = number;
});

btnDecrease.addEventListener('click', () => {
    if (number === 0) return
    number -= 1;
    textCounter.textContent = number;
});
btnReset.addEventListener('click', () => {
    textCounter.textContent = 0;
});