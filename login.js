document.getElementById("login-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  if (username.length < 3) {
    message.textContent = "Username must be at least 3 characters.";
    return;
  }

  if (password.length < 8) {
    message.textContent = "Password must be at least 8 characters.";
    return;
  }

  message.textContent = "Signed in as " + username;
});
