import projectTodoPage from "./projectTodoPage.js";
import projectList from "../components/projectList.js";

// For sidebar navigation
let currentActiveSidebarBtn;
document.addEventListener("click", (e) => {
  const allTaskBtnId = "#all_tasks_btn";
  const projectItemsClass = ".nav__item.item";
  const acceptedClickInstances = [allTaskBtnId, projectItemsClass];
  const targetMatching = acceptedClickInstances.some((acceptedClick) =>
    e.target.matches(acceptedClick),
  );
  if (!targetMatching) {
    return;
  }

  console.log(currentActiveSidebarBtn);
  if (currentActiveSidebarBtn) {
    currentActiveSidebarBtn.classList.remove("active");
  }

  if (e.target.matches("#all_tasks_btn")) {
    currentActiveSidebarBtn = e.target;
    e.target.classList.add("active");
  } else if (e.target.matches(".nav__item.item")) {
    currentActiveSidebarBtn = e.target;
    e.target.classList.add("active");
  }
});
const projectIndex = () => {};

export default projectIndex;
