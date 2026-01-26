import { getProjectList } from "../reusables";

document.addEventListener("click", (e) => {
  if (e.target.matches(".nav__item.item")) {
    showProjectTodoPage(e.target.dataset.id);
  }
});

const showProjectTodoPage = (id) => {
  const mainContent = document.querySelector("#content");
  const headerTitle = document.querySelector(".header__title.title");
  const project = getProjectList().projects.find((project) => {
    return project.id === id;
  });

  mainContent.innerHTML = "";
  headerTitle.textContent = project.name;

  // TODO: change the main content
  return;
};

export default showProjectTodoPage;
