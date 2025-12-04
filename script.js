/* ===== HEADER SHADOW ON SCROLL ===== */
const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

/* ===== SMOOTH ACTIVE NAV HIGHLIGHT ===== */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 80;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

/* ===== FADE-IN ANIMATIONS ON SCROLL ===== */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".section, .job, .summary-card").forEach((el) => {
  observer.observe(el);
});

/* ===== CLICK TO COPY EMAIL ===== */
const emailLinks = document.querySelectorAll('a[href^="mailto:"]');

emailLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const email = link.textContent.trim();

    navigator.clipboard.writeText(email).then(() => {
      alert("Email copied: " + email);
      window.location.href = "mailto:" + email; // optional
    });
  });
});
