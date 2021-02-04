"use strict";

const container = document.querySelector(".frame_content");
const emailPattern = '([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$'
const radiobuttons = container.querySelectorAll('input[type="radio"]');
const toggledInput = container.querySelector('.toggled_input');
const password_input = container.querySelector('input[type="password"]')
const button = container.querySelector('button[type="submit"]')
const phonePattern = ''
radiobuttons.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.value === "email") {
      toggledInput.placeholder = "EMAIL";
      toggledInput.type = "email";
      toggledInput.value=""
      toggledInput.pattern = emailPattern
    } else {
      toggledInput.placeholder = "+7 (  )";
      toggledInput.type = "tel";
      toggledInput.value=""
      toggledInput.pattern= phonePattern
    }
  });
});


const checkInput = (item) => {
item.addEventListener('input', () => {
    console.log(item.value)
if(password_input.value !== "" &&  password_input.value !== ""){
    button.disabled = false;
}
else{
    button.disabled = true;
}
})
}
checkInput(password_input);
checkInput(toggledInput);