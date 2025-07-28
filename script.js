function registerUser(event) {
  event.preventDefault(); // stop form from reloading

  alert("Registration Successful!");

  // redirect to login page
  window.location.href = "index.html";
}

function loginUser(event) {
  event.preventDefault(); // stop form from reloading

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "admin" && password === "1234") {
    alert("Login Successful!");
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid credentials!");
  }
}
