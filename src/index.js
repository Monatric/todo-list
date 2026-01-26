import "./styles.css";
import projectList from "./pages/projectList.js";
import projectTodoPage from "./pages/projectTodoPage.js";
import storageAvailable from "./components/localStorageChecker.js";

// Check for localStorage
if (storageAvailable("localStorage")) {
  console.log("Keep using localstorage");
} else {
  console.log("No more localstorage");
}
