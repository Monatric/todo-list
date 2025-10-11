import hashIcon from "../icons/hash.svg";
import dotMenuIcon from "../icons/dot-menu.svg";

const navItemFragment = document.createDocumentFragment();
const listItem = document.createElement("li");
listItem.classList.add("nav__item", "item");

const hashIconImg = document.createElement("img");
hashIconImg.src = hashIcon;
hashIconImg.alt = "Hash svg";
hashIconImg.classList.add("svg");

const dotMenuIconImg = document.createElement("img");
dotMenuIconImg.src = dotMenuIcon;
dotMenuIconImg.alt = "Dot menu";
dotMenuIconImg.classList.add("svg");

const projectItem = (function () {
  const create = (projectItemName) => {
    const para = document.createElement("para");
    para.textContent = projectItemName;

    listItem.append(hashIconImg, para, dotMenuIconImg);
    return listItem;
  };

  return { create };
})();

export default projectItem;
