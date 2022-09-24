function validateEmailInput() {
  const inputEmail = document.querySelector("input");
  const alertText = document.getElementById("alert");

  const emailDigitado = inputEmail.value;

  const ehEmailValid = [
    emailDigitado.includes("@"),
    emailDigitado.includes("."),
  ];

  if (ehEmailValid.includes(false)) {
    alertText.innerHTML =
      "E-mail inválido. Verifique o e-mail e tente novamente.";
    return;
  }

  alertText.style.color = "#0bb83f";
  alertText.innerHTML = "E-mail é válido";
}
