function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.body
const button = document.querySelector(".change-color");
const spun = document.querySelector(".color");

button.addEventListener('click', colorChange);

function colorChange(event) {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  spun.textContent = color;
}
