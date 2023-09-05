// const curentFontSize = document.querySelector("#font-size-control");
// const textSpan = document.querySelector("#text");
// textSpan.style.fontSize = "56px";
// curentFontSize.addEventListener("input", handleFontSize);

// function handleFontSize(evt) {
//   const fontSize = evt.target.value + "px";
//   textSpan.style.fontSize = fontSize;
// }
const refs = {
  curentFontSize: document.querySelector("#font-size-control"),
  textSpan: document.querySelector("#text"),
};
refs.textSpan.style.fontSize = `${refs.curentFontSize.value}px`;

refs.curentFontSize.addEventListener("input", () => {
  refs.textSpan.style.fontSize = `${refs.curentFontSize.value}px`;
});
