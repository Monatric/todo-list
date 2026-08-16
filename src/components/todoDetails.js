import { findNestedTaskById } from "../reusables";
import editTask from "./editTask";

const todoDetails = (function () {
  const create = (taskId) => {
    const taskDetailsCard = document.querySelector("#task__details_card");
    taskDetailsCard.innerHTML = "";

    const task = findNestedTaskById(taskId);
    const detailsDiv = document.createElement("div");
    detailsDiv.classList.add("project__task_item");

    const taskSummary = document.createElement("div");
    taskSummary.classList.add("project__task_summary");

    const taskTitle = document.createElement("p");
    taskTitle.classList.add("title");
    taskTitle.textContent = "Title: " + task.title;

    const taskDescription = document.createElement("p");
    taskDescription.classList.add("sub-text");
    taskDescription.textContent =
      task.description === ""
        ? "No description"
        : "Description: " + task.description;

    const taskDueDate = document.createElement("p");
    taskDueDate.textContent =
      task.dueDate === "" ? "No due date" : "Due: " + task.dueDate;

    const taskPriority = document.createElement("p");
    taskPriority.textContent = "Priority: " + task.priority;

    taskDetailsCard.append(detailsDiv);
    detailsDiv.append(taskSummary);

    const btnGroup = addButtonGroup()
    taskSummary.append(taskTitle, taskDescription, taskDueDate, taskPriority, btnGroup);

    return;
  };

  const addButtonGroup = () => {
    const container = document.createElement("div")
    const editBtn = document.createElement("button")
    editBtn.classList.add("btn--primary")
    editBtn.textContent = "Edit"
    editBtn.addEventListener("click", editTask.edit())
    
    const deleteBtn = document.createElement("button")
    deleteBtn.classList.add("btn--secondary")
    deleteBtn.textContent = "Delete"

    const breakLine = document.createElement("br")
    const horizontalLine = document.createElement("hr")

    container.append(breakLine, horizontalLine, editBtn, deleteBtn)
    return container
  }

  return { create };
})();

export default todoDetails;
