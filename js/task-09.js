const hexSpan = document.querySelector(".color");
const changeColorButton = document.querySelector(".change-color");

changeColorButton.addEventListener("click", makerColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

function makerColor() {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  hexSpan.textContent = color;
}
