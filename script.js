/* ===== ACTIVE NAV LINK ===== */
const currentPage = window.location.pathname.split("/").pop();
const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

/* ===== FADE IN ANIMATIONS ===== */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".fade").forEach(el => observer.observe(el));
