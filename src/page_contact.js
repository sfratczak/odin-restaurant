import ContactImage from "./contact.jpg";

export default function loadPageContact() {
  const content = document.getElementById("content");

  const contentMain = document.createElement("div");
  contentMain.classList.add("content-main");

  const img = new Image();
  img.src = ContactImage;
  img.alt = "Contact Image";

  const mainHeading = document.createElement("h1");
  mainHeading.textContent = "Contact Us";

  const para = document.createElement("p");
  para.textContent =
    "Fancy Feast Restaurant\r\n864 Schinner Mill\r\nBlandaside\r\nPhone: 414-384-8268";
  content.appendChild(img);
  content.appendChild(contentMain);
  contentMain.appendChild(mainHeading);
  contentMain.appendChild(para);
}
