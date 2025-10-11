import projectItem from "./projectItem.js";

const projectList = () => {
  const addProject = document.getElementById("add-project");
  const projectDialog = document.getElementById("project-dialog");
  const confirmBtn = document.querySelector("#project-dialog #confirm-btn");
  const cancelBtn = document.querySelector("#project-dialog #cancel-btn");
  const projectForm = document.querySelector("#project-form");
  const navList = document.querySelector(".project__list .nav__list");

  // Set localStorage at the beginning
  const projectList = localStorage.getItem("projectList")
    ? JSON.parse(localStorage.getItem("projectList"))
    : localStorage.setItem("projectList", JSON.stringify({ projects: [] }));

  // Populate project lists if project names are available
  if (projectList?.projects.length > 0) {
    for (const project of projectList.projects) {
      const newProjectItem = projectItem.create(project.name);
      navList.append(newProjectItem);
    }
  }

  addProject.addEventListener("click", () => {
    projectDialog.showModal();
  });

  projectForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newProjectItem = projectItem.create(formData.get("project-name"));

    projectList.projects.push({ name: formData.get("project-name") });
    localStorage.setItem("projectList", JSON.stringify(projectList));

    navList.append(newProjectItem);
    projectDialog.close();
  });

  cancelBtn.addEventListener("click", () => {
    projectDialog.close();
  });
};

export default projectList;
