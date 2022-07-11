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

let mobileMenuIsOpen = false;

const buttonOpenMobileMenu = document.querySelector(".header-mobile-icon__button");
buttonOpenMobileMenu.addEventListener("click", () => {
  const mobileMenu = document.querySelector(".header-mobile-menu");
  if (mobileMenu.style.height) {
    mobileMenu.style.height = null;
    document.querySelector("body").style.overflow = "auto";
    mobileMenuIsOpen = false;
  } else {
    document.querySelector("body").style.overflow = "hidden";
    mobileMenu.style.height = window.innerHeight + "px";
    mobileMenuIsOpen = true;
  }
});

const loginButton = document.querySelectorAll(".header-login-button__login");
loginButton.forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector("body").style.overflow = "hidden";
    const modalLogin = document.querySelector(".modal-login");
    modalLogin.style.display = "flex";
    const closeButton = modalLogin.querySelector(".modal-header-right__button");
    closeButton.addEventListener("click", () => {
      modalLogin.style.display = "none";
      if (!mobileMenuIsOpen) document.querySelector("body").style.overflow = "auto";
    });
  });
});

const signUpButton = document.querySelector(".header-mobile-menu-auth__reg");
signUpButton.addEventListener("click", () => {
  document.querySelector("body").style.overflow = "hidden";
  const modalSignUp = document.querySelector(".modal-signup");
  modalSignUp.style.display = "flex";
  const closeButton = modalSignUp.querySelector(".modal-header-right__button");
  closeButton.addEventListener("click", () => {
    modalSignUp.style.display = "none";
    if (!mobileMenuIsOpen) document.querySelector("body").style.overflow = "auto";
  });

  const firstStep = modalSignUp.querySelector(".first-step");
  const secondStep = modalSignUp.querySelector(".second-step");
  const thirdStep = modalSignUp.querySelector(".third-step");

  const firstStepNextButton = firstStep.querySelector(".form-wrapper-button__button");
  firstStepNextButton.addEventListener("click", (e) => {
    e.preventDefault();
    firstStep.style.display = "none";
    secondStep.style.display = "block";

    const closeButton = secondStep.querySelector(".modal-header-right__button");
    closeButton.addEventListener("click", () => {
      modalSignUp.style.display = "none";
      if (!mobileMenuIsOpen) document.querySelector("body").style.overflow = "auto";
    });
  });
  const secondStepNextButton = secondStep.querySelector(".form-wrapper-button__button");
  secondStepNextButton.addEventListener("click", (e) => {
    e.preventDefault();
    secondStep.style.display = "none";
    thirdStep.style.display = "block";

    const closeButton = thirdStep.querySelector(".modal-header-right__button");
    closeButton.addEventListener("click", () => {
      modalSignUp.style.display = "none";
      if (!mobileMenuIsOpen) document.querySelector("body").style.overflow = "auto";
    });
  });
  const thirdStepNextButton = thirdStep.querySelector(".modal-main-button__button");
  thirdStepNextButton.addEventListener("click", (e) => {
    e.preventDefault();
    modalSignUp.style.display = "none";
    if (!mobileMenuIsOpen) document.querySelector("body").style.overflow = "auto";
    firstStep.style.display = "block";
    thirdStep.style.display = "none";
  });
});

const createAccountButton = document.querySelector(".modal-header-left-content a");
createAccountButton.addEventListener("click", () => {
  document.querySelector(".modal-login").style.display = "none";

  document.querySelector("body").style.overflow = "hidden";
  const modalSignUp = document.querySelector(".modal-signup");
  modalSignUp.style.display = "flex";
  const closeButton = modalSignUp.querySelector(".modal-header-right__button");
  closeButton.addEventListener("click", () => {
    modalSignUp.style.display = "none";
    if (!mobileMenuIsOpen) document.querySelector("body").style.overflow = "auto";
  });

  const firstStep = modalSignUp.querySelector(".first-step");
  const secondStep = modalSignUp.querySelector(".second-step");
  const thirdStep = modalSignUp.querySelector(".third-step");

  const firstStepNextButton = firstStep.querySelector(".form-wrapper-button__button");
  firstStepNextButton.addEventListener("click", (e) => {
    e.preventDefault();
    firstStep.style.display = "none";
    secondStep.style.display = "block";

    const closeButton = secondStep.querySelector(".modal-header-right__button");
    closeButton.addEventListener("click", () => {
      modalSignUp.style.display = "none";
      if (!mobileMenuIsOpen) document.querySelector("body").style.overflow = "auto";
    });
  });
  const secondStepNextButton = secondStep.querySelector(".form-wrapper-button__button");
  secondStepNextButton.addEventListener("click", (e) => {
    e.preventDefault();
    secondStep.style.display = "none";
    thirdStep.style.display = "block";

    const closeButton = thirdStep.querySelector(".modal-header-right__button");
    closeButton.addEventListener("click", () => {
      modalSignUp.style.display = "none";
      if (!mobileMenuIsOpen) document.querySelector("body").style.overflow = "auto";
    });
  });
  const thirdStepNextButton = thirdStep.querySelector(".modal-main-button__button");
  thirdStepNextButton.addEventListener("click", (e) => {
    e.preventDefault();
    modalSignUp.style.display = "none";
    if (!mobileMenuIsOpen) document.querySelector("body").style.overflow = "auto";
    firstStep.style.display = "block";
    thirdStep.style.display = "none";
  });
});

const signInButton = document.querySelector(".create-account .modal-header-left-content a");
signInButton.addEventListener("click", () => {
  document.querySelector(".modal-signup").style.display = "none";
  document.querySelector("body").style.overflow = "hidden";
  const modalLogin = document.querySelector(".modal-login");
  modalLogin.style.display = "flex";
  const closeButton = modalLogin.querySelector(".modal-header-right__button");
  closeButton.addEventListener("click", () => {
    modalLogin.style.display = "none";
    if (!mobileMenuIsOpen) document.querySelector("body").style.overflow = "auto";
  });
});

const forgetPasswordButton = document.querySelector(".modal-login .form-wrapper-button__link");
forgetPasswordButton.addEventListener("click", () => {
  document.querySelector(".modal-login").style.display = "none";
  document.querySelector("body").style.overflow = "hidden";
  const modalForget = document.querySelector(".modal-forget");
  modalForget.style.display = "flex";

  const closeButton = modalForget.querySelector(".modal-header-right__button");
  closeButton.addEventListener("click", () => {
    modalForget.style.display = "none";
    if (!mobileMenuIsOpen) document.querySelector("body").style.overflow = "auto";
  });

  const firstStep = modalForget.querySelector(".first-step-forget");
  const secondStep = modalForget.querySelector(".second-step-forget");
  const thirdStep = modalForget.querySelector(".third-step-forget");

  const firstStepNextButton = firstStep.querySelector(".form-wrapper-button__button");
  firstStepNextButton.addEventListener("click", (e) => {
    e.preventDefault();
    firstStep.style.display = "none";
    secondStep.style.display = "block";

    const closeButton = secondStep.querySelector(".modal-header-right__button");
    closeButton.addEventListener("click", () => {
      modalForget.style.display = "none";
      if (!mobileMenuIsOpen) document.querySelector("body").style.overflow = "auto";
    });
  });
  const secondStepNextButton = secondStep.querySelector(".form-wrapper-button__button");
  secondStepNextButton.addEventListener("click", (e) => {
    e.preventDefault();
    secondStep.style.display = "none";
    thirdStep.style.display = "block";

    const closeButton = thirdStep.querySelector(".modal-header-right__button");
    closeButton.addEventListener("click", () => {
      modalForget.style.display = "none";
      if (!mobileMenuIsOpen) document.querySelector("body").style.overflow = "auto";
    });
  });
  const thirdStepNextButton = thirdStep.querySelector(".form-wrapper-button__button");
  thirdStepNextButton.addEventListener("click", (e) => {
    e.preventDefault();
    modalForget.style.display = "none";
    if (!mobileMenuIsOpen) document.querySelector("body").style.overflow = "auto";
    firstStep.style.display = "block";
    thirdStep.style.display = "none";
  });
});
