function openNavbar() {
  document.getElementById("navbar-responsive").style.left = "0";
}
function oopenNavbar() {
  document.getElementById("navbar-responsive").style.left = "0";
}
function closeNavbar() {
  document.getElementById("navbar-responsive").style.left = "-55%";
}
document.getElementById("navbar-oopen").addEventListener("click", oopenNavbar);
document.getElementById("navbar-open").addEventListener("click", openNavbar);
document.getElementById("navbar-close").addEventListener("click", closeNavbar);

window.addEventListener("scroll", function () {
  shrink();
});

let navbar = document.getElementById("navbar");

function shrink() {
  if (scrollY > 100) {
    navbar.classList.add("navbar-shrink");
  } else {
    navbar.classList.remove("navbar-shrink");
  }
}
