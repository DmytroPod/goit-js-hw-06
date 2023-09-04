const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(evt) {
  evt.preventDefault();

  const email = loginForm.elements.email.value;
  const password = loginForm.elements.password.value;

  if (email === "" || password === "") {
    alert("Заповніть всі поля форми.");
    return;
  }

  const info = {
    email: email,
    password: password,
  };
  console.log(info);
}
