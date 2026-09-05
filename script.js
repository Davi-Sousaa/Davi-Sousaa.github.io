const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuButton.addEventListener("click", () => {
  nav.classList.toggle("open");
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav a");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle(
          "active",
          link.getAttribute("href") === `#${entry.target.id}`
        );
      });
    }
  });
}, { rootMargin: "-35% 0px -55% 0px" });

sections.forEach(section => observer.observe(section));

document.getElementById("year").textContent = new Date().getFullYear();
// ===== ORB DO CURSOR =====

const cursorOrb = document.querySelector(".cursor-orb");

document.addEventListener("mousemove", (event) => {
  if (cursorOrb) {
    cursorOrb.style.left = `${event.clientX}px`;
    cursorOrb.style.top = `${event.clientY}px`;
  }
});
