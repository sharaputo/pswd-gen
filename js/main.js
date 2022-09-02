window.addEventListener("DOMContentLoaded", () => {
  const passwordInput = document.getElementById("password");
  const genBtn = document.getElementById("generate");
  const copyBtn = document.getElementById("copy");

  function genPassword() {
    const chars =
      "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const passwordLength = 12;
    let password = "";

    for (let i = 0; i < passwordLength; i++) {
      let randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber, randomNumber + 1);
      passwordInput.value = password;
    }
  }

  function copyPassword() {
    passwordInput.select();
    navigator.clipboard.writeText(passwordInput.value);
    copyBtn.innerHTML = "Copied";
    setTimeout(() => {
      copyBtn.innerHTML = "Copy";
    }, 1000);
  }

  genBtn.addEventListener("click", genPassword);
  copyBtn.addEventListener("click", copyPassword);
});
