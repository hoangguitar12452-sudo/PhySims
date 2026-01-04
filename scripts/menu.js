export function initMobileMenu() {
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileLinks = document.querySelectorAll(".nav-link-mobile");

  menuToggle.addEventListener("click", () => {
    const isActive = mobileMenu.classList.toggle("active");
    menuToggle.setAttribute("aria-expanded", isActive);
  });

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}
