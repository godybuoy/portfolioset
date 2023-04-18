const dh = document.getElementById("dh");
const hamb = document.getElementById("hamb");
const close = document.getElementById("close");
const portfolio = document.getElementById("portfolio");
const about = document.getElementById("about");
const contact = document.getElementById("contact");
const screen = window.matchMedia("(min-width: 768px)");

function updateScreen() {
  if (screen.matches) {
    dh.style.display = "none";
  }
  console.log("Updating screen!!");
}

screen.addEventListener("change", updateScreen);

hamb.addEventListener("click", () => {
  dh.classList.toggle("open");
});
portfolio.addEventListener("click", () => {
  dh.classList.toggle("open");
});
about.addEventListener("click", () => {
  dh.classList.toggle("open");
});
contact.addEventListener("click", () => {
  dh.classList.toggle("open");
});
