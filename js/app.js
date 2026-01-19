document.addEventListener("DOMContentLoaded", function () {

  function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "Detective" && password === "MC2026") {
      window.location.href = "pages/dashboard.html";
    } else {
      document.getElementById("error").innerText = "INVALID CREDENTIALS";
    }
  }

  window.login = login;

  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      login();
    }
  });

  function updateTime() {
    const now = new Date();
    document.getElementById("time").innerText =
      now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
  }

  updateTime();
  setInterval(updateTime, 1000);
});
