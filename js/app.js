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