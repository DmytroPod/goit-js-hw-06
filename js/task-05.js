const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
const def = "Anonymous";
textInput.addEventListener("input", (evt) => {
  output.textContent = evt.currentTarget.value;
  if (evt.currentTarget.value === "") {
    output.textContent = def;
    return;
  }
});

console.log();
