// ============ mobile munu design ====================
const hamburger = document.getElementById("hamburger-icon");
const menu = document.getElementById("menu");
const closeIcon = document.getElementById("close-icon");
const overlay = document.getElementById("overlay");

hamburger.addEventListener("click", () => {
  menu.classList.remove("-left-[99%]");
  menu.classList.add("left-0");
  overlay.classList.remove("hidden");
});

closeIcon.addEventListener("click", () => {
  menu.classList.remove("left-0");
  menu.classList.add("-left-[99%]");
  overlay.classList.add("hidden");
});