const passwordField = document.getElementById("password-field");
const togglePassword = document.getElementById("toggle-password");

togglePassword.addEventListener("click", function() {
  if (passwordField.type === "password") {
    passwordField.type = "text";
    togglePassword.textContent = "Ocultar senha";
  } else {
    passwordField.type = "password";
    togglePassword.textContent = "Mostrar senha";
  }
});

function redirecionar() {
    window.location.href = "https://linktr.ee/owalee";
  }