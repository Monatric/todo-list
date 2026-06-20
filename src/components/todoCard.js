import todoCheckList from "./todoCheckList";
import { getProjectList } from "../reusables";
import addTask from "./addTask";

const todoCard = (function () {
  const create = (project) => {
    const taskList = project.tasks
    const card = document.createElement("div");
    card.classList.add("card");

    const projectSection = document.createElement("section");
    projectSection.classList.add("project");

    const addTaskBtn = addTask.create(project);
    card.append(projectSection);

    taskList.forEach((task) => {
      projectSection.append(todoCheckList.create(task.title, task.description), addTaskBtn);
    })
    // TODO: make tasks appear in the card

    return card;
  };

  return { create };
})();

export default todoCard;
