// const loading = document.getElementById("loading");
// window.addEventListener("load", () => {
//   loading.classList.add("loading-none");
// });
// or
const loading = document.getElementById("loading");
setTimeout(() => {
  loading.classList.add("loading-none");
}, 5000);


// Helper(s)
// =========
let $ = (e) => document.querySelector(e);

// Dots
// ====
let dots = $(".dots");

// Function
// ========
function animate(element, className) {
  element.classList.add(className);
  setTimeout(() => {
    element.classList.remove(className);
    setTimeout(() => {
      animate(element, className);
    }, 500);
  }, 2500);
}

// Execution
// =========
animate(dots, "dots--animate");

// Professional Abubaker ;P
// =====================
const twitter = $(".abs-twitter");
window.addEventListener(
  "mousemove",
  () => twitter.classList.add("abs-twitter--show"),
  { once: true }
);
