function login() {
  const password = document.getElementById("password").value;

  if (password === "MC2026") {
    window.location.href = "pages/dashboard.html";
  } else {
    document.getElementById("error").innerText = "Access Denied";
  }
}
