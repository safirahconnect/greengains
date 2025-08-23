export default function initHamburgerMenu() {
  const hamburger = document.querySelector(".header__hamburger");
  const nav = document.querySelector(".header__nav");

  hamburger.addEventListener("click", (e) => {
    e.preventDefault();
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
  });
}