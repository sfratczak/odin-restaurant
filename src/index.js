import "./reset.css";
import "./style.css";
import loadNavBar from "./page_navbar";
import loadPageHome from "./page_home";

const nav = document.createElement("nav");
const content = document.createElement("div");
content.id = "content";

document.body.appendChild(nav);
document.body.appendChild(content);

loadNavBar();
loadPageHome();
