function login() {
  const password = document.getElementById("password").value;

  if (password === "CHANGE_THIS_CODE") {
    window.location.href = "pages/dashboard.html";
  } else {
    document.getElementById("error").innerText = "Access Denied";
  }
}
