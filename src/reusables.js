export const getProjectList = () =>
  JSON.parse(localStorage.getItem("projectList"));

export const findNestedTaskById = (id) => {
  const projectList = getProjectList().projects;
  for (const project of projectList) {
    for (const task of project.tasks) {
      if (task.id === id) return task;
    }
  }
};
