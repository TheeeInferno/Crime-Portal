function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "Detective" && password === "MC2026") {
    window.location.href = "pages/dashboard.html";
  } else {
    document.getElementById("error").innerText = "INVALID CREDENTIALS";
  }
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    login();
  }
});

function updateTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  document.getElementById("time").innerText = timeString;
}

setInterval(updateTime, 1000);
updateTime();
