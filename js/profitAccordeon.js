"use strict";

const accordions = document.querySelectorAll(".article_row");
const acordeonContent = document.querySelectorAll(".acordeon");

accordions.forEach((item) => {
  const button = item.querySelector(".acardeon_titile");
  button.addEventListener('click',(e)=>{
    e.preventDefault();
  })
  const arrow = item.querySelector("svg");
  item.addEventListener("click", () => {
    arrow.classList.toggle("acordeon_up");

    acordeonContent.forEach((content) => {
      console.log(content.classList.contains("hidden"));
      if (content.id === item.dataset.tab) {
        content.classList.toggle("hidden");
        item.classList.toggle("borders");

        if (content.classList.contains("hidden")) {
          button.textContent = "Подробнее";
        } else {
          button.textContent = "Свернуть";
        }
      }
    });
  });
});
