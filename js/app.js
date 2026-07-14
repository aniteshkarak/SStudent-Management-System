// Generic dropdown toggle: click a .dropdown-btn to open/close its data-target
document.querySelectorAll(".dropdown-btn").forEach(btn => {
  btn.addEventListener("click", e => {
    e.stopPropagation();
    const menu = document.getElementById(btn.dataset.target);
    const isOpen = !menu.classList.contains("hidden");
    document.querySelectorAll(".dropdown").forEach(d => d.classList.add("hidden"));
    menu.classList.toggle("hidden", isOpen);
  });
});
document.addEventListener("click", () =>
  document.querySelectorAll(".dropdown").forEach(d => d.classList.add("hidden"))
);

// Theme toggle (swap emoji, hook real dark-mode logic here)
document.getElementById("themeBtn").addEventListener("click", e => {
  e.stopPropagation();
  e.target.textContent = e.target.textContent === "🌙" ? "☀️" : "🌙";
});

// sidebar
const menuBtn = document.getElementById("menubar");
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("-translate-x-full");
});

document.addEventListener("click", (e) => {
    if (
        window.innerWidth < 768 &&
        !sidebar.contains(e.target) &&
        !menuBtn.contains(e.target)
    ) {
        sidebar.classList.add("-translate-x-full");
    }
});

// chart 

const chartTheme = {
  grid: "#E5E7EB",
  text: "#475569",
  // amber: "#F59E0B",
  // amber: "#fbbf24",
  amberFill: "rgba(251, 191, 36, 0.15)",
  palette: [
    "#F59E0B",
    "#FBBF24",
    "#FCD34D",
    "#FDE68A",
    "#FEF3C7",
    "#FFFBEB",
  ],
};

Chart.defaults.color = chartTheme.text;
Chart.defaults.font.family = "inherit";

// ---- Student Distribution (bar chart) ----

new Chart(document.getElementById("studentDistributionChart"),{
  type: "bar",
  data: {
    labels: ["CSE", "ECE", "Mech", "Civil"],
    datasets: [{
      label: "Student",
      data: [480, 360, 240, 180],
      backgroundColor: chartTheme.amber,
      borderRadius: 4,
      maxBarThickness: 40,
    }],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      y: { beginAtZero: true, grid: {color: chartTheme.grid}},
      x: { grid: { display: false }},
    },
  },
});

// ---- Attendance Overview (doughnut chart) ----
new Chart(document.getElementById("attendanceOverviewChart"),{
  type: "doughnut",
  data: {
    labels: ["Present", "Absent", "On leave"],
    datasets: [{
      data: [92, 5, 3],
      backgroundColor: [chartTheme.palette[0], chartTheme.palette[2], chartTheme.palette[3]],
      borderColor: "#18181b",
      borderWidth: 1,
    }],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "65%",
    plugins: {
      legend:{
        position: "bottom",
        labels:{
          boxWidth: 10,
          padding: 12
        }
      },
    },
  },
});

// Monthly Admissions
new Chart(document.getElementById("admissionsChart"),{
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [{
      label: "Admissions",
      data: [40, 55, 48, 70, 65, 90],
      backgroundColor: chartTheme.amber,
      borderColor: "#18181b",
      fill: true,
      tension: 0.35,
      pointRadius: 3,
      borderWidth: 1,
    }],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "65%",
    plugins: {
      legend:{
        position: "bottom",
        labels:{
          boxWidth: 10,
          padding: 12
        }
      },
    },
  },
});
