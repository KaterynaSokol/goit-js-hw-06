const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');

let currentValue = 0;
let counterValue = document.querySelector("#value");
const increaseValue = () => {
  currentValue += 1;
  counterValue.textContent = currentValue;
};
increment.addEventListener("click", increaseValue);

const decreaseValue = () => {
  currentValue -= 1;
  counterValue.textContent = currentValue;
};
decrement.addEventListener("click", decreaseValue);
