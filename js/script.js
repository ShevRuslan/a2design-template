const faqElements = document.querySelectorAll(".faq-elements-element");
faqElements.forEach((element) => {
  const button = element.querySelector(".faq-elements-element__open");
  const panel = element.querySelector(".faq-elements-element-panel");
  button.addEventListener("click", () => {
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
});

const navbarOpenElements = document.querySelectorAll(".navbar-open");

navbarOpenElements.forEach((element) => {
  element.addEventListener("click", () => {
    const navbarShow = element.querySelector(".navbar-show");
    if (navbarShow.classList.contains("navbar-close")) {
      navbarShow.classList.remove("navbar-close");
    } else {
      navbarShow.classList.add("navbar-close");
    }
  });
});

const buttonOpenMobileMenu = document.querySelector(".header-mobile-icon__button");
buttonOpenMobileMenu.addEventListener("click", () => {
  const mobileMenu = document.querySelector(".header-mobile-menu");
  if (mobileMenu.style.height) {
    mobileMenu.style.height = null;
    document.querySelector("body").style.overflow = "auto";
  } else {
    document.querySelector("body").style.overflow = "hidden";
    mobileMenu.style.height = window.innerHeight + "px";
  }
});
