import todoCheckList from "./todoCheckList";
import { getProjectList } from "../reusables";

const todoCard = (function () {
  const create = () => {
    const card = document.createElement("div");
    card.classList.add("card");

    const projectSection = document.createElement("section");
    projectSection.classList.add("project");

    card.append(projectSection);
    projectSection.append(todoCheckList.create("test", "testtt"));
    console.log(getProjectList());

    return card;
  };

  const addTask = () => {};

  return { create };
})();

export default todoCard;
