function validateEmailInput() {
  const inputEmail = document.querySelector("input");
  const alertText = document.getElementById('alert');

  const emailDigitado = inputEmail.value;

  const existeArroba = emailDigitado.includes('@');
  const existePonto = emailDigitado.includes(".");

  if(existeArroba === false || existePonto === false) {
    alertText.innerHTML = 'E-mail inválido. Verifique o e-mail e tente novamente.';
    return;
  }

  alertText.style.color = "#0bb83f";
  alertText.innerHTML = 'E-mail é válido';
}