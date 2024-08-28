const menu = document.querySelector(".menu");
const menuBar = document.querySelector(".menu-bar");
const nav = document.querySelector("[header-nav]");
menu.addEventListener("click", function () {
  menuBar.classList.toggle("active");
  nav.classList.toggle("active");
});
