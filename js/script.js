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
