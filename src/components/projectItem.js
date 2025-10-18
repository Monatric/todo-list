import hashIcon from "../icons/hash.svg";
import dotMenuIcon from "../icons/dot-menu.svg";
import menuContainer from "./projectItemMenu.js";

const navItemFragment = document.createDocumentFragment();

const projectItem = (function () {
  const create = (projectItemName) => {
    const listItem = document.createElement("li");
    listItem.classList.add("nav__item", "item");
    listItem.dataset.id = crypto.randomUUID();

    const hashIconImg = document.createElement("img");
    hashIconImg.src = hashIcon;
    hashIconImg.alt = "Hash svg";
    hashIconImg.classList.add("svg");

    const dotMenuContainer = document.createElement("div");
    dotMenuContainer.classList.add("dot_menu__container");

    const dotMenuIconImg = document.createElement("img");
    dotMenuIconImg.src = dotMenuIcon;
    dotMenuIconImg.alt = "Dot menu";
    dotMenuIconImg.classList.add("svg");
    dotMenuContainer.append(dotMenuIconImg);

    const para = document.createElement("p");
    para.textContent = projectItemName;

    dotMenuIconImg.addEventListener("click", () => {
      console.log(menuContainer);
      dotMenuIconImg.insertAdjacentElement("afterEnd", menuContainer);
      menuContainer.classList.toggle("show");
    });

    listItem.append(hashIconImg, para, dotMenuContainer);
    return listItem;
  };

  return { create };
})();

export default projectItem;
