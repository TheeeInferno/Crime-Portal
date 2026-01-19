function logout() {
  window.location.href = "../index.html";
}

// Show Dashboard Panels
function showDashboard() {
  const content = document.getElementById("content-area");
  content.innerHTML = `
    <div class="dashboard-panel">
      <h2>Active Cases</h2>
      <p>No cases loaded</p>
    </div>
    <div class="dashboard-panel">
      <h2>Active BOLOs</h2>
      <p>No alerts</p>
    </div>
    <div class="dashboard-panel">
      <h2>Recent Activity</h2>
      <p>Nothing to display</p>
    </div>
  `;
}

// Placeholder functions for Reports/Cases/BOLOs
function showReports() {
  const content = document.getElementById("content-area");
  content.innerHTML = `<p style="color:#9ca3af; padding:20px;">Reports page coming soon</p>`;
}

function showCases() {
  const content = document.getElementById("content-area");
  content.innerHTML = `<p style="color:#9ca3af; padding:20px;">Cases page coming soon</p>`;
}

function showBOLOs() {
  const content = document.getElementById("content-area");
  content.innerHTML = `<p style="color:#9ca3af; padding:20px;">BOLOs page coming soon</p>`;
}

// Show Map inside CAD via iframe
function showMap() {
  const content = document.getElementById("content-area");
  content.innerHTML = `
    <iframe src="https://gtamap.xyz/" 
      style="width:100%; height:80vh; border:none; border-radius:6px;">
    </iframe>
  `;
}
