const hexColors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const color = document.querySelector('.color');
const btn = document.getElementById('btnColor');

btn.addEventListener('click', () => {
  let colorhex = '#';

  for (let i = 0; i < 6; i++) {
    colorhex += hexColors[getRamdomColor()];
    document.body.style.backgroundColor = colorhex;
    color.textContent = colorhex
  }

})
const getRamdomColor = () => {
  return Math.floor(Math.random() * hexColors.length)

}