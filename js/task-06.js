const textInput = document.querySelector("#validation-input");

const maxLength = Number(textInput.dataset.length);
console.log(maxLength);

textInput.addEventListener("blur", handleBlur);

function handleBlur() {
  if (textInput.value.length === maxLength) {
    textInput.classList.add("valid");
    textInput.classList.remove("invalid");
  } else {
    textInput.classList.add("invalid");
    textInput.classList.remove("valid");
  }
  //   textInput.value.length === maxLength
  //     ? (textInput.classList.add("valid"), textInput.classList.remove("invalid"))
  //     : (textInput.classList.add("invalid"), textInput.classList.remove("valid"));
}
