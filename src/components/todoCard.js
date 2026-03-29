import todoCheckList from "./todoCheckList";
import { getProjectList } from "../reusables";
import addTask from "./addTask";

const todoCard = (function () {
  const create = () => {
    const card = document.createElement("div");
    card.classList.add("card");

    const projectSection = document.createElement("section");
    projectSection.classList.add("project");

    const addTaskBtn = addTask.create();
    card.append(projectSection);
    projectSection.append(todoCheckList.create("test", "testtt"), addTaskBtn);

    return card;
  };

  return { create };
})();

export default todoCard;
