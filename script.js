// toggle kelas aktif
const navbarText = document.querySelector(".navbar-text");

document.querySelector("#hamburger-menu").onclick = () => {
  navbarText.classList.toggle("active");
};

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarText.contains(e.target)) {
    navbarText.classList.remove("active");
  }
});
