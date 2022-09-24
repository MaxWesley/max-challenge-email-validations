function validateEmailInput() {
  const inputEmail = document.querySelector("input");
  const alertText = document.querySelector('#alert');

  const emailDigitado = inputEmail.value;

  const existeArroba = emailDigitado.includes('@');
    const existePonto = emailDigitado.includes('.');
  if(existeArroba === false) {
    alertText.innerHTML = 'E-mail inválido. Verifique o e-mail e tente novamente.';
  }
  if(existePonto === false) {
    alertText.innerHTML = 'E-mail inválido. Verifique o e-mail e tente novamente.';
  }
}