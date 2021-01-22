const buttons = document.querySelectorAll(".tabs_title");

buttons.forEach((item) => {
  item.addEventListener("click", () => {
    buttons.forEach((element) => {
      element.classList.remove("tabs_title_after");
    });

    const selector = item.dataset.tab;
    const content = document.getElementById(selector);
    const viewContent = document.querySelectorAll(".tabs_ins");
    viewContent.forEach((item) => {
      item.classList.remove("view");
    });
    item.classList.add("tabs_title_after");
    content.classList.add("view");
  });
});

const account_menu = document.querySelector('.account_menu')
const buttons1 = account_menu.querySelectorAll("li");

buttons1.forEach((item) => {
  item.addEventListener("click", () => {
    buttons1.forEach((element) => {
      element.classList.remove("fat");
    });
    item.classList.add('fat')

    const selector = item.dataset.tab;
    const content = document.getElementById(selector);
    const viewContent = document.querySelectorAll(".tabs_in");
    viewContent.forEach((item) => {
      item.classList.remove("view");
    });
    
    content.classList.add("view");
  });
});