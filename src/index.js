import "./styles.css";
import projectList from "./components/projectList.js";
import storageAvailable from "./components/localStorageChecker.js";

// Check for localStorage
if (storageAvailable("localStorage")) {
  console.log("Keep using localstorage");
} else {
  console.log("No more localstorage");
}

// start behavior of projectList
projectList();
