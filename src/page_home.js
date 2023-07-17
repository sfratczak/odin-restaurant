import HomeImage from "./home.jpg";

export default function loadPageHome() {
  const content = document.getElementById("content");

  const contentMain = document.createElement("div");
  contentMain.classList.add("content-main");

  const img = new Image();
  img.src = HomeImage;
  img.alt = "Home Image";

  const mainHeading = document.createElement("h1");
  mainHeading.textContent = "Fancy Feast";

  const para = document.createElement("p");
  para.textContent =
    "Immerse yourself in an ambiance reminiscent of a charming Parisian bistro as you savor every bite of our delectable French cuisine. Complemented by an extensive selection of fine wines, our menu offers a tantalizing journey through the culinary delights of France. \r\n\r\nJoin us for an unforgettable dining experience where the essence of French gastronomy comes to life.";
  content.appendChild(img);
  content.appendChild(contentMain);
  contentMain.appendChild(mainHeading);
  contentMain.appendChild(para);
}
