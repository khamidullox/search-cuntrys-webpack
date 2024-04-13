let modeBtn = document.querySelector(".header__dark-mode");
let body = document.querySelector('body');
let modeLocal = localStorage.getItem("mode")
  ? localStorage.getItem("mode")
  : null;
if (modeLocal) {
  body.classList.add("dark-mode");
}

modeBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  modeLocal
    ? localStorage.setItem("mode", "")
    : localStorage.setItem("mode", "black");
});
