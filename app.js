const dh = document.getElementById("dh");
const hamb = document.getElementById("hamb");
const close = document.getElementById("close");
const portfolio = document.getElementById("portfolio");
const about = document.getElementById("about");
const contact = document.getElementById("contact");

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
close.addEventListener("click", () => {
  dh.classList.toggle("open");
});

const desktop = document.querySelector(".desktop-menu");
const links = `
        <li id="portfolio">
          <a href="#Portfolio">Portfolio</a>
        </li>
        <li id="about">
          <a href="#About">About</a>
        </li>
        <li id="contact">
          <a href="#Contact">Contact</a>
        </li>
        <li class="close" id="close">&times;</li>
`;
const ul = document.createElement("ul");
ul.innerHTML = links;
desktop.appendChild(ul);
