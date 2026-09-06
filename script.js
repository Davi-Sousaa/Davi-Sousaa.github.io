const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");

if (menuButton) {
  menuButton.addEventListener("click", () => {
    const opened = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", opened);
  });
}

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});

const revealItems = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealItems.forEach(item => observer.observe(item));

const cursorDot = document.querySelector(".cursor-dot");
const cursorRing = document.querySelector(".cursor-ring");

if (window.matchMedia("(pointer: fine)").matches && cursorDot && cursorRing) {
  window.addEventListener("mousemove", (event) => {
    cursorDot.style.left = `${event.clientX}px`;
    cursorDot.style.top = `${event.clientY}px`;

    cursorRing.animate(
      {
        left: `${event.clientX}px`,
        top: `${event.clientY}px`
      },
      { duration: 120, fill: "forwards", easing: "ease-out" }
    );
  });

  document.querySelectorAll("a, button").forEach(el => {
    el.addEventListener("mouseenter", () => cursorRing.classList.add("active"));
    el.addEventListener("mouseleave", () => cursorRing.classList.remove("active"));
  });
}
