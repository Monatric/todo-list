import plusSvg from "../icons/plus.svg";

const addTask = (function () {
  const create = () => {
    const addTaskDiv = document.createElement("div");
    addTaskDiv.classList.add("task__add");

    const icon = document.createElement("img");
    icon.classList.add("svg");
    icon.src = plusSvg;
    icon.alt = "Plus svg";

    const subText = document.createElement("p");
    subText.classList.add("sub-text");
    subText.textContent = "Add task";

    addTaskDiv.append(icon, subText);

    return addTaskDiv;
  };

  return { create };
})();

export default addTask;
// <div class="task__add">
//   <img src="./icons/plus.svg" alt="Plus svg" class="svg" />
//   <p class="sub-text">Add task</p>
// </div>
