export default function initHighlightLink() {
  const links = document.querySelectorAll("[data-nav='link']");

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