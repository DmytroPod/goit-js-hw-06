const curentFontSize = document.querySelector("#font-size-control");
const textSpan = document.querySelector("#text");
textSpan.style.fontSize = "56px";
curentFontSize.addEventListener("input", handleFontSize);

function handleFontSize(evt) {
  const fontSize = evt.target.value + "px";
  textSpan.style.fontSize = fontSize;
}
