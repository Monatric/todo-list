import projectItem from "./projectItem.js";

const addProject = document.getElementById("add-project");
const projectDialog = document.getElementById("project-dialog");
const confirmBtn = document.querySelector("#project-dialog #confirm-btn");
const cancelBtn = document.querySelector("#project-dialog #cancel-btn");
const projectForm = document.querySelector("#project-form");

const projectList = () => {
  addProject.addEventListener("click", () => {
    projectDialog.showModal();
  });

  projectForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newProjectItem = projectItem.create(formData.get("project-name"));
    const navList = document.querySelector(".project__list .nav__list");
    navList.append(newProjectItem);
    projectDialog.close();
  });

  cancelBtn.addEventListener("click", () => {
    projectDialog.close();
  });
};

export default projectList;
