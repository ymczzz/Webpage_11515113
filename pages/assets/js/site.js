"use strict";

const menuButton = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

if (menuButton && siteNav) {
  const setMenuOpen = (isOpen) => {
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "關閉導覽選單" : "開啟導覽選單");
    siteNav.classList.toggle("is-open", isOpen);
  };

  menuButton.addEventListener("click", () => {
    setMenuOpen(menuButton.getAttribute("aria-expanded") !== "true");
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) setMenuOpen(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setMenuOpen(false);
      menuButton.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 600) setMenuOpen(false);
  });
}