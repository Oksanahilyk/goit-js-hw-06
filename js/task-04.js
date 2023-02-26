const buttonDescrement = document.querySelector(
  'button[data-action="decrement"]'
);
const buttonIncrement = document.querySelector(
  'button[data-action="increment"]'
);
const span = document.querySelector("#value");
const wrapper = document.querySelector("#counter");

let counterValue = 0;
const increment = () => {
  counterValue += 1;
  span.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;
  span.textContent = counterValue;
};

buttonIncrement.addEventListener("click", increment);
buttonDescrement.addEventListener("click", decrement);
