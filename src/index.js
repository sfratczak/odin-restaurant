import "./reset.css";
import "./style.css";
import loadPageHome from "./page_home";

const nav = document.createElement("nav");
nav.textContent = "hello";
const content = document.createElement("div");
content.id = "content";

document.body.appendChild(nav);
document.body.appendChild(content);

loadPageHome();
