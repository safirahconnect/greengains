export default function initHamburgerMenu() {
  const hamburger = document.querySelector("[data-icon='hamburger']");
  const nav = document.querySelector("[data-nav='hamburger']");

  if(hamburger && nav) {
    hamburger.addEventListener("click", (e) => {
      e.preventDefault();
      hamburger.classList.toggle("active");
      nav.classList.toggle("active");
    });
  }
}
