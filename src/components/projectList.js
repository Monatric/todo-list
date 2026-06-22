import projectItem from "./projectItem.js";

const projectList = (function () {
  const addProject = document.getElementById("add-project");
  const projectDialog = document.getElementById("add-project-dialog");
  const confirmBtn = document.querySelector("#add-project-dialog #confirm-btn");
  const cancelBtn = document.querySelector("#add-project-dialog .cancel-btn");
  const projectForm = document.querySelector("#add-project-form");
  const navList = document.querySelector(".project__list .nav__list");

  // Set localStorage at the beginning
  const projectsData = JSON.parse(localStorage.getItem("projectList")) ?? {
    projects: [],
  };

  localStorage.setItem("projectList", JSON.stringify(projectsData));

  // Populate project lists if project names are available
  if (projectsData?.projects.length > 0) {
    for (const project of projectsData.projects) {
      const newProjectItem = projectItem.create(project);
      navList.append(newProjectItem);
    }
  }

  addProject.addEventListener("click", () => {
    projectDialog.showModal();
  });

  projectForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const projectName = { name: formData.get("project-name") };
    const newProjectItem = projectItem.create(projectName);
    const projectItemId = newProjectItem.dataset.id;

    projectsData.projects.push({
      name: formData.get("project-name"),
      id: projectItemId,
    });

    localStorage.setItem("projectList", JSON.stringify(projectsData));

    navList.append(newProjectItem);
    projectDialog.close();
  });

  cancelBtn.addEventListener("click", () => {
    projectDialog.close();
  });
})();

export default projectList;
