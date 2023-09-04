const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const counterValue = document.querySelector("#value");
let currentValue = 0;
console.log(typeof currentValue);
decrementBtn.addEventListener("click", () => {
  currentValue -= 1;
  counterValue.textContent = currentValue;
  // updateCounterValue();
});

incrementBtn.addEventListener("click", () => {
  currentValue += 1;
  counterValue.textContent = currentValue;
  // updateCounterValue();
});

// function updateCounterValue() {
//   counterValue.textContent = currentValue;
// }
