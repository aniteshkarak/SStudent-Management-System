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

