import "./styles.css";
import projectIndex from "./pages/projectIndex.js";
import storageAvailable from "./components/localStorageChecker.js";

// Check for localStorage
if (storageAvailable("localStorage")) {
  console.log("Keep using localstorage");
} else {
  console.log("No more localstorage");
}
