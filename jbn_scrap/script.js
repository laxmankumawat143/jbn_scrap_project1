const menuButton = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");

menuButton.addEventListener("click", () => {
  const isOpen = mobileNav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.textContent = isOpen ? "×" : "☰";
});

document.querySelectorAll(".mobile-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "☰";
  });
});

const quoteForm = document.querySelector("#quoteForm");
const formNote = document.querySelector("#formNote");

quoteForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(quoteForm);
  const name = formData.get("name");
  const phone = formData.get("phone");
  const category = formData.get("category");
  const whatsappLink = document.querySelector(".whatsapp-float");
  const whatsappNumber = whatsappLink?.href.match(/wa\.me\/(\d+)/)?.[1];
