import loadPageHome from "./page_home";
import loadPageMenu from "./page_menu";
import loadPageContact from "./page_contact";

const navItems = {
  //itemName: className
  home: "nav-home",
  menu: "nav-menu",
  contact: "nav-contact",
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

      return false;
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
    navItemLink.href = "#";
    navItemLink.onclick = () => {
      clearPage();
      loadPage(itemClassName);
    };

    navItem.appendChild(navItemLink);
    navList.appendChild(navItem);
  }

  nav.appendChild(navList);
}
