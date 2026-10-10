
document.addEventListener("DOMContentLoaded", function () {
  // Registration form
  const registerForm = document.getElementById("registerForm");

  if (registerForm) {
    registerForm.addEventListener("submit", function (event) {
      event.preventDefault();
      alert(
        "Registration demo: Connect a secure backend to create your account."
      );
    });
  }

  // User login form
  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();
      alert(
        "Login demo: Secure authentication must be connected to a backend."
      );
    });
  }

  // Admin login form
  const adminLoginForm = document.getElementById("adminLoginForm");

  if (adminLoginForm) {
    adminLoginForm.addEventListener("submit", function (event) {
      event.preventDefault();
      alert(
        "Admin login demo: Configure secure server-side admin authentication."
      );
    });
  }

  // Deposit form
  const depositForm = document.getElementById("depositForm");

  if (depositForm) {
    depositForm.addEventListener("submit", function (event) {
      event.preventDefault();
      alert(
        "Deposit demo: Connect an authorized payment provider and secure backend to process payments."
      );
    });
  }

  // Withdrawal form
  const withdrawalForm = document.getElementById("withdrawalForm");

  if (withdrawalForm) {
    withdrawalForm.addEventListener("submit", function (event) {
      event.preventDefault();
      alert(
        "Withdrawal demo: A secure backend must verify your balance and process withdrawal requests."
      );
    });
  }

  // Settings form
  const settingsForm = document.getElementById("settingsForm");

  if (settingsForm) {
    settingsForm.addEventListener("submit", function (event) {
      event.preventDefault();
      alert(
        "Settings demo: Connect a backend to securely save your changes."
      );
    });
  }

  // Logout buttons
  const logoutButtons = document.querySelectorAll(".logout-btn");

  logoutButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      alert("Demo logout clicked. Add secure session logout on the backend.");
      window.location.href = "login.html";
    });
  });
});
