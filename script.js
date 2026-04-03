const mIconMenuBar = document.getElementById("mIcon");
const navBar = document.querySelector("nav");
const menuIcon = document.getElementById("menuIcon");
const overlay = document.getElementById("overlay");

let isOpen = false;

mIconMenuBar.addEventListener("click", () => {
  navBar.classList.toggle("left-[0]");
  overlay.classList.toggle("bg-black/60");
  isOpen = !isOpen;

  if (isOpen) {
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-xmark");
    menuIcon.style.transform = "rotate(90deg)";
  } else {
    menuIcon.classList.remove("fa-xmark");
    menuIcon.classList.add("fa-bars");
    menuIcon.style.transform = "rotate(0deg)";
  }
});