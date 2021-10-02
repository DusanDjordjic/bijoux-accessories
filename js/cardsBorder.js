const elements = document.getElementsByClassName("collections__card");
let borderWidth = elements[0].clientWidth / 4;
for (let element of elements) {
  const overlay = element.querySelector(".collections__card__overlay");

  overlay.style.borderWidth = `${borderWidth}px`;

  element.addEventListener("mouseover", () => {
    overlay.style.borderWidth = `30px`;
  });
  element.addEventListener("mouseout", () => {
    overlay.style.borderWidth = `${borderWidth}px`;
  });
}
window.addEventListener("load", () => {
  borderWidth = elements[0].clientWidth / 4;
});
window.addEventListener("resize", () => {
  borderWidth = elements[0].clientWidth / 4;
});
