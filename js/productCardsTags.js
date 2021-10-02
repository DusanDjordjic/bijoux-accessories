const productCards = document.getElementsByClassName("product-item");
for (let productCard of productCards) {
  const tagBtn = productCard.querySelector(".tagBtn");
  const tagsContainer = productCard.querySelector(".tagsContainer");
  tagBtn.addEventListener("click", () => {
    tagsContainer.classList.toggle("active");
  });
}
