import "./styles.css";
import { Home } from "./modules/home";
import { Menu } from "./modules/menu";
import { Contact } from "./modules/contact";

const content = document.querySelector("#content");
const nav = document.querySelector("nav");
let activeBtn = document.querySelector(".nav__button.active");
let activePage = Home;

nav.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    activeBtn.classList.remove("active");
    switch (event.target.textContent) {
      case "Home":
        content.replaceChild(Home, activePage);
        activePage = Home;
        break;
      case "Menu":
        content.replaceChild(Menu, activePage);
        activePage = Menu;
        break;
      case "Contact":
        content.replaceChild(Contact, activePage);
        activePage = Contact;
        break;
    }

    activeBtn = event.target;
    activeBtn.classList.add("active");
  }
});

window.onload = function () {
  content.appendChild(activePage);
};
