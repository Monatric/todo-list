const addProject = document.getElementById("add-project");
const projectDialog = document.getElementById("project-dialog");
const confirmBtn = document.querySelector("#project-dialog #confirm-btn");
const cancelBtn = document.querySelector("#project-dialog #cancel-btn");
const projectForm = document.querySelector("#project-form");

addProject.addEventListener("click", () => {
  projectDialog.showModal();
});

projectForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("submitted");
  projectDialog.close();
});

cancelBtn.addEventListener("click", () => {
  projectDialog.close();
});

export default addProject;
