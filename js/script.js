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

function initHighlightLink() {
  const links = document.querySelectorAll(".header__menu a");
  if (links.length) {
    links.forEach((link) => {
      const href = location.href;
      if (link.href.includes(href)) {
        link.classList.add("active");
      }
    });
  }
}

initHighlightLink();
