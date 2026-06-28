document.addEventListener("click", (e) => {
  const allTaskItems = document.querySelectorAll(".project__task_item")
  allTaskItems.forEach((item) => {
    item.classList.remove("active")
  })

  const taskItem = document.querySelector(".project__task_item")
  e.target.classList.add("active")
  console.log(e.target.dataset.id)
})

const todoCheckList = (function () {
  const create = (title, subText, id) => {
    const checkList = document.createElement("div");
    checkList.classList.add("project__task_item");
    checkList.dataset.id = id

    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";

    const projectSummary = document.createElement("div");
    projectSummary.classList.add("project__task_summary");

    const projectTitle = document.createElement("p");
    projectTitle.classList.add("title");
    projectTitle.textContent = title;

    const projectSubText = document.createElement("p");
    projectSubText.classList.add("sub-text");
    projectSubText.textContent = subText;

    checkList.append(checkBox, projectSummary);
    projectSummary.append(projectTitle, projectSubText);

    return checkList;
  };

  return { create };
})();
//TODO: now add task details
export default todoCheckList;
