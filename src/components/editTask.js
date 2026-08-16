const editTask = (function () {
  const edit = (project, projectSection) => {
    // const editTaskDiv = document.createElement("div");
    // editTaskDiv.classList.add("task__edit");

    // const icon = document.createElement("img");
    // icon.classList.add("svg");
    // icon.src = plusSvg;
    // icon.alt = "Plus svg";

    // const subText = document.createElement("p");
    // subText.classList.add("sub-text");
    // subText.textContent = "Edit task";

    showEditTaskDialog(editTaskDiv, project, projectSection);

    // editTaskDiv.append(icon, subText);

    return editTaskDiv;
  };

  return { edit };
})();

const taskDialog = document.querySelector("#edit-task-dialog");
const taskForm = document.querySelector("#edit-task-dialog #edit-task-form");
const cancelBtn = document.querySelector("#edit-task-dialog .cancel-btn");
const editBtn = document.querySelector("#edit-task-dialog #edit-btn");
let currentProject = null;
let currentProjectSection = null;

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const task = {
    id: crypto.randomUUID(),
    title: formData.get("task-title"),
    description: formData.get("task-description"),
    dueDate: formData.get("task-due-date"),
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

const showEditTaskDialog = (element, projectItem, projectSection) => {
  element.addEventListener("click", () => {
    currentProject = projectItem;
    currentProjectSection = projectSection;
    taskDialog.showModal();
  });

  cancelBtn.addEventListener("click", () => {
    taskDialog.close();
  });
};

export default editTask;
