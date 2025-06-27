//accordion list
function initAccordionList() {
  const questions = document.querySelectorAll(".faq__question dt");
  if (questions.length) {
    questions[0].classList.add("active");
    questions[0].nextElementSibling.classList.add("active");

    questions.forEach((q) => q.addEventListener("click", handleClick));

    function handleClick() {
      this.classList.toggle("active");
      this.nextElementSibling.classList.toggle("active");
    }
  }
}

initAccordionList();

//highlight header links
function initHighlightLink() {
  const links = document.querySelectorAll(".header__menu a");

  if (links.length) {
    links.forEach((link) => {
      const linkHref = new URL(link.href).pathname;
      const href = location.pathname;
      if (linkHref === href) {
        link.classList.add("active");
      }
    });
  }
}

const hamburger = document.querySelector(".header__hamburger");
const nav = document.querySelector(".header__nav");

hamburger.addEventListener("click", (e) => {
  e.preventDefault();
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
});

initHighlightLink();

//smooth scrool
function initSmoothScroll() {
  const btn = document.querySelector("a[href^='#booking']");
  btn.addEventListener("click", activeSmoothScroll);

  function activeSmoothScroll(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

initSmoothScroll();

//animation
if (window.SimpleAnime) {
  new SimpleAnime();
}
