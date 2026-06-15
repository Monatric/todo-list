import plusSvg from "../icons/plus.svg";

const addTask = (function () {
  const create = (project) => {
    const addTaskDiv = document.createElement("div");
    addTaskDiv.classList.add("task__add");

    const icon = document.createElement("img");
    icon.classList.add("svg");
    icon.src = plusSvg;
    icon.alt = "Plus svg";

    const subText = document.createElement("p");
    subText.classList.add("sub-text");
    subText.textContent = "Add task";

    showAddTaskDialog(addTaskDiv, project);

    addTaskDiv.append(icon, subText);

    return addTaskDiv;
  };

  return { create };
})();

const showAddTaskDialog = (element, projectItem) => {
  const taskDialog = document.querySelector("#add-task-dialog");
  const taskForm = document.querySelector("#add-task-dialog #add-task-form");
  const cancelBtn = document.querySelector("#add-task-dialog .cancel-btn");
  const addBtn = document.querySelector("#add-task-dialog #add-btn");

  element.addEventListener("click", () => {
    taskDialog.showModal();
  });

  taskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const task = {
      title: formData.get("task-title"),
      description: formData.get("task-description"),
      date: formData.get("task-date"),
      priority: formData.get("task-priority"),
    };

    const projectList = JSON.parse(localStorage.getItem("projectList"));
    const projects = projectList.projects;
    const project = projects.find((project) => project.id === projectItem.id);
    if (!project["tasks"]) project["tasks"] = [];

    project.tasks.push(task);
    localStorage.setItem("projectList", JSON.stringify(projectList));

    taskDialog.close();
  });

  cancelBtn.addEventListener("click", () => {
    taskDialog.close();
  });
};

export default addTask;
// <div class="task__add">
//   <img src="./icons/plus.svg" alt="Plus svg" class="svg" />
//   <p class="sub-text">Add task</p>
// </div>
