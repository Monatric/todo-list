const projectList = JSON.parse(localStorage.getItem("projectList"));
const menuContainer = (function () {
  const create = () => {
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("project__menu");

    const menuList = document.createElement("ul");

    const menuEdit = document.createElement("li");
    menuEdit.textContent = "Edit";
    menuEdit.classList.add("edit-project");

    const menuDelete = document.createElement("li");
    menuDelete.textContent = "Delete";
    menuDelete.classList.add("delete-project");

    menuList.append(menuEdit, menuDelete);
    menuContainer.append(menuList);

    const projectDialog = document.querySelector("#edit-project-dialog");
    const projectForm = document.querySelector("#edit-project-form");
    const cancelBtn = document.querySelector(
      "#edit-project-dialog .cancel-btn"
    );
    const projectFormInput = document.querySelector(
      "#edit-project-form .dialog__input"
    );

    menuEdit.addEventListener("click", () => {
      projectDialog.showModal();
      console.log(
        projectList.projects.find((project) => {
          return project.id === menuContainer.dataset.itemId;
        })
      );
      projectFormInput.value = projectList.projects.find((project) => {
        return project.id === menuContainer.dataset.itemId;
      }).name;
      menuContainer.classList.remove("show");
    });

    projectForm.addEventListener("submit", (event) => {
      event.preventDefault();
      // const formData = new FormData(event.target);
      // const newProjectItem = projectItem.create(formData.get("project-name"));

      // projectList.projects.push({ name: formData.get("project-name") });
      // localStorage.setItem("projectList", JSON.stringify(projectList));

      // navList.append(newProjectItem);
      projectDialog.close();
    });

    cancelBtn.addEventListener("click", () => {
      projectDialog.close();
    });

    return menuContainer;
  };

  return { create };
})();

export default menuContainer;
