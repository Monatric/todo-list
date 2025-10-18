const menuContainer = document.createElement("div");
menuContainer.classList.add("project__menu");

const menuList = document.createElement("ul");

const menuEdit = document.createElement("li");
menuEdit.textContent = "Edit";

const menuDelete = document.createElement("li");
menuDelete.textContent = "Delete";

menuList.append(menuEdit, menuDelete);
menuContainer.append(menuList);

export default menuContainer;
