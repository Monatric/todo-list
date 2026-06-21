import todoCheckList from "./todoCheckList";
import { getProjectList } from "../reusables";
import addTask from "./addTask";

const todoCard = (function () {
  const create = (project, cardType) => {
    const card = 
      cardType === "tasks" ?
      showTasks(project) :
      null

    return card;
  };

  const showTasks = (project) => {
    const taskList = project.tasks
    const card = document.createElement("div");
    card.classList.add("card");

    const projectSection = document.createElement("section");
    projectSection.classList.add("project");

    const addTaskBtn = addTask.create(project, projectSection);
    card.append(projectSection);

    taskList?.forEach((task) => {
      projectSection.append(todoCheckList.create(task.title, task.description));
    })

    projectSection.prepend(addTaskBtn)

    return card;
  };

  return { create };
})();

export default todoCard;
