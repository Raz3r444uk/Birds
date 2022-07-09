const slides = document.querySelectorAll(".slide");

slides.forEach((el) => {
  el.addEventListener("click", () => {
    clearElem();
    el.classList.add("active");
  });
});

function clearElem() {
  slides.forEach((el) => {
    el.classList.remove("active");
  });
}
