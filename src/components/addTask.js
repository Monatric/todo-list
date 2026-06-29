import todoCheckList from "./todoCheckList";
import plusSvg from "../icons/plus.svg";

const addTask = (function () {
  const create = (project, projectSection) => {
    const addTaskDiv = document.createElement("div");
    addTaskDiv.classList.add("task__add");

    const icon = document.createElement("img");
    icon.classList.add("svg");
    icon.src = plusSvg;
    icon.alt = "Plus svg";

    const subText = document.createElement("p");
    subText.classList.add("sub-text");
    subText.textContent = "Add task";

    showAddTaskDialog(addTaskDiv, project, projectSection);

    addTaskDiv.append(icon, subText);

    return addTaskDiv;
  };

  return { create };
})();

const taskDialog = document.querySelector("#add-task-dialog");
const taskForm = document.querySelector("#add-task-dialog #add-task-form");
const cancelBtn = document.querySelector("#add-task-dialog .cancel-btn");
const addBtn = document.querySelector("#add-task-dialog #add-btn");
let currentProject = null;
let currentProjectSection = null;

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const task = {
    id: crypto.randomUUID(),
    title: formData.get("task-title"),
    description: formData.get("task-description"),
    date: formData.get("task-date"),
    priority: formData.get("task-priority"),
  };

  const projectList = JSON.parse(localStorage.getItem("projectList"));
  const projects = projectList.projects;
  const project = projects.find((project) => project.id === currentProject.id);
  if (!project["tasks"]) project["tasks"] = [];
  if (task.title && task.priority) {
    project.tasks.push(task);
    localStorage.setItem("projectList", JSON.stringify(projectList));
  }
  currentProjectSection.append(
    todoCheckList.create(task.title, task.description, task.id),
  );
  taskForm.reset();

  taskDialog.close();
});

const showAddTaskDialog = (element, projectItem, projectSection) => {
  element.addEventListener("click", () => {
    currentProject = projectItem;
    currentProjectSection = projectSection;
    taskDialog.showModal();
  });

  cancelBtn.addEventListener("click", () => {
    taskDialog.close();
  });
};

export default addTask;
