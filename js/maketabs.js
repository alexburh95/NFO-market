"use strict";

const buttons = document.querySelectorAll(".tabs_title");

buttons.forEach((item) => {
  item.addEventListener("click", () => {
    buttons.forEach((element) => {
      element.classList.remove("tabs_title_after");
    });

    const selector = item.dataset.tab;
    const content = document.getElementById(selector);
    const viewContent = document.querySelectorAll(".tabs_in");
    viewContent.forEach((item) => {
      item.classList.remove("view");
    });
    item.classList.add("tabs_title_after");
    content.classList.add("view");
  });
});
