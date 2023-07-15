import HomeImage from "./home.jpg";

export default function loadPageHome() {
  const content = document.getElementById("content");

  const img = document.createElement("img");
  img.src = HomeImage;

  const mainHeading = document.createElement("h1");
  mainHeading.textContent = "Fancy Feast";

  const para = document.createElement("p");
  para.textContent =
    "Immerse yourself in an ambiance reminiscent of a charming Parisian bistro as you savor every bite of our delectable French cuisine. Complemented by an extensive selection of fine wines, our menu offers a tantalizing journey through the culinary delights of France. <br /><br /> Join us for an unforgettable dining experience where the essence of French gastronomy comes to life.";

  content.appendChild(img);
  content.appendChild(mainHeading);
  content.appendChild(para);
}
