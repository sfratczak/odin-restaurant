import loadPageHome from "./page_home";
import loadPageMenu from "./page_menu";
import loadPageContact from "./page_contact";

const navItems = {
  //itemName: className
  home: "nav-home",
  menu: "nav-menu",
  contact: "nav-contact",
  github: "nav-github",
};

function clearPage() {
  const content = document.getElementById("content");

  while (content.firstChild) {
    content.removeChild(content.lastChild);
  }
}

function loadPage(className) {
  switch (className) {
    case "nav-home":
      loadPageHome();
      break;
    case "nav-menu":
      loadPageMenu();
      break;
    case "nav-contact":
      loadPageContact();
      break;
  }
}

export default function loadNavBar() {
  const nav = document.querySelector("nav");
  const navList = document.createElement("ul");

  for (const [itemName, itemClassName] of Object.entries(navItems)) {
    const navItem = document.createElement("li");

    const navItemLink = document.createElement("a");
    navItemLink.textContent = itemName;
    navItemLink.classList.add(itemClassName);

    if (itemName !== "github") {
      navItemLink.href = "#";
      navItemLink.onclick = () => {
        clearPage();
        loadPage(itemClassName);
      };
    } else {
      navItemLink.href = "https://github.com/sfratczak";
    }

    navItem.appendChild(navItemLink);
    navList.appendChild(navItem);
  }

  nav.appendChild(navList);
}
