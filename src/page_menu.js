import MenuImage from "./menu.jpg";

export default function loadPageMenu() {
  const content = document.getElementById("content");

  const contentMain = document.createElement("div");
  contentMain.classList.add("content-main");

  const img = new Image();
  img.src = MenuImage;
  img.alt = "Menu Image";

  const mainHeading = document.createElement("h1");
  mainHeading.textContent = "Our Menu";

  const para = document.createElement("p");
  para.textContent =
    "Starter - Cashew Fois Gras - $12\r\nEntreé - Croissant Soup with Anchovies - $22\r\nDessert - Vanilla Macarons - $9";
  content.appendChild(img);
  content.appendChild(contentMain);
  contentMain.appendChild(mainHeading);
  contentMain.appendChild(para);
}
