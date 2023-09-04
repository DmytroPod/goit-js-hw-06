const curentFontSize = document.querySelector("#font-size-control");
const textSpan = document.querySelector("#text");

curentFontSize.addEventListener("input", handleFontSize);

function handleFontSize(evt) {
  const fontSize = evt.target.value + "px";
  console.log(fontSize);
  textSpan.style.fontSize = fontSize;
  textSpan.textContent = fontSize;
}
