import todoCheckList from "./todoCheckList";
import { getProjectList } from "../reusables";
import addTask from "./addTask";

const todoCard = (function () {
  const create = (project) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const projectSection = document.createElement("section");
    projectSection.classList.add("project");

    const addTaskBtn = addTask.create(project);
    card.append(projectSection);
    projectSection.append(todoCheckList.create("test", "testtt"), addTaskBtn);

    return card;
  };

  return { create };
})();

export default todoCard;
