const menuContainer = (function () {
  const getProjectList = () => JSON.parse(localStorage.getItem("projectList"));
  const createEditForm = () => {
    const dialog = document.createElement("dialog");
    dialog.id = "edit-project-dialog";
    dialog.closedby = "any";
    dialog.classList.add("dialog");

    const form = document.createElement("form");
    form.id = "edit-project-form";

    const subTitle = document.createElement("h2");
    subTitle.classList.add("sub-title");
    subTitle.textContent = "Edit Project";

    const projectNameInput = document.createElement("input");
    projectNameInput.type = "text";
    projectNameInput.classList.add("dialog__input");
    projectNameInput.placeholder = "Project name";
    projectNameInput.name = "project-name";
    projectNameInput.required;
    projectNameInput.autofocus;

    const dialogBtns = document.createElement("div");
    dialogBtns.classList.add("dialog__buttons");

    const cancelBtn = document.createElement("button");
    cancelBtn.classList.add("btn--secondary", "cancel-btn");
    cancelBtn.formMethod = "dialog";
    cancelBtn.value = "Cancel";
    cancelBtn.type = "button";
    cancelBtn.textContent = "Cancel";

    const editBtn = document.createElement("button");
    editBtn.classList.add("btn--primary");
    editBtn.id = "confirm-btn";
    editBtn.textContent = "Edit";

    dialogBtns.append(cancelBtn, editBtn);
    form.append(subTitle, projectNameInput, dialogBtns);
    dialog.append(form);

    document.body.append(dialog);
  };

  const showEditForm = (menuContainer) => {
    const itemId = menuContainer.dataset.itemId;
    const projectList = getProjectList();

    createEditForm();
    const projectDialog = document.querySelector("#edit-project-dialog");
    const projectForm = document.querySelector("#edit-project-form");
    const cancelBtn = document.querySelector(
      "#edit-project-dialog .cancel-btn"
    );
    const projectFormInput = document.querySelector(
      "#edit-project-form .dialog__input"
    );
    projectDialog.showModal();
    const project = projectList.projects.find((project) => {
      return project.id === menuContainer.dataset.itemId;
    });

    projectFormInput.value = project.name;
    menuContainer.classList.remove("show");

    addSubmitEditForm(projectDialog, projectForm, itemId);
    addCancelEditForm(cancelBtn, projectDialog);
  };

  const addSubmitEditForm = (projectDialog, projectForm, itemId) => {
    const projectList = getProjectList();
    projectForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      const newProjectName = formData.get("project-name");

      projectList.projects.find((project) => {
        return project.id === itemId;
      }).name = newProjectName;

      const projectListItemLabel = document
        .querySelector(`[data-id="${itemId}"]`)
        .querySelector("p");
      projectListItemLabel.textContent = newProjectName;
      localStorage.setItem("projectList", JSON.stringify(projectList));
      projectDialog.close();
      projectDialog.remove();
    });
  };

  const addCancelEditForm = (cancelBtn, projectDialog) => {
    cancelBtn.addEventListener("click", () => {
      projectDialog.close();
      projectDialog.remove();
    });
  };

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

    menuEdit.addEventListener("click", () => showEditForm(menuContainer));

    return menuContainer;
  };

  return { create };
})();

export default menuContainer;
