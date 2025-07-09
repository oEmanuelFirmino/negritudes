
document.getElementById("year").textContent = new Date().getFullYear();


const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");
mobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});


document.querySelectorAll("#mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});


const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("bg-black", "bg-opacity-80", "shadow-lg");
  } else {
    header.classList.remove("bg-black", "bg-opacity-80", "shadow-lg");
  }
});


const sr = ScrollReveal({
  distance: "50px",
  duration: 1500,
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  reset: false,
});

sr.reveal(".reveal-up", { origin: "top" });
sr.reveal(".reveal-down", { origin: "bottom", delay: 200 });
sr.reveal(".reveal-left", { origin: "left" });
sr.reveal(".reveal-right", { origin: "right" });


sr.reveal(".reveal-1", { delay: 200 });
sr.reveal(".reveal-2", { delay: 400 });
sr.reveal(".reveal-3", { delay: 600 });
sr.reveal(".reveal-4", { delay: 800 });